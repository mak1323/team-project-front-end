'use strict'

const getFormFields = require(`../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onShowAllProducts = function (event) {
  event.preventDefault()
  api.requestAllProducts()
    .then(ui.allProductsSuccess)
    .catch(ui.allProductsFailure)
}

const addHandlers = () => {
  $('').on('click', onShowAllProducts)
}

module.exports = {
  addHandlers
}
