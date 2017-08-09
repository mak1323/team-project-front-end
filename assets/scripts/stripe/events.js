'use strict'
const api = require('./api')
const ui = require('./ui')

const handler = StripeCheckout.configure({
  key: 'pk_test_7fQwskkIwuWNEkWfcIyJZJKS',
  locale: 'auto'
})

window.addEventListener('popstate', function () {
  handler.close()
})

const handleToken = function (token) {
  // pull amount here
  token.amount = 999
  console.log(token)
  api.makeCharge(token)
  .then(ui.onStripeAPISuccess)
}

const shutUpAndPayTheMan = function (event) {
  handler.open({
    name: 'Fencer.com',
    description: 'Some really cool stuff!',
    token: handleToken
  // first, get a token from card on stripe api
  // Then send api and pay data to the stripe api, full payment
  // Wait for confirmation
  // Cool send confirmation data to mongodb
  // make a record of the purchase.
  // send confirmation
  // CATCHCATCHCATCH-drop token and warn the user.
  })
}

const addHandlers = () => {
  $('#buttonCheckout').on('click', shutUpAndPayTheMan)
}
module.exports = {
  addHandlers
}
