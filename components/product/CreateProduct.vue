<template>
  <el-form ref="form" :model="form" label-width="120px">
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
  import {mapActions} from 'vuex'
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
    methods: {
      ...mapActions(['addProduct', 'uploadImages']),
      reset () {
        this.name = ''
        this.description = ''
        this.url = ''
        this.tags = []
        this.price = ''
        this.offer = ''
        this.stock = ''
        this.pictures = []
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
        this.uploadImages(this.pictures).then(urlPics =>
          this.addProduct({
            name: this.name,
            description: this.description,
            src: this.url,
            price: this.price,
            tags: this.tags,
            offer: this.offer,
            stock: this.stock,
            pictures: urlPics
          }).then(() => {
            this.reset()
            this.isCreating = false
            this.onSuccess()
          })
        )
      },
      onSuccess () {
        this.$message({
          message: 'Product added correctly.',
          type: 'success',
          center: true
        })
      }
    }
  }
</script>
<style lang="scss">

</style>
