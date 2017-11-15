export default {
  addToCart (state, product) {
    const index = state.shoppingCart.findIndex(p => product.key === p.key)
    if (state.shoppingCart.find(p => product.key === p.key)) {
      state.shoppingCart[index].cuantity = parseInt(product.cuantity)
      state.products.find(p => product.key === p.key).stock = parseInt(state.products.find(p => product.key === p.key).maxStock) - parseInt(product.cuantity)
    } else {
      state.shoppingCart.push(product)
      state.products.find(p => product.key === p.key).inCart = true
      state.products.find(p => product.key === p.key).stock = parseInt(state.products.find(p => product.key === p.key).maxStock) - parseInt(product.cuantity)
    }
  },
  removeFromCart (state, product) {
    const index = state.shoppingCart.findIndex(p => product.key === p.key)
    state.products.find(p => product.key === p.key).stock = state.products.find(p => product.key === p.key).maxStock
    state.shoppingCart.splice(index, 1)
    state.products.find(p => product.key === p.key).inCart = false
  }

}
