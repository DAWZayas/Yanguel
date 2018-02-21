<template>
  <el-form label-width="120px">
    <el-form-item label="Product">
      <el-input v-model="name"></el-input>
    </el-form-item>
    <el-form-item label="Description">
      <el-input type="textarea" v-model="description"></el-input>
    </el-form-item>
    <el-form-item label = 'Tags'>
      <el-select
        v-model="tags"
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
    <el-form-item label="Image url">
      <div class="image-upload">
          <label class="title" for="imageFile">Add an image</label>
          <input @change="filesChange($event.target.files)" type="file" multiple class="form-control-file" ref="imageFile">
      </div>
      <div
        v-for="(src, index) in imagesSrc" :key="index"
        class="img-preview col-6 col-md-2 p-0"
        :class="(index === defaultImg) && !uploading ? 'defaultImg' : null"
        :style="{ 'background-image': 'url(' + src + ')' }"
        @click="defaultImg = index"
      ></div>
    </el-form-item>
    <el-form-item label="Price">
      <el-input-number size = "medium" controls-position = "right" v-model="price"></el-input-number>
    </el-form-item>
    <el-form-item label="Offer">
      <el-input-number size = "medium" controls-position = "right" v-model="offer"></el-input-number>
    </el-form-item>
    <el-form-item label="Stock">
      <el-input-number size = "medium" controls-position = "right" v-model="stock"></el-input-number>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
      <el-button type="danger" @click="onCancel">Cancel</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  import {mapActions, mapState, mapGetters} from 'vuex'
  import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

  export default {
    data () {
      return {
        name: '',
        description: '',
        url: '',
        price: '',
        pictures: [],
        offer: '',
        stock: '',
        imagesSrc: [],
        isCreating: false,
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
        tags: []
      }
    },
    components: {
      ClipLoader
    },
    computed: {
      ...mapGetters({
        products: 'getProducts',
        user: 'getUser'
      })
    },
    methods: {
      ...mapActions(['addProduct', 'uploadImages', 'setLoading', 'bindProducts']),
      ...mapState(['loading']),
      reset () {
        this.name = ''
        this.description = ''
        this.url = ''
        this.tags = []
        this.price = ''
        this.offer = ''
        this.stock = ''
        this.$refs.imageFile.value = null
      },
      filesChange (files) {
        this.pictures = [...files]
      },
      onCancel (ev) {
        ev.preventDefault()
        ev.stopPropagation()
        this.reset()
      },
      onSubmit (ev) {
        this.isCreating = true
        ev.preventDefault()
        ev.stopPropagation()
        this.setLoading({creatingProduct: true})
        this.uploadImages(this.pictures).then(urlPics =>
          this.addProduct({
            name: this.name,
            description: this.description,
            price: this.price,
            tags: this.tags,
            offer: this.offer,
            stock: this.stock,
            userId: this.user.id,
            pictures: urlPics
          }).then(() => {
            this.reset()
            this.isCreating = false
            this.onSuccess()
          }).catch((err) => {
            this.setLoading({creatingProduct: false})
            this.reset()
            this.isCreating = false
            this.onError(err)
          })
        )
      },
      onSuccess () {
        this.$notify.success({
          title: 'Success',
          message: 'Product added correctly.',
          position: 'bottom-right'
        })
      },
      onError (err) {
        this.$notify.error({
          title: 'Something went wrong',
          message: err,
          position: 'bottom-right'
        })
      }
    },
    created () {
      if (!this.productsRef) {
        this.bindProducts()
      }
    }
  }
</script>
<style lang="scss">

</style>
