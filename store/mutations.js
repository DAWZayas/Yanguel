export default {
  addToCart (state, product) {
    if (state.shoppingCart.find(p => product.key === p.key)) {
      return
    } else {
      state.shoppingCart.push(product)
      state.products.find(p => product.key === p.key).inCart = true
    }
  },
  removeFromCart (state, product) {
    const index = state.shoppingCart.findIndex(p => product.key === p.key)
    state.products.find(p => product.key === p.key).stock = state.products.find(p => product.key === p.key).maxStock
    state.shoppingCart.splice(index, 1)
    state.products.find(p => product.key === p.key).inCart = false
  },
  onValueChange (state, product) {
    state.products.find(p => product.key === p.key).stock = state.products.find(p => product.key === p.key).maxStock
    state.products.find(p => product.key === p.key).stock = parseInt(state.products.find(p => product.key === p.key).stock) - parseInt(product.cuantity)
  }

}
