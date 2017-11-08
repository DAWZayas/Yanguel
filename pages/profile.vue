<template>

  <div class="gridRows">
    <header-component></header-component>
    <b class="borderBot">
      ALBERTO ROMERO ORTIZ DE ZARATE
    </b>
    <br>
    <div class="gridColumns">
      <div class="lista">
        <button type="button" class="btn btn-default">
          Mi cuenta
        </button>
        <button type="button" class="btn btn-default">
          Mis pedidos
        </button>
        <button type="button" class="btn btn-default">
          Mi direccion
        </button>
        <button type="button" class="btn btn-default">
          Mis pagos
        </button>
        <button type="button" class="btn btn-default">
          Ayuda
        </button>
      </div>
      <div class="datos">
        <b>Mi cuenta</b>
        <div>Nombre: <input type="text" class="form-control" placeholder="Nombre"></div>
        <div>Apellidos: <input type="text" class="form-control" placeholder="Nombre"></div>
        <div>Alias: <input type="text" class="form-control" placeholder="Nombre"></div>
        <div>Correo Electronico: <input type="text" class="form-control" placeholder="Nombre"></div>
      </div>
    </div>
    <div class="botones">
      <div></div>
      <button type="button" class="btn btn-default">Editar</button>
      <div></div>
      <button type="button" class="btn btn-default">Volver</button>
      <div></div>
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
<style scoped lang="scss">
@import "../assets/styles/base/colors";
.borderBot{
  border-bottom: 0.2em solid $color-primary;
}

.gridRows{
  display: grid;
}

button{
  max-width: 25em;
  max-height: 4em;
}

.gridColumns{
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 0.5em;
  min-height: 60vh;
  padding-right: 0.5em;
  padding-left: 0.5em;
}

.lista {
    padding-top: 0.5em;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 0.5em;
    background-color: inherit;
    padding-bottom: 0.5em;
}
.datos {
  display: grid;
  grid-template-rows: 0.4fr 1fr 1fr 1fr 1fr;
  grid-gap: 0.5em;
  padding-bottom: 1em;
}
.botones {
  width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    padding-bottom: 0.5em;
}
p{
  padding-left: 0.5em;
  text-align: center;
}
b{
  text-align: center;
}

@media(min-width: 500px){

}
</style>
