'use strict'
// const store = require('../store')

const showAllProductsSuccess = function (data) {
  console.log('show all products worked')
  console.table(data)
}
const showAllProductsFailure = function () {
  console.log('show all products failed')
}

module.exports = {
  showAllProductsSuccess,
  showAllProductsFailure
}
