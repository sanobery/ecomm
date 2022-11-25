var women=[
    {
        url: "/assets/women1.jpg",
        p: "Lorem ipsum dolor sit amet.",
        h6: "Blue",
        pr: "Add To Cart"
    },
    {
        url: "/assets/women2.jpg",
        p: "Lorem ipsum dolor sit amet.",
        h6: "Yellow",
        pr: "Add To Cart"
    },
    {
        url: "/assets/women3.webp",
        p: "Lorem ipsum dolor sit amet.",
        h6: "Black",
        pr: "Add To Cart"
    },
    {
        url: "/assets/women4.jpeg",
        p: "Lorem ipsum dolor sit amet.",
        h6: "Black",
        pr: "Add To Cart"
    },
    {
        url: "/assets/women5.jpeg",
        p: "Lorem ipsum dolor sit amet.",
        h6: "Green",
        pr: "Add To Cart",
    },
    {
        url: "/assets/women6.jpeg",
        p: "Lorem ipsum dolor sit amet.",
        h6: "Blue",
        pr: "Add To Cart",
    },
    {
        url: "/assets/women7.jpeg",
        p: "Lorem ipsum dolor sit amet.",
        h6: "Blue",
        pr: "Add To Cart",
    },
    {
        url: "/assets/women8.webp",
        p: "Lorem ipsum dolor sit amet.",
        h6: "Red",
        pr: "Add To Cart",
    },
];

var price = { 'S': 700, 'M': 800, 'L': 900, 'XL': 1000, 'XXL': 1100 };

var filtercolour = ['Black', 'Blue','Green','Orange','Red','White','Yellow'];

var filterbrand =['Harpa','Siril','Lymio','Biba','MySwag','Max'];

// Dynamic implementation of item through Js
function myFunction1() {
    var filters = document.getElementById('filter');
    var filterhtml = "";
    for (var i = 0; i < filtercolour.length; i++) {
        filterhtml += '<div class="form-check">'
            + '<input class="form-check-input" type="checkbox" value="" id="flexCheck" data-colour="' + filtercolour[i] + '" data-checkno="' + i + '" onclick="filter(this);">'
            + '<label class="form-check-label" for="flexCheckDefault">'
            + filtercolour[i]
            + '</label>'
            + '</div>'
        filters.innerHTML = filterhtml;
    }
    var htmlelement = "";
    for (var i = 0; i < women.length; i++) {
        htmlelement += '<div class="col-12 col-lg-3">'
            + '<div class="card cardinline">'
            + '<img src="' + women[i].url + '" class="card-img-top img img-responsive" alt="..." >'
            + '<div class="card-body">'
            + '<h5 class="card-title">' + women[i].h6 + '</h5>'
            + '<h6>' + women[i].p + '<h6>'
            + '<select data-size="' + i + '" data-id="' + i + '" onchange="getSize(this)">'
            + '<option>' + "Size" + '</option>'
            + '<option>' + "S" + '</option>'
            + '<option>' + "M" + '</option>'
            + '<option>' + "L" + '</option>'
            + '<option>' + "XL" + '</option>'
            + '<option>' + "XXL" + '</option>'
            + '</select>'
            + '<br>'
            +'<br>'
            + '<button class="btn btn-sm btn-primary" onclick="addToCart(this)" data-price="' + women[i].price + '"  data-src="' + women[i].url + '" data-para="' + women[i].h6 + '">' + women[i].pr + '</button>'
            + '</div>'
            + '</div>'
            + '</div>';
        div1.innerHTML = htmlelement;
    }
}

var size = "", pr;

// Getsize Dynamically
function getSize(item) {
    pr = price[item.value];
    size = item.value;
}

// filter out element as per selected colour
function filter(check) {
    if (check.checked == true) {
        window.history.pushState(null, null, "?colour=" + check.dataset.colour);
        var selectedcolour = women.filter(item=> item.h6==check.dataset.colour);
        newPage(selectedcolour);  
    }
    else {
        window.history.back();
        myFunction1();
    }
}

// Selected colour item
function newPage(women){
    var htmlelement = "";
    for (var i = 0; i < women.length; i++) {
        htmlelement += '<div class="col-12 col-lg-3">'
            + '<div class="card cardinline">'
            + '<img src="' + women[i].url + '" class="card-img-top img img-responsive" alt="..." >'
            + '<div class="card-body">'
            + '<h5 class="card-title">' + women[i].h6 + '</h5>'
            + '<h6>' + women[i].p + '<h6>'
            + '<select data-size="' + i + '" data-id="' + i + '" onchange="getSize(this)">'
            + '<option>' + "Size" + '</option>'
            + '<option>' + "S" + '</option>'
            + '<option>' + "M" + '</option>'
            + '<option>' + "L" + '</option>'
            + '<option>' + "XL" + '</option>'
            + '<option>' + "XXL" + '</option>'
            + '</select>'
            + '<br>'
            +'<br>'
            + '<button class="btn btn-sm btn-primary" onclick="addToCart(this)" data-price="' + women[i].price + '"  data-src="' + women[i].url + '" data-para="' + women[i].h6 + '">' + women[i].pr + '</button>'
            + '</div>'
            + '</div>'
            + '</div>';
        div1.innerHTML = htmlelement;
    }
}