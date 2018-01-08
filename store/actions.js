
import firebase from 'firebase'
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
    return firebaseApp.database().ref('/products/' + newProductKey).update(product)
  },
  modifyProduct ({commit, state}, product) {
    if (!product) {
      return
    }
    const updateProduct = {
      name: product.name,
      src: product.src,
      stock: product.stock,
      offer: product.offer,
      description: product.description,
      price: product.price
    }
    const reference = '/products/' + product['.key']
    console.log(reference)
    return firebaseApp.database().ref(reference).update(updateProduct)
  },
  removeProduct ({commit, state}, product) {
    if (!product) {
      return
    }
    const reference = '/products/' + product['.key']
    return firebaseApp.database().ref(reference).remove()
  },
  authenticate ({state, commit}, {email, password}) {
    firebaseApp.auth().signInWithEmailAndPassword(email, password).then(() => {
      commit('setAuthError', '')
    }).catch(err => {
      commit('setAuthError', err.message)
    })
  },
  authenticateWithGoogle ({state, commit}) {
    firebaseApp.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
    firebaseApp.auth().getRedirectResult().then(() => {
      commit('setAuthError', '')
    }).catch(err => {
      commit('setAuthError', err.message)
    })
  },
  createUser ({state, commit}, {email, password}) {
    firebaseApp.auth().createUserWithEmailAndPassword(email, password).then(() => {
      commit('setAuthError', '')
    }).catch(err => {
      commit('setAuthError', err.message)
    })
  },
  bindProducts: firebaseAction(({commit, dispatch}) => {
    let db = firebaseApp.database()
    let productsRef = db.ref('/products')
    dispatch('bindFirebaseReference', {reference: productsRef, toBind: 'products'}).then(() => {
      commit('setProductsRef', productsRef)
    })
  }),
  bindProduct: firebaseAction(({commit, dispatch}, product) => {
    let db = firebaseApp.database()
    let productRef = db.ref('/products/' + product['.key'])
    dispatch('bindFirebaseReference', {reference: productRef, toBind: 'product'}).then(() => {
      commit('setProductRef', productRef)
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
  unbindProductReference: firebaseAction(({unbindFirebaseRef, commit}) => {
    commit('setProductRef', null)
    try {
      unbindFirebaseRef('product')
    } catch (error) {
      return
    }
  }),
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
