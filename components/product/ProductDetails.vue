<template>
  <div>
    <clip-loader v-show="loading.editProduct"></clip-loader>
    <el-row v-show = "!loading.ed">
      <el-row>
        <p class="text title">{{product.name}}</p>
      </el-row>
      <el-col :xs="24" :md="4">
        <img :src="product.pictures[0]" class="img">
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
          <el-dialog title="Product Editing"
                     :visible.sync="dialogFormVisible"
          >
            <el-form :model="form">
              <el-form-item label="Product name">
                <el-input v-model="form.name" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label = 'Tags'>
                <el-select
                  v-model="form.tags"
                  multiple
                  filterable
                  allow-create
                  placeholder="Choose tags for your article">
                  <el-option
                    v-for="item in optionSelect"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
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
                <div class="image-upload">
                  <label class="title" for="imageFile">Add an image</label>
                  <input @change="filesChange($event.target.files)" type="file" multiple class="form-control-file" ref="imageFile">
                </div>
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
  </div>
</template>

<script>
  import {mapActions, mapState} from 'vuex'
  import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

  export default {
    data () {
      return {
        cuantity: 0,
        admin: true,
        editing: false,
        dialogFormVisible: false,
        form: {
          name: '',
          price: 0,
          offer: 0,
          src: '',
          tags: [],
          description: '',
          pictures: [],
          stock: 0
        },
        optionSelect: [{
          value: 'Electronica',
          label: 'Electronica'
        }, {
          value: 'Informatica',
          label: 'Informatica'
        }, {
          value: 'Otros',
          label: 'Otros'
        }],
        editProduct: {
          '.key': this.product['.key']
        }

      }
    },
    name: 'productDetails',
    components: {
      ClipLoader
    },
    props: ['product'],
    methods: {
      ...mapActions(['modifyProduct', 'removeProduct', 'unbindProductReference', 'uploadImages', 'bindProduct']),
      ...mapState(['loading']),
      reset () {
        this.form.name = ''
        this.form.description = ''
        this.form.pictures = ''
        this.form.tags = []
        this.form.price = 0
        this.form.offer = 0
        this.form.stock = 0
        this.$refs.imageFile.value = null
      },
      onCancel (ev) {
        ev.preventDefault()
        ev.stopPropagation()
        this.reset()
      },
      filesChange (files) {
        this.form.pictures = [...files]
      },
      asignValues () {
        this.form.name !== '' ? this.editProduct.name = this.form.name : this.editProduct.name = this.product.name
        this.form.price > 0 ? this.editProduct.price = this.form.price : this.editProduct.price = this.product.price
        this.form.offer > this.form.price ? this.editProduct.offer = this.form.offer : this.editProduct.offer = 0
        this.form.tags !== [] ? this.editProduct.tags = this.form.tags : this.editProduct.tags = this.product.tags
        this.form.description !== '' ? this.editProduct.description = this.form.description : this.editProduct.description = this.product.description
        this.form.stock > 0 ? this.editProduct.stock = this.form.stock : this.editProduct.stock = this.product.stock
      },
      onProductEdit (ev) {
        ev.preventDefault()
        ev.stopPropagation()
        this.asignValues()
        this.editing = true
        this.uploadImages(this.form.pictures).then(urlPics => {
          this.editProduct.pictures = this.form.pictures.length !== 0 ? urlPics : this.product.pictures
          this.modifyProduct(this.editProduct)
          console.log(this.editProduct)
        }).then(() => {
          this.editing = false
          this.onSuccessEdit()
          this.dialogFormVisible = false
          this.reset()
        }).catch(err => {
          this.editing = false
          this.onError(err)
          this.dialogFormVisible = false
          this.reset()
        })
      },
      onRemove (ev) {
        ev.preventDefault()
        ev.stopPropagation()
        this.removeProduct(this.product).then(() => {
          this.onSuccessDelete()
          this.$router.push('/')
        }).catch((err) => {
          this.onError(err)
        })
      },
      onSuccessEdit () {
        this.$notify.success({
          title: 'Success',
          message: 'Product edited correctly.',
          position: 'bottom-right'
        })
      },
      onSuccessDelete () {
        this.$notify.success({
          title: 'Success',
          message: 'Product removed correctly.',
          position: 'bottom-right'
        })
      },
      onError (err) {
        this.$notify.error({
          title: 'Oops! Something went wrong!',
          message: err,
          position: 'bottom-right'
        })
      }
    },
    created () {
      console.log(this.product)
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
