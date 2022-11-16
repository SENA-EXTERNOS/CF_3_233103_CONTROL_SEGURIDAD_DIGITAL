<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-puzzle-piece
      h1 Actividad didáctica
    .titulo-segundo.color-acento-contenido
      h2 Clasificación e inventariado de activos tecnológicos
    
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/arrastrar_soltar.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9

        p.mb-4.mt-5 En la presente actividad se deberá relacionar cada uno de los enunciados o definiciones con su respectivo concepto, tenga presente revisar antes el contenido formativo y esté atento a la realimentación.
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Arrastrar y soltar
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/actividad1/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece
                     
</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
