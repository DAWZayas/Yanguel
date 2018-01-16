export default {
  getProducts: state => state.products,
  getShoppingCart: state => state.shoppingCart,
  getProduct: state => state.product,
  getLoading: state => loading => state.loading[loading],
  showSearchBar: state => state.showSearchBar
}
