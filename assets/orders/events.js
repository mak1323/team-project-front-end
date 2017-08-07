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

const deleteOrder = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.deleteAOrder(data)
    .then(ui.deleteOrderSuccess)
    .catch(ui.deleteOrderFailure)
}

const updateQuantity = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.updateAQuantity(data)
    .then(ui.updateQuantitySuccess)
    .catch(ui.updateQuantityFailure)
}

const getAllOrders = function (event) {
  event.preventDefault()
  api.requestAllOrders()
    .then(ui.allOrdersSuccess)
    .catch(ui.allOrdersFailure)
}

const addHandlers = () => {
  $('').on('click', getAllOrders)
  $('').on('click', deleteOrder)
  $('').on('click', addOrder)
  $('').on('click', updateQuantity)
}
module.exports = {
  addHandlers
}
