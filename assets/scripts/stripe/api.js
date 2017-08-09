'use strict'

const config = require('../config')
const store = require('../store.js')

const makeCharge = function (data) {
  return $.ajax({
    // this hits our api, not the Stripe api
    // Stripe api is hit through our api
    url: config.apiOrigin + '/charges',
    method: 'POST',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    // data is the token. Call it data here to avoid confusion with the
    // store.user.token
    data: data
  })
}

module.exports = {
  makeCharge
}
