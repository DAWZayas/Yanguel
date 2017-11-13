<template>
  <div>
    <header-component></header-component>
    <div class="lista">
    <b>
      ALBERTO ROMERO ORTIZ DE ZARATE
    </b>
    <ol class="progtrckr" data-progtrckr-steps="5">
        <li class="progtrckr-done">Datos Personales</li>
        <li class="progtrckr-done">Direccion</li>
        <li class="progtrckr-done">Pago</li>
        <li class="progtrckr-todo">Resumen</li>
    </ol>
    <div class="datos">
      <div class="dato">
        <b>
          Datos personales
        </b>
        <p>
          datos personales
        </p>
        <p>
          datos personales
        </p>
        <p>
          datos personales
        </p>
        <p>
          datos personales
        </p>
        <p>
          datos personales
        </p>
      </div>
      <div  class="dato">
        <b>
          Direccion
        </b>
        <p>
          Direccion
        </p>
        <p>
          Direccion
        </p>
        <p>
          Direccion
        </p>
        <p>
          Direccion
        </p>
      </div>
      <div  class="dato">
        <b>
          Pagos
        </b>
        <p>
          pagos
        </p>
        <p>
          pagos
        </p>
        <p>
          pagos
        </p>
        <p>
          pagos
        </p>
      </div>
    </div>
    <div class="botones">
      <div></div>
      <button type="button" class="btn btn-default">Volver</button><button type="button" class="btn btn-default">Finalizar</button>
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
<style scoped lang="scss">
@import "../assets/styles/base/colors";


ol.progtrckr {
        display: table;
        list-style-type: none;
        margin: 0;
        padding: 0;
        table-layout: fixed;
        width: 100%;
    }
    ol.progtrckr li {
        display: table-cell;
        text-align: center;
        line-height: 3em;
    }

    ol.progtrckr li.progtrckr-done {
        color: black;
        border-bottom: 4px solid yellowgreen;
    }
    ol.progtrckr li.progtrckr-todo {
        color: silver;
        border-bottom: 4px solid silver;
    }

    ol.progtrckr li:after {
        content: "\00a0\00a0";
    }
    ol.progtrckr li:before {
        position: relative;
        bottom: -2.5em;
        float: left;
        left: 50%;
        line-height: 1em;
    }
    ol.progtrckr li.progtrckr-done:before {
        content: "\2713";
        color: white;
        background-color: yellowgreen;
        height: 1.2em;
        width: 1.2em;
        line-height: 1.2em;
        border: none;
        border-radius: 1.2em;
    }
    ol.progtrckr li.progtrckr-todo:before {
        content: "\039F";
        color: silver;
        background-color: white;
        font-size: 1.5em;
        bottom: -1.6em;
    }


.lista {
    padding-top: 8em;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
	  grid-template-rows: 0.2fr 0.5fr 2fr 0.5fr;
    background-color: inherit;
}
.datos {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 0.5em;
  background-color: inherit;
  padding-left: 0.5em;
  padding-right: 0.5em;
}

.dato {
  border: 0.3em solid rebeccapurple;
  border-radius: 0.3em;
}

.botones {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 0.5em;
    max-height: 3em;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
}
b{
  text-align: center;
}
p{
  text-align: center;
}
@media (min-width: 500px) {
  .datos {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 0.5em;
    background-color: inherit;
    padding-left: 0.5em;
    padding-right: 0.5em;
  }

  .lista {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
	  grid-template-rows: 1fr 1fr 2fr 1fr;
    background-color: inherit;
  }
}

</style>
