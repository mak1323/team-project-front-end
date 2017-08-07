'use strict'
// const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onShowAllProducts = function (event) {
  event.preventDefault()
  api.showAllProducts()
    .then(ui.showAllProductsSuccess)
    .catch(ui.showAllProductsFailure)
}

// const onRemoveProduct = function (event) {
//   event.preventDefault()
//   const data = getFormFields(this)
//   api.updateAQuantity(data)
//     .then(ui.updateOrderSuccess)
//     .catch(ui.updateOrderFailure)
// }

const addHandlers = () => {
  $('#indexProducts').on('click', onShowAllProducts)
}

module.exports = {
  addHandlers
}
