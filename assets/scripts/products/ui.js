'use strict'
// const store = require('../store')

const showAllProductsSuccess = function (data) {
  console.log('show all products worked')
}
const showAllProductsFailure = function () {
  console.log('show all products failed')
}

module.export = {
  showAllProductsSuccess,
  showAllProductsFailure
}
