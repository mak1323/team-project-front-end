'use strict'
'use strict'
const showProductsTemplate = require('../templates/shoppingCart.handlebars')
const store = require('./store')

const showProductList = (data) => {
  const showProductsHTML = showProductsTemplate({ products: data.products })
  $('#shoppingCart').show()
  $('#shoppingCart tbody').empty()
  $('#shoppingCart tbody').append(showProductsHTML)
  // $('#library').DataTable()
}
const showAllOrdersSuccess = function () {
  showProductList()
  console.log('show all orders')
}
const showAllOrdersFailure = function () {
  console.log('show all orders failed')
}

const addOrderSuccess = function () {

}
const addOrderFailure = function () {

}

const updateOrderSuccess = function () {

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
