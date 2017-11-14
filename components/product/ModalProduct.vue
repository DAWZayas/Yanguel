<template>
  <div class="modal fade" :id="idKey" tabindex="-1" role="dialog" aria-labelledby="productModal" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="productModal">{{product.name}}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          Descripción: {{product.description}} <br>
          Precio: {{product.price}}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    data () {
      return {
        idKey: this.product.key
      }
    },
    name: 'modalProduct',
    props: ['product'],
    methods: {
      onRemove (ev) {
        ev.preventDefault()
        ev.stopPropagation()
        this.$emit('removeFromCart', this.product)
      }
    }
  }
</script>
<style lang="scss">
  @import "../../assets/styles/base/colors";
  @import "../../assets/styles/base/variables";
  @import "../../assets/styles/vendors/flex";
  @import "../../assets/styles/vendors/bootstrap/functions";
  @import "../../assets/styles/vendors/bootstrap/variables";
  @import "../../assets/styles/vendors/bootstrap/mixins";

.products {
    margin-top: 2em;
    margin-bottom: 2em;
    margin-right: 0.5em;
    border-radius: 0.5em;
    background-color: rgba(207, 203, 203, 0.62);
    overflow: hidden;
}


.products img {
    border-radius: 0.5em;
    width: 100%;
    margin-top: 0.2em;
}

.text {
    color: black;
    font-weight: bold;
    cursor: default;
}

.title {
    color: rgba(73, 71, 71, 0.81);
    text-align: center;
}

.prices {
    text-align: center;
    font-size: 0.8em;
    width: calc(20% + 5rem);
}

.price {
    color: #4B4B4B;
    font-size: 0.8em;
    float: right;
    text-decoration: line-through;
}
.button-div {
  text-align: center;
  clear: both;
}
.offer {
    margin-left: -1em;
    float: left;
    font-size: 1.3em;
}
@media (min-width: 500px) {

  .prices {
      margin-left: 3em;
  }

  .products:hover {
      transform: scale(1.02);
  }
}

</style>
