export default {
  setShoppingCart (state, product) {
    state.shoppingCart = []
    state.shoppingCart.push(product)
    state.shoppingCart.find(p => product.key === p.key).inCart = true
  },
  addToCart (state, product) {
    if (state.shoppingCart && state.shoppingCart.find(p => product.key === p.key)) {
      return
    } else {
      state.shoppingCart.push(product)
      state.shoppingCart.find(p => product.key === p.key).inCart = true
    }
  },
  removeFromCart (state, product) {
    const index = state.shoppingCart.findIndex(p => product.key === p.key)
    state.shoppingCart.splice(index, 1)
  },
  removeShoppingCart (state) {
    state.shoppingCart = null
  },
  onValueChange (state, product) {
    state.shoppingCart.find(p => product.key === p.key).virtualStock = parseInt(state.products.find(p => product.key === p.key).stock) - parseInt(product.cuantity)
  },
  setProductStock (state, product) {
    state.products.find(p => product.key === p.key).stock = parseInt(state.products.find(p => product.key === p.key).stock) - parseInt(product.cuantity)
  },
  setProductsRef (state, value) {
    state.productsRef = value
  }

}
