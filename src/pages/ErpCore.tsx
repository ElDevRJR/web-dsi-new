
import React from 'react';
import { SEO } from '../components/ui/SEO';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { BlurText } from '../components/ui/BlurText';
import { Reveal } from '../components/ui/Reveal';
import { MotionCard } from '../components/ui/MotionCard';
import { Button } from '../components/ui/Button';
import { ImageReveal } from '../components/ui/ImageReveal';
import { TechnicalGrid } from '../components/ui/TechnicalGrid';
import { ErpInteractiveFlow } from '../components/sections/ErpInteractiveFlow';
import { ErpSoftwarePreview } from '../components/sections/ErpSoftwarePreview';
import { CTASection } from '../components/sections/CTASection';
import {
  Boxes,
  ShoppingCart,
  TrendingUp,
  FileCheck2,
  Package,
  Layers,
  CreditCard,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Truck,
  Users,
  Building2,
} from 'lucide-react';
import erpImg from '../assets/images/hero_erp_operations_1791563324980.jpg';

export const ErpCore: React.FC = () => {
  const problems = [
    {
      title: 'Descuadre entre stock físico y registros',
      description:
        'Las diferencias entre las existencias reales y los registros del sistema pueden generar cancelaciones, retrasos y clientes insatisfechos.',
    },
    {
      title: 'Demoras en comprobantes y guías',
      description:
        'Los procesos de facturación y despacho pueden retrasarse cuando la emisión o validación de comprobantes y guías presenta dificultades.',
    },
    {
      title: 'Poco control de cobranzas y créditos',
      description:
        'La falta de visibilidad de facturas, letras y deudas vencidas dificulta el seguimiento de los clientes y la planificación de la liquidez.',
    },
    {
      title: 'Costos de importación difíciles de calcular',
      description:
        'Cuando los gastos de flete, seguros y aduanas no se distribuyen correctamente, resulta más difícil conocer el costo real de los productos.',
    },
  ];

  const modules = [
    {
      name: 'Compras y Proveedores',
      icon: <ShoppingCart className="h-5 w-5" />,
      description:
        'Gestiona las compras, la recepción de mercadería, el historial de precios y la información de tus proveedores.',
      highlights: [
        'Órdenes de compra y recepción',
        'Comparación de cotizaciones',
        'Registro de comprobantes de compra',
        'Control de cuentas por pagar',
      ],
    },
    {
      name: 'Almacenes e Inventarios',
      icon: <Boxes className="h-5 w-5" />,
      description:
        'Organiza las existencias, los movimientos de almacén y las transferencias entre ubicaciones y sucursales.',
      highlights: [
        'Kardex y movimientos de inventario',
        'Ubicaciones físicas de almacén',
        'Transferencias entre sucursales',
        'Ajustes y tomas físicas',
      ],
    },
    {
      name: 'Ventas y Preventa',
      icon: <TrendingUp className="h-5 w-5" />,
      description:
        'Organiza las cotizaciones, los pedidos, la preventa y las operaciones comerciales de tu empresa.',
      highlights: [
        'Cotizaciones y pedidos',
        'Listas de precios por cliente',
        'Punto de venta',
        'Comisiones y metas comerciales',
      ],
    },
    {
      name: 'Cobranzas y Cuentas por Cobrar',
      icon: <CreditCard className="h-5 w-5" />,
      description:
        'Consulta los saldos pendientes, registra abonos y organiza el seguimiento de los compromisos de pago.',
      highlights: [
        'Seguimiento de vencimientos',
        'Historial de pagos por cliente',
        'Registro en soles y dólares',
        'Control y cierre de caja',
      ],
    },
    {
      name: 'Comprobantes Electrónicos y Guías GRE',
      icon: <FileCheck2 className="h-5 w-5" />,
      description:
        'Gestiona la emisión de comprobantes electrónicos y guías de remisión según las necesidades de tu operación.',
      highlights: [
        'Facturas, boletas y notas',
        'Gestión de guías de remisión',
        'Representación impresa',
        'Integración según configuración',
      ],
    },
    {
      name: 'Picking y Packing',
      icon: <Package className="h-5 w-5" />,
      description:
        'Organiza la preparación, verificación y despacho de pedidos para operaciones de distribución y venta mayorista.',
      highlights: [
        'Preparación por pedido o ruta',
        'Verificación de artículos',
        'Etiquetado y packing list',
        'Coordinación con despacho',
      ],
    },
    {
      name: 'Importaciones y Costeo',
      icon: <Layers className="h-5 w-5" />,
      description:
        'Centraliza la información de las operaciones de importación y los gastos asociados a la adquisición de mercadería.',
      highlights: [
        'Distribución de gastos asociados',
        'Análisis del costo de productos',
        'Recepción de mercadería',
        'Control de diferencias de recepción',
      ],
    },
    {
      name: 'Líneas de Crédito y Letras',
      icon: <ShieldCheck className="h-5 w-5" />,
      description:
        'Apoya el control de los créditos comerciales y el seguimiento de letras por cobrar y por pagar.',
      highlights: [
        'Seguimiento de límites de crédito',
        'Registro y control de letras',
        'Gestión de documentos por cobrar',
        'Control de letras por pagar',
      ],
    },
  ];

  const companyProfiles = [
    {
      title: 'Pequeña empresa',
      description:
        'Compras, almacén, ventas, cobranzas y facturación electrónica para organizar la operación diaria.',
      icon: <Building2 className="h-5 w-5" />,
    },
    {
      title: 'Mediana empresa',
      description:
        'Mayor control de áreas, sucursales, transferencias y responsabilidades dentro de la operación.',
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: 'Distribuidoras',
      description:
        'Procesos de almacén, preparación de pedidos, preventa y despacho adaptados a la distribución.',
      icon: <Truck className="h-5 w-5" />,
    },
    {
      title: 'Importadoras',
      description:
        'Gestión de importaciones, costos asociados, documentos comerciales y control crediticio.',
      icon: <Layers className="h-5 w-5" />,
    },
  ];

  return (
    <>
      <SEO
        title="DSINet ERP Core | Software de Gestión Empresarial en Perú"
        description="Conoce DSINet ERP Core, el sistema de gestión empresarial para compras, almacenes, ventas, cobranzas y facturación electrónica, adaptado a las operaciones de las empresas peruanas."
        canonicalPath="/soluciones/dsinet-erp-core"
      />

      <main className="py-8 sm:py-10 lg:py-14">
        <Container>
          {/* Cabecera comercial */}
          <section className="relative mb-16 overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm">
            <div className="grid grid-cols-1 items-stretch lg:grid-cols-2">
              <div className="relative z-10 flex flex-col justify-center px-6 py-9 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
                <Reveal delay={0.05}>
                  <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#1749C7]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#1749C7]" />
                    Producto insignia de DSISAC
                  </span>
                </Reveal>

                <BlurText
                  text="DSINet ERP Core"
                  as="h1"
                  className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-[#10274D] sm:text-4xl lg:text-5xl"
                />

                <Reveal delay={0.12}>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                    Conecta compras, inventarios, ventas, cobranzas y
                    facturación electrónica en un sistema de gestión
                    empresarial adaptado a la realidad peruana.
                  </p>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <Button
                      to="/contacto"
                      variant="primary"
                      size="lg"
                      icon={<ArrowRight className="h-4 w-4" />}
                    >
                      Solicitar demostración
                    </Button>

                    <Button
                      href="#modulos"
                      variant="outline"
                      size="lg"
                    >
                      Explorar módulos
                    </Button>
                  </div>
                </Reveal>

                <Reveal delay={0.22}>
                  <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 border-t border-slate-100 pt-5 text-sm text-slate-500">
                    <span className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-[#1749C7]" />
                      Gestión integrada
                    </span>

                    <span className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-[#1749C7]" />
                      Procesos empresariales
                    </span>
                  </div>
                </Reveal>
              </div>

              <div className="relative min-h-[280px] overflow-hidden bg-[#10274D] sm:min-h-[360px] lg:min-h-[500px]">
                <ImageReveal
                  src={erpImg}
                  alt="Imagen de referencia de las operaciones empresariales gestionadas con DSINet ERP Core"
                  direction="scale"
                  duration={0.9}
                  overlayScrim={true}
                  className="h-full min-h-[280px] w-full sm:min-h-[360px] lg:min-h-[500px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1E3A]/80 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">
                      Información conectada
                    </span>

                    <p className="mt-2 max-w-md text-xl font-semibold leading-snug text-white sm:text-2xl">
                      Una visión más clara de tus operaciones empresariales.
                    </p>
                  </div>
                </ImageReveal>
              </div>
            </div>
          </section>

          {/* Problemas operativos */}
          <section className="mb-20 lg:mb-24">
            <SectionHeading
              kicker="Diagnóstico"
              title="Problemas operativos que DSINet ayuda a resolver"
              description="Las diferencias de inventario, las demoras administrativas y la falta de visibilidad financiera pueden afectar la operación diaria. Un sistema integrado ayuda a organizar la información y los procesos."
              className="mb-10 lg:mb-12"
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">
              {problems.map((problem, index) => (
                <MotionCard
                  key={problem.title}
                  delay={index * 0.1}
                  lift={5}
                  className="h-full rounded-2xl"
                >
                  <div className="flex h-full gap-4 rounded-2xl border border-slate-200/80 bg-slate-50 p-5 transition-colors duration-300 hover:border-blue-200 sm:p-6">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-red-100 bg-red-50 text-xs font-bold text-red-600">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <div>
                      <h3 className="mb-2 text-base font-bold leading-snug text-[#10274D]">
                        {problem.title}
                      </h3>

                      <p className="text-sm leading-relaxed text-slate-600">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </MotionCard>
              ))}
            </div>
          </section>
        </Container>

        {/* Flujo de procesos interactivo */}
        <div id="circuito" className="scroll-mt-24">
          <ErpInteractiveFlow />
        </div>

        {/* Vista del sistema */}
        <ErpSoftwarePreview />

        <Container className="pt-16 sm:pt-20 lg:pt-24">
          {/* Módulos del ERP */}
          <section id="modulos" className="mb-20 scroll-mt-28 lg:mb-24">
            <SectionHeading
              kicker="Arquitectura de módulos"
              title="Capacidades operativas de DSINet ERP"
              description="Conoce las principales áreas de gestión que puedes organizar con DSINet. La disponibilidad y configuración de los módulos depende de la solución contratada."
              className="mb-10 lg:mb-12"
            />

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {modules.map((module, index) => (
                <MotionCard
                  key={module.name}
                  delay={(index % 3) * 0.1}
                  lift={5}
                  className="h-full rounded-2xl"
                >
                  <article className="flex h-full flex-col rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition-colors duration-300 hover:border-blue-200 sm:p-6">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-[#1749C7]">
                      {module.icon}
                    </div>

                    <h3 className="mb-2 text-lg font-bold leading-snug text-[#10274D]">
                      {module.name}
                    </h3>

                    <p className="mb-5 text-sm leading-relaxed text-slate-600">
                      {module.description}
                    </p>

                    <div className="mt-auto border-t border-slate-100 pt-4">
                      <span className="mb-3 block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Funciones principales
                      </span>

                      <ul className="space-y-2">
                        {module.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-2 text-sm leading-relaxed text-slate-600"
                          >
                            <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#1749C7]" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </MotionCard>
              ))}
            </div>
          </section>

          {/* Módulos según el perfil empresarial */}
          <section className="relative mb-16 overflow-hidden rounded-3xl bg-slate-900 p-6 text-white sm:p-9 lg:mb-20 lg:p-12">
            <TechnicalGrid variant="dark" crosshairs={false} />

            <div className="relative">
              <div className="mb-8 max-w-3xl">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-blue-300">
                  Escalabilidad según tu operación
                </span>

                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Una solución para cada perfil de empresa
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                  Cada empresa tiene necesidades distintas. Identificamos
                  los procesos prioritarios para orientar la configuración
                  de DSINet al tipo y volumen de operación de tu negocio.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {companyProfiles.map((profile, index) => (
                  <MotionCard
                    key={profile.title}
                    delay={index * 0.1}
                    lift={4}
                    className="h-full rounded-xl"
                  >
                    <div className="h-full rounded-xl border border-white/10 bg-white/[0.045] p-5 transition-colors duration-300 hover:border-blue-300/30 hover:bg-white/[0.075]">
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-blue-300">
                        {profile.icon}
                      </div>

                      <h3 className="text-sm font-bold text-blue-200">
                        {profile.title}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-slate-300">
                        {profile.description}
                      </p>
                    </div>
                  </MotionCard>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xl text-sm leading-relaxed text-slate-300">
                  ¿Quieres saber qué módulos se adaptan mejor a tu empresa?
                  Conversemos sobre tus procesos.
                </p>

                <Button
                  to="/contacto"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="h-4 w-4" />}
                >
                  Coordinar demostración
                </Button>
              </div>
            </div>
          </section>
        </Container>
      </main>

      <CTASection />
    </>
  );
};
