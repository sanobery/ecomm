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

function myfunction1() {
    var htmlelement = "";
    for (var i = 0; i < men.length; i++) {
        htmlelement += '<div class="col-12 col-lg-3">'
            + '<div class="card cardinline">'
            + '<img src="' + men[i].url + '" class="card-img-top img img-responsive" alt="..." >'
            + '<div class="card-body">'
            + '<h5 class="card-title">' + men[i].h6 + '</h5>'
            + '<h6>' + men[i].p + '<h6>'
            + '<em>' + "$" + men[i].price + '</em>'
            + '<br>'
            + '<select>'
            + '<option>' + "Size" + '</option>'
            + '<option>' + "S" + '</option>'
            + '<option>' + "M" + '</option>'
            + '<option>' + "L" + '</option>'
            + '<option>' + "XL" + '</option>'
            + '<option>' + "XXL" + '</option>'
            + '</select>'
            + '<br>'
            + '<button class="btn btn-sm btn-primary" onclick="addToCart1(this)" data-button-id="'+i+'" data-price="' + men[i].price + '"  data-src="' + men[i].url + '" data-para="' + men[i].h6 + '">' + men[i].pr + '</button>'
            + '</div>'
            + '</div>'
            + '</div>';
        div1.innerHTML = htmlelement;
    }
}

// var button = document.getElementsByClassName('btn-primary');
// var div2 = document.getElementById('div2');
// var cartcount = document.getElementById("lblCartCount");
var count = 0;
let sum = 0;

// for (var i = 0; i < button.length; i++) {
//     addToCart1();
// }

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
    htmlelement.innerHTML='<tr>'
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

//localStorage.clear();
function addToCart1(item) {
    //btn = item.dataset.src;
    //console.log(btn);
    let items = [];
    if (typeof (Storage) !== 'undefined') {
        var itemSrc = item.dataset.src;
        var itemName = item.dataset.para;
        var itemPr = item.dataset.price;
        let cartitem = {
            id:item.dataset.buttonId,
            itemSrc: itemSrc,
            itemName: itemName,
            itemPr: itemPr,
            no: 1
        };
        if (JSON.parse(localStorage.getItem('items') === null)) {
            items.push(cartitem);
            localStorage.setItem('items', JSON.stringify(cartitem));
            window.location.reload();
        }
        else {
            const localItems = JSON.parse(localStorage.getItem("items"));
            localItems.map(data => {
                if(cartitem.id == data.id) {
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
}

