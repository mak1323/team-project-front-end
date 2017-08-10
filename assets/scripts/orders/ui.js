'use strict'
const showOrdersTemplate = require('../templates/orders.handlebars')

const showAllOrdersSuccess = function (data) {
  console.table(data)
  const showOrdersHTML = showOrdersTemplate({ orders: data.cart })
  $('.landingPage').hide()
  $('#cartTable').show()
  $('#previousOrderTable').show()
  // $('#previousOrderTable').empty()
  // $('#previousOrderTable').append(showOrdersHTML)
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
