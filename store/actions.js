
import firebaseApp from '~/firebaseapp'
import {firebaseAction} from 'vuexfire'

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
    if (state.shoppingCart.length === 1) {
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
    commit('removeShoppingCart')
  },
  buyShoppingCart ({commit, state}) {
    if (state.shoppingCart) {
      let updates = {}
      let newStock
      state.shoppingCart.forEach(product => {
        if (product.cuantity) {
          newStock = parseInt(product.stock) - parseInt(product.cuantity)
          updates['/products/' + product.key + '/stock'] = newStock
        }
      })
      firebaseApp.database().ref().update(updates)
    }
    commit('removeShoppingCart')
  },
  addProduct ({commit, state}, product) {
    if (!product) {
      return
    }
    let newProductKey = state.productsRef.push().key
    let updates = {}
    updates['/products/' + newProductKey] = product
    return firebaseApp.database().ref().update(updates)
  },
  modifyProduct ({commit, state}, product) {
    if (!product) {
      return
    }
    let updates = {}
    updates['/products/' + product.key] = product
    return firebaseApp.database().ref().update(updates)
  },
  bindProducts: firebaseAction(({commit, dispatch}) => {
    let db = firebaseApp.database()
    let productsRef = db.ref('/products')
    dispatch('bindFirebaseReference', {reference: productsRef, toBind: 'products'}).then(() => {
      commit('setProductsRef', productsRef)
    })
  }),
  bindFirebaseReference: firebaseAction(({bindFirebaseRef, state}, {reference, toBind}) => {
    return reference.once('value').then(snapshot => {
      if (!snapshot.val()) {
        let values = state[toBind]
        typeof values === 'object' && delete values['.key']
        reference.set(values)
      }
      bindFirebaseRef(toBind, reference)
    })
  }),
  /**
   * Undbinds firebase references
   */
  unbindFirebaseReferences: firebaseAction(({unbindFirebaseRef, commit}) => {
    commit('setConfigRef', null)
    commit('setStatisticsRef', null)
    commit('setWorkoutsRef', null)
    try {
      unbindFirebaseRef('config')
      unbindFirebaseRef('statistics')
      unbindFirebaseRef('workouts')
    } catch (error) {
      return
    }
  })
}
