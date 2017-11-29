<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
      <el-form-item label="Email" prop="user">
        <el-input v-model="ruleForm.user"></el-input>
      </el-form-item>
      <el-form-item label="Contraseña" prop="password">
        <el-input type="password" v-model="ruleForm.password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="Repetir Contraseña" prop="repeatPassword">
        <el-input type="password" v-model="ruleForm.repeatPassword" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">Registrarse</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Debe introducir una contraseña'))
      } else if (value.length < 8) {
        callback(new Error('La contraseña debe tener mas de 8 caracteres'))
      } else {
        if (this.ruleForm.repeatPassword !== '') {
          this.$refs.ruleForm.validateField('repeatPassword')
        }
        callback()
      }
    }

    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Debe introducir la misma contraseña'))
      } else if (value !== this.ruleForm.password) {
        callback(new Error('Las dos contraseñas no coinciden'))
      } else {
        callback()
      }
    }

    return {
      ruleForm: {
        user: '',
        password: '',
        repeatPassword: ''
      },
      rules: {
        user: [
          { required: true, message: 'Debe introducir un nombre', trigger: 'blur' },
          { min: 4, message: 'El usuario debe tener minimo 4 digitos', trigger: 'blur' }
        ],
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        repeatPassword: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },

  methods: {
    ...mapActions(['createUser']),
    submitForm (ev) {
      ev.preventDefault()
      ev.stopPropagation()
      let method = this.createUser
      method({email: this.ruleForm.user, password: this.ruleForm.password})
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
