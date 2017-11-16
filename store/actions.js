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
    commit('addToCart', product)
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
    commit('removeFromCart', product)
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
  }
}
