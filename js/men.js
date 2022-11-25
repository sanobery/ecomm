var men = [
    {
        url: "/assets/men1.jpeg",
        p: "Lorem ipsum dolor sit amet.",
        h6: "Jeans",
        pr: "Add To Cart"
    },
    {
        url: "/assets/men2.jpeg",
        p: "Lorem ipsum dolor sit amet.",
        h6: "Jeans",
        pr: "Add To Cart"
    },
    {
        url: "/assets/men3.jpeg",
        p: "Lorem ipsum dolor sit amet.",
        h6: "Jeans",
        pr: "Add To Cart"
    },
    {
        url: "/assets/men4.jpeg",
        p: "Lorem ipsum dolor sit amet.",
        h6: "Jeans",
        pr: "Add To Cart"
    },
    {
        url: "/assets/men5.jpeg",
        p: "Lorem ipsum dolor sit amet.",
        h6: "Jeans",
        pr: "Add To Cart",
    },
    {
        url: "/assets/men6.jpeg",
        p: "Lorem ipsum dolor sit amet.",
        h6: "Jeans",
        pr: "Add To Cart",
    },
    {
        url: "/assets/men7.jpeg",
        p: "Lorem ipsum dolor sit amet.",
        h6: "Jeans",
        pr: "Add To Cart",
    },
    {
        url: "/assets/men8.jpeg",
        p: "Lorem ipsum dolor sit amet.",
        h6: "Jeans",
        pr: "Add To Cart",
    },
];

var price = { 'S': 700, 'M': 800, 'L': 900, 'XL': 1000, 'XXL': 1100 };

var count = 0;
let sum = 0;
var pr, size;

// Dynamic item creation
function myfunction1() {
    var htmlelement = "";
    for (var i = 0; i < men.length; i++) {
        htmlelement += '<div class="col-12 col-lg-3">'
            + '<div class="card cardinline">'
            + '<img src="' + men[i].url + '" class="card-img-top img img-responsive" alt="..." >'
            + '<div class="card-body">'
            + '<h5 class="card-title">' + men[i].h6 + '</h5>'
            + '<h6>' + men[i].p + '<h6>'
            + '<select data-size="' + i + '" data-id="' + i + '" onchange="getSize(this)">'
            + '<option>' + "Size" + '</option>'
            + '<option>' + "S" + '</option>'
            + '<option>' + "M" + '</option>'
            + '<option>' + "L" + '</option>'
            + '<option>' + "XL" + '</option>'
            + '<option>' + "XXL" + '</option>'
            + '</select>'
            + '<br>'
            + '<button class="btn btn-sm btn-primary" onclick="addToCart(this);" data-button-id="' + i + '" data-price="' + men[i].price + '"  data-src="' + men[i].url + '" data-para="' + men[i].h6 + '">' + men[i].pr + '</button>'
            + '</div>'
            + '</div>'
            + '</div>';
        div1.innerHTML = htmlelement;
    }
}

// To get size
function getSize(item) {
    pr = price[item.value];
    size = item.value;
}

