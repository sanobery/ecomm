// add item to cart from different pages
function addToCart(item) {
  let items = [];
  if (typeof Storage !== "undefined") {
    let cartitem = {
      itemSrc: item.dataset.src,
      itemName: item.dataset.para,
      itemSize: size,
      itemPrice: pr,
      no: 1,
    };
    if (JSON.parse(localStorage.getItem("items") === null)) {
      items.push(cartitem);
      localStorage.setItem("items", JSON.stringify(cartitem));
      window.location.reload();
    } else {
      const localitems = JSON.parse(localStorage.getItem("items"));
      localitems.map((data) => {
        if (
          cartitem.itemSrc == data.itemSrc &&
          cartitem.itemSize == data.itemSize
        ) {
          console.log(cartitem.itemSize, data.itemSize);
          cartitem.no = data.no + 1;
          console.log(cartitem.no);
        } else {
          items.push(data);
        }
      });
      items.push(cartitem);
      localStorage.setItem("items", JSON.stringify(items));
      window.location.reload();
    }
  } else {
    console.log("local Storage not Working");
  }
}
