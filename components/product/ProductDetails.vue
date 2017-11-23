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
              <el-form-item label="Promotion name" :label-width="formLabelWidth">
                <el-input v-model="form.name" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="Zones" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="Please select a zone">
                  <el-option label="Zone No.1" value="shanghai"></el-option>
                  <el-option label="Zone No.2" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">Cancel</el-button>
              <el-button type="primary" @click="dialogFormVisible = false">Confirm</el-button>
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
  export default {
    data () {
      return {
        cuantity: 0,
        admin: true,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    name: 'productDetails',
    components: {
    },
    props: ['product'],
    methods: {
      onValueChange (ev) {
        ev.preventDefault()
        ev.stopPropagation()
        this.shoppingCartProduct.cuantity = parseInt(this.cuantity)
        this.shoppingCartProduct.cuantity !== 0 ? this.$emit('onValueChange', this.shoppingCartProduct) : this.$emit('removeFromCart', this.shoppingCartProduct)
        this.cuantity = 0
      },
      onRemove (ev) {
        ev.preventDefault()
        ev.stopPropagation()
        this.$emit('removeFromCart', this.shoppingCartProduct)
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

.img{
  width: 100%;
}
.marginRight{
  margin-right: 2em;
}
</style>
