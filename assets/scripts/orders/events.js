'use strict'

const getFormFields = require(`../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onAddOrder = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.addAOrder(data)
    .then(ui.addOrderSuccess)
    .catch(ui.addOrderFailure)
}

const onUpdateOrder = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.updateAQuantity(data)
    .then(ui.updateOrderSuccess)
    .catch(ui.updateOrderFailure)
}

const onShowAllOrders = function (event) {
  event.preventDefault()
  api.requestAllOrders()
    .then(ui.allOrdersSuccess)
    .catch(ui.allOrdersFailure)
}

const addHandlers = () => {
  $('').on('click', onShowAllOrders)
  $('').on('click', onAddOrder)
  $('').on('click', onUpdateOrder)
}
module.exports = {
  addHandlers
}
