'use strict'
// const store = require('../store')
const showProductsTemplate = require('../templates/products.handlebars')

// This variable represents the array of products that will be patched into the
// active order.
const shoppingCart = []

// When a user adds an item to an order, this will pass the item's id and the
// quanity value the user entered into an array and pushes it to the shopping
// cart array.
const onAddItemToOrder = function (event) {
  console.log(event)
  event.preventDefault()
  const item = [$(this).closest('form').find("input[name='id']").val(), $(this).closest('form').find("input[name='quantity']").val()]
  shoppingCart.push(item)
  console.log(shoppingCart)
  console.log()
}

const showAllProductsSuccess = function (data) {
  console.table(data)
  const showProductsHTML = showProductsTemplate({ products: data.products })
  $('#productTable').show()
  $('#productTable tbody').empty()
  $('#productTable tbody').append(showProductsHTML)
  $('.addToCart').on('submit', onAddItemToOrder)
}

const showAllProductsFailure = function () {
}

module.exports = {
  showAllProductsSuccess,
  showAllProductsFailure
}
