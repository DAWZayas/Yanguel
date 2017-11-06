<template>
  <div>
    <header-component></header-component>
    <div class="lista">
    <b>
      ALBERTO ROMERO ORTIZ DE ZARATE
    </b>
    <br>
    <ol class="progtrckr" data-progtrckr-steps="5">
        <li class="progtrckr-done">Order Processing</li>
        <li class="progtrckr-done">Pre-Production</li>
        <li class="progtrckr-done">In Production</li>
        <li class="progtrckr-done">Shipped</li>
        <li class="progtrckr-todo">Delivered</li>
    </ol>
    <br>
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
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
	grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    background-color: inherit;
    min-height: 70vh;
}
.botones {
  width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}
b{
  text-align: center;
}
p{
  text-align: center;
}
</style>
