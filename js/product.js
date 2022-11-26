// Dynamic item creation
var size = "",
  price;

var colour = document.getElementById("colours");
function myFunction() {
  var filterhtml = "";
  for (var i = 0; i < filtercolour.length; i++) {
    filterhtml +=
      '<div class="form-check">' +
      '<input class="form-check-input flexCheck" type="checkbox" value="" id="flexCheckDefault" data-colour="' +
      filtercolour[i] +
      '" onclick="filter(this)">' +
      '<label class="form-check-label" for="flexCheckDefault">' +
      filtercolour[i] +
      "</label>" +
      "</div>";
  }
  colour.innerHTML = filterhtml;
  var htmlelement = "";
  for (var i = 0; i < product.length; i++) {
    htmlelement +=
      '<div class="col-12 col-lg-3">' +
      '<div class="card cardinline">' +
      '<img src="' +
      product[i].url +
      '" class="card-img-top img-responsive imgsize" alt="..." >' +
      '<div class="card-body">' +
      '<h5 class="card-title">' +
      product[i].h6 +
      "</h5>" +
      "<h6>" +
      product[i].p +
      "<h6>" +
      '<select data-size="' +
      i +
      '" data-id="' +
      i +
      '" onchange="getSize(this)">' +
      "<option>" +
      "Size" +
      "</option>" +
      "<option>" +
      "S" +
      "</option>" +
      "<option>" +
      "M" +
      "</option>" +
      "<option>" +
      "L" +
      "</option>" +
      "<option>" +
      "XL" +
      "</option>" +
      "<option>" +
      "XXL" +
      "</option>" +
      "</select>" +
      "<br>" +
      "<br>" +
      '<button class="btn btn-sm btn-primary" onclick="addToCart(this);" data-button-id="' +
      i +
      '" data-price="' +
      product[i].price +
      '"  data-src="' +
      product[i].url +
      '" data-para="' +
      product[i].h6 +
      '">' +
      product[i].pr +
      "</button>" +
      "</div>" +
      "</div>" +
      "</div>";
  }
  div1.innerHTML = htmlelement;
}

// To get size
function getSize(item) {
  price = price[item.value];
  size = item.value;
}

// filter out element as per selected colour
document.addEventListener("DOMContentLoaded", function () {
  var check = document.getElementsByClassName("flexCheck");
  console.log(check);
});
//   for(var i=0;i<check.length;i++){
//     if (check.checked == true) {
//   console.log(check[i]);
//     }
//   }
//  document.getElementsByClassName('flexCheck').addEventListener('click', function (e) {
//   console.log(e.target);
// if (check.checked == true) {
//   window.history.pushState(null, null, "?colour=" + check.dataset.colour);
//   var selectedcolour = product.filter(item => item.h6 == check.dataset.colour);
//   newPage(selectedcolour);
// }
// else {
//   window.history.back();
//   myFunction();
// }
//});
//});
function filter(check) {
  console.log(check);
  if (check.checked == true) {
    window.history.pushState(null, null, "?colour=" + check.dataset.colour);
    var selectedcolour = product.filter(
      (item) => item.h6 == check.dataset.colour
    );
    newPage(selectedcolour);
  } else {
    window.history.back();
    myFunction();
  }
}

// document.body.addEventListener('click', function (event) {
//   console.log(event.target.classList);
//   console.log(document.querySelectorAll('checkfilter'));
// });

// Selected colour item
function newPage(women) {
  var htmlelement = "";
  for (var i = 0; i < women.length; i++) {
    htmlelement +=
      '<div class="col-12 col-lg-3">' +
      '<div class="card cardinline">' +
      '<img src="' +
      women[i].url +
      '" class="card-img-top img-responsive imgsize" alt="..." >' +
      '<div class="card-body">' +
      '<h5 class="card-title">' +
      women[i].h6 +
      "</h5>" +
      "<h6>" +
      women[i].p +
      "<h6>" +
      '<select data-size="' +
      i +
      '" data-id="' +
      i +
      '" onchange="getSize(this)">' +
      "<option>" +
      "Size" +
      "</option>" +
      "<option>" +
      "S" +
      "</option>" +
      "<option>" +
      "M" +
      "</option>" +
      "<option>" +
      "L" +
      "</option>" +
      "<option>" +
      "XL" +
      "</option>" +
      "<option>" +
      "XXL" +
      "</option>" +
      "</select>" +
      "<br>" +
      "<br>" +
      '<button class="btn btn-sm btn-primary" onclick="addToCart(this)" data-price="' +
      women[i].price +
      '"  data-src="' +
      women[i].url +
      '" data-para="' +
      women[i].h6 +
      '">' +
      women[i].pr +
      "</button>" +
      "</div>" +
      "</div>" +
      "</div>";
    div1.innerHTML = htmlelement;
  }
}
