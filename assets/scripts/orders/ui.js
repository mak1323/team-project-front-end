'use strict'
const showOrdersTemplate = require('../templates/orders.handlebars')
const store = require('../store')

const orderHistoryHandlebarsArrayDeluxe = []
// refines the past order data

const cleanRyansFunction = function (order) {
  if (order.isOpen === false) {
    for (let i = 0; i < store.products.length; i++) {
      for (let j = 0; j < order.products.length; j++) {
        if (store.products[i].id === order.products[j].product_id) {
          order.products[j].name = store.products[i].name
        }
      }
    }
    const pojo = {
      date_placed: order.date_placed.split('T')[0],
      products: order.products,
      total: order.salesProof.amount
    }
    orderHistoryHandlebarsArrayDeluxe.push(pojo)
  } else {
    store.currentOrder = order
  }
}

const showAllOrdersSuccess = function (data) {
  store.orders = data.orders

  console.log('store.orders show ', store.orders)
  store.orders.forEach(cleanRyansFunction)

  const showOrdersHTML = showOrdersTemplate({ orders: orderHistoryHandlebarsArrayDeluxe })
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
