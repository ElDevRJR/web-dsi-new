export interface NavItem {
  name: string;
  href: string;
  badge?: string;
  description?: string;
}

export const PRODUCTOS_MENU: NavItem[] = [
  {
    name: 'DSINet - ERP Core',
    href: '/soluciones/dsinet-erp-core',
    description: 'Gestión integral: compras, almacén, ventas, cobranzas y facturación electrónica.',
  },
  {
    name: 'DSI - Pedidos',
    href: '/soluciones/dsi-pedidos',
    description: 'Agilización de preventa, toma de pedidos en campo y sincronización con almacén.',
  },
  {
    name: 'Desarrollo de Software a Medida',
    href: '/soluciones/software-a-medida',
    description: 'Soluciones y módulos desarrollados según requerimientos operativos específicos.',
  },
  {
    name: 'DSI - Contabilidad',
    href: '/soluciones/dsi-contabilidad',
    badge: 'Próximamente',
    description: 'Módulo contable integrado a procesos operativos y tributarios locales.',
  },
  {
    name: 'DSI - Gerencial',
    href: '/soluciones/dsi-gerencial',
    badge: 'Próximamente',
    description: 'Panel ejecutivo con indicadores clave, flujo y control de rentabilidad.',
  },
];

export const SERVICIOS_MENU: NavItem[] = [
  {
    name: 'Servicio de Soporte',
    href: '/servicios/soporte',
    description: 'Acompañamiento técnico, mesa de ayuda y resolución de incidencias.',
  },
  {
    name: 'Certificados Digitales',
    href: '/servicios/certificados-digitales',
    description: 'Certificados válidos para la firma y emisión de comprobantes ante SUNAT.',
  },
  {
    name: 'NubeFact - OSE',
    href: '/servicios/nubefact-ose',
    description: 'Conexión y validación de comprobantes mediante Operador de Servicios Electrónicos.',
  },
  {
    name: 'Servidor en la Nube (VPS)',
    href: '/servicios/servidor-vps',
    description: 'Alojamiento en la nube para sistemas de gestión con acceso remoto seguro.',
  },
  {
    name: 'Modificación de Sistema',
    href: '/servicios/modificacion-sistema',
    description: 'Adecuación de formatos, reportes y flujos existentes a nuevas necesidades.',
  },
];

export const SECTORES_MENU: NavItem[] = [
  {
    name: 'Pequeña Empresa',
    href: '/sectores/pequena-empresa',
    description: 'Control de compras, almacén, facturación rápida y cobranzas ordenadas.',
  },
  {
    name: 'Mediana Empresa',
    href: '/sectores/mediana-empresa',
    description: 'Coordinación entre áreas, permisos por rol y reportes consolidados.',
  },
  {
    name: 'Distribuidoras',
    href: '/sectores/distribuidoras',
    description: 'Ubicaciones de almacén, picking, packing, preventa y despachos en ruta.',
  },
  {
    name: 'Importadoras',
    href: '/sectores/importadoras',
    description: 'Costeo de importación, letras por cobrar/pagar, líneas de crédito y guías.',
  },
];

export const COMPANY_CONTACT = {
  email: 'ventas@dsi-sac.com',
  phone: '+51 940 769 186',
  phoneRaw: '+51940769186',
  whatsappUrl: 'https://wa.me/51940769186?text=Hola%20DSISAC%2C%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20soluciones%20de%20software',
  address: 'Lima, Perú',
  website: 'https://dsi-sac.com/',
  social: {
    facebook: 'https://www.facebook.com/61584735741182',
    instagram: 'https://www.instagram.com/dsisac.peru/',
    tiktok: 'https://www.tiktok.com/@dsisac',
  },
};
