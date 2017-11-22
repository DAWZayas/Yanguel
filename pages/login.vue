<template>
  <div>
    <header-component></header-component>
    <div class="row">
      <div class="col fill"></div>
      <div class="col">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" style="padding-top: 8em;">
          <el-menu-item index="1">Login</el-menu-item>
          <el-menu-item index="2">Register</el-menu-item>
        </el-menu>
        <div v-if="login">
          <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2">
            <el-form-item label="Usuario" prop="user2">
              <el-input v-model="ruleForm2.user2"></el-input>
            </el-form-item>
            <el-form-item label="Contraseña" prop="password2">
              <el-input type="password" v-model="ruleForm2.password2" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="loginForm('ruleForm2')">Login</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div v-else>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item label="Usuario" prop="user">
              <el-input v-model="ruleForm.user"></el-input>
            </el-form-item>
            <el-form-item label="Contraseña" prop="password">
              <el-input type="password" v-model="ruleForm.password" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="Repetir Contraseña" prop="repeatPassword">
              <el-input type="password" v-model="ruleForm.repeatPassword" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="Email" prop="email">
              <el-input v-model="ruleForm.email"></el-input>
            </el-form-item>
            <el-form-item label="Direccion" prop="direction">
              <el-input v-model="ruleForm.direction"></el-input>
            </el-form-item>
            <el-form-item label="Tarjeta" prop="payment">
              <el-input v-model="ruleForm.payment"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">Registrarse</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="col fill"></div>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
import { HeaderComponent, FooterComponent } from '~/components/common'
import firebase from 'firebase'

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
      activeIndex: '1',
      activeIndex2: '1',
      login: true,
      ruleForm: {
        user: '',
        password: '',
        repeatPassword: '',
        email: '',
        direction: '',
        payment: ''
      },
      ruleForm2: {
        user2: '',
        password2: ''
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
        ],
        email: [
          { required: true, message: 'Debe introducir un email', trigger: 'blur' }
        ],
        direction: [
          { required: true, message: 'Debe introducir una direccion', trigger: 'blur' }
        ],
        payment: [
          { required: true, message: 'Debe introducir un metodo de pago', trigger: 'blur' }
        ]
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
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('entrando')
          firebase.database.ref('Usuarios').push({
            Nombre: formName.user,
            Contraseña: formName.password,
            Email: formName.email,
            Direccion: formName.direction,
            Pagos: formName.payment
          })
          console.log('saliendo')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    loginForm (formName2) {

    },
    handleSelect (key, keyPath) {
      if (parseInt(key) === 1) {
        this.login = true
      } else {
        this.login = false
      }
    }
  },

  components: {
    FooterComponent,
    HeaderComponent
  }
}
</script>

<style lang="scss">
@import "../assets/styles/base/colors";
@import "../assets/styles/base/variables";
@import "../assets/styles/vendors/flex";
@import "../assets/styles/vendors/bootstrap/functions";
@import "../assets/styles/vendors/bootstrap/variables";
@import "../assets/styles/vendors/bootstrap/mixins";

  .form{
    background-color: $color-lp-bg;
  }

  .fill{
    display: none;
  }

  @media (min-width: 500px) {
    .fill{
      display: inherit;
    }
  }

</style>
