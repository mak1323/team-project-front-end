'use strict'

const config = require('../config')
const store = require('../store.js')

const makeCharge = function (data) {
  console.log('makeCharge api')
  return $.ajax({
    url: config.apiOrigin + '/charges',
    method: 'POST',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  makeCharge
}
