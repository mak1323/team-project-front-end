'use strict'

const getFormFields = require(`../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const addProduct = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.addAProduct(data)
    .then(ui.addProductSuccess)
    .catch(ui.addProductFailure)
}

const deleteProduct = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.deleteAProduct(data)
    .then(ui.deleteProductSuccess)
    .catch(ui.deleteProductFailure)
}

// const updateQuantity = function (event) {
//   event.preventDefault()
//   const data = getFormFields(this)
//   api.updateARating(data)
//     .then(ui.updateRatingSuccess)
//     .catch(ui.updateRatingFailure)
// }

const getAllProducts = function (event) {
  event.preventDefault()
  api.requestAllProducts()
    .then(ui.allProductsSuccess)
    .catch(ui.allProductsFailure)
}

const addHandlers = () => {
  $('').on('click', getAllProducts)
  $('').on('click', deleteProduct)
  $('').on('click', addProduct)
}
module.exports = {
  addHandlers
}
