// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return "Hello"
}

const area = (w, h) => {
  // should return the area
  return w * h
}

const perimeter = (w, h) => {
  // should return the perimeter
  return (2*w + 2*h)
}

const circleArea = r => {
  // should return the area of the circle
  return Math.exp(r*Math.PI)
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const shoppingCart = []

const clearCart = () => {
  shoppingCart.length = 0
}

const createItem = (name, price) => {
  return { name, price, quantity: 1 }
}

const getShoppingCart = () => {
  // should return the current state of shopping cart
  return shoppingCart
}

const addItemToCart = (item) => {
  // should add item to shopping cart
  // if shoppingCart.includes(item){
  //   shoppingCart.find(element => element > item).p
  // }
  return shoppingCart.push(item)
}

const getNumItemsInCart = () => {
  // should return the total quantity of items in cart
  // const cartLength = 0
  // return cartLength
  // console.log(shoppingCart)
  return shoppingCart.length
}

const removeItemFromCart = (item) => {
  // should remove item from shopping cart
  const index = shoppingCart.indexOf(item);
  shoppingCart.splice(index, 1);
}

const totalCostOfCart = () => {
  // Should return total cost of all items in shopping cart
}

module.exports = {
  sayHello, area, perimeter, circleArea,
  clearCart, createItem, getShoppingCart, addItemToCart,
  getNumItemsInCart, removeItemFromCart
}
