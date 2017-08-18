'use strict'
const showOrdersTemplate = require('../templates/orders.handlebars')
const store = require('../store')

const showAllOrdersSuccess = function (data) {
  console.table(data)
  store.orders = data.orders
  const hbsArr = []

  store.orders.forEach(function (order) {
    if (order.isOpen === false) {

      const pojo = {
        date_placed: order.date_placed.split('T')[0],
        products: order.products,
        total: order.salesProof.amount
      }

      hbsArr.push(pojo)
    } else {
      store.currentOrder = order
    }
  })
  console.log('This is the handlebars stuff', hbsArr)
  // a function saves current open order to store.openorder

  // a function that takes the data we want from past orders and puts into new array

  // store.orders.forEach(
  //  {}

  const showOrdersHTML = showOrdersTemplate({ orders: hbsArr })
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
