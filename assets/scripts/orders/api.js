'use strict'

const config = require('./config')
const store = require('./store')

// order history
const showAllOrders = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/orders',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// this request is not a button on the front end. This is the api request that
// is automatically triggered when an order is submitted.
// this is the api call to handle when a product is added to the shoppingCart
const addOrder = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/orders',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// This is the api request that occurs when a product is added, removed, updated
// in the shoppingCart.
// This also fires when you submit an order, it sets the date the order was
// placed and it changes the isOpen value to false.
const updateOrder = function (order) {
  const data = order
  return $.ajax({
    url: config.apiOrigin + '/orders/' + order.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  showAllOrders,
  addOrder,
  updateOrder
}
