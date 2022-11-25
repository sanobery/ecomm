const tablebody = document.getElementById('tablebody');
const table = document.getElementById('total');
const localItems = JSON.parse(localStorage.getItem('items'));
let tableData = '';
let sum = 0;
localItems.map(data => {
    tableData += '<tr>'
        + '<td>'
        + '<div class="product-img">'
        + '<div class="img-prod">'
        + '<img src="' + data.itemSrc + '">'
        + '</div>'
        + '</div>'
        + '</td>'
        + '<td>'
        + '<p>' + data.itemName + '</p>'
        + '</td>'
        + '<td>'
        + '<p>' + data.itemSize + '</p>'
        + '</td>'
        + '<td>'
        + '<p>' + data.no + '</p>'
        + '</td>'
        + '<td>'
        + '<p>' + data.itemPr + '</p>'
        + '</td>'
        + '<td>'
        + '<p>' + data.no * data.itemPr + '</p>'
        + '</td>'
        + '<td>'
        + '<a href="#" data-id="'+data.id+' onclick="Delete(this)">'
        + "Delete"
        + '</a>'
        + '</td>'
        + '</tr>';
    //console.log(tableData,tablebody);
    sum = sum + parseInt(data.no * data.itemPr);
    console.log(sum);
    tablebody.innerHTML = tableData;
    total.innerHTML = sum;
});

function Delete(item) {
    //console.log(item.id);
    //var c=JSON.parse(localStorage.getItem('items')).filter((Product)=>Product.id!=item.id);
    //localStorage.setItem('items', JSON.stringify(c));
   // window.location.reload();
   //console.log(item);
}

