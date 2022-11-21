<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Inventario

    .row.justify-content-center
      .col-lg-10
        .cajon.color-secundario.p-4
          .row.justify-content-center
            .col-6.col-lg-2.mb-3
              figure
                img(src="@/assets/curso/temas/tema2/img1.png", alt="alt").img1-tm2
            .col-lg-10
              p Para reconocer los aspectos generales asociados al concepto de inventarios, le invitamos a ver el video a continuación:

    .row.mt-5(data-aos="fade-zoom")
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.my-5
      .col-lg-10
        .row.justify-content-center
          .col-6.col-lg-2.mb-4(data-aos="fade-right")
            figure
              img(src="@/assets/curso/temas/tema2/img2.svg", alt="alt").img-flotante
          .col-lg-10
            p Luego de ver el video y reflexionar sobre su futura labor en el control de la seguridad digital, es importante comprender lo necesario que debe ser el proceso de inventariado de los activos tecnológicos de su compañía. A continuación, explicaremos más a fondo la teoría, procedimientos y pautas generales que deben ser considerados a la hora de iniciar en esta importante tarea de elaborar el inventario de activos.

    separador

    #t_2_1

    .titulo-segundo.color-acento-contenido.my-5
      h2 2.1  Definición, objeto y características de un inventario

    .row.justify-content-center.my-5
      p Luego de ver el video y conocer los aspectos generales sobre los inventarios, es necesario documentar la definición de inventarios, los objetivos y características. 
      p Explorar las diapositivas y hacer la lectura de los aspectos relevantes que debe conocer del inventario. 

    LineaTiempoD.color-primario
      .row(numero="1" titulo="Definición").p-3
        .col-md-8.mb-4.mb-md-0          
          p Entendamos por inventario un documento de carácter técnico desarrollado, en la mayoría de los casos, de manera digital sobre algún #[i software], el cual permite trabajar de manera confiable y ágil el registro, búsqueda, seguimiento y control de cada uno de los activos, bienes físicos y digitales que posee la empresa.
          p El inventario se convierte en una pieza fundamental para la toma de decisiones y la gestión de los recursos de una empresa. Permite tener conocimiento y control del conjunto de elementos propiedad de la empresa, al conocer con qué se cuenta y tener una visión más clara de las adquisiciones necesarias de la empresa, para ahorrar tiempo y evitar pérdidas de producto, compras innecesarias, baja utilización de algunos activos o la pérdida de estos.
      
        .col-md-4.mt-5
          figure
            img(src='@/assets/curso/temas/tema2/img3.png', alt='alt')

      .row(numero="2" titulo="Objetivos").p-3
        .col-md-8.mb-4.mb-md-0
          p El inventario de activos, como proceso, debe obedecer a una serie de objetivos previamente definidos, de manera que al momento de su ejecución se tengan claros los procedimientos y el alcance de este, para que se pueda garantizar una correcta ejecución. 
          p Se deben establecer los instrumentos y técnicas a utilizar, definir los tiempos, espacios, recursos técnicos y humanos con los que se contará para realizar esta tarea.
      
        .col-md-4.mt-5
          figure
            img(src='@/assets/curso/temas/tema2/img4.png', alt='alt')

      .row(numero="3" titulo="Características").p-3
        .col-md-8.mb-4.mb-md-0
          p Además de las técnicas y procedimientos de conteo, cuando se ejecuta el inventario de activos tecnológicos es necesario tener en cuenta y consignar otro tipo de datos, entre los cuales se pueden incluir:
          ul.lista-ul--color
            li 
              i.fas.fa-check
              | Características.
            li 
              i.fas.fa-check
              | Fichas técnicas.
            li 
              i.fas.fa-check
              | Pruebas de estado. 
            li 
              i.fas.fa-check
              | Funcionamiento.
            li 
              i.fas.fa-check
              | Peso digital (tamaño de los archivos).
            li 
              i.fas.fa-check
              | Parámetros relacionados con la administración y seguridad de cada uno, como permisos de acceso, trazabilidad de uso, mantenimiento, vigencia, licencias, fechas y versiones. 
                    
        .col-md-4.mt-5
          figure
            img(src='@/assets/curso/temas/tema2/img5.png', alt='alt')

      .row(numero="4" titulo="Documento final de inventario").p-3
        .col-md-8.mb-4.mb-md-0
          p El documento final, reporte o sistema en el que queda consignado el inventario, debe cumplir con una serie de requisitos que permitan que sea usado, modificado o actualizado correctamente. De poco servirá el inventario si no queda registrado bajo ciertos parámetros de calidad que permitan que sea fácil de interpretar, acceder y en general de usar.
      
        .col-md-4.mt-5
          figure
            img(src='@/assets/curso/temas/tema2/img6.png', alt='alt')

      .row(numero="5" titulo="Algunas recomendaciones").p-3
        .col-md-8.mb-4.mb-md-0
          p Comprendiendo el carácter tan importante que tiene el inventario dentro del funcionamiento de la empresa, no se pueden pasar por alto las buenas prácticas respecto a su seguridad, como por ejemplo:
          ul.lista-ul--color
            li 
              i.fas.fa-check
              | Los permisos de acceso y modificación de este deben estar restringidos solo al personal encargado.
            li 
              i.fas.fa-check
              | Tener control estricto y supervisión de la información, con alto grado de confidencialidad.

        .col-md-4.mt-5
          figure
            img(src='@/assets/curso/temas/tema2/img7.png', alt='alt')

    separador

    #t_2_2

    .titulo-segundo.color-acento-contenido.my-5
      h2 2.2  Categorización de inventarios

    .row.justify-content-center.my-5
      .col-lg-10
        .row
          .col-lg-8
            p Los inventarios no siguen un modelo estático o único para ser realizados, sus características dependen de muchos factores, donde se incluyen parámetros como el tipo de activos a clasificar, las fechas o fases en las que se desarrolla, etc.
            p Veamos algunas formas en las que se puede clasificar un inventario:
          .col-lg-4.mt-2
            figure
              img(src='@/assets/curso/temas/tema2/img8.png', alt='alt')          

      .row.justify-content-center.my-5
        .col-lg-9
          .tarjeta--1.p-4
            .row
              .col-5.col-lg-1.mt-3
                figure
                  img(src="@/assets/curso/temas/tema2/img9.png", alt="alt").img-9-10-11-12-13-tm2
              .col-lg-8.mt-3
                h5.texto-blanco Inventarios según el tiempo o periodicidad con que se realizan:
                p.texto-blanco Anuales, semestrales, a inicio o fin de un proyecto, inventarios permanentes o en tiempo real.
            
          .tarjeta--2.p-4
            .row
              .col-5.col-lg-1.mt-3
                figure
                  img(src="@/assets/curso/temas/tema2/img10.png", alt="alt").img-9-10-11-12-13-tm2
              .col-lg-8.mt-3
                h5.texto-azul Especializados o según el tipo de elementos o área de interés:
                p.texto-azul Inventarios de bienes, activos físicos, activos digitales, recursos, de stock, etc. 

          .tarjeta--3.p-4
            .row
              .col-5.col-lg-1.mt-3
                figure
                  img(src="@/assets/curso/temas/tema2/img11.png", alt="alt").img-9-10-11-12-13-tm2
              .col-lg-8.mt-3
                h5.texto-blanco Según su propósito:
                p.texto-blanco Liquidación, procesos contables, de impuestos o similares, inventario con propósito de planeación de actividades, modernización o proyectos, etc.

          .tarjeta--2.p-4
            .row
              .col-5.col-lg-1.mt-3
                figure
                  img(src="@/assets/curso/temas/tema2/img12.png", alt="alt").img-9-10-11-12-13-tm2
              .col-lg-8.mt-3
                h5.texto-azul Según un contexto o situación especial:
                p.texto-azul Inventario después de un robo, accidente, ataque, para fines de auditoría, cambio de mando o de personal encargado, por traslados, etc.

          .tarjeta--4.p-4
            .row
              .col-5.col-lg-1.mt-3
                figure
                  img(src="@/assets/curso/temas/tema2/img13.png", alt="alt").img-9-10-11-12-13-tm2
              .col-lg-8.mt-3
                h5.texto-blanco Según el medio en que se registran y se gestionan: 
                p.texto-blanco Sobre medios escritos (opción poco recomendada), sobre plataformas de gestión especializadas y dedicadas o sobre herramientas tecnológicas no especializadas (documentos de Excel, por ejemplo).

    .row
      .col-lg-4
        figure
          img(src="@/assets/curso/temas/tema2/img14.png", alt="alt").img14-tm2   

    separador

    #t_2_3

    .titulo-segundo.color-acento-contenido.my-5
      h2 2.3  Técnicas para el registro de inventarios

    .row.justify-content-center.my-5
      .col-6.col-lg-2.mb-4(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/tema2/img15.svg", alt="alt").img-flotante
      .col-lg-10
        p Posterior a tener claridad sobre el tipo de inventario, es importante realizar una fase de planeación previa al inicio de la labor. Normalmente, la planeación y la ejecución son procesos ligados que no suelen estar asignados a una sola persona en particular, por el contrario, por temas de confiabilidad y transparencia, los procesos de inventario involucran a equipos enteros de trabajo y requieren de la distribución de asignaciones específicas.
        p El grupo de trabajo deberá tener en consideración los siguientes puntos al planear y ejecutar un proceso de inventariado:


    .row.justify-content-center.my-5
      .tarjeta.tarjeta--gris.p-5
        PasosB.color-primario
          .row.justify-content-center(titulo="")
            .col-md-4
              figure
                img(src="@/assets/curso/temas/tema2/img16.png", alt="alt")             
            .col-md-7.mt-5             
              p.texto-azul.text-center Establecer previamente las responsabilidades, tiempos y recursos necesarios para realizar dicha actividad.

          .row.justify-content-center(titulo="")
            .col-md-5.mt-4            
              p.texto-azul.text-center Tener claridad sobre el uso y registro de los recursos en los instrumentos y herramientas tecnológicas que usarán para realizar el inventario. De ser necesario, primero deben realizarse jornadas de capacitación sobre el uso de dichos recursos.            
            .col-md-6
              figure
                img(src="@/assets/curso/temas/tema2/img17.png", alt="alt")
                       
          .row.justify-content-center(titulo="")
            .col-md-7.mt-5         
              p.texto-azul.text-center Previamente, se deberá establecer el sistema de codificación, serialización o etiquetado que se usará para registrar los activos; este tema se ampliará en la siguiente sección. la Guía para la Gestión y Clasificación de Activos de Información de MINTIC (2016), indica que se deben incluir los siguientes parámetros para cada ítem del inventario:
              ul.lista-ul--color.texto-azul.ps-5
                li 
                  i.fas.fa-check
                  | Información básica del activo (nombre, observaciones, proceso, entre otras). 
                li 
                  i.fas.fa-check
                  | El nivel de clasificación de la información. 
                li 
                  i.fas.fa-check
                  | Información relacionada con su ubicación, tanto física como electrónica.
                li 
                  i.fas.fa-check
                  | Su propietario y su custodio. 
                li 
                  i.fas.fa-check
                  | Los usuarios y derechos de acceso.                
            .col-md-3.mt-5
              figure
                img(src="@/assets/curso/temas/tema2/img18.png", alt="alt")
                       
          .row.justify-content-center(titulo="")
            .col-md-4.mt-3
              figure
                img(src="@/assets/curso/temas/tema2/img19.png", alt="alt")             
            .col-md-9.mt-3           
              p.texto-azul.text-center Coordinar con las demás áreas los espacios y tiempos, de forma que su labor afecte lo más mínimo posible otros procesos. De la misma forma, que durante el inventario tengan la menor cantidad de interrupciones o asignaciones que realizar de forma simultánea a la del inventario. Procurar programar las labores de inventario en periodos de tiempo en donde la cantidad de actividades en la empresa sea baja.
          
          .row.justify-content-center(titulo="")
            .col-md-4
              figure
                img(src="@/assets/curso/temas/tema2/img20.png", alt="alt")             
            .col-md-9.mt-5             
              p.texto-azul.text-center Mientras sea posible, y a menos que la empresa establezca lo contrario, el proceso de inventariado se debe realizar acompañado por otros colaboradores, esto con el objeto de que haya mayor confianza y menor probabilidad de error.
          
          .row.justify-content-center(titulo="")
            .col-md-7
              figure
                img(src="@/assets/curso/temas/tema2/img21.png", alt="alt")             
            .col-md-6            
              p.texto-azul.text-center Registrar en el sistema correspondiente el inventario bajo los parámetros establecidos con el #[i software] o sistema elegido para dicho fin.
          
          .row.justify-content-center(titulo="")          
            .col-md-5.mt-5             
              p.texto-azul.text-center De ser necesario, rectifique la información recolectada, en especial en aquellos activos que por su nivel de importancia, confidencialidad o valor económico, sean más importantes o susceptibles a pérdidas, daños o ataques.
            .col-md-3
              figure
                img(src="@/assets/curso/temas/tema2/img22.png", alt="alt")   

          .row.justify-content-center(titulo="")
            .col-md-5
              figure
                img(src="@/assets/curso/temas/tema2/img23.png", alt="alt")             
            .col-md-4         
              p.texto-azul.text-center Elabore el correspondiente informe del inventario realizado, en donde además del conteo, incluya la información del procedimiento, evidencias, resultados y conclusiones. Use las herramientas informáticas necesarias para acompañar su reporte con gráficos e información estadística fácil de interpretar y mostrar a otros.
          
          .row.justify-content-center(titulo="")
            .col-md-5.mt-5             
              p.texto-azul.text-center Comparta el informe del inventario solo con aquellos autorizados o para quienes dicha información sea relevante. 
            .col-md-3
              figure
                img(src="@/assets/curso/temas/tema2/img24.png", alt="alt")             

    separador

    #t_2_4

    .titulo-segundo.color-acento-contenido.my-5
      h2 2.4  Métodos de identificación y Gestión de archivos e información digital

    .row.justify-content-center.mt-5
      .col-lg-5.my-3
        figure
          img(src="@/assets/curso/temas/tema2/img25.png", alt="alt")
      .col-lg-6
        .bloque-texto-b2
          .bloque-texto-b__texto
            p En inventarios, en especial aquellos que son muy amplios, se utilizan técnicas y recursos para identificar los diferentes elementos incluidos en estos; tal identificación se realiza con el objetivo de simplificar los procesos de búsqueda. Al referirnos a métodos de identificación, hacemos referencia al sistema adoptado por la empresa para identificar y hacer seguimiento a cada activo de manera individual, esto puede incluir sistemas de serializado, codificación, numeración, algoritmos para construir códigos, códigos de barras, códigos QR, entre otros. Cada empresa decidirá qué sistema y cómo aplicarlo en función del tamaño, el inventario, los programas y otros recursos utilizados para realizar y mantener el inventario.

    .row.mb-5.mt-3
      p  La información digital y archivos que hacen parte de los activos de la organización deben gestionarse acorde a unos parámetros, clasificación y registros específicos que se describen a continuación. 

    .row.mb-5.mt-3
      h3 Parámetros a tener en cuenta:

    .row.mb-5.mt-3
      p La Guía para la Gestión y Clasificación de Activos de Información de MINTIC (2016), define cuatro parámetros que se deben tener en cuenta a la hora de clasificar e identificar los activos de la información, parámetros de clasificación y los datos que se deberían especificar de cada activo:


    .row.justify-content-center.mt-5
      .tarjeta--container.row.mb-5
        .col-md.tarjeta--5.p-3
          .row.justify-content-center
            .col-5.col-lg-7.mb-5
              figure
                img(src='@/assets/curso/temas/tema2/img26.png', alt='AvatarTop').img26-27-28-29-tm2
            
          h5.text-center.texto-blanco Inventario de activos
          p.text-center.texto-blanco Todos los activos deben estar claramente identificados y la entidad debe elaborar y mantener un inventario de estos. 
        
        .col-md.tarjeta--2.p-3
          .row.justify-content-center
            .col-5.col-lg-7.mb-5
              figure
                img(src='@/assets/curso/temas/tema2/img27.png', alt='AvatarTop').img26-27-28-29-tm2
            
          h5.text-center.texto-azul Propiedad de los activos
          p.text-center.texto-azul Los activos de información del inventario deben tener un propietario.
        
        .col-md.tarjeta--6.p-3
          .row.justify-content-center
            .col-5.col-lg-7.mb-5
              figure
                img(src='@/assets/curso/temas/tema2/img28.png', alt='AvatarTop').img26-27-28-29-tm2
            
          h5.text-center.texto-blanco Clasificación de la información
          p.text-center.texto-blanco La información se debe clasificar en función de los requisitos legales, valor, criticidad y susceptibilidad a divulgación o modificación no autorizada. 
        
        .col-md.tarjeta--7.text-white.p-3
          .row.justify-content-center
            .col-5.col-lg-7.mb-5
              figure
                img(src='@/assets/curso/temas/tema2/img29.png', alt='AvatarTop').img26-27-28-29-tm2
            
          h5.text-center.texto-azul Etiquetado y manipulado de la información
          p.text-center.texto-azul Implementar un conjunto adecuado de procedimientos para el etiquetado de la información, de acuerdo con el esquema de clasificación de información adoptado por la organización.

    .row.mb-5.mt-3
      h3 Clasificación

    .row.mb-5.mt-3
      p Según la guía, los activos se clasifican en:

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img30.png", alt="alt")
          .crd_hover_txt--body
            h4.text-center Confidencialidad:
            p.text-center Pública, reservada o clasificada.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img31.png", alt="alt")
          .crd_hover_txt--body
            h4.text-center Integridad:
            p.text-center Alta, media o baja.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img32.png", alt="alt")
          .crd_hover_txt--body
            h4.text-center Disponibilidad: 
            p.text-center Alta, media o baja.

    .row.mb-5.mt-3
      h3 Datos a registrar

    .row.mb-5.mt-3
      p Para realizar el registro de información asociada al inventario se debe contemplar la siguiente información:

    .row.justify-content-center.my-5
      TabsA.color-secundario.ancho
        .tarjeta.tarjeta--gris4.p-4(titulo="Identificador")
          p Código con que se ha registrado el activo.

        .tarjeta.tarjeta--gris4.p-4(titulo="Proceso")
          p Se debe indicar a qué área o proceso pertenece el activo.

        .tarjeta.tarjeta--gris4.p-4(titulo="Nombre")
          p Nombre del activo.

        .tarjeta.tarjeta--gris4.p-4(titulo="Descripción y observaciones")
          p Especificaciones técnicas.

        .tarjeta.tarjeta--gris4.p-4(titulo="Tipo")
          p Indicar si es información, #[i software], recurso humano, servicio u otro.

        .tarjeta.tarjeta--gris4.p-4(titulo="Ubicación")
          p Lugar donde permanece, se almacena o está instalado el activo, sea física o electrónica, según aplique.

        .tarjeta.tarjeta--gris4.p-4(titulo="Clasificación")
          p Según los tres parámetros anteriormente mencionados, confidencialidad, integridad y disponibilidad.

        .tarjeta.tarjeta--gris4.p-4(titulo="Justificación")
          p Explicación de su nivel de importancia y de las consecuencias de un fallo o pérdida de este.

        .tarjeta.tarjeta--gris4.p-4(titulo="Criticidad")
          p Alta, media o baja según como haya sido clasificado.

        .tarjeta.tarjeta--gris4.p-4(titulo="Propietario y custodia")
          p Se indica y diferencia el propietario del responsable de su cuidado.

        .tarjeta.tarjeta--gris4.p-4(titulo="Acceso")
          p Identificar quienes tienen acceso a dicho recurso.

        .tarjeta.tarjeta--gris4.p-4(titulo="Fechas")
          p De ingreso y revisión.

    separador

    #t_2_5

    .titulo-segundo.color-acento-contenido.my-5
      h2 2.5  Herramientas tecnológicas y recursos para la realización de inventarios

    .row.mb-5.mt-3
      p En el mercado existen diversas herramientas utilizadas para la gestión y desarrollo de inventarios; la elección estará a cargo de la empresa, en función de los recursos disponibles, tamaño del inventario, nivel, valor de los activos y disponibilidad financiera y técnica. Mencionaremos algunas de las más usadas:

    .tarjeta.tarjeta--gris.p-4
      LineaTiempoC.color-acento-botones(text-small)
        .row(titulo="Excel")
          .col-md-5.mt-3
            figure
              img(src="@/assets/curso/temas/tema2/img33.png", alt="alt")

          .col-md-7.mb-4.mb-md-0.mt-5
            p Herramienta comúnmente usada en las empresas por sus características. Es una opción sencilla y relativamente económica para la elaboración de listados, tablas, aplicación de fórmulas, personalización, filtrado y búsqueda. Es una elección aceptable, pero sumamente débil, insegura y poco práctica cuando se trata de inventarios demasiado grandes.
        
        .row(titulo="SAP")
          .col-md-5.mt-3
            figure
              img(src="@/assets/curso/temas/tema2/img34.png", alt="alt")

          .col-md-7.mb-4.mb-md-0.mt-5
            p Es seguramente uno de los programas más usados para labores de administración de inventarios. Es una opción muy completa que requiere de pago para su uso.
        
        .row(titulo="Odio")
          .col-md-5.mt-3
            figure
              img(src="@/assets/curso/temas/tema2/img35.png", alt="alt")

          .col-md-7.mb-4.mb-md-0.mt-5
            p Plataforma en línea para la gestión logística, relativamente fácil de utilizar y de interfaz amigable y completa. La mejor opción en cuanto a programas de código abierto.
        
        .row(titulo="Helder")
          .col-md-5.mt-3
            figure
              img(src="@/assets/curso/temas/tema2/img36.png", alt="alt")

          .col-md-7.mb-4.mb-md-0.mt-5
            p Herramienta en línea muy completa y con opciones adicionales para gestión logística y de proyectos.
        
    .row.justify-content-center.my-5
      .col-lg-10
        .cajon.color-secundario.p-4
          .row.justify-content-center
            .col-6.col-lg-2.mb-3
              figure
                img(src="@/assets/curso/temas/tema2/img37.png", alt="alt").img1-tm2
            .col-lg-10
              p Antes de finalizar el estudio de este material educativo, debe explorar los demás recursos que se encuentran disponibles en este componente formativo. Para ello, diríjase al menú principal en donde encontrará la síntesis, una actividad didáctica, material complementario, entre otros.



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
