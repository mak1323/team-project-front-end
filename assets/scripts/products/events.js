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
  $('.landingPage').show()
  $('.cartTable').hide()
  $('#previousOrderList').hide()
}
const onOrderHistoryButton = () => {
  $('.landingPage').hide()
  $('.cartTable').hide()
  $('#previousOrderList').show()
}
const onShoppingCartMenuButton = () => {
  $('.landingPage').hide()
  $('.cartTable').show()
  $('#previousOrderList').hide()
}

const addHandlers = () => {
  $('#returnToProducts').on('click', onProductsMenuButton)
  $('#shoppingCartButton').on('click', onShoppingCartMenuButton)
  $('#orderHistoryButton').on('click', onOrderHistoryButton)
}

module.exports = {
  onShowAllProducts,
  addHandlers
}
