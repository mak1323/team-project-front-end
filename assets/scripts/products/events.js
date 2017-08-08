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
module.exports = {
  onShowAllProducts
}
