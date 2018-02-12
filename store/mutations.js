export default {
  setShoppingCart (state, product) {
    state.shoppingCart = []
    state.shoppingCart.push(product)
  },
  addToCart (state, product) {
    if (state.shoppingCart && state.shoppingCart.find(p => product.key === p.key)) {
      return
    } else {
      state.shoppingCart.push(product)
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
    state.shoppingCart.find(p => product.key === p.key).virtualStock = parseInt(state.products.find(p => product.key === p['.key']).stock) - parseInt(product.cuantity)
  },
  setProductStock (state, product) {
    state.products.find(p => product.key === p['.key']).stock = parseInt(state.products.find(p => product.key === p['.key']).stock) - parseInt(product.cuantity)
  },
  setProductsRef (state, value) {
    state.productsRef = value
  },
  setProductRef (state, value) {
    state.productRef = value
  },
  setAuthError (state, value) {
    state.authError = value
  },
  setIsAuthenticated (state, value) {
    state.isAuthenticated = value
  },
  setUid (state, value) {
    state.Uid = value
  },
  setUsersRef (state, value) {
    state.workoutsRef = value
  },
  saveUser (state, user) {
    state.user = {
      username: user.name,
      email: user.email,
      address: user.address
    }
  },
  setLoading (state, loading) {
    state.loading = {...state.loading, ...loading}
  },
  showSearchBar (state) {
    state.showSearchBar = !state.showSearchBar
  }

}
