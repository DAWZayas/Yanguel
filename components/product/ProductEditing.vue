<template>
  <el-row>
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
      <span>
              <el-button type="primary" @click="onProductEdit">Confirm</el-button>
              <el-button @click = "onCancel">Cancel</el-button>
      </span>
  </el-row>
</template>

<script>
  import {mapActions, mapState} from 'vuex'
  export default {
    name: 'product-editing',
    props: ['product'],
    data () {
      return {
        form: {
          name: '',
          stock: '',
          price: '',
          offer: '',
          tags: [],
          pictures: [],
          description: ''
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
          '.key': this.product['.key'],
          'userId': this.product.userId
        }
      }
    },
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
        this.goTo()
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
        }).then(() => {
          this.editing = false
          this.onSuccessEdit()
          this.dialogFormVisible = false
          this.reset()
          this.goTo()
        }).catch(err => {
          this.editing = false
          console.log(err)
          this.onError(err)
          this.dialogFormVisible = false
          this.reset()
        })
      },
      onSuccessEdit () {
        this.$notify.success({
          title: 'Success',
          message: 'Product edited correctly.',
          position: 'bottom-right'
        })
      },
      onError (err) {
        this.$notify.error({
          title: 'Oops! Something went wrong!',
          message: err,
          position: 'bottom-right'
        })
      },
      goTo () {
        this.$router.push('/products/' + this.product['.key'])
      }
    }
  }

</script>

<style scoped>

</style>
