<template>
  <el-form ref="form" :model="form" label-width="120px">
    <el-form-item label="Product">
      <el-input v-model="name"></el-input>
    </el-form-item>
    <el-form-item label="Description">
      <el-input type="textarea" v-model="description"></el-input>
    </el-form-item>
    <el-form-item label="Image url">
      <el-input v-model="url"></el-input>
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
        offer: '',
        stock: '',
        isCreating: false
      }
    },
    methods: {
      ...mapActions(['addProduct']),
      reset () {
        this.name = ''
        this.description = ''
        this.url = ''
        this.price = ''
        this.offer = ''
        this.stock = ''
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
        this.addProduct({
          name: this.name,
          description: this.description,
          src: this.url,
          price: this.price,
          offer: this.offer,
          stock: this.stock}).then(() => {
            this.reset()
            this.isCreating = false
          })
      }
    }
  }
</script>
<style lang="scss">

</style>
