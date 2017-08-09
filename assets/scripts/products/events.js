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
  $('.cartTable').hide()
}

const onShoppingCartMenuButton = () => {
  $('.landingPage').hide()
  $('.cartTable').show()
}

const addHandlers = () => {
  $('#returnToProducts').on('click', onProductsMenuButton)
  $('#shoppingCartButton').on('click', onShoppingCartMenuButton)
}

module.exports = {
  onShowAllProducts,
  addHandlers
}
