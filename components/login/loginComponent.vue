<template>
  <div>
    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2">
      <el-form-item label="Email" prop="user2">
        <el-input v-model="ruleForm2.user2"></el-input>
      </el-form-item>
      <el-form-item label="Contraseña" prop="password2">
        <el-input type="password" v-model="ruleForm2.password2" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="loginForm">Login</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="loginFacebook">Login with Google</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      ruleForm2: {
        user2: '',
        password2: ''
      },
      rules2: {
        user2: [
          { required: true, message: 'Debe introducir un nombre', trigger: 'blur' },
          { min: 4, message: 'El usuario debe tener minimo 4 digitos', trigger: 'blur' }
        ],
        password2: [
          { vrequired: true, message: 'Debe introducir un nombre', trigger: 'blur' }
        ]
      }
    }
  },

  methods: {
    ...mapActions(['authenticate', 'authenticateWithGoogle']),
    loginForm (ev) {
      ev.preventDefault()
      ev.stopPropagation()
      this.authenticate({email: this.ruleForm2.user2, password: this.ruleForm2.password2})
      this.$router.push('/profile')
    },
    loginFacebook (ev) {
      ev.preventDefault()
      ev.stopPropagation()
      this.authenticateWithGoogle()
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


</style>
