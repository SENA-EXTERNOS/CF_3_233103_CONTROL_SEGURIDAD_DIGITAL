<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.mt-5
      .col-lg-5.my-3(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/introduccion/img1.png", alt="alt")
      .col-lg-7
        p Apreciado aprendiz, bienvenido a este componente formativo, donde se presentan dos elementos decisivos para la administración y control de la seguridad digital. Se tocarán elementos de la infraestructura de red, tanto a nivel del <em>hardware</em> como de <em>software</em>, los equipos más comunes que ayudan a la conectividad entre equipos.
        p Se desarrollarán los conceptos básicos de las redes, medios de transmisión, modelo <em>OSI</em>, protocolo <em>TCP/IP</em>, conexión y primeros pasos de configuración de una red de área local para la comunicación interna de la empresa, entre otros temas. Todo esto tiene como propósito la familiarización con el entorno y las herramientas tecnológicas con las que es necesario trabajar; también favorecer la clasificación y construcción del inventario de activos tecnológicos de la empresa donde se desempeñe.

    .row.mb-5.mt-3
      p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.

      
    .row.mt-5(data-aos="fade-zoom")
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/ONgDSqfuXQk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)




    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
