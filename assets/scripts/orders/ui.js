'use strict'
const showOrdersTemplate = require('../templates/orders.handlebars')
const store = require('../store')

const showAllOrdersSuccess = function (data) {
  console.table(data)
  store.orders = data.orders
  console.log(store.orders)
  const showOrdersHTML = showOrdersTemplate({ orders: store.orders })
  // $('.landingPage').hide()
  // $('#cartTable').show()
  // $('#previousOrderTable').hide()
  // $('#previousOrderTable').empty()
  $('#previousOrderTable').append(showOrdersHTML)
  // $('.addToCart').on('submit', onAddItemToOrder)
}
const showAllOrdersFailure = function () {
}

const addOrderSuccess = function () {

}
const addOrderFailure = function () {

}

const updateOrderSuccess = function (data) {
  console.log(data)
}
const updateOrderFailure = function () {

}

module.exports = {
  showAllOrdersSuccess,
  showAllOrdersFailure,
  addOrderSuccess,
  addOrderFailure,
  updateOrderSuccess,
  updateOrderFailure
}
