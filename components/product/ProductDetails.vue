<template>
    <el-row>
      <el-row>
        <p class="text title">{{product.name}}</p>
      </el-row>
      <el-col :xs="24" :md="4">
        <img :src="product.src" class="img">
      </el-col>
      <el-col :xs="24" :md="20">
        <el-row>
           <el-col :xs="14">
            <p class="text">Precio unitario:</p>
          </el-col>
          <el-col :xs="10">
            <p v-if="product.offer" class="text">{{product.offer}} €</p>
            <p v-if="!product.offer" class="text">{{product.price}} €</p>
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="10"><p class = "text">Descripción:</p></el-col>
          <el-col :xs="14"><p> {{product.description}} </p></el-col>
        </el-row>
        <el-row>
          <el-dialog title="Product Editing" :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-form-item label="Product name">
                <el-input v-model="form.name" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="Stock">
                <el-input-number size = "small" controls-position = "right" v-model="form.stock" placeholder="Please set the stock"></el-input-number>
              </el-form-item>
              <el-form-item label="Price">
                <el-input-number size = "small" controls-position = "right" v-model="form.price" placeholder="Please select a price"></el-input-number>
              </el-form-item>
              <el-form-item label="Offer">
                <el-input-number size = "small" controls-position = "right" v-model="form.offer" placeholder="Please select the offer"></el-input-number>
              </el-form-item>
              <el-form-item label="Image">
                <el-input v-model="form.src" placeholder="Please select a img"></el-input>
              </el-form-item>
              <el-form-item label="Description">
                <el-input v-model="form.description" placeholder="Please set the product description"></el-input>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="onProductEdit">Confirm</el-button>
              <el-button @click="dialogFormVisible = false">Cancel</el-button>
            </span>
          </el-dialog>
        </el-row>
        <el-row>
          <el-col :xs="12">
            <el-button v-if="admin" type="text" @click="dialogFormVisible = true">Editar</el-button>
          </el-col>
          <el-col :xs="12">
            <el-button v-if="admin" type="text" @click="onRemove">Eliminar</el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    data () {
      return {
        cuantity: 0,
        admin: true,
        dialogFormVisible: false,
        form: {
          name: '',
          price: 0,
          offer: 0,
          src: '',
          description: '',
          stock: 0
        },
        editProduct: {
          key: this.product['.key']
        }
      }
    },
    name: 'productDetails',
    components: {
    },
    props: ['product'],
    methods: {
      ...mapActions(['modifyProduct', 'bindProduct', 'unbindProductReference']),
      reset () {
        this.form.name = ''
        this.form.description = ''
        this.form.src = ''
        this.form.price = 0
        this.form.offer = 0
        this.form.stock = 0
      },
      onCancel (ev) {
        ev.preventDefault()
        ev.stopPropagation()
        this.reset()
      },
      asignValues () {
        this.form.name !== '' ? this.editProduct.name = this.form.name : this.editProduct.name = this.product.name
        this.form.price > 0 ? this.editProduct.price = this.form.price : this.editProduct.price = this.product.price
        this.form.offer < this.form.price ? this.editProduct.offer = this.form.offer : this.editProduct.offer = 0
        this.form.src !== '' ? this.editProduct.src = this.form.src : this.editProduct.src = this.product.src
        this.form.description !== '' ? this.editProduct.description = this.form.description : this.editProduct.description = this.product.description
        this.form.stock > 0 ? this.editProduct.stock = this.form.stock : this.editProduct.stock = this.product.stock
      },
      onProductEdit (ev) {
        ev.preventDefault()
        ev.stopPropagation()
        this.asignValues()
        this.modifyProduct(this.editProduct)
        this.reset()
        this.dialogFormVisible = false
      },
      onRemove (ev) {
        ev.preventDefault()
        ev.stopPropagation()
        this.$emit('removeFromCart', this.shoppingCartProduct)
      }
    },
    destroy () {
      this.unbindProductReference()
      console.log(':D')
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

.img{
  width: 100%;
}
.marginRight{
  margin-right: 2em;
}
</style>
