'use strict'

// const store = require('../store')
// const cart = require('../cart')

const showProductsTemplate = require('../templates/products.handlebars')
const showCartTemplate = require('../templates/cart.handlebars')
// const orderApi = require('../orders/api')

// This variable represents the array of products that will be patched into the
// active order.
let cart = []
let productData
// When a user adds an item to an order, this will pass the item's id and the
// quanity value the user entered into an array and pushes it to the shopping
// cart array.
const onAddItemToCartArray = function (event) {
  event.preventDefault()
  const item = $(this).closest('form').find("input[name='id']").val()
  cart.push(item)
  console.log(cart)
}

const removeFromCartArray = function (event) {
  const newCart = cart.filter(function (item) {
    if (item !== $(event.target).data('id')) {
      return item
    }
  })
  cart = newCart
  pushItemsToCart()
}

const pushItemsToCart = function () {
  console.log(productData.products)
  const filteredData = productData.products.filter(function (item) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i] === item.id) {
        return item
      }
    }
  })
  console.log(filteredData)
  const showCartHTML = showCartTemplate({ products: filteredData })
  $('.cartTable tbody').empty()
  $('.cartTable tbody').append(showCartHTML)
  $('.removeFromCart').on('click', removeFromCartArray)
}

// const getCartId = function (item) {
//   if (item.isOpen === true) {
//     cartID = item.id
//   }
// }

// const updateCart = function (data) {
//   const orders = data.orders
//   orders.forEach(getCartId)
//   console.log(cartID)
//   $('#updateCart-id').val(cartID)
//   $('#updateCart-userid').val(store.user.id)
//   console.log(store.user.id)
//   $('#updateCart').submit()
// }

const showAllProductsSuccess = function (data) {
  const showProductsHTML = showProductsTemplate({ products: data.products })
  $('#productTable').show()
  $('#productTable tbody').empty()
  $('#productTable tbody').append(showProductsHTML)
  $('.addToCart').on('submit', onAddItemToCartArray)
  productData = data
  $('#shoppingCartButton').on('click', pushItemsToCart)
}

const showAllProductsFailure = function () {
  // $('#UiFailure').text('something went wrong')
}

module.exports = {
  showAllProductsSuccess,
  showAllProductsFailure
}
