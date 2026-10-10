import { BlogPost } from '../types';

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'claves-sincronizacion-inventarios-guias-remision-peru',
    title: 'Claves para la sincronización de inventarios y guías de remisión electrónicas en distribuidoras peruanas',
    excerpt: 'Cómo articular la normativa SUNAT de Guías de Remisión Electrónicas (GRE) con los procesos físicos de almacén para evitar multas e inmovilizaciones de carga.',
    category: 'Logística y Normativa',
    publishedAt: '01 de Octubre, 2026',
    readTime: '6 min de lectura',
    author: {
      name: 'Equipo Técnico DSISAC',
      role: 'Consultoría en Soluciones ERP',
    },
    content: [
      {
        sectionTitle: 'El desafío de la emisión electrónica en el punto de despacho',
        paragraphs: [
          'La obligatoriedad de la Guía de Remisión Electrónica (GRE Remitente y GRE Transportista) por parte de la SUNAT transformó sustancialmente la rutina de los centros de distribución en el país. Ya no es viable elaborar un documento manual con enmiendas de último momento cuando el camión ya está cargado en el andén.',
          'Cualquier discrepancia entre el código de producto, el peso bruto total o los datos del conductor y vehículo puede derivar en la retención del transporte en garitas de control o en sanciones tributarias severas para el remitente de los bienes.',
        ],
      },
      {
        sectionTitle: 'Articulación entre el picking de almacén y la GRE',
        paragraphs: [
          'Para que el despacho fluya con rapidez, la generación de la GRE no debe ser un paso administrativo aislado. En una operativa eficiente, el documento se genera como consecuencia natural del proceso de packing.',
          'Cuando el operario termina de escanear o confirmar las unidades preparadas para el pedido, el ERP valida que el stock haya sido descontado del lote correspondiente y genera automáticamente el archivo XML firmado con el certificado digital de la empresa, comunicándolo a la SUNAT o al OSE.',
        ],
      },
      {
        sectionTitle: 'Buenas prácticas para evitar contingencias en ruta',
        paragraphs: [
          '1. Verificación previa de datos del transportista: Mantener un registro validado de placas, licencias de conducir y RUC de empresas de transporte de carga habituales.',
          '2. Peso bruto calculado automáticamente: El catálogo de productos debe registrar el peso unitario exacto para que el sistema calcule el peso total del envío sin necesidad de estimaciones manuales.',
          '3. Conexión estable con el proveedor de facturación u OSE: Contar con mecanismos de reintento y almacenamiento local del código QR de la guía para que el transportista inicie su ruta con la representación impresa o digital sin demoras.',
        ],
      },
    ],
  },
  {
    slug: 'como-elegir-erp-adaptado-normativa-tributaria-peruana',
    title: 'Cómo elegir un ERP adaptado a la normativa tributaria y operativa local',
    excerpt: 'Por qué los sistemas internacionales genéricos suelen requerir desarrollos costosos y qué aspectos esenciales debe incluir un software de gestión en el mercado peruano.',
    category: 'Gestión Empresarial',
    publishedAt: '3 de Octubre, 2026',
    readTime: '8 min de lectura',
    author: {
      name: 'Equipo Técnico DSISAC',
      role: 'Arquitectura de Software Empresarial',
    },
    content: [
      {
        sectionTitle: 'La brecha entre el software estándar y la operación local',
        paragraphs: [
          'Muchas empresas peruanas inician proyectos de implementación con plataformas de software extranjeras de renombre mundial, para descubrir meses más tarde que conceptos fundamentales de su día a día —como las detracciones del Banco de la Nación, las percepciones de IGV, la retención de clientes o la emisión de letras de cambio— no existen de manera nativa en el sistema.',
          'La adaptación mediante parches o consultores externos suele elevar de forma desmedida el presupuesto y generar inconsistencias en los cierres mensuales.',
        ],
      },
      {
        sectionTitle: 'Módulos indispensables en una solución ERP para Perú',
        paragraphs: [
          'Un ERP verdaderamente preparado para la realidad peruana debe integrar desde su diseño base:',
          '• Facturación electrónica nativa: Generación de Facturas, Boletas, Notas de Crédito, Notas de Débito y Guías con firma digital sin depender de aplicaciones puente complejas.',
          '• Control de Detracciones y Percepciones: Cálculo porcentual automático según el tipo de bien o servicio y registro de las constancias de depósito para evitar contingencias fiscales.',
          '• Manejo de Moneda Dual (Soles y Dólares): Registro de operaciones en moneda extranjera con captura y control del tipo de cambio oficial de compra y venta diario.',
          '• Gestión de Letras de Cambio: Seguimiento del ciclo de letras aceptadas, en descuento bancario o en cobranza libre, una práctica comercial sumamente habitual en el comercio mayorista local.',
        ],
      },
      {
        sectionTitle: 'El factor soporte y cercanía con la fábrica de software',
        paragraphs: [
          'La normativa tributaria en el Perú es dinámica. Los formatos de libros electrónicos evolucionan (como la transición hacia el SIRE) y las exigencias de validación se actualizan continuamente.',
          'Tener como aliado a una fábrica de software que mantiene y actualiza el código en el mismo huso horario y con conocimiento directo de la normativa brinda a la gerencia una tranquilidad invaluable.',
        ],
      },
    ],
  },
  {
    slug: 'optimizacion-picking-packing-empresas-importadoras',
    title: 'Del almacén al despacho: optimización de picking y packing en empresas importadoras',
    excerpt: 'Estrategias operativas para reducir los tiempos de preparación de pedidos y evitar roturas de stock tras el desembarque de contenedores.',
    category: 'Operaciones y Almacén',
    publishedAt: '05 de Octubre, 2026',
    readTime: '5 min de lectura',
    author: {
      name: 'Equipo Técnico DSISAC',
      role: 'Ingeniería de Procesos',
    },
    content: [
      {
        sectionTitle: 'La llegada del contenedor y el ingreso al inventario',
        paragraphs: [
          'Para una empresa importadora, el momento de apertura y descarga de un contenedor es crítico. Cientos o miles de cajas deben ser clasificadas, cotejadas con la factura comercial del proveedor y el packing list internacional, e ingresadas de inmediato al Kardex para no demorar las preventas comprometidas.',
          'Cuando el sistema permite el registro de bultos y la asignación inmediata de ubicaciones físicas (pasillo, estante, nivel), el personal de almacén evita el desorden de mercancías apiladas temporalmente sin control.',
        ],
      },
      {
        sectionTitle: 'Rutas de recolección (Picking) eficientes',
        paragraphs: [
          'El desplazamiento del personal dentro del almacén representa hasta el 50% del tiempo total de preparación de pedidos. Un ERP estructurado no emite una lista al azar: agrupa los productos según la secuencia de pasillos de menor recorrido.',
          'Asimismo, en operaciones con pedidos de alto volumen, el picking por olas permite que un mismo operario recolecte mercadería para múltiples pedidos simultáneamente, consolidándolos luego en el área de embalaje.',
        ],
      },
      {
        sectionTitle: 'Control de calidad en Packing y etiquetado final',
        paragraphs: [
          'El paso final es la verificación en la mesa de packing. Mediante la lectura de códigos de barras de las cajas o unidades preparadas, el sistema certifica que no falte ni sobre ningún artículo antes de cerrar el bulto.',
          'Una vez sellado, se imprime la etiqueta de despacho con los datos del destinatario, el número de bulto y la guía de remisión electrónica vinculada, dejando la carga lista para su entrega al transporte.',
        ],
      },
    ],
  },
];
