var kid = [
    {
        url: "/assets/kids1.jpeg",
        p: "Lorem ipsum dolor sit amet.",
        h6: "Jeans",
        price:"1000",
        pr: "Add To Cart"
    },
    {
        url: "/assets/kids2.jpeg",
        p: "Lorem ipsum dolor sit amet.",
        h6: "Jeans",
        price:"900",
        pr: "Add To Cart"
    },
    {
        url: "/assets/kids3.jpeg",
        p: "Lorem ipsum dolor sit amet.",
        h6: "Jeans",
        price:"800",
        pr: "Add To Cart"
    },
    {
        url: "/assets/kids4.jpeg",
        p: "Lorem ipsum dolor sit amet.",
        h6: "Jeans",
        price:"700",
        pr: "Add To Cart"
    },
    {
        url: "/assets/kids5.jpeg",
        p: "Lorem ipsum dolor sit amet.",
        h6: "Jeans",
        price:"1100",
        pr: "Add To Cart",
    },
    {
        url: "/assets/kids6.jpeg",
        p: "Lorem ipsum dolor sit amet.",
        h6: "Jeans",
        price:"1300",
        pr: "Add To Cart",
    },
    {
        url: "/assets/kids7.jpeg",
        p: "Lorem ipsum dolor sit amet.",
        h6: "Jeans",
        price:"1500",
        pr: "Add To Cart",
    },
    {
        url: "/assets/kids8.jpeg",
        p: "Lorem ipsum dolor sit amet.",
        h6: "Jeans",
        price:"900",
        pr: "Add To Cart",
    },
];

function myfunction() {
    var htmlelement = "";
    for (var i = 0; i < kid.length; i++) {
        htmlelement+='<div class="col-12 col-lg-3">'
            +'<div class="card cardinline">'
            + '<img src="' + kid[i].url + '" class="card-img-top img img-responsive" alt="..." >'
            + '<div class="card-body">'
            + '<h5 class="card-title">' + kid[i].h6 + '</h5>'
            + '<h6>' + kid[i].p + '<h6>'
            + '<em>'+"$"+ kid[i].price + '</em>'
            + '<br>'
            + '<button class="btn btn-sm btn-primary" onclick="addToCart(this)" data-price="'+kid[i].price+'"  data-src="'+kid[i].url+'" data-para="'+kid[i].h6+'">' + kid[i].pr + '</button>'
            + '</div>'
            + '</div>'
            +'</div>'; 
        var div1=document.getElementById('div1');
        div1.innerHTML=htmlelement;
    }
}

var button = document.getElementsByClassName('btn-primary');
var div2 = document.getElementById('div2');
var cartcount = document.getElementById("lblCartCount");
var count = 0;
let sum=0;

for (var i = 0; i < button.length; i++) {
    addToCart();
}

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
        + '<div class="button-container">'
        + '<button class="cart-qty-plus" type="button" value="+">' + "+" + '</button>'
        + '<input type="text" name="qty" min="0" class="qty form-control" value="' + 1 + '">'
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
