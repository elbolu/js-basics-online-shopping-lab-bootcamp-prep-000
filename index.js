var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item){
 var object = {itemName: item, itemPrice: Math.floor(Math.random() * 100 + 1)};
 cart.push(object);
 return `${item} has been added to your cart.`;
}