$(document).ready(function cartitem() {
  let tableData = "";
  let sum = 0;
  const localItems = JSON.parse(localStorage.getItem("items"));
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
      '<button class="btn btn-danger quantityDecrease" data-size="' +
      data.itemSize +
      '" data-quantity="' +
      data.no +
      '" data-src="' +
      data.itemSrc +
      '">' +
      "-" +
      "</button>" +
      '<p class="size text-center">' +
      data.no +
      "</p>" +
      '<button class="btn btn-primary quantityIncrease"  data-size="' +
      data.itemSize +
      '" data-quantity="' +
      data.no +
      '" data-src="' +
      data.itemSrc +
      '">' +
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
      '<button class="btn btn-sm btn-danger delete"  data-size="' +
      data.itemSize +
      '" data-quantity="' +
      data.no +
      '" data-src="' +
      data.itemSrc +
      '">' +
      '<i class="fa fa-trash delete">' +
      "&nbsp;" +
      "</i>" +
      "Remove" +
      "</button>" +
      "</td>" +
      "</tr>";
    sum = sum + parseInt(data.no * data.itemPrice);
  });
  $('#tablebody').html(tableData);
  $('#total').html(sum);

  $('.quantityDecrease').on('click', function () {
    var local = JSON.parse(localStorage.getItem("items"));
    local.map((data) => {
      if (
        data.itemSrc == $(this).data('src') &&
        data.no > 1 &&
        data.itemSize == $(this).data('size')
      ) {
        data.no = data.no - 1;
      }
    });
    localStorage.setItem("items", JSON.stringify(local));
    cartitem();
  });

  $('.quantityIncrease').on('click', function () {
    console.log("clicked");
    var local = JSON.parse(localStorage.getItem("items"));
    local.map((data) => {
      if (
        data.itemSrc == $(this).data('src') &&
        data.itemSize == $(this).data('size')
      ) {
        data.no = data.no + 1;
      }
    });
    localStorage.setItem("items", JSON.stringify(local));
    cartitem();
  });

  $('.delete').on('click', function () {
    var c = JSON.parse(localStorage.getItem("items")).filter(
      (Product) => (Product.itemSrc != $(this).data('src'))
    );
    localStorage.setItem("items", JSON.stringify(c));
    cartitem();
  });
});   
