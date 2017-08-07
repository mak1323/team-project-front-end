'use strict'

const config = require('./config')
const store = require('./store')

const requestAllOrders = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/orders',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteAOrder = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/orders/' + data.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const addAOrder = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/orders',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateAOrder = function (order) {
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
  requestAllOrders,
  deleteAOrder,
  addAOrder,
  updateAOrder
}
