// variable required for product filtering like brands & Colour
var filtercolour = [
  "Black",
  "Blue",
  "Green",
  "Orange",
  "Red",
  "White",
  "Yellow",
  "Pink",
];

var filterbrand = ["Harpa", "Siril", "Lymio", "Biba", "MySwag", "Max"];

var size = "",price;

var colour = document.getElementById("colours");

// Dynamic item creation
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
  size = item.value;
  price = product[item.dataset.id].itemprice[size];
}
 

// filter out element as per selected colour
document.body.addEventListener("DOMContentLoaded", function () {
  //console.log(check);
  var c=document.getElementsByClassName('flexCheck');
  console.log(c);   
  var check=document.getElementsByClassName('flexCheck');
  for(var i=0;i<check.length;i++){
  console.log(check[i]); 
  }
});

//docum;
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

function filter(check) {
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

// Selected colour item
function newPage(productselected) {
  var htmlelement = "";
  for (var i = 0; i < productselected.length; i++) {
    htmlelement +=
      '<div class="col-12 col-lg-3">' +
      '<div class="card cardinline">' +
      '<img src="' +
      productselected[i].url +
      '" class="card-img-top img-responsive imgsize" alt="..." >' +
      '<div class="card-body">' +
      '<h5 class="card-title">' +
      productselected[i].h6 +
      "</h5>" +
      "<h6>" +
      productselected[i].p +
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
      productselected[i].price +
      '"  data-src="' +
      productselected[i].url +
      '" data-para="' +
      productselected[i].h6 +
      '">' +
      productselected[i].pr +
      "</button>" +
      "</div>" +
      "</div>" +
      "</div>"; 
  }
  div1.innerHTML = htmlelement;
}
