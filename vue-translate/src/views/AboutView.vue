<template>
  <div class="container text-center mt-5">
    <h1 class="titulos">¿De qué va esto?</h1>
    <div class="d-md-flex d-inline-block gap-3 mt-4">
      <cardComponent class="mb-md-0 mb-3" title="Descripción">
        <template #content>
          <p class="texto">Nuestro proyecto consiste en desarrollar un traductor multilingüe
                          utilizando Vue.js, un popular framework de JavaScript para la
                          construcción de interfaces de usuario interactivas. Este traductor 
                          permitirá a los usuarios ingresar texto en un idioma determinado y
                          obtener una traducción instantánea en el idioma deseado.<br></p>
            <h3 class="titulos">Características Principales</h3>
            <br>
            <ol class="texto">
              <li><b>Interfaz de Usuario Intuitiva:</b> 
                Implementaremos una interfaz de usuario limpia y fácil de usar,
                diseñada con Vue.js para proporcionar una experiencia fluida al usuario.</li>
                
                <li><b>Soporte Multilingüe:</b> El traductor será capaz de manejar una amplia gama de idiomas, 
                  permitiendo a los usuarios traducir texto entre pares de idiomas diversos.</li>
                
                <li><b>Integración de API de Traducción:</b> Utilizaremos servicios de API de traducción como<br>
                  Google Translate para realizar las traducciones. Estas API proporcionan 
                  una alta calidad de traducción y soportan una amplia variedad de idiomas.</li>
                
                <li><b>Autodetección de Idioma:</b> Implementaremos la funcionalidad de autodetección de idioma 
                  para que el traductor pueda identificar automáticamente el idioma del texto de origen, facilitando 
                  aún más el proceso de traducción para el usuario.</li>
            </ol>
            <br>
            <h3 class="titulos">Objetivos del Proyecto</h3>
            <br>
            <ul class="texto">
              <li>Proporcionar a los usuarios una herramienta útil y accesible para la traducción <br>
                de texto entre 
                diferentes idiomas.</li>

              <li>Aprender y aplicar los conceptos de desarrollo frontend con Vue.js, así como la <br>
                integración de APIs externas en una 
                aplicación web.</li>
              
              <li>Desarrollar habilidades de colaboración utilizando control de versiones y trabajo en equipo.</li>
            </ul>
            <br>
            <p class="texto">Con este proyecto, buscamos crear una herramienta práctica y eficiente que demuestre 
              las capacidades de Vue.js en la creación de aplicaciones web interactivas y útiles para los 
              usuarios en un contexto real.</p>
        </template>
      </cardComponent>
      <div class="d-block">
        <cardComponent title="Tecnologías">
          <template #content>
            <ol class="texto">
              <li><b>Vue.js</b> Como el framework principal para el desarrollo del frontend,<br> 
                aprovechando su reactividad y capacidad para crear componentes reutilizables.</li>
              
              <li><b>API de Traducción:</b> Integraremos una API de traducción como parte del backend<br> 
                del proyecto para manejar las solicitudes de traducción.</li>

              <li><b>HTML/CSS/JavaScript:</b> Para la estructura, estilo y funcionalidad del frontend.</li>

              <li><b>Git/GitHub:</b> Utilizaremos control de versiones para colaborar en el desarrollo del <br>proyecto y 
                realizar un seguimiento de los cambios.</li>
            </ol>
          </template>
        </cardComponent>
        <div class="mt-3">
          <cardComponent title="Desarrolladores">
            <template #content>
              <p class="texto"><b>Anthony Segura</b> y <b>Samantha Calvo</b> son estudiantes de frontend apasionados por el desarrollo web. 
                Ambos están embarcando en su viaje de aprendizaje con Vue.js, con el objetivo de dominar este 
                framework para crear experiencias de usuario dinámicas y atractivas. Con una determinación 
                compartida y una sólida formación en desarrollo web, Anthony y Samantha forman un quipo dinámico de aprendices, 
                listos para enfrentar <br>los desafíos del desarrollo frontend con entusiasmo y dedicación.</p>
            </template>
          </cardComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import cardComponent from '../components/cardComponent.vue';
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap');

.texto{
  font-family: 'DM Serif Display', serif;
  text-align: justify;
  margin: 30px;
}

.titulos{
  text-align: center; 
  font-family: Comic Sans MS; 
  font-weight:bold; 
  font-size: 30px; 
  color: #55d6aa; 
  text-shadow: -1px 0 #414D68, 0 1px #414D68, 1px 0 #414D68, 0 -1px #414D68, 
              -2px 2px 0 #414D68, 2px 2px 0 #414D68, 1px 1px #414D68, 2px 2px #414D68, 
              3px 3px #414D68, 4px 4px #414D68, 5px 5px #414D68, 6px 6px #414D68, 
              7px 7px #414D68, 8px 8px #414D68, 9px 9px #414D68;
}

</style>
