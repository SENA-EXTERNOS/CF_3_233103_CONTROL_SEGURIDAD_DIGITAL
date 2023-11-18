export default {
  global: {
    componenteFormativo: 'Clasificación e inventariado de activos tecnológicos',
    descripcionCurso:
      'Este componente formativo aborda aspectos clave de la identificación, clasificación y elaboración del inventario de activos tecnológicos del sistema de información de la empresa. El aprendiz se afianzará en conceptos fundamentales generalidades sobre redes de datos e identificación de sus componentes y, así, enfocarse en la realización del inventario de activos tecnológicos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Redes de datos, identificación de activos tecnológicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Concepto de red y su funcionamiento',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Clasificación de redes y servicios de red',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Infraestructura lógica y activos digitales',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Inventario',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Redes de datos, identificación de activos tecnológicos',
      referencia:
        'IONOS. (2019). <i>Conoce los tipos de redes más importantes</i>. ',
      tipo: 'Artículo',
      link:
        'https://www.ionos.es/digitalguide/servidores/know-how/los-tipos-de-redes-mas-conocidos/#:~:text=Local%20Area%20Networks%20(LAN)%20o,o%20red%20de%20%C3%A1rea%20global',
    },
    {
      tema: 'Redes de datos, identificación de activos tecnológicos',
      referencia:
        'Znet IT Solutions. (s.f.). <i>Qué es la infraestructura de redes y el cableado estructurado.</i> ',
      tipo: 'Artículo',
      link:
        'https://www.z-net.com.ar/blog-post/que-es-la-infraestructura-de-redes-y-el-cableado-estructurado/',
    },
    {
      tema: 'Redes de datos, identificación de activos tecnológicos',
      referencia: 'Cisco (s.f.). <i>¿Qué es un firewall?</i>',
      tipo: 'Artículo',
      link:
        'https://www.cisco.com/c/es_mx/products/security/firewalls/what-is-a-firewall.html#~tipos-de-firewalls',
    },
  ],
  glosario: [
    {
      termino: '<i>Bit</i>',
      significado:
        'En informática, se refiere a la unidad mínima de almacenamiento, la cual almacena datos en sistema binario, es decir, solo tiene dos posibles valores o estados: 0 y 1.',
    },
    {
      termino: 'Codificación',
      significado:
        'En el contexto de este contenido, la codificación es el proceso mediante el cual la información es trasladada a un sistema nuevo de representación; en nuestro caso, las imágenes y cualquier tipo de archivo es codificado en el sistema binario.',
    },
    {
      termino: 'Dirección IPV4',
      significado:
        'Código de 32 <em>bits</em> mediante el cual se puede identificar un equipo en la red.',
    },
    {
      termino: 'Ethernet',
      significado:
        'Es una tecnología muy utilizada para la conexión entre equipos de red de forma cableada, usando cable de par trenzado, conectores y puertos compatibles con este sistema.',
    },
    {
      termino: '<i>Host</i>',
      significado:
        'Término usado para referirse a un equipo terminal de usuario, como un computador o <em>smartphone</em>.',
    },
    {
      termino: 'Inventario',
      significado:
        'Documento de carácter técnico donde se incluyen todos los elementos o activos de una empresa, acompañados de su correspondiente codificación y otra información según las necesidades de la compañía.',
    },
    {
      termino: 'Máscara de red',
      significado:
        'Es un código de <em>bits</em> adicional a la dirección IP que permite identificar qué segmento de esta corresponde al identificador de la red y cuál a la identificación del equipo.',
    },
    {
      termino: 'Medio de transmisión',
      significado:
        'Es el objeto o medio sobre el cual se transfiere una señal, hay medios guiados basados en cables de cobre o fibra óptica, y tecnologías para transmisión inalámbrica como las redes <em>wifi</em> o <em>Bluetooth</em>.',
    },
    {
      termino: 'Protocolo',
      significado:
        'En redes corresponde al conjunto de reglas y a la estructura en la cual debe transmitirse la información para llegar a su destino.',
    },
    {
      termino: '<i>Switch</i>',
      significado:
        'Dispositivo para unir o conectar computadoras u otros dispositivos en red.',
    },
  ],
  referencias: [
    {
      referencia: 'Cisco (s.f.). <i>¿Qué es un firewall?</i> ',
      link:
        'https://www.cisco.com/c/es_mx/products/security/firewalls/what-is-a-firewall.html',
    },
    {
      referencia:
        'Ionos.es (2018). <i>Dirección MAC (Media Access Control).</i> Ionos.es. ',
      link:
        'https://www.ionos.es/digitalguide/servidores/know-how/direccion-mac/',
    },
    {
      referencia: 'IBM (2021). <i>Protocolos TCP/IP.</i> ',
      link:
        'https://www.ibm.com/docs/es/aix/7.2?topic=protocol-tcpip-protocols',
    },
    {
      referencia:
        'Ministerio de tecnologías de la información y las comunicaciones (2016). <i>Guía para la Gestión y Clasificación de Activos de Información.</i> ',
      link:
        'https://www.mintic.gov.co/gestionti/615/articles-5482_G5_Gestion_Clasificacion.pdf',
    },
    {
      referencia: 'Oracle (2010). <i>Modelo de referencia OSI.</i>',
      link:
        'https://docs.oracle.com/cd/E19957-01/820-2981/ipov-8/index.html#:~:text=El%20modelo%20OSI%20describe%20una,entre%20las%20redes%20de%20cooperaci%C3%B3n.',
    },
    {
      referencia:
        'Ordenadores y portátiles (s.f.). <i>¿Cuál es la Diferencia entre una IP Pública y una Privada?</i> ',
      link: 'https://www.ordenadores-y-portatiles.com/ip-publica-privada/   ',
    },
    {
      referencia:
        'Sánchez Ramos, J. (2007). <i>Modelos de inventario.</i> Escuela de Ingeniería de Transporte, Facultad de Ingeniería, Pontificia Universidad Católica de Valparaíso ',
      link:
        'https://www-virtualpro-co.bdigital.sena.edu.co/biblioteca/modelos-de-inventario',
    },
    {
      referencia:
        'Tanenbaum A, y Wetherall D (2008). <i>Redes de computadoras</i> (5 ed.). Pearson.',
      link:
        'https://bibliotecavirtualapure.files.wordpress.com/2015/06/redes_de_computadoras-freelibros-org.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
