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
    <el-form-item label="Price">
      <el-input-number size = "medium" controls-position = "right" v-model="offer"></el-input-number>
    </el-form-item>
    <el-form-item label="Stock">
      <el-input-number size = "medium" controls-position = "right" v-model="stock"></el-input-number>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>
<script>

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
      onSubmit (ev) {
        ev.preventDefault()
        ev.stopPropagation()
        const product = {
          name: this.name,
          description: this.description,
          url: this.url,
          price: this.price,
          offer: this.offer,
          stock: this.stock
        }
        this.$emit('addProduct', product)
      }
    }
  }
</script>
<style lang="scss">

</style>
