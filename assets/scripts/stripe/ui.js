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
}

// on failed response
const onStripeAPIFail = (data) => {
  $('#UiFailure').text('Please try another credit card').fadeIn('fast').delay(3000).fadeOut('slow')
}

const onFinalizeOrderSuccess = function (data) {
  // response data will go here
  $('#UiFailure').text('Thank you for your order!').fadeIn('fast').delay(3000).fadeOut('slow')
}
const onFinalizeOrderFailure = function () {

}
const onCreateNewCartSuccess = function (data) {
  // response data will go here
  $('#UiFailure').text('Thank you for your order!').fadeIn('fast').delay(3000).fadeOut('slow')
  store.currentOrder = data
  store.cart = []
  console.log(data)
}

const onCreateNewCartFailure = function () {

}
const onUpdateExisitingCartSuccess = (data) => {
  console.log('onUpdateExisitingCartSuccess is working', data)
  console.log('store.cart is', store.cart)
  console.log('store.currentOrder is currently', store.currentOrder)
}
const onUpdateExisitingCartFailure = (data) => {
  console.log('onUpdateExisitingCartSuccess is not working', data)
  console.log('store.user.id', store.user.id)
}
module.exports = {
  onStripeAPISuccess,
  onStripeAPIFail,
  onFinalizeOrderSuccess,
  onFinalizeOrderFailure,
  onCreateNewCartSuccess,
  onCreateNewCartFailure,
  onUpdateExisitingCartSuccess,
  onUpdateExisitingCartFailure

}
