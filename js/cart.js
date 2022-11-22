const tablebody = document.getElementById('tablebody');
const table=document.getElementById('total');
console.log(tablebody);
const localItems = JSON.parse(localStorage.getItem('items'));
console.log(localItems.length);
for (var i = 0; i < localItems.length; i++) {
    console.log(localItems[i]);
}
//var item=localItems[i];
let tableData = '';
let sum=0;
localItems.map(data => {
    //console.log(data);
    //let tableData='';
    tableData += '<tr>'
        + '<td>'
        + '<div class="product-img">'
        + '<div class="img-prod">'
        + '<img src="' + data.itemSrc + '">'
        + '</div>' + '</div>'
        + '</td>' + '<td>'
        + '<p>' + data.itemName + '</p>'
        + '</td>' + '<td>'
        + '<p>' + data.no + '</p>'
        + '</td>'
        +'<td>'
        + data.itemPr+'</td>'
        + '</td>' + '<td>'
        + '<p>' + data.no*data.itemPr + '</p>'
        + '</td>'
        + '<td>'
        + '<a href="#" onclick=Delete(this);>'
        + "Delete"
        + '</a>'
        + '</td>'
        + '</tr>';
    //console.log(tableData,tablebody);
    sum=sum+parseInt(data.no*data.itemPr);
    console.log(sum);
    tablebody.innerHTML = tableData;
    total.innerHTML=sum;
});


// for (var i = 0; i < st.length; i++) {
//     var tableData = document.createElement('tr');
//     console.log(st[i].itemSrc);
//     JSON.parse(localStorage.getItem('items')).map(data=>{
//     tableData.innerHTML += '<tr>'
//         +'<td>'
//         + '<img src="' + st[i].itemSrc + '">'
//         + '</td>'+'<td>'
//         + '<p>' + st[i].itemName + '</p>'
//         + '</td>'+'<td>'
//         + '<p>' + st[i].itemPr + '</p>'
//         + '</td>'+'<td>'+'<a href="#" onclick=Delete(this);>'+"Delete"+'</a>'+'</td>'+'</tr>';
//     //});
//     console.log(tableData);
//     const div = document.getElementById('tablebody');
//     div.append(tableData);
// }

