'use strict'
// const store = require('../store')

const showAllProductsSuccess = function (data) {
  console.table(data)
}
const showAllProductsFailure = function () {
}

module.exports = {
  showAllProductsSuccess,
  showAllProductsFailure
}
