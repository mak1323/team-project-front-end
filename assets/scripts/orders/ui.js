'use strict'
const showOrdersTemplate = require('../templates/orders.handlebars')

const showAllOrdersSuccess = function (data) {
  console.table(data)
  const showOrdersHTML = showOrdersTemplate({ orders: data.orders })
  $('.cartTable').show()
  $('#cartTable').DataTable()
  $('#cartTable tbody').empty()
  $('#cartTable tbody').append(showOrdersHTML)
  $('.landingPage').hide()
  // $('.addToCart').on('submit', onAddItemToOrder)
}
const showAllOrdersFailure = function () {
}

const addOrderSuccess = function () {

}
const addOrderFailure = function () {

}

const updateOrderSuccess = function (data) {

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
