'use strict'

const config = require('./config')
const store = require('./store')

const requestAllProducts = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/products',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  requestAllProducts,

}
