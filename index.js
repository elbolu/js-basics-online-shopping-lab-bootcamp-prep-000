var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item){
 var itemAdded = {'itemName': item, 'itemPrice': Math.floor(Math.random()*100) + 1};
  cart.push(itemAdded);
 return `${item} has been added to your cart.`;
}

function viewCart() {
var string = "In your cart, you have ";
  var itemstolist = [];
  if (cart[0]===undefined) {
    return "Your shopping cart is empty.";
  }
  else if (cart.length===1)
    {
      string+=`${cart[0].itemName} at $${cart[0].itemPrice}.`;
      return string;
    }
    else if (cart.length===2) {
      string+=`${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
      return string; 
    }
    else {
      for (let i=0; i<cart.length-2; i++) {
        itemstolist.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
      }
      return `${string}${itemstolist}, ${cart[cart.length-2].itemName} at $${cart[cart.length-2].itemPrice}, and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`;
    }
}

    
    
