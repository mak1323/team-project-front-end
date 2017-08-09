'use strict'
const api = require('./api')

// on successful response of api.
const onStripeAPISuccess = (data) => {
  console.log('success', data)
  $('.#UiFailure').text('Thank you for your order!').fadeIn('fast').delay(3000).fadeOut('slow')
  api.addOrder()
}

// on failed response
const onStripeAPIFail = (data) => {
  console.log('fail', data)
  $('.#UiFailure').text('Please try another credit card').fadeIn('fast').delay(3000).fadeOut('slow')
}

module.exports = {
  onStripeAPISuccess,
  onStripeAPIFail
}
