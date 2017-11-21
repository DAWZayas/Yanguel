export default {
  setShoppingCart (state, product) {
    state.shoppingCart = []
    state.shoppingCart.push(product)
    state.products.find(p => product.key === p.key).inCart = true
  },
  addToCart (state, product) {
    if (state.shoppingCart && state.shoppingCart.find(p => product.key === p.key)) {
      return
    } else {
      state.shoppingCart.push(product)
      state.products.find(p => product.key === p.key).inCart = true
    }
  },
  removeFromCart (state, product) {
    const index = state.shoppingCart.findIndex(p => product.key === p.key)
    state.shoppingCart.splice(index, 1)
    state.products.find(p => product.key === p.key).inCart = false
  },
  removeShoppingCart (state) {
    state.shoppingCart = null
  },
  onValueChange (state, product) {
    state.shoppingCart.find(p => product.key === p.key).virtualStock = parseInt(state.products.find(p => product.key === p.key).stock) - parseInt(product.cuantity)
  },
  setProductStock (state, product) {
    state.product.find(p => product.key === p.key).stock = parseInt(state.product.find(p => product.key === p.key).stock) - parseInt(product.cuantity)
  }

}
