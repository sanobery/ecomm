var women = [
    {
        url: "/assets/women1.jpg",
        p: "Lorem ipsum dolor sit amet.",
        h6: "Jeans",
        price:"1000",
        pr: "Add To Cart"
    },
    {
        url: "/assets/women2.jpg",
        p: "Lorem ipsum dolor sit amet.",
        h6: "Jeans",
        price:"800",
        pr: "Add To Cart"
    },
    {
        url: "/assets/women3.webp",
        p: "Lorem ipsum dolor sit amet.",
        h6: "Jeans",
        price:"1200",
        pr: "Add To Cart"
    },
    {
        url: "/assets/women4.jpeg",
        p: "Lorem ipsum dolor sit amet.",
        h6: "Jeans",
        price:"800",
        pr: "Add To Cart"
    },
    {
        url: "/assets/women5.jpeg",
        p: "Lorem ipsum dolor sit amet.",
        h6: "Jeans",
        price:"900",
        pr: "Add To Cart",
    },
    {
        url: "/assets/women6.jpeg",
        p: "Lorem ipsum dolor sit amet.",
        h6: "Jeans",
        price:"1500",
        pr: "Add To Cart",
    },
    {
        url: "/assets/women7.jpeg",
        p: "Lorem ipsum dolor sit amet.",
        h6: "Jeans",
        price:"700",
        pr: "Add To Cart",
    },
    {
        url: "/assets/women8.webp",
        p: "Lorem ipsum dolor sit amet.",
        h6: "Jeans",
        price:"900",
        pr: "Add To Cart",
    },
];

function myfunction1() {
    var htmlelement = "";
    for (var i = 0; i < women.length; i++) {
        htmlelement+='<div class="col-12 col-lg-3">'
            +'<div class="card cardinline">'
            + '<img src="' + women[i].url + '" class="card-img-top img img-responsive" alt="..." >'
            + '<div class="card-body">'
            + '<h5 class="card-title">' + women[i].h6 + '</h5>'
            + '<h6>' + women[i].p + '<h6>'
            + '<em>'+"$"+ women[i].price + '</em>'
            + '<br>'
            + '<button class="btn btn-sm btn-primary" onclick="addToCart(this)" data-price="'+women[i].price+'"  data-src="'+women[i].url+'" data-para="'+women[i].h6+'">' + women[i].pr + '</button>'
            + '</div>'
            + '</div>'
            +'</div>'; 
        div1.innerHTML=htmlelement;
    }
}

// var button = document.getElementsByClassName('btn-primary');
// var div2 = document.getElementById('div2');
// var cartcount = document.getElementById("lblCartCount");
// //console.log(button)
var count = 0;

// for (var i = 0; i < button.length; i++) {
//     addToCart();
// }

let sum=0;

function addToCart(item) {
    // btn = item.dataset.buttonId;
    // console.log(btn);
    // btn_parent = ;
    // btn_grp = ;
    // console.log(btn_grp);
    // console.log(btn_parent);
    count++;
    document.getElementById('lblCartCount').innerText = count;
    var itemName = item.dataset.para;
    var itemImg = item.dataset.src;
    var price= item.dataset.price;
    sum=sum+parseInt(price);
    console.log(sum);
    console.log(itemImg);
    var htmlelement=document.createElement('tr');
    // htmlelement.innerHTML += '<div class="card mb-4" style="width:300px">'
    //     + '<img src="' + itemImg + '" class="card-img-top" alt="..." height="200px" width="200px">'
    //     + '<div class="card-body">'
    //     + '<h5 class="card-title">' + itemName + '</h5>'
    //     // + '<p class="card-text">' + men[i].p + '</p>'
    //     + '<button class="btn btn-sm btn-danger">' + "Check-Out" + '</button>'
    //     + '</div>'
    //     + '</div>';
    htmlelement.innerHTML+='<tr>'
        +'<td>'
        + '<div class="product-img">'
        + '<div class="img-prod">'
        + '<img src="'+itemImg+'">'
        + '</div>'
        + '</div>'
        + '</td>'
        +'<td>'
        + '<p>'+itemName+'</p>'
        + '</td>'
        + '<td>'
        +'<div class="button-container">'
        + '<button class="cart-qty-plus" type="button" value="+">' + "+" + '</button>'
        + '<input type="text" name="qty" min="0" class="qty form-control" value="'+1+'">'
        + '<button class="cart-qty-minus" type="button" value="-">' + "-" + '</button>'
        + '</div>'
        + '</td>'
        +'<td>'
        + '<input type="text" value="'+price+'" class="price form-control-sm" disabled>'
        + '</td>'
        + '<td text-align="center">'
        + '<span id="amount" class="amount">' + price + '</span>'
        + '</td>'
        +'</tr>';
    var div2 = document.getElementById('div2');
    div2.append(htmlelement);
    document.getElementById('total').innerHTML=sum;
}