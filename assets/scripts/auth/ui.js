'use strict'

const store = require('../store')
// if we use handlebars replace x with filename

const signUpSuccess = (data) => {
  $('#signUpModal').modal('hide')
  $('.text-field-signup').val('')
  // $('#sign-in').submit()
}

const signUpFailure = () => {
  $('.sign-up-error-msg').text('Oops! Something went wrong! Please check required fields and try again!').fadeIn('fast').delay(3000).fadeOut('slow')
}

const signInSuccess = (data) => {
  store.user = data.user
  $('.logged-out').hide()
  $('.logged-in').show()
  $('.greeting').text('welcome back, ' + data.user.email)
}

const signInFailure = () => {
  $('.sign-in-error-msg').text('Oops! Something went wrong! Please check your username and password and try again!').fadeIn('fast').delay(3000).fadeOut('slow')
}

const changePasswordSuccess = (data) => {
  $('#changePwModal').modal('hide')
}

const changePasswordFailure = () => {
  $('.change-pw-error-msg').text('The password you entered is incorrect! Please try again.').fadeIn('fast').delay(3000).fadeOut('slow')
}

const signOutSuccess = (data) => {
  $('.logged-in').hide()
  $('.logged-out').show()
}

const signOutFailure = () => {
}

const onCreateNewCartSuccess = function (data) {
  console.log(data)
  // response data will go here
  console.log('success', data)
  $('#UiFailure').text('Thank you for your order!').fadeIn('fast').delay(3000).fadeOut('slow')
}

const onCreateNewCartFailure = function () {

}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  onCreateNewCartSuccess,
  onCreateNewCartFailure
}
