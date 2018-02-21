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
          <el-col :xs="12">
            <el-button v-if="user && user.admin && product.userId === user.id" type="text" @click="goTo">Editar</el-button>
          </el-col>
          <el-col :xs="12">
            <el-button v-if="user && user.admin && product.userId === user.id" type="text" @click="onRemove">Eliminar</el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {mapActions, mapState, mapGetters} from 'vuex'
  import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
  import ProductEditing from './ProductEditing'

  export default {
    data () {
      return {
        cuantity: 0,
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
      ProductEditing,
      ClipLoader
    },
    computed: {
      ...mapGetters({
        products: 'getProducts',
        user: 'getUser'
      })
    },
    props: ['product'],
    methods: {
      ...mapActions(['modifyProduct', 'removeProduct', 'unbindProductReference', 'uploadImages', 'bindProduct']),
      ...mapState(['loading']),
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
      },
      goTo () {
        this.$router.push('/edit/' + this.product['.key'])
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
