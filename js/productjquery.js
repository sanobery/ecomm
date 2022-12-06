//rendering Product from JQUERY
$('document').ready(function () {
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
      '">' +
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
      '<button class="btn btn-sm btn-primary" data-button-id="' +
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
  $('#div1').append(htmlelement);
  $('.btn').click(function () {
    $(this).after("clicked");
    console.log(this);
  });
  $('select').change(function () {
    $(this).click(function () {
      size = this.value;
      price = product[this.dataset.id].itemprice[size];
      console.log(size, price);
    });
  });
});

// function getSize(item) {
//   size = item.value;
//   price = product[item.dataset.id].itemprice[size];
// }

// $(document).ready(function () {
//   $('.btn').click(function () {
//     $(this).after("clicked");
//   });
// });


