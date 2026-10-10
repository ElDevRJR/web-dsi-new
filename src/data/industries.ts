import { IndustryItem } from '../types';

export const INDUSTRIES_DATA: Record<string, IndustryItem> = {
  'pequena-empresa': {
    id: 'pequena-empresa',
    slug: 'pequena-empresa',
    name: 'Pequeña Empresa',
    tagline: 'Orden operativo y facturación electrónica ágil para crecer sin descontrol',
    summary: 'Para empresas en crecimiento que necesitan dejar atrás las hojas de cálculo dispersas y unificar sus compras, stock, ventas y cobranzas en una herramienta confiable y fácil de adoptar.',
    challenges: [
      'Diferencias entre el stock físico y lo registrado en libretas u hojas de cálculo.',
      'Demoras en la emisión de facturas electrónicas y guías al momento de la venta.',
      'Dificultad para saber con exactitud qué clientes deben y qué facturas están por vencer.',
      'Pérdida de tiempo al cotizar por falta de listas de precios actualizadas.',
    ],
    erpModules: [
      {
        title: 'Compras y Control de Costos',
        description: 'Registro ordenado de compras a proveedores con actualización automática de costos y stock en almacén.',
      },
      {
        title: 'Almacenes e Inventarios Centralizados',
        description: 'Kardex valorizado en tiempo real, alertas de stock mínimo y registro de ingresos y salidas.',
      },
      {
        title: 'Preventa y Ventas Rápidas',
        description: 'Módulo de venta ágil para mostrador o cobranza directa con aplicación inmediata de listas de precios.',
      },
      {
        title: 'Cobranzas y Cuentas por Cobrar',
        description: 'Control claro de créditos otorgados a clientes, abonos parciales y calendario de vencimientos.',
      },
      {
        title: 'Comprobantes Electrónicos y Guías SUNAT',
        description: 'Emisión directa de Facturas, Boletas y Guías de Remisión Electrónicas sin trámites externos.',
      },
    ],
    operationalFocus: [
      'Implementación rápida orientada a equipos pequeños sin necesidad de personal de TI interno.',
      'Entorno amigable que reduce la curva de aprendizaje del personal comercial y de caja.',
      'Información ordenada que facilita el trabajo coordinado con el contador.',
    ],
  },
  'mediana-empresa': {
    id: 'mediana-empresa',
    slug: 'mediana-empresa',
    name: 'Mediana Empresa',
    tagline: 'Coordinación entre áreas, permisos por rol y control operativo centralizado',
    summary: 'A medida que la empresa expande sus sedes, volumen de personal y transacciones, la coordinación entre compras, almacén central, ventas y finanzas exige un sistema con roles bien definidos y trazabilidad absoluta.',
    challenges: [
      'Falta de sincronización entre el almacén central y los puntos de venta o sucursales.',
      'Necesidad de restringir permisos para que cada colaborador acceda sólo a lo que le corresponde.',
      'Dificultad de los gerentes para consolidar cifras operativas de diferentes locales.',
      'Retrasos en la conciliación de créditos y pagos de clientes corporativos.',
    ],
    erpModules: [
      {
        title: 'Control Multisede y Transferencias',
        description: 'Gestión unificada de múltiples almacenes con guías de remisión electrónicas entre sedes y control de tránsito.',
      },
      {
        title: 'Gestión de Permisos y Perfiles de Usuario',
        description: 'Asignación granular de accesos por área: cajeros, despachadores, supervisores y administradores.',
      },
      {
        title: 'Líneas de Crédito y Control de Riesgo Comercial',
        description: 'Definición de topes de crédito por cliente con bloqueo automático de facturación ante sobregiro o mora.',
      },
      {
        title: 'Reportes de Rotación y Rentabilidad por Línea',
        description: 'Análisis de artículos de mayor rotación y margen bruto para optimizar la reposición de mercadería.',
      },
      {
        title: 'Gestión de Cuentas por Pagar y Letras de Proveedores',
        description: 'Programación de pagos a proveedores y control del estado de aceptación de letras.',
      },
    ],
    operationalFocus: [
      'Estandarización de procesos operativos para que la empresa no dependa de la memoria de las personas.',
      'Trazabilidad completa: registro del usuario, fecha y hora de cada transacción efectuada.',
      'Conectividad remota mediante servidor en la nube (VPS) para enlazar sucursales en Lima y provincias.',
    ],
  },
  'distribuidoras': {
    id: 'distribuidoras',
    slug: 'distribuidoras',
    name: 'Distribuidoras',
    tagline: 'Gestión de inventarios, ubicaciones, picking, packing y control de despachos en ruta',
    summary: 'Las empresas distribuidoras dependen de la velocidad y precisión en el almacén. DSINet estructura el circuito completo desde la preventa y preparación del pedido hasta la entrega con Guía de Remisión Electrónica.',
    challenges: [
      'Tiempos prolongados en armar pedidos debido a falta de zonificación y orden en almacén.',
      'Errores en el despacho: entregar mercadería incorrecta o cantidades equivocadas al transportista.',
      'Descoordinación entre lo que la fuerza de ventas ofrece en la calle y lo que realmente queda en stock.',
      'Exigencia estricta de SUNAT en la emisión y validación de Guías de Remisión Electrónicas Remitente y Transportista.',
    ],
    erpModules: [
      {
        title: 'Ubicaciones de Almacén y Zonificación',
        description: 'Mapeo de pasillos, racks y niveles para identificar la localización exacta de cada producto.',
      },
      {
        title: 'Proceso de Picking y Packing',
        description: 'Generación de listas de preparación de pedidos para recolectores y verificación de bultos antes del embalaje.',
      },
      {
        title: 'Preventa y Fuerza Comercial',
        description: 'Carga de pedidos por rutas o zonas con aplicación de listas de precios mayoristas y escalas de volumen.',
      },
      {
        title: 'Distribución y Guías de Remisión Electrónicas (GRE)',
        description: 'Emisión masiva de GRE con vinculación a unidades de transporte, conductores y destinatarios según SUNAT.',
      },
      {
        title: 'Control de Despachos y Retornos de Mercadería',
        description: 'Liquidación de entrega en ruta, registro de mercadería no entregada y reingreso inmediato a stock.',
      },
    ],
    operationalFocus: [
      'Agilidad máxima en el patio de maniobras para despachar más pedidos por jornada de reparto.',
      'Reducción de mermas y extravíos en almacenes con alto volumen de movimiento diario.',
      'Total concordancia entre el inventario del sistema y la realidad física de los racks.',
    ],
  },
  'importadoras': {
    id: 'importadoras',
    slug: 'importadoras',
    name: 'Importadoras',
    tagline: 'Costeo landed de importación, letras, líneas de crédito y control de distribución',
    summary: 'Las importadoras enfrentan retos singulares: recepción de contenedores, costeo exacto prorrateando fletes y aranceles, otorgamiento de créditos a distribuidores y cobranza mediante letras en moneda nacional o dólares.',
    challenges: [
      'Dificultad para calcular el costo unitario real de cada artículo sumando fletes, aduanas y seguros.',
      'Gestión manual de letras de cambio por cobrar y pagar con múltiples fechas de vencimiento y bancos.',
      'Recepción masiva de contenedores y ubicación rápida en almacenes de gran altura.',
      'Riesgo crediticio al otorgar mercadería a distribuidores sin un control estricto de límites concedidos.',
    ],
    erpModules: [
      {
        title: 'Liquidación y Costeo de Importaciones',
        description: 'Registro de carpetas de importación (DUA / DAM) y prorrateo de gastos aduaneros para obtener el costo landed real.',
      },
      {
        title: 'Recepción de Mercadería y Almacenamiento',
        description: 'Ingreso sistemático por bultos y lotes a almacén con verificación contra el packing list de origen.',
      },
      {
        title: 'Control de Letras por Cobrar y por Pagar',
        description: 'Registro de letras aceptadas, en cartera, en descuento o cobranza libre en entidades financieras peruanas.',
      },
      {
        title: 'Líneas de Crédito Multimoneda (Soles / Dólares)',
        description: 'Evaluación y control en tiempo real de saldos vencidos y líneas disponibles para clientes mayoristas.',
      },
      {
        title: 'Picking, Packing y Despacho Mayorista',
        description: 'Preparación de despachos por pallets o cajas cerradas con emisión de Guías de Remisión Electrónicas.',
      },
    ],
    operationalFocus: [
      'Conocimiento del margen comercial neto conociendo el costo de adquisición real y no estimado.',
      'Disminución del riesgo de cartera morosa mediante el seguimiento automatizado de letras y vencimientos.',
      'Operatividad sin contratiempos con comprobantes de pago electrónicos y guías en moneda extranjera y local.',
    ],
  },
};
