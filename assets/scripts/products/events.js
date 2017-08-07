'use strict'
// const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

// show the product catalog on the landing page
const onShowAllProducts = function (event) {
  console.log('show all products function in events')
  event.preventDefault()
  api.showAllProducts()
    .then(ui.showAllProductsSuccess)
    .catch(ui.showAllProductsFailure)
}

const addHandlers = () => {
  $('#indexProducts').on('click', onShowAllProducts)
}

module.exports = {
  addHandlers
}
