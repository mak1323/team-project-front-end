'use strict'

const store = require('../store')
const cart = require('../cart')

const showProductsTemplate = require('../templates/products.handlebars')
const orderApi = require('../orders/api')

// This variable represents the array of products that will be patched into the
// active order.
let cartID
// When a user adds an item to an order, this will pass the item's id and the
// quanity value the user entered into an array and pushes it to the shopping
// cart array.
const onAddItemToCart = function (event) {
  console.log(event)
  event.preventDefault()

  const item = {
    product_id: $(this).closest('form').find("input[name='id']").val(),
    quantity: $(this).closest('form').find("input[name='quantity']").val()
  }
  cart.push(item)
  orderApi.showAllOrders()
    .then(updateCart)
}

const getCartId = function (item) {
  if (item.isOpen === true) {
    cartID = item.id
  }
}

const getCartArray = function () {
  return cart
}

const updateCart = function (data) {
  const orders = data.orders
  orders.forEach(getCartId)
  console.log(cartID)
  $('#updateCart-id').val(cartID)
  $('#updateCart-userid').val(store.user.id)
  console.log(store.user.id)
  $('#updateCart').submit()
}

const showAllProductsSuccess = function (data) {
  console.table(data)
  const showProductsHTML = showProductsTemplate({ products: data.products })
  $('#productTable').show()
  $('#productTable tbody').empty()
  $('#productTable tbody').append(showProductsHTML)
  $('.addToCart').on('submit', onAddItemToCart)
}

const showAllProductsFailure = function () {
  // $('#UiFailure').text('something went wrong')
}

module.exports = {
  showAllProductsSuccess,
  showAllProductsFailure,
  getCartArray
}
