export default {
  /**
   * adds product to the shopping cart
   * @param {object} store
   * @param {object} product
   */
  addToCart ({commit, state}, product) {
    if (!product) {
      return
    }
    if (state.shoppingCart) {
      commit('addToCart', product)
    } else {
      commit('setShoppingCart', product)
    }
  },
   /**
   * remove product to the shopping cart
   * @param {object} store
   * @param {object} product
   */
  removeFromCart ({commit, state}, product) {
    if (!product) {
      return
    }
    if (state.shoppingCart.length === 1){
      commit('removeShoppingCart')
    } else {
      commit('removeFromCart', product)
    }
  },
  /**
   * change value from a product in the shopping cart
   * @param {object} store
   * @param {object} product
   */
  onValueChange ({commit, state}, product) {
    if (!product) {
      return
    }
    commit('onValueChange', product)
  },
  removeShoppingCart ({commit, state}) {
    if (state.shoppingCart) {
      while (state.shoppingCart.length !== 0) {
        state.shoppingCart.forEach(product => {
          console.log(product.key)
          return commit('removeFromCart', product)
        }
        )
      }
    }
    commit('removeShoppingCart')
  }
}
