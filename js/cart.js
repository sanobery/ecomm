// To represent Stored cart item
function cartitem() {
  const tablebody = document.getElementById("tablebody");
  const total = document.getElementById("total");
  const localItems = JSON.parse(localStorage.getItem("items"));
  let tableData = "";
  let sum = 0;
  tablebody.innerHTML = tableData;
  total.innerHTML = sum;
  localItems.map((data) => {
    tableData +=
      "<tr>" +
      "<td>" +
      '<div class="product-img">' +
      '<div class="img-prod">' +
      '<img src="' +
      data.itemSrc +
      '">' +
      "</div>" +
      "</div>" +
      "</td>" +
      "<td>" +
      "<p>" +
      data.itemName +
      "</p>" +
      "</td>" +
      "<td>" +
      "<p>" +
      data.itemSize +
      "</p>" +
      "</td>" +
      "<td >" +
      '<div class="display">' +
      '<button class="btn btn-danger" data-size="' +
      data.itemSize +
      '" data-quantity="' +
      data.no +
      '" data-src="' +
      data.itemSrc +
      '" onclick="quantitydecrease(this)">' +
      "-" +
      "</button>" +
      '<p class="size text-center">' +
      data.no +
      "</p>" +
      '<button class="btn btn-primary"  data-size="' +
      data.itemSize +
      '" data-quantity="' +
      data.no +
      '" data-src="' +
      data.itemSrc +
      '" onclick="quantityincrease(this)">' +
      "+" +
      "</button>" +
      "</div>" +
      "</td>" +
      "<td>" +
      "<p>" +
      data.itemPrice +
      "</p>" +
      "</td>" +
      "<td>" +
      "<p>" +
      data.no * data.itemPrice +
      "</p>" +
      "</td>" +
      "<td>" +
      '<button class="btn btn-sm btn-danger"  data-size="' +
      data.itemSize +
      '" data-quantity="' +
      data.no +
      '" data-src="' +
      data.itemSrc +
      '" onclick="Delete(this);">' +
      '<i class="fa fa-trash delete">' +
      "&nbsp;" +
      "</i>" +
      "Remove" +
      "</button>" +
      "</td>" +
      "</tr>";
    sum = sum + parseInt(data.no * data.itemPrice);
    tablebody.innerHTML = tableData;
    total.innerHTML = sum;
  });
}

cartitem();

// to delete an item
function Delete(item) {
  var c = JSON.parse(localStorage.getItem("items")).filter(
    (Product) => Product.itemSrc != item.dataset.src
  );
  localStorage.setItem("items", JSON.stringify(c));
  cartitem();
}

// to increase quantity of item
function quantityincrease(item) {
  var local = JSON.parse(localStorage.getItem("items"));
  local.map((data) => {
    if (
      data.itemSrc == item.dataset.src &&
      data.itemSize == item.dataset.size
    ) {
      data.no = data.no + 1;
    }
  });
  localStorage.setItem("items", JSON.stringify(local));
  cartitem();
}

// to decrease quantity of item
function quantitydecrease(item) {
  var local = JSON.parse(localStorage.getItem("items"));
  local.map((data) => {
    if (
      data.itemSrc == item.dataset.src &&
      data.no > 1 &&
      data.itemSize == item.dataset.size
    ) {
      data.no = data.no - 1;
    }
  });
  localStorage.setItem("items", JSON.stringify(local));
  cartitem();
}
