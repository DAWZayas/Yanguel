
import firebase from 'firebase'
import firebaseApp from '~/firebaseapp'
import {firebaseAction} from 'vuexfire'
import uuidv1 from 'uuid/v1'

function _uploadImage (file) {
  console.log('File ----->', file)
  let ref = firebaseApp.storage().ref().child('products')
  return ref.child(uuidv1()).child(file.name).put(file).then(snapshot => {
    return snapshot.downloadURL
  })
}

export default {
  _uploadImage,
  uploadImages ({state}, files) {
    return Promise.all(files.map(_uploadImage))
  },
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
      commit('setLoading', {buyCart: true})
      firebaseApp.database().ref().update(updates).then(() => {
        commit('setLoading', {buyCart: false})
      })
    }
    commit('removeShoppingCart')
  },
  addProduct ({commit, state}, product) {
    if (!product) {
      return
    }
    let newProductKey = state.productsRef.push().key
    return firebaseApp.database().ref('/products/' + newProductKey).update(product).then(() => {
      commit('setLoading', {creatingProduct: false})
    })
  },
  modifyProduct ({commit, state}, product) {
    if (!product) {
      return
    }
    const updateProduct = {
      name: product.name,
      pictures: product.pictures,
      stock: product.stock,
      offer: product.offer,
      description: product.description,
      price: product.price,
      userId: product.userId
    }
    const reference = '/products/' + product['.key']
    return firebaseApp.database().ref(reference).update(updateProduct)
  },
  removeProduct ({commit, state}, product) {
    if (!product) {
      return
    }
    const reference = '/products/' + product['.key']
    return firebaseApp.database().ref(reference).remove()
  },
  showSearchBar ({commit}) {
    commit('showSearchBar')
  },
  authenticate ({state, commit, dispatch}, {email, password}) {
    firebaseApp.auth().signInWithEmailAndPassword(email, password).then(() => {
      console.log(firebase.auth().currentUser.uid)
      dispatch('setUser', firebase.auth().currentUser.uid)
    }).catch(err => {
      commit('setAuthError', err.message)
    })
  },
  setUser ({state, commit, dispatch}, uid) {
    dispatch('bindUser', uid)
  },
  authenticateWithGoogle ({state, commit}) {
    firebaseApp.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
    firebaseApp.auth().getRedirectResult().then(() => {
      commit('setAuthError', '')
      commit('setIsAuthenticated', 'true')
    }).catch(err => {
      commit('setAuthError', err.message)
    })
  },
  createUser ({state, commit, dispatch}, user) {
    firebaseApp.auth().createUserWithEmailAndPassword(user.email, user.password).then(() => {
      commit('setAuthError', '')
      commit('setIsAuthenticated', 'true')
    }).then(() => {
      dispatch('saveUser', {name: user.name, address: user.address, email: user.email})
    }).then(() => {
      commit('saveUser', {name: user.name, address: user.address, email: user.email})
    }).catch(err => {
      commit('setAuthError', err.message)
    })
  },
  saveUser ({commit, state, dispatch}, user) {
    //  let newUsersKey = uuidv1()
    let newUsersKey = firebase.auth().currentUser.uid
    user = {id: newUsersKey, money: 5000, admin: false, ...user}
    commit('setUid', newUsersKey)
    return firebaseApp.database().ref('/users/' + newUsersKey).update(user)
  },
  bindUser: firebaseAction(({commit, dispatch}, uid) => {
    let db = firebaseApp.database()
    let userRef = db.ref('/users/' + uid)
    dispatch('bindFirebaseReference', {reference: userRef, toBind: 'user'}).then(() => {
      commit('setUserRef', userRef)
    })
  }),
  bindUsers: firebaseAction(({commit, dispatch}) => {
    let db = firebaseApp.database()
    let usersRef = db.ref('/users')
    dispatch('bindFirebaseReference', {reference: usersRef, toBind: 'users'}).then(() => {
      commit('setUsersRef', usersRef)
    })
  }),
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
  }),
  setLoading ({commit}, loading) {
    commit('setLoading', loading)
  }
}
