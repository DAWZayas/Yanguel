export default {
  addToCart (state, product) {
    if (state.shoppingCart.find(p => product.key === p.key)) {
      state.shoppingCart[state.shoppingCart.findIndex(p => product.key === p.key)].cuantity = product.cuantity
      state.products.find(p => product.key === p.key).stock -= product.cuantity
    } else {
      state.shoppingCart.push(product)
      state.products.find(p => product.key === p.key).inCart = true
      state.products.find(p => product.key === p.key).stock -= product.cuantity
    }
  },
  removeFromCart (state, product) {
    const index = state.shoppingCart.findIndex(p => product.key === p.key)
    state.products.find(p => product.key === p.key).stock += state.shoppingCart[index].cuantity
    state.shoppingCart.splice(index, 1)
    state.products.find(p => product.key === p.key).inCart = false
  }

}
