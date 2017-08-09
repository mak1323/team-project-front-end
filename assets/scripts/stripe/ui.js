'use strict'

// on successful response of api.
const onStripeAPISuccess = (data) => {
  console.log('success', data)
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
