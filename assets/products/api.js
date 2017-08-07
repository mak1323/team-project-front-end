'use strict'

const config = require('./config')
const store = require('./store')

const requestAllProducts = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/products',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// const deleteAProduct = function (data) {
//   return $.ajax({
//     url: config.apiOrigin + '/products/' + data.id,
//     method: 'DELETE',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }
//
// const addAProduct = function (data) {
//   return $.ajax({
//     url: config.apiOrigin + '/products',
//     method: 'POST',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//   })
// }
//
// const updateAProduct = function (product) {
//   const data = product
//   return $.ajax({
//     url: config.apiOrigin + '/products/' + product.id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//   })
// }
module.exports = {
  requestAllProducts,
  // deleteAProduct,
  // addAProduct,
  // updateAProduct
}
