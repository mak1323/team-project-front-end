'use strict'
const showOrdersTemplate = require('../templates/orders.handlebars')
const store = require('../store')

const showAllOrdersSuccess = function (data) {
  console.log(test)
  store.orders = data.orders
  console.log(store.orders)
  //filter through here
  const showOrdersHTML = showOrdersTemplate({ orders: store.orders })
  $('#previousOrderTable').append(showOrdersHTML)
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
