'use strict'
const api = require('./api')
const ui = require('./ui')

// show the product catalog on the landing page, this function is called on
// sign in
const onShowAllProducts = function (event) {
  event.preventDefault()
  api.showAllProducts()
    .then(ui.showAllProductsSuccess)
    .catch(ui.showAllProductsFailure)
}

const onProductsMenuButton = () => {
  console.log('products here')
  $('.landingPage').show()
  $('#productTable').show()
  $('#cartPage').hide()
  $('#checkoutPage').hide()
  $('.previousOrderList').hide()
}
const onOrderHistoryButton = () => {
  $('.landingPage').hide()
  $('#cartPage').hide()
  $('#checkoutPage').hide()
  $('.previousOrderList').show()
}

const onShoppingCartMenuButton = () => {
  $('.landingPage').hide()
  $('#cartPage').show()
  $('#checkoutPage').hide()
  $('.previousOrderList').hide()
}

const onCheckoutMenuButton = () => {
  $('.landingPage').hide()
  $('#cartPage').hide()
  $('#checkoutPage').show()
}

const addHandlers = () => {
  $('#returnToProducts').on('click', onProductsMenuButton)
  $('#shoppingCartButton').on('click', onShoppingCartMenuButton)
  $('#orderHistoryButton').on('click', onOrderHistoryButton)
  $('#buttonProceedCheckout').on('click', onCheckoutMenuButton)
}

module.exports = {
  onShowAllProducts,
  addHandlers
}
