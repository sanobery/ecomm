//rendering Product from JQUERY
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
var colour = "";

$('document').ready(function productCard() {
  var filterhtml = "";
  for (var i = 0; i < filtercolour.length; i++) {
    filterhtml +=
      '<div class="form-check">' +
      '<input class="form-check-input flexCheck" type="checkbox" value="' + filtercolour[i] + '" id="flexCheckDefault" data-colour="' +
      filtercolour[i] +
      '">' +
      '<label class="form-check-label" for="flexCheckDefault">' +
      filtercolour[i] +
      "</label>" +
      "</div>";
  }
  $('#colours').html(filterhtml);
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
      '<select class="sizeselect" data-size="' +
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

  $('#div1').html(htmlelement);

  $('.sizeselect').on('change', function () {
    size = $(this).val();
    price = product[$(this).data('id')].itemprice[size];
    //console.log(size, price);
  });

  $('.flexCheck').on('click', function () {
    $('.flexCheck').each(function (index, element) {
      //console.log($(element).is(':checked'), $(element).val());
      if ($(element).is(':checked')) {
        colour += $(element).val();
        // var selectedcolour = product.filter(
        //   (item) => item.h6 == check.dataset.colour
        // );
        // productCard(selectedcolour);
        // console.log(s, typeof (s));
        window.history.pushState(null, null, "?colour=" + colour);
      }
      else {
        colour = "";
        window.history.pushState(null, null, null);
      }
    })
  });

});




