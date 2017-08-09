'use strict'
const store = require('../store')
// on successful response of api.
const onStripeAPISuccess = (data) => {
  store.proofOfSale = {
    'id': data.id,
    'amount': data.amount / 100,
    'currency': data.currency,
    'status': data.status
  }
  // response data will go here
}

// on failed response
const onStripeAPIFail = (data) => {
  console.log('fail', data)
  // response data will go here
}

module.exports = {
  onStripeAPISuccess,
  onStripeAPIFail
}
