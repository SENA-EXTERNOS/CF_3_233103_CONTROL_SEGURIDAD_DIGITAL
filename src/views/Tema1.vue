<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos de redes de datos con énfasis en la identificación de activos tecnológicos

    .row.justify-content-center.my-5
      .col-lg-10
        .row.justify-content-center
          .col-6.col-lg-2.mb-4.mt-3(data-aos="fade-right")
            figure
              img(src="@/assets/curso/temas/tema1/img1.svg", alt="alt").img-flotante
          .col-lg-10
            .bloque-texto-b1
              .bloque-texto-b__texto
                p Para iniciar el contenido, se deben estudiar las redes de datos. Este es un tema bastante amplio y sobre el que se debe profundizar. En un primer apartado se definen solo los conceptos fundamentales que le permitirán tener una comprensión suficiente sobre cómo funcionan las redes y cuáles son los equipos y activos que intervienen. Conocer estos conceptos es necesario para cumplir con el objetivo central de identificar, clasificar y realizar el inventario de activos tecnológicos de la compañía. Al finalizar este primer tema, puede acceder a un material anexo para ampliar los conceptos sobre redes.        

    separador

    #t_1_1

    .titulo-segundo.color-acento-contenido.my-5
      h2 1.1  Concepto de red y su funcionamiento

    .row.justify-content-center.my-5
      p El primer concepto que debe tener claro para iniciar el estudio de este material es el término ‘red’. A continuación, se define desde la perspectiva de diferentes autores. 
      p.my-3 Se entienden las redes de computadoras como el conjunto de recursos tecnológicos en cuanto a #[i hardware] y #[i software] que permiten que dos o más equipos puedan compartir información.

    .row.justify-content-center
      .col-lg-4.mt-4
        figure
          img(src="@/assets/curso/temas/tema1/img2.png", alt="alt")       
      .col-lg-8
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            b.texto-blanco Tanenbaum A, y Wetherall D (2008) definen las redes de computadoras, en el libro ‘Redes de computadoras’, como:
            br
            i.fas.fa-quote-left
            p.texto-blanco Utilizaremos el término “red de computadoras” para referirnos a un conjunto de computadoras autónomas interconectadas mediante una sola tecnología. Se dice que dos computadoras están interconectadas si pueden intercambiar información. La conexión no necesita ser a través de un cable de cobre; también se puede utilizar fibra óptica, microondas, infrarrojos y satélites de comunicaciones. (p. 2)
            i.fas.fa-quote-right
        
    .row.justify-content-center.my-5
      h3 Fundamentos IPV4 y Simulación de redes
      p Para profundizar sobre el concepto de redes, datos y computadoras, puede consultar los siguientes documentos:

    .row.justify-content-center.my-5
      .col-lg-10
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-4.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema1/img3.png").img3-tm1
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p #[strong Anexo 1.] Fundamentos IPV4
                   
                .col-sm-auto
                  a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/anexo_1--Fundamentos_de_IPV4.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    .row.justify-content-center.my-5
      .col-lg-10
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-4.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema1/img4.png").img3-tm1
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p #[strong Anexo 2.] Simulación y configuración de redes con Packet Tracer y Carpeta #[i Software] Descargar
                   
                .col-sm-auto
                  a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/anexo_2--Simulación_y_configuración_de_redes_con_Packet_Tracer.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    .row.my-5
      p Otros términos asociados a las redes son:

    .row.my-5
      h3 Computadora:

    .row.justify-content-center.my-5
      .col-lg-5.my-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/tema1/img5.png", alt="alt")
      .col-lg-7
        .bloque-texto-b3
          .bloque-texto-b__texto
            p Normalmente, al hablar de computadoras se piensa en un equipo de escritorio o portátil; pero para tener una definición precisa sobre el término “computadora u ordenador”, se puede hacer referencia a cualquier dispositivo electrónico diseñado y programado para almacenar información y ejecutar una o varias labores. Una computadora es un dispositivo dotado de recursos a nivel físico, es decir, un #[i hardware], el cual posee programas (#[i software]) para cumplir su propósito.  
        .bloque-texto-b4.my-3
          .bloque-texto-b__texto
            p Bajo este concepto, y añadiendo la capacidad de conectarse e intercambiar información con otros equipos similares y compatibles, entran aquí gran variedad de dispositivos, como PC de escritorio, portátiles, smartphones, tabletas e incluso, en la actualidad, el internet de las cosas (IOTA). También otros dispositivos como sensores, aparatos de medición, sistemas automáticos y un sinfín de productos electrónicos entrarían dentro de esta definición. Es por esto que hoy en día las redes no serán algo exclusivo de los típicos computadores, y en consecuencia, en especial a nivel de redes, se deja a un lado el concepto de computador para usar los conceptos de cliente y servidor, según corresponda, para hacer referencia a los dispositivos que usan las redes de datos. 

    .row.mt-5
      h3 El modelo Cliente/ Servidor:

    .row.my-3
      p El objeto principal de crear redes es la transmisión o flujo de información entre equipos o terminales. En las redes, dependiendo del papel que cumpla el dispositivo, este podrá ser determinado como cliente o como servidor.
      p A continuación, la definición de cada tipo de modelo. 

    .row.justify-content-center.my-5
      .tarjeta.slyderA_bg_01.p-5
        SlyderA(tipo="b")
          .row
            .col-md-4.mb-5.mb-md-0
              h4 Cliente
              p.mt-5 Es el dispositivo que solicita algún tipo de información o servicio en la red. Esta solicitud se realiza mediante algún tipo de recurso o protocolo, temas que se ampliarán más adelante.

            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema1/img6.png', alt='Texto que describa la imagen')(data-aos="fade-left")

          .row
            .col-md-4.mb-5.mb-md-0
              h4 Servidor
              p.mt-5 Es el dispositivo que posee el #[i software] y #[i hardware] adecuado para brindar servicios o suministrar algún tipo de información a uno o más clientes. Dependiendo de la cantidad de información que guarde y el número de clientes que deba atender, el servidor aumentará su capacidad, complejidad y cantidad de recursos tecnológicos.

            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema1/img7.png', alt='Texto que describa la imagen')(data-aos="fade-left")

          .row
            .col-md-4.mb-5.mb-md-0
              h4 Servidor dedicado
              p.mt-5 Son equipos dedicados completamente a atender algún tipo de servicio de red.

            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema1/img8.png', alt='Texto que describa la imagen')(data-aos="fade-left")

          .row
            .col-md-4.mb-5.mb-md-0
              h4 Servidores parciales
              p.mt-5 Son equipos que pueden llegar a cumplir el papel de cliente y también el de servidor. Son equipos mucho más sencillos y similares a los que usamos día a día; un ejemplo sencillo para ilustrar este concepto son aquellos computadores que comparten carpetas y archivos en red, para que desde otros equipos se acceda a ellos.

            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema1/img9.png', alt='Texto que describa la imagen')(data-aos="fade-left")

    .row.my-5
      h3 Información digital:

    .row.justify-content-center
      .col-6.col-lg-2.mb-4.mt-3(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/tema1/img10.svg", alt="alt").img-flotante
      .col-lg-10
        p Para comprender de manera más fácil los conceptos de las redes de datos, es importante comprender cómo viaja la información entre los dispositivos de la red, y para explicarlo de manera sencilla, diremos que en su gran mayoría las máquinas ‘hablan’ unas con otras mediante la transmisión de secuencias de #[i bits]. El #[i bit], es la unidad mínima de información en informática. Mediante la unión de cadenas de hasta millones de #[i bits] se forman códigos, que luego pueden ser traducidos por el programa adecuado en texto, material multimedia o instrucciones, los #[i bits] solo pueden contener dos diferentes estados o valores: el cero (0) y el uno (1), símbolos usados para representar los dos posibles estados de un #[i bit] en el sistema binario, ya que los dispositivos funcionan mediante señales eléctricas. Estos estados representan la presencia o ausencia de señal eléctrica.

    .row.justify-content-center.my-5
      .col-lg-7
        figure
          img(src="@/assets/curso/temas/tema1/img11.svg", alt="alt")    

    .row.my-5
      .tarjeta.color-primario--borde.p-2
        .row
          .col-lg-2
            figure
              img(src="@/assets/curso/temas/tema1/img12.png", alt="alt").img12-tm-1
          .col-2
          .col-lg-8
            p De esta manera, toda la información que es transmitida y almacenada por diferentes dispositivos viene a ser, en su origen y procesamiento, digital o electrónica; la unión de enormes cadenas de ceros y unos, que mediante los protocolos e instrucciones programadas pueden ser decodificadas y transformadas en información visible y reconocible por las personas.

    .row.my-5
      h3 Tarjeta de RED y Dirección MAC:
      
    .row.justify-content-center.my-5
      .col-lg-10
        p Para conectarse a una red todo dispositivo deberá contar, dentro de su sistema, con un circuito electrónico capaz de realizar el procesamiento de los datos y acondicionarlos mediante señales eléctricas u ópticas para realizar los envíos y la recepción de la información, a este dispositivo se le conoce como tarjeta de red. Las tarjetas de red no son todas iguales; dependiendo del protocolo de comunicación y el dispositivo en el que estén integradas o se anexen, su tamaño, precio y características físicas y eléctricas cambiarán. Pero hay algo que tienen todas en común: poseen un identificador único conocido como dirección física o MAC.

    .row.justify-content-center
      .col-lg-4.mt-4
        figure
          img(src="@/assets/curso/temas/tema1/img13.png", alt="alt")       
      .col-lg-8
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            b.texto-blanco Esta cita del #[em Digital guide] de IONOS nos ayuda a entender cómo se forman las direcciones MAC: 
            br
            i.fas.fa-quote-left
            p.texto-blanco Cada dispositivo que se conecta a una red informática requiere un adaptador de red. Este adaptador recibe un número de identificación único del fabricante, la dirección MAC. Esto permite que dispositivos como ordenadores de sobremesa, tablets o teléfonos móviles puedan ser identificados en la red y direccionados según sea necesario. La dirección MAC (#[em Media Access Control Address]) es la dirección de #[em hardware] única en el mundo de un adaptador de red. Esta dirección física se usa para identificar a un dispositivo en redes de computadoras. (IONOS, 2018).
            i.fas.fa-quote-right

    .row.justify-content-center.my-5
      .col-lg-10
        p Para resumir, la dirección MAC se representa mediante un código de 48 #[i bits], escrito en código hexadecimal (usa números del 0 al 9 y letras desde la A hasta la F) representados como en el siguiente ejemplo 00:fe:0a:bc:f5:0d.

    .row.my-5
      h3 Protocolo TCP/IP:

      p.mt-3 Los protocolos son normas o reglas que se deben seguir para que se desarrolle o ejecute correctamente algún procedimiento. En las comunicaciones, los protocolos, y específicamente el protocolo TCP/IP, es el que determina las reglas para la transmisión y procesamiento de los #[i bits] de información que viajan por la red.

    .row.my-5
      .col-2
      .col-lg-10
        .titulo-sexto.color-primario.mb-3
          h5 Figura 1
          br
          i Capas del protocolo TCP/IP. 

    .row.justify-content-center.my-5
      .col-lg-9
        figure
          img(src="@/assets/curso/temas/tema1/img14.svg", alt="alt")        
          figcaption Nota. Tomada de IBM (2021)

    .row.justify-content-center.my-5
      .col-lg-10
        .row.justify-content-center.my-5
          .bloque-texto-f.color-acento-contenido.pt-5.px-5.mb-5
            .bloque-texto-f__comillas
              i.fas.fa-quote-left.color-comillas
              i.fas.fa-quote-right.color-comillas
            p.text-regular.bloque-texto-f__texto Los protocolos son conjuntos de normas para formatos de mensaje y procedimientos que permiten a las máquinas y los programas de aplicación intercambiar información. Cada máquina implicada en la comunicación debe seguir estas normas para que el sistema principal de recepción pueda interpretar el mensaje. El conjunto de protocolos TCP/IP puede interpretarse en términos de capas (párr. 1).

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img15.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El protocolo define cómo deben organizarse los paquetes de #[i bits] para viajar de extremo a extremo. Dentro de este proceso, aparecen las direcciones IP (protocolo de internet), información muy importante para definir los dos extremos en la transmisión de la información, un concepto fundamental dentro de la seguridad digital. El estudio de este y otros protocolos de internet requerirá de una extensión muy amplia de información, pero, por ahora, basta con conocer su nombre e importancia dentro de la transmisión de los datos.

    .row.my-5
      h3 Direcciones IP públicas y privadas

    .row.justify-content-center.my-5
      .col-lg-5
        p Las direcciones IP, en conjunto con las direcciones MAC, son las encargadas de definir e identificar a cada equipo de la red. A diferencia de las direcciones físicas, las IP no suelen ser fijas o pertenecer solo a un equipo. Existen principalmente dos protocolos activos de direcciones IP, las IPV4 y las IPV6, a futuro, por la gran cantidad de equipos que requieren direcciones, tenderán a desaparecer las IPV4. Hoy siguen siendo de amplio uso, en especial a nivel de redes domésticas y corporativas, donde son suficientes para cubrir los equipos de dichas redes.
      .col-lg-5.my-3
        figure
          img(src="@/assets/curso/temas/tema1/img16.png", alt="alt").img-flotante       

    .row.justify-content-center.my-5
      .col-lg-10
        p Las direcciones IP se componen de dos elementos, la dirección como tal y la máscara de red. La máscara indica hasta qué punto los números de la dirección corresponden al identificador de la red y qué parte corresponde a la identificación del equipo dentro de la red.
        p Así mismo, las IP se pueden clasificar en dos grupos:

    .row.my-5
      .col-2
      .col-lg-10
        .titulo-sexto.color-primario.mb-3
          h5 Figura 2
          br
          i Rangos IPV4 de direcciones privadas y públicas.

    .row.justify-content-center.my-5
      .col-lg-7
        figure
          img(src="@/assets/curso/temas/tema1/img17.svg", alt="alt")
          figcaption Nota. Tomado de Rangos IPV4 de direcciones privadas y públicas.

    .row.justify-content-center.my-5
      AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris2")
        .row(titulo="IP privadas").justify-content-center
          .col-lg-1    
          .col-3.col-lg-1
            figure
              img(src="@/assets/curso/temas/tema1/img18.png", alt="alt")

          .col-lg-10
            p.my-3 Son direcciones cuyo uso es netamente de la red local (red interna) y no tienen ningún tipo de funcionalidad para las conexiones en internet.

        .row(titulo="IP públicas").justify-content-center
          .col-lg-1    
          .col-3.col-lg-1
            figure
              img(src="@/assets/curso/temas/tema1/img19.png", alt="alt")

          .col-lg-10
            p.my-3 Son direcciones de uso público, es decir, son visibles para cualquier usuario de internet, lo que las hace únicas e irrepetibles; muy necesarias para procesos y servicios que se realizan a través del internet. 

    .row.my-5
      h3.mb-5 Modelo OSI
      p Dentro de los estándares internacionales que se han adoptado para las redes de computadores, el más conocido es el modelo OSI de la ISO.
      p Según la documentación: 
      p La Organización Internacional para la Estandarización (ISO) ha diseñado el modelo de referencia de Interconexión de Sistemas Abiertos (OSI) que utiliza capas estructuradas. El modelo OSI describe una estructura con siete capas para las actividades de red. Cada capa tiene asociados uno o más protocolos. Las capas representan las operaciones de transferencia de datos comunes a todos los tipos de transferencias de datos entre las redes de cooperación. (Oracle, 2010)

    .row.my-5
      .col-lg-10
        .titulo-sexto.color-primario.mb-3
          h5 Figura 3
          br
          i Capas del modelo OSI

    .row.justify-content-center.my-5
      .tabla-a.color-acento-contenido 
        table
          caption Nota.  Tomado de Oracle (s.f.). Capas del modelo OSI. Modelo de referencia OSI. 
          thead
            tr
              th Nº de capa
              th Nombre de capa 
              th Descripción

          tbody
            tr
              td.text-center 7 
              td.text-center Aplicación
              td Se compone de los servicios y aplicaciones de comunicación estándar que puede utilizar todo el mundo. 

            tr
              td.text-center 6
              td.text-center Presentación
              td Se asegura de que la información se transfiera al sistema receptor de un modo comprensible para el sistema.

            tr
              td.text-center 5
              td.text-center Sesión
              td Administra las conexiones y terminaciones entre los sistemas que cooperan.

            tr
              td.text-center 4
              td.text-center Transporte
              td Administra la transferencia de datos. Asimismo, garantiza que los datos recibidos sean idénticos a los transmitidos.

            tr
              td.text-center 3
              td.text-center Red
              td Administra las direcciones de datos y la transferencia entre redes. 

            tr
              td.text-center 2
              td.text-center Vínculo de datos
              td Administra la transferencia de datos en el medio de red. 

            tr
              td.text-center 1
              td.text-center Física
              td Define las características del #[i hardware] de red.

    .row.my-5
      .tarjeta.color-primario--borde.p-2
        .row
          .col-lg-2
            figure
              img(src="@/assets/curso/temas/tema1/img20.png", alt="alt").img20-tm-1
          .col-lg-3
          .col-lg-7
            p Para realizar el inventario de activos, es importante identificar las diferentes capas del modelo, ya que a partir de estas se pueden categorizar y clasificar los diferentes activos, principalmente las capas 1, 3 y 7, donde se pueden encontrar varios de los elementos de la infraestructura física y lógica de la red.

    separador

    #t_1_2

    .titulo-segundo.color-acento-contenido.my-5
      h2 1.2  Tipos y clasificación de redes de datos

    .row.my-5    
      p Otro concepto de las redes que ayuda ampliamente a identificar y clasificar los activos es comprender cómo se categorizan las redes, específicamente hablando de su dimensión.
      p A continuación, se mencionan los tipos de redes según su área de cobertura:

    .row.justify-content-center.my-5
      .col-lg-9
        AcordionA.p-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Red PAN").justify-content-center
            .col-9.col-lg-4
              figure
                img(src="@/assets/curso/temas/tema1/img21.svg", alt="alt")

            .col-lg-8
              p Este tipo de red nace de un concepto relativamente nuevo en comparación con las demás, sus siglas se traducen como red de área personal, y comprende la conexión y transferencia de datos que puede existir entre los diferentes dispositivos de uso personal, como un computador personal, parlantes inalámbricos, teléfonos inteligentes, auriculares, smartwatch, entre otros. Todos se integran en función del bienestar de la persona mediante tecnologías como USB o #[i Bluetooth].

          .row(titulo="Red LAN").justify-content-center
            .col-9.col-lg-4
              figure
                img(src="@/assets/curso/temas/tema1/img22.svg", alt="alt")

            .col-lg-8
              p Red de área local, esta es posiblemente la que más nos interese. Hace referencia a las redes que se conforman dentro de un mismo edificio, en un área relativamente cercana, o en otros términos, al conjunto de equipos conectados a un mismo enrutador. Estas redes pueden o no tener conexión a internet. Permiten el intercambio de información de manera interna y son muy comunes en oficinas, salas de sistemas, hogares o dependencias que comparten físicamente un mismo espacio. Para conformar este tipo de red es necesario implementar dispositivos de red como #[i routers], puntos de accesos o #[i switch] de red que administren la red, controlen el tráfico de información y permitan la conexión de diferentes equipos por medios como el cable Ethernet o wifi. 

          .row(titulo="Red MAN").justify-content-center
            .col-9.col-lg-4
              figure
                img(src="@/assets/curso/temas/tema1/img23.svg", alt="alt")

            .col-lg-8
              p La red de área metropolitana hace referencia a la red que conecta diferentes redes LAN que geográficamente no están muy distanciadas unas de otras. Por ejemplo, en una empresa o universidad que tenga varios edificios o bloques la red MAN sería la encargada de conectar las LAN de cada uno.

          .row(titulo="Red WAN").justify-content-center
            .col-9.col-lg-4
              figure
                img(src="@/assets/curso/temas/tema1/img24.svg", alt="alt")

            .col-lg-8
              p Red de área amplia, este concepto incluye a las redes que conectan múltiples equipos y las redes más pequeñas separadas por amplias distancias. Dentro de este grupo es donde se suele clasificar al Internet, la red más grande del planeta.

          .row(titulo="Otras clasificaciones").justify-content-center
            .col-9.col-lg-4
              figure
                img(src="@/assets/curso/temas/tema1/img25.svg", alt="alt")

            .col-lg-8
              p Las redes también se clasifican, por ejemplo, por su topología, es decir, la forma como se conectan los equipos de usuario (#[i host]) con el equipo de red (#[i switch, router], HUB), se clasifican por la tecnología o protocolos y capacidad, como sucede con las redes 4G, 5G, GSM, por el medio de transmisión usado, fibra óptica, Ethernet, HTC o wifi.

    separador

    #t_1_3

    .titulo-segundo.color-acento-contenido.my-5
      h2 1.3  Servicios de red, seguridad y configuraciones básicas

    .row.justify-content-center
      .col-6.col-lg-2.mb-4(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/tema1/img26.svg", alt="alt").img-flotante
      .col-lg-10
        p El propósito principal de las redes es la transferencia de información; para que esto ocurra, internamente se deben ejecutar varios protocolos o servicios. Su propósito es hacer más fácil la experiencia del usuario o directamente prestar algún tipo de beneficio mediante la combinación de #[i software] y #[i hardware]. Normalmente cada servicio está alojado en algún equipo (servidor), que posee las características técnicas necesarias para efectuar dicha función.  
        p Estos son algunos de los servicios más comunes:

    .row.my-5  
      ImagenInfografica.color-acento-botones.mt-5.d-none.d-md-block
        template(v-slot:imagen)
          figure
            img(src="@/assets/curso/temas/tema1/img27.png", alt="alt")

        .tarjeta.color-secundario.p-3(x="11.3%" y="70%" numero="").boton1
          .h5.mb-2 Servicios relacionados al acceso y conexión
          p Control de acceso, servidores con bases de datos que almacenan usuarios y contraseñas para permitir el acceso a determinados equipos o archivos, acceso remoto, servicios para acceder de manera remota a otro equipo.

        .tarjeta.color-secundario.p-3(x="30.7%" y="54.7%" numero="")
          .h5.mb-2 Servicios de Red
          p DHCP este servicio se encarga de asignar de manera automática las direcciones IP a cada equipo que se conecte a la Red, la asignación se basa en una serie de reglas preestablecidas y configuradas en el equipo; DNS El servicio de nombre del dominio, permite traducir las URL o direcciones de acceso en el IP asignados al equipo al que se quiere acceder, en la Rare los equipos y servidores, no se identifican por su nombre o URL lo que hacen por IP, ese servicio permite digitar el nombre del servidor y ser direcciones a su IP.

        .tarjeta.color-secundario.p-3(x="50.1%" y="70%" numero="")
          .h5.mb-2 Servicios operativos
          p Servicio de correo, impresión compartida, edición de línea de archivos.

        .tarjeta.color-secundario.p-3(x="69.56%" y="54.7%" numero="")
          .h5.mb-2 Servicio para transferencia y almacenamiento de archivos
          p Protocolo FTP es el usado para enviar información, bases de datos y servidores de almacenamiento.

        .tarjeta.color-secundario.p-3(x="89%" y="70%" numero="")
          .h5.mb-2 Protocolos de administración de red
          p Por ejemplo, el MSNM O protocolo de administración simple en la Red, que ayudan en la administración y monitoreo de esta.

    .row.my-5  
      ImagenInfografica.color-acento-botones.mt-5.d-block.d-md-none
        template(v-slot:imagen)
          figure
            img(src="@/assets/curso/temas/tema1/img27.png", alt="alt")

        .tarjeta.color-secundario.p-3(x="12.7%" y="70%" numero="").boton1
          .h5.mb-2 Servicios relacionados al acceso y conexión
          p Control de acceso, servidores con bases de datos que almacenan usuarios y contraseñas para permitir el acceso a determinados equipos o archivos, acceso remoto, servicios para acceder de manera remota a otro equipo.

        .tarjeta.color-secundario.p-3(x="31.5%" y="54.7%" numero="")
          .h5.mb-2 Servicios de Red
          p DHCP este servicio se encarga de asignar de manera automática las direcciones IP a cada equipo que se conecte a la Red, la asignación se basa en una serie de reglas preestablecidas y configuradas en el equipo; DNS El servicio de nombre del dominio, permite traducir las URL o direcciones de acceso en el IP asignados al equipo al que se quiere acceder, en la Rare los equipos y servidores, no se identifican por su nombre o URL lo que hacen por IP, ese servicio permite digitar el nombre del servidor y ser direcciones a su IP.

        .tarjeta.color-secundario.p-3(x="50.1%" y="70%" numero="")
          .h5.mb-2 Servicios operativos
          p Servicio de correo, impresión compartida, edición de línea de archivos.

        .tarjeta.color-secundario.p-3(x="68.7%" y="54.7%" numero="")
          .h5.mb-2 Servicio para transferencia y almacenamiento de archivos
          p Protocolo FTP es el usado para enviar información, bases de datos y servidores de almacenamiento.

        .tarjeta.color-secundario.p-3(x="87.5%" y="70%" numero="")
          .h5.mb-2 Protocolos de administración de red
          p Por ejemplo, el MSNM O protocolo de administración simple en la Red, que ayudan en la administración y monitoreo de esta.


    separador

    #t_1_4

    .titulo-segundo.color-acento-contenido.my-5
      h2 1.4  Infraestructura física

    .row.my-5 
      p Hasta ahora hemos mencionado algunos aspectos generales sobre las redes, ahora es momento de mencionar los equipos y recursos que hacen posible que todos los protocolos y servicios funcionen a nivel físico (capa 1 del modelo OSI).
      p Para explorar los equipos que pueden hacer parte de la infraestructura de redes, hacer #[i click] sobre cada título y luego sobre las imágenes. 

    .row.justify-content-center
      .col-lg-8
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src="@/assets/curso/temas/tema1/img28.svg", alt="alt")

          .tarjeta.color-secundario.p-3(x="12.3%" y="48.1%" numero="")
            .h5.mb-2 Equipos de red
            .row
              .col-lg-6
                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    p #[strong Tarjeta de red:] es la tarjeta electrónica que cada equipo de red posee para poder conectarse y comunicarse.

                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    p #[strong HUB o concentrador:]  dispositivos que concentran la conexión de varios equipos para transmitir una misma señal, en la actualidad su uso es reducido y en general su función puede ser realizada por un #[i switch], su labor se limita a recibir y repetir información.

                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    p #[strong #[i Router] o enrutador:]  es un dispositivo que opera en la capa 3 del modelo OSI, su principal función es establecer las rutas para que los paquetes de datos viajen a través de la red, permite interconectar diferentes redes LAN, algunos incluyen funciones de #[i switch] y/o de punto de acceso inalámbrico.

                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    p #[strong Repetidores:] equipos cuya función es replicar la señal con el objeto de ampliar su área de cobertura, regenerar y reducir la atenuación de la misma.

              .col-lg-6
                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    p #[strong #[i Switch:]]  son elementos fundamentales de las redes LAN su función es permitir la conexión de otros equipos, desde ellos se asignan las direcciones IP y se regula el tráfico de datos a nivel interno de la red de área local, también permiten realizar otro tipo de gestiones como el DHCP y la gestión de Van, existen #[i Switch] administrables ( configurables) y no administrables (configuran de forma rápida y automática la red).

                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    p #[strong Puntos de acceso AP:]  dispositivos diseñados para permitir la conexión inalámbrica a la red, algunos incluyen funciones de #[i switch] o incluso de #[i router] para redes de baja capacidad y pocos usuarios.

                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    p #[strong Servidores:]  son equipos de características de #[i hardware] y #[i software] especiales para ejecutar uno o varios servicios solicitados por os diferente #[i host] de la red. 

                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    p #[strong Impresoras:] dispositivos de #[i hardware] destinados a la impresión de archivos, sus características le permiten servir y recibir solicitudes de diferentes clientes de la red a través de protocolos de red LAN. 

          .tarjeta.color-secundario.p-4(x="24.3%" y="77.5%" numero="")
            .h5.mb-2 Equipos de seguridad
            .row.justify-content-center
              .col-lg-6
                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    p #[strong #[i Gateway]:] son equipos utilizados como puntos de enlace entre el proveedor de internet o ISP y la red interna de la compañía, poseen una serie de protocolos que se enfocan en la conectividad y seguridad de la información que entra y sale de la red interna.
              
                .row.justify-content-center.my-3
                  .col-lg-8
                    figure
                      img(src="@/assets/curso/temas/tema1/img29.png", alt="alt")              
              

                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    p #[strong #[i Firewall]:]   definido por Cisco [6], “Un #[i firewall] es un dispositivo de seguridad de la red que monitorea el tráfico de red —entrante y saliente— y decide si permite o bloquea tráfico específico en función de un conjunto definido de reglas de seguridad.”

              .col-lg-6
                p “Los #[i firewalls] han constituido una primera línea de defensa en seguridad de la red durante más de 25 años. Establecen una barrera entre las redes internas protegidas y controladas en las que se puede confiar y redes externas que no son de confianza, como Internet.” 
                p “Un #[i firewall] puede ser #[i hardware], #[i software] o ambos. ” 

                .row.justify-content-center.my-3
                  .col-lg-8
                    figure
                      img(src="@/assets/curso/temas/tema1/img30.png", alt="alt")              
              

          .tarjeta.color-secundario.p-3(x="50.2%" y="93.4%" numero="")
            .h5.mb-2 Equipos terminales
            p Se refiere a todos los equipos que son de uso del usuario, PC, dispositivos móviles, teléfonos pantallas, interfaces de usuario HMI.

            .row.justify-content-center.my-3
              .col-lg-6
                figure
                  img(src="@/assets/curso/temas/tema1/img31.png", alt="alt") 

          .tarjeta.color-secundario.p-3(x="76.5%" y="77%" numero="")
            .h5.mb-2 Cableado estructurado
            p Este término agrupa todo el conjunto de elementos  que sostienen la red cableada y permiten la conexión de los equipos de red y equipos de usuario, esto incluye el cableado, terminales, tomas y puntos de conexión, bandejas, ductos, canaletas, racks, gabinetes, cuartos de equipos y otros elementos estructurales necesarios para la red cableada de la organización; en este punto el inventario de activos se amplía considerablemente.

            .row.justify-content-center.my-3
              .col-lg-6
                figure
                  img(src="@/assets/curso/temas/tema1/img32.png", alt="alt") 

          .tarjeta.color-secundario.p-3(x="87.8%" y="47.1%" numero="")
            .h5.mb-2 Red eléctrico
            p Es la red eléctrica encargada de dar energía a todos los equipos de la red, se incluyen también los equipos de protección, reguladores y sistemas de respaldo energético o UPS, encargados de garantizar las condiciones eléctricas necesarias para el buen funcionamiento de los equipos.

            .row.justify-content-center.my-3
              .col-lg-6
                figure
                  img(src="@/assets/curso/temas/tema1/img33.png", alt="alt") 

    separador

    #t_1_5

    .titulo-segundo.color-acento-contenido.my-5
      h2 1.5  Infraestructura lógica

    .row.justify-content-center.my-5
      .col-lg-10
        .row.justify-content-center
          .col-6.col-lg-4.mb-4(data-aos="fade-right")
            figure
              img(src="@/assets/curso/temas/tema1/img34.png", alt="alt").img-flotante2
          .col-lg-8
            p Cuando se hace referencia a la infraestructura lógica, también se refiere al componente de #[i software] presente en las redes, que permite su funcionamiento, gestión y seguridad, así como al conjunto de programas y herramientas usados en los procesos de la compañía. 
            p Debajo se listan algunas categorías de recursos lógicos:

    .row.justify-content-center.my-5
      TabsA.color-secundario
        .tarjeta.tarjeta--gris4.p-4(titulo="Sistemas operativos")
          p Usados por computadoras y equipos para su funcionamiento.

        .tarjeta.tarjeta--gris4.p-4(titulo="Antivirus")
          p #[i Software] especializado en la protección contra amenazas.

        .tarjeta.tarjeta--gris4.p-4(titulo="<i>Software</i> para monitoreo y <br>administración de la red")
          p Máquinas virtuales, escritorios remotos, #[i software] de supervisión y control de la red, #[i software] instalado en los equipos de red que permiten la ejecución de servicios y la configuración para el funcionamiento de la red.

        .tarjeta.tarjeta--gris4.p-4(titulo="<i>Software</i>  para uso operativo ")
          p Herramientas de diseño, procesadores de texto, hojas de cálculo y otros usados para realizar actividades específicas de la compañía.

        .tarjeta.tarjeta--gris4.p-4(titulo="<i>Software</i> enfocado <br>en la comunicación ")
          p Correo electrónico, telefonía IP, chat.

        .tarjeta.tarjeta--gris4.p-4(titulo="<i>Software</i> para <br>almacenamiento y bases de datos")
          p Especializado en archivar, comprimir y organizar información.

    separador

    #t_1_6

    .titulo-segundo.color-acento-contenido.my-5
      h2 1.6  Activos digitales

    .row.justify-content-center.my-5
      .col-lg-5.my-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/tema1/img35.png", alt="alt")
      .col-lg-7
        p Se nombra a los activos digitales como la producción, material y en general información que por sus características aporta algún tipo de valor a la empresa, es necesario para algún proceso y que, como su nombre lo indica, ha sido producido y/o almacenado de manera digital.
        .bloque-texto-b6
          .bloque-texto-b__texto
            p En este punto no se habla de programas o herramientas digitales, se relaciona todo el conocimiento registrado del trabajo producido por los colaboradores de la empresa que debe ser conservado por su relevancia o aspectos legales.

        .bloque-texto-b7.my-3
          .bloque-texto-b__texto
            p No solo la infraestructura física y digital conforma el inventario de activos de la empresa, los activos digitales son un tercer elemento sumamente importante, sobre todo en esta época en donde el desarrollo de #[i software] y conocimiento es tan bien valorado y necesario en las empresas. Las empresas buscan producir su propio material y depender cada vez menos de terceros, los desarrollos de #[i software], el material publicitario, los enormes archivos de registros, procesos, procedimientos, y en general la producción digital de sus colaboradores, son piezas claves en el éxito de los procesos y el funcionamiento de la empresa.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img36.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Tanto por su valor como por su volumen, es muy necesario que la empresa tenga completo conocimiento y control de sus activos digitales. Es por esto que es necesario tener un inventario que permita identificar los activos y acceder a ellos fácilmente, tener un control para clasificar, eliminar lo irrelevante, evitar reprocesos en búsquedas o en producción de aquello que ya existe, además de acelerar los procesos dentro de la empresa.


    .row.justify-content-center.my-5
      SlyderF.mb-5.mt-5(columnas="col-lg-6 col-xl-4")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img37.png' alt='AvatarTop')
          .tarjeta.tarjeta--gris3.p-4
            p.text-center.mt-5 Propiedad intelectual, planos, diseños, patentes, documentos, publicaciones y material multimedia, propiedad de la empresa.

        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img38.png' alt='AvatarTop')
          .tarjeta.tarjeta--gris3.p-4
            p.text-center.mt-5 Imágenes, piezas gráficas, material publicitario, video y audio.

        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img39.png' alt='AvatarTop')
          .tarjeta.tarjeta--gris3.p-4
            p.text-center.mt-5 Ambientes virtuales, metaverso, páginas web, redes sociales, blogs y otros espacios en la red.

        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img40.png' alt='AvatarTop')
          .tarjeta.tarjeta--gris3.p-4
            p.text-center.mt-5 Producción de conocimiento, formatos, plantillas, documentos técnicos, explicativos e instructivos.

        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img41.png' alt='AvatarTop')
          .tarjeta.tarjeta--gris3.p-4
            p.text-center.mt-5 Acciones, criptomonedas, servicios prestados por la empresa a través del mundo digital, aplicaciones, plataformas, etc.

        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img42.png' alt='AvatarTop')
          .tarjeta.tarjeta--gris3.p-4
            p.text-center.mt-5 Licencias, recursos, herramientas y plataformas digitales propiedad de la empresa que puedan ser usadas por terceros y vendidas o alquiladas a estos.




</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
