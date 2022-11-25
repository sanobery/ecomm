var kid = [
    {
        url: "/assets/kids.jpeg",
        p: "Lorem ipsum dolor sit amet.",
        h6: "Jeans",
        pr: "Add To Cart"
    },
    {
        url: "/assets/kids1.jpeg",
        p: "Lorem ipsum dolor sit amet.",
        h6: "Jeans",
        pr: "Add To Cart"
    },
    {
        url: "/assets/kids2.jpeg",
        p: "Lorem ipsum dolor sit amet.",
        h6: "Jeans",
        pr: "Add To Cart"
    },
    {
        url: "/assets/kids3.jpeg",
        p: "Lorem ipsum dolor sit amet.",
        h6: "Jeans",
        pr: "Add To Cart"
    },
    {
        url: "/assets/kids4.jpeg",
        p: "Lorem ipsum dolor sit amet.",
        h6: "Jeans",
        pr: "Add To Cart",
    },
    {
        url: "/assets/kids5.jpeg",
        p: "Lorem ipsum dolor sit amet.",
        h6: "Jeans",
        pr: "Add To Cart",
    },
    {
        url: "/assets/kids6.jpeg",
        p: "Lorem ipsum dolor sit amet.",
        h6: "Jeans",
        pr: "Add To Cart",
    },
    {
        url: "/assets/kids7.jpeg",
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
function myfunction() {
    var htmlelement = "";
    for (var i = 0; i < kid.length; i++) {
        htmlelement += '<div class="col-12 col-lg-3">'
            + '<div class="card cardinline">'
            + '<img src="' + kid[i].url + '" class="card-img-top img img-responsive" alt="..." >'
            + '<div class="card-body">'
            + '<h5 class="card-title">' + kid[i].h6 + '</h5>'
            + '<h6>' + kid[i].p + '<h6>'
            + '<select data-size="' + i + '" data-id="' + i + '" onchange="getSize(this)">'
            + '<option>' + "Size" + '</option>'
            + '<option>' + "S" + '</option>'
            + '<option>' + "M" + '</option>'
            + '<option>' + "L" + '</option>'
            + '<option>' + "XL" + '</option>'
            + '<option>' + "XXL" + '</option>'
            + '</select>'
            + '<br>'
            + '<button class="btn btn-sm btn-primary" onclick="addToCart(this);" data-button-id="' + i + '" data-price="' + kid[i].price + '"  data-src="' + kid[i].url + '" data-para="' + kid[i].h6 + '">' + kid[i].pr + '</button>'
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

