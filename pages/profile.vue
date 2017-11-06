<template>

  <div>
    <header-component></header-component>
    <div class="lista">
    <b>
      ALBERTO ROMERO ORTIZ DE ZARATE
    </b>
    <br><br>
    <p>
      fecha de nacimiento
    </p>
    <p>
      sexo
    </p>
    <p>
      direccion
    </p>
    <p>
      correo electronico
    </p>
    <p>
      pagos
    </p>
    <div class="botones">
      <div></div>
      <button type="button" class="btn btn-default">Editar</button>
      <div></div>
      <button type="button" class="btn btn-default">Volver</button>
      <div></div>
    </div>
    </div>
    <footer-component></footer-component>
  </div>
  
</template>
<script>
import { HeaderComponent, FooterComponent } from '~/components/common'

export default {
  data () {
    return {}
  },
  components: {
    FooterComponent,
    HeaderComponent
  }
}
</script>
<style lang="scss">
@import "../assets/styles/base/colors";
.lista {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
	grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    background-color: inherit;
    min-height: 70vh;
}
.botones {
  width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}
b{
  text-align: center;
  border-bottom: 0.2em solid $color-primary;
}
p{
  text-align: center;
}
</style>
