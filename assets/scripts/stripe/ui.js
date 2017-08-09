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
  console.log('success', data)
  $('#UiFailure').text('Thank you for your order!').fadeIn('fast').delay(3000).fadeOut('slow')
  api.addOrder()

}

// on failed response
const onStripeAPIFail = (data) => {
  console.log('fail', data)
  $('#UiFailure').text('Please try another credit card').fadeIn('fast').delay(3000).fadeOut('slow')
}

module.exports = {
  onStripeAPISuccess,
  onStripeAPIFail
}
