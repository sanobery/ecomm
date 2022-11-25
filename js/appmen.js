var men = [
    {
        url: "/assets/men1.jpeg",
        p: "Lorem ipsum dolor sit amet.",
        h6: "Jeans",
        price: "1000",
        pr: "Add To Cart"
    },
    {
        url: "/assets/men2.jpeg",
        p: "Lorem ipsum dolor sit amet.",
        h6: "Jeans",
        price: "700",
        pr: "Add To Cart"
    },
    {
        url: "/assets/men3.jpeg",
        p: "Lorem ipsum dolor sit amet.",
        h6: "Jeans",
        price: "900",
        pr: "Add To Cart"
    },
    {
        url: "/assets/men4.jpeg",
        p: "Lorem ipsum dolor sit amet.",
        h6: "Jeans",
        price: "1200",
        pr: "Add To Cart"
    },
    {
        url: "/assets/men1.jpeg",
        p: "Lorem ipsum dolor sit amet.",
        h6: "Jeans",
        price: "2000",
        pr: "Add To Cart",
    },
    {
        url: "/assets/men2.jpeg",
        p: "Lorem ipsum dolor sit amet.",
        h6: "Jeans",
        price: "900",
        pr: "Add To Cart",
    },
    {
        url: "/assets/men3.jpeg",
        p: "Lorem ipsum dolor sit amet.",
        h6: "Jeans",
        price: "1100",
        pr: "Add To Cart",
    },
    {
        url: "/assets/men4.jpeg",
        p: "Lorem ipsum dolor sit amet.",
        h6: "Jeans",
        price: "600",
        pr: "Add To Cart",
    },
];

var price = { 'S': 700, 'M': 800, 'L': 900, 'XL': 1000, 'XXL': 1100 };

function myfunction1() {
    var htmlelement = "";
    for (var i = 0; i < men.length; i++) {
        htmlelement += '<div class="col-12 col-lg-3">'
            + '<div class="card cardinline">'
            + '<img src="' + men[i].url + '" class="card-img-top img img-responsive" alt="..." >'
            + '<div class="card-body">'
            + '<h5 class="card-title">' + men[i].h6 + '</h5>'
            + '<h6>' + men[i].p + '<h6>'
            //+ '<em>' + "$" + men[i].price + '</em>'
            //+ '<br>'
            // +'<form name="form">'
            + '<select data-size="' + i + '" data-id="' +i+ '" onchange="getSize(this)">'
            + '<option>' + "Size" + '</option>'
            + '<option>' + "S" + '</option>'
            + '<option>' + "M" + '</option>'
            + '<option>' + "L" + '</option>'
            + '<option>' + "XL" + '</option>'
            + '<option>' + "XXL" + '</option>'
            + '</select>'
            // +'</form>'
            + '<br>'
            + '<em class="price">' + '</em>'
            + '<br>'
            + '<button class="btn btn-sm btn-primary" onclick="addToCart1(this);" data-size="' + i + '" data-button-id="' + i + '" data-price="' + men[i].price + '"  data-src="' + men[i].url + '" data-para="' + men[i].h6 + '">' + men[i].pr + '</button>'
            + '</div>'
            + '</div>'
            + '</div>';
        div1.innerHTML = htmlelement;
    }
}

// document.getElementsByClassName('addToCart').addEventListener('click',function (item){
//     console.log(item);
// });
//var button = document.querySelectorAll('.addToCart');
// var div2 = document.getElementById('div2');
// var cartcount = document.getElementById("lblCartCount");
// console.log(button);
// button.forEach(element => {
//     console.log(element);
//     element.addEventListener('click',function testing(item){
//             console.log(item);
//         });
// });

var count = 0;
let sum = 0;
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
    var price = item.dataset.price;
    sum = sum + parseInt(price);
    console.log(sum);
    console.log(itemImg);
    var htmlelement = document.createElement('tr');
    htmlelement.innerHTML = '<tr>'
        + '<td>'
        + '<div class="product-img">'
        + '<div class="img-prod">'
        + '<img src="' + itemImg + '">'
        + '</div>'
        + '</div>'
        + '</td>'
        + '<td>'
        + '<p>' + itemName + '</p>'
        + '</td>'
        + '<td>'
        + '<div class="button-container">'
        + '<button class="cart-qty-plus" type="button" value="+">' + "+" + '</button>'
        + '<input type="text" name="qty" min="0" class="qty form-control" value="' + 1 + '">'
        + '<button class="cart-qty-minus" type="button" value="-">' + "-" + '</button>'
        + '</div>'
        + '</td>'
        + '<td>'
        + '<input type="text" value="' + price + '" class="price form-control-sm" disabled>'
        + '</td>'
        + '<td text-align="center">'
        + '<span id="amount" class="amount">' + price + '</span>'
        + '</td>'
        + '</tr>';
    var div2 = document.getElementById('div2');
    div2.append(htmlelement);
    document.getElementById('total').innerHTML = sum;
}

var size = document.querySelectorAll('select');
//console.log(size);
var pr,size;
const em=document.getElementsByClassName('em')
function getSize(item) {
    //console.log(item.dataset.size);
    //console.log(item.value);
    pr = price[item.value];
    //console.log(item.dataset.id);
    size=item.value;
}

//localStorage.clear();
function addToCart1(item) {
    let items = [];
    if (typeof (Storage) !== 'undefined') {
        let cartitem = {
            id: item.dataset.buttonId,
            itemSrc: item.dataset.src,
            itemName: item.dataset.para,
            itemSize:size,
            itemPr: pr,
            no: 1
        };
        //console.log(cartitem);
        //localStorage.setItem('items', JSON.stringify(cartitem));
        if (JSON.parse(localStorage.getItem('items') === null)) {
            items.push(cartitem);
            localStorage.setItem('items', JSON.stringify(cartitem));
            window.location.reload();
        }
        else {
            const localitems = JSON.parse(localStorage.getItem('items'));
        //     console.log(localitems);
            localitems.map(data => {
                if (cartitem.id == data.id) {
                    cartitem.no = data.no + 1;
                } else {
                    items.push(data);
                }
            });
            items.push(cartitem);
            localStorage.setItem('items', JSON.stringify(items));
            window.location.reload();
        }
    }
    else{
        console.log("local Storage not Working");
    }
}

