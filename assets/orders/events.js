'use strict'

const getFormFields = require(`../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const addOrder = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.addAOrder(data)
    .then(ui.addOrderSuccess)
    .catch(ui.addOrderFailure)
}

const updateOrder = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.updateAQuantity(data)
    .then(ui.updateOrderSuccess)
    .catch(ui.updateOrderFailure)
}

const getAllOrders = function (event) {
  event.preventDefault()
  api.requestAllOrders()
    .then(ui.allOrdersSuccess)
    .catch(ui.allOrdersFailure)
}

const addHandlers = () => {
  $('').on('click', getAllOrders)
  $('').on('click', addOrder)
  $('').on('click', updateOrder)
}
module.exports = {
  addHandlers
}
