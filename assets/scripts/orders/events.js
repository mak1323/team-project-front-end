'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

// creates your shopping cart, this will always be automatic
const onAddOrder = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.addOrder(data)
    .then(ui.addOrderSuccess)
    .catch(ui.addOrderFailure)
}

// add, remove to/from shopping cart
// or change quantity of a product in the shopping cart
const onUpdateOrder = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.updateQuantity(data)
    .then(ui.updateOrderSuccess)
    .catch(ui.updateOrderFailure)
}

// shows order history and index of orders (all orders associated with user
// that are closed )
// when you click shopping cart this shows order history and index of orders
// (all orders associated with user that are open)
const onShowAllOrders = function (event) {
  event.preventDefault()
  api.showAllOrders()
    .then(ui.allOrdersSuccess)
    .catch(ui.allOrdersFailure)
}

const addHandlers = () => {
  $('orderHistoryButton').on('click', onShowAllOrders)
  $('shoppingCartButton').on('click', onShowAllOrders)
  $('').on('click', onAddOrder)
  $('').on('click', onUpdateOrder)
}
module.exports = {
  addHandlers
}
