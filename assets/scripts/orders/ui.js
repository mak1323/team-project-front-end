'use strict'
// const showProductsTemplate = require('../templates/shoppingCart.handlebars')
// const store = require('../store')

// const showProductList = (data) => {
//   const showProductsHTML = showProductsTemplate({ products: data.products })
//   $('#shoppingCart').show()
//   $('#shoppingCart tbody').empty()
//   $('#shoppingCart tbody').append(showProductsHTML)
// $('#library').DataTable()
// }

const showAllOrdersSuccess = function (data) {
  // showProductList()
}
const showAllOrdersFailure = function () {
}

const addOrderSuccess = function () {

}
const addOrderFailure = function () {

}

const updateOrderSuccess = function (data) {
  console.log(data)
}
const updateOrderFailure = function () {

}

module.exports = {
  showAllOrdersSuccess,
  showAllOrdersFailure,
  addOrderSuccess,
  addOrderFailure,
  updateOrderSuccess,
  updateOrderFailure
}
