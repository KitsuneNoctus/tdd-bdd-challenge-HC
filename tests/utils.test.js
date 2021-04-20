const mocha = require("mocha")
const chai = require("chai")
const utils = require("../utils")
const expect = chai.expect

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
  const hello = utils.sayHello()
  expect(hello).to.be.a("string")
  expect(hello).to.equal("Hello")
  expect(hello).with.lengthOf(5)
})

// ========================================================
// Level 1 Challenges
// 1. Write the pending tests check that they are pending, like this:
//    it("should do something that you want done")
// 2. Next, write the test and see that it fails.
// 3. Write the code in the utils.js file to make the test pass.
// 4. Finally see if you would like to refactor your code at all.
// This is called "Red-Green-Refactor"
// ========================================================

it("area should equal W * h", function(){
  const width = 5, height = 10, area = utils.area(width,height)

  expect(area).to.be.a('number')
  expect(width).to.be.a('number')
  expect(height).to.be.a('number')
  expect(area).to.equal(width * height)
})

it("perimeter should equal 2w + 2h", function(){
  const width = 5, height = 10, perimeter = utils.perimeter(width,height)

  expect(perimeter).to.be.a('number')
  expect(width).to.be.a('number')
  expect(height).to.be.a('number')
  expect(perimeter).to.equal(2*width + 2*height)
})

it("Circle radius should be 2pi squared", function(){
  const r = 5, area = utils.circleArea(r)

  expect(area).to.be.a('number')
  expect(r).to.be.a('number')
  expect(area).to.equal(Math.exp(r*Math.PI))
})

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

beforeEach((done) => {
  utils.clearCart()
  done()
})

it("Should create a new (object) Item with name and price", function() {
  const item = utils.createItem("apple", 0.99)
  expect(item).to.be.a("object")
  expect(item).to.have.property("name", "apple")
  expect(item).to.have.property("price", 0.99)
  expect(item).to.have.property("quantity", 1)
})

it("Should return an array containing all items in cart", function(){
  const item = utils.createItem("apple", 0.99)
  const _ = utils.addItemToCart(item)
  const items = utils.getShoppingCart()

  expect(item).to.be.a("object")
  expect(items).to.be.a("Array")
  expect(items).to.contain(item)
})

it("Should add a new item to the shopping cart", function(){
  const item = utils.createItem("apple", 0.99)
  const item2 = utils.createItem("apple", 0.99)
  const _ = utils.addItemToCart(item)
  const push2 = utils.addItemToCart(item2)

  expect(item).to.be.a("object")
  expect(item2).to.be.a("object")
  expect(push2).to.equal(2)
})

it("Should return the number of items in the cart", function(){
  const item = utils.createItem("apple", 0.99)
  const item3 = utils.createItem("pear", 0.69)
  const _ = utils.addItemToCart(item)
  const _1 = utils.addItemToCart(item)
  const _2 = utils.addItemToCart(item3)
  const itemsNum = utils.getNumItemsInCart()
  const items = utils.getShoppingCart()
  console.log(items)

  expect(item).to.be.a("object")
  // expect(item2).to.be.a("object")
  expect(item3).to.be.a("object")
  expect(itemsNum).to.be.a("number")
  expect(itemsNum).to.equal(3)
})

it("Should remove items from cart", function(){
  const item = utils.createItem("apple", 0.99)
  const item3 = utils.createItem("pear", 0.69)
  const _ = utils.addItemToCart(item)
  const _1 = utils.addItemToCart(item)
  const _2 = utils.addItemToCart(item3)
  const items = utils.getShoppingCart()
  const itemsNum = utils.getNumItemsInCart()
  console.log(items)

  expect(item).to.be.a("object")
  expect(item3).to.be.a("object")
  expect(itemsNum).to.be.a("number")

  expect(items).to.contain(item)
  expect(items).to.contain(item3)

  expect(itemsNum).to.equal(3)

  const remove = utils.removeItemFromCart(item)
  const itemsNum2 = utils.getNumItemsInCart()
  expect(itemsNum2).to.be.a("number")
  expect(itemsNum2).to.equal(1)
})

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart")

it("Should validate that an empty cart has 0 items")

it("Should return the total cost of all items in the cart", function(){
  const item = utils.createItem("apple", 0.99)
  const item3 = utils.createItem("pear", 0.69)
  const _ = utils.addItemToCart(item)
  const _1 = utils.addItemToCart(item)
  const _2 = utils.addItemToCart(item3)
  const items = utils.getShoppingCart()
  const itemsNum = utils.getNumItemsInCart()
  console.log(items)

  expect(item).to.be.a("object")
  expect(item3).to.be.a("object")
  expect(itemsNum).to.be.a("number")

  expect(items).to.contain(item)
  expect(items).to.contain(item3)

  expect(itemsNum).to.equal(3)

  const totalCost = utils.totalCostOfCart()
  expect(totalCost).to.be.a("number")
  expect(totalCost).to.equal(2.67)
})
