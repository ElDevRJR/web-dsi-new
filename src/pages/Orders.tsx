
import React from 'react';
import { SEO } from '../components/ui/SEO';
import { BlurText } from '../components/ui/BlurText';
import { Button } from '../components/ui/Button';
import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  ClipboardList,
  FileDown,
  Package,
  RefreshCw,
  Smartphone,
  Users,
  Wifi,
  WifiOff,
  Zap,
  ChartNoAxesCombined,
} from 'lucide-react';

const features = [
  {
    icon: ClipboardList,
    title: 'Toma de pedidos en campo',
    description:
      'Registra ventas y notas de pedido desde el dispositivo móvil durante la visita a tus clientes.',
    tag: 'Registro comercial',
  },
  {
    icon: WifiOff,
    title: 'Trabajo online y offline',
    description:
      'Continúa registrando pedidos incluso en zonas sin conexión. La disponibilidad de consultas y sincronización depende de la conectividad.',
    tag: 'Mayor continuidad',
  },
  {
    icon: Package,
    title: 'Información de productos',
    description:
      'Consulta el catálogo, el stock disponible y las listas de precios para preparar cada pedido con información comercial.',
    tag: 'Consulta comercial',
  },
  {
    icon: Users,
    title: 'Cartera de clientes',
    description:
      'Accede a la información de tus clientes para agilizar la atención durante las visitas comerciales.',
    tag: 'Atención al cliente',
  },
  {
    icon: RefreshCw,
    title: 'Integración con el ERP',
    description:
      'Conecta los pedidos registrados con el sistema de gestión de la empresa para reducir la duplicidad de tareas.',
    tag: 'Flujo conectado',
  },
  {
    icon: FileDown,
    title: 'Documentos en PDF',
    description:
      'Visualiza el detalle de las notas de pedido y genera documentos PDF para compartirlos o imprimirlos.',
    tag: 'Documentación',
  },
];

const benefits = [
  {
    value: '01',
    title: 'Menos tareas duplicadas',
    description:
      'Reduce la necesidad de volver a registrar manualmente la información comercial.',
  },
  {
    value: '02',
    title: 'Ventas más ágiles',
    description:
      'Facilita el registro de pedidos durante las visitas y el trabajo diario del vendedor.',
  },
  {
    value: '03',
    title: 'Mejor coordinación',
    description:
      'Ayuda a conectar el trabajo comercial con los procesos internos de la empresa.',
  },
];

export const Orders: React.FC = () => {
  return (
    <>
      <SEO
        title="DSI Pedidos | Aplicación móvil para ventas en campo | DSISAC"
        description="Agiliza la toma de pedidos con DSI Pedidos, la aplicación móvil de DSISAC para vendedores en campo. Registra pedidos online y offline, consulta información comercial y conecta con tu ERP."
        canonicalPath="/soluciones/dsi-pedidos"
      />

      <main className="overflow-hidden">
        {/* HERO */}
        <section className="relative py-16 sm:py-20 lg:py-28">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50/80 via-white to-white" />
          <div className="absolute right-0 top-0 -z-10 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />

          <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <div className="space-y-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-3.5 py-2 text-xs font-semibold text-[#1749C7] shadow-sm">
                <Smartphone className="h-4 w-4" />
                Aplicación móvil para equipos comerciales
              </div>

              <div className="space-y-5">
                <BlurText
                  text="Tus ventas no se detienen, ni siquiera sin conexión."
                  as="h1"
                  className="text-4xl font-extrabold leading-[1.1] tracking-tight text-[#10274D] sm:text-5xl lg:text-6xl"
                />

                <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                  Con DSI Pedidos, tus vendedores pueden registrar pedidos en
                  campo, consultar información comercial y conectar el trabajo
                  de ventas con el ERP de tu empresa.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  to="/contacto"
                  variant="primary"
                  icon={<ArrowRight className="h-4 w-4" />}
                >
                  Solicitar una demostración
                </Button>
                <Button to="/soluciones/dsinet-erp-core" variant="outline">
                  Conocer DSI-NET
                </Button>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-3 pt-2 text-sm text-slate-600">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#1749C7]" />
                  Registro de pedidos
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#1749C7]" />
                  Modo online y offline
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#1749C7]" />
                  Integración con ERP
                </span>
              </div>
            </div>

            {/* VISTA ILUSTRATIVA DE LA APP */}
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-blue-100/70 blur-2xl" />

              <div className="relative rounded-[2rem] border border-slate-200 bg-white p-3 shadow-2xl shadow-blue-950/10 sm:p-4">
                <div className="overflow-hidden rounded-[1.5rem] bg-slate-50">
                  <div className="flex items-center justify-between bg-[#10274D] px-5 py-4 text-white">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                        <Boxes className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold">DSI Pedidos</p>
                        <p className="text-xs text-blue-100">
                          Gestión comercial móvil
                        </p>
                      </div>
                    </div>
                    <Smartphone className="h-5 w-5 text-blue-200" />
                  </div>

                  <div className="space-y-5 p-5">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                        Nuevo pedido
                      </p>
                      <h2 className="mt-1 text-xl font-bold text-[#10274D]">
                        Registro de venta
                      </h2>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-4">
                      <p className="text-xs text-slate-500">Cliente</p>
                      <div className="mt-1 flex items-center justify-between gap-3">
                        <span className="text-sm font-semibold text-slate-800">
                          Seleccionar cliente
                        </span>
                        <Users className="h-4 w-4 text-[#1749C7]" />
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-4">
                      <div className="mb-3 flex items-center justify-between">
                        <span className="text-sm font-semibold text-slate-800">
                          Productos
                        </span>
                        <span className="rounded-md bg-blue-50 px-2 py-1 text-xs font-semibold text-[#1749C7]">
                          Catálogo
                        </span>
                      </div>

                      <div className="space-y-3">
                        {[
                          { name: 'Producto de ejemplo A', qty: 'Cant. 2' },
                          { name: 'Producto de ejemplo B', qty: 'Cant. 1' },
                        ].map((product) => (
                          <div
                            key={product.name}
                            className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3 last:border-0 last:pb-0"
                          >
                            <div className="flex items-center gap-3">
                              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100">
                                <Package className="h-4 w-4 text-slate-500" />
                              </div>
                              <span className="text-xs font-medium text-slate-700">
                                {product.name}
                              </span>
                            </div>
                            <span className="whitespace-nowrap text-xs text-slate-500">
                              {product.qty}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-xl border border-blue-100 bg-blue-50/70 p-4">
                      <div className="flex items-start gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[#1749C7]">
                          <Wifi className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#10274D]">
                            Trabaja a tu ritmo
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-slate-600">
                            Registra pedidos con o sin conexión y gestiona la
                            sincronización según la conectividad disponible.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-[#1749C7] px-4 py-3 text-white">
                      <span className="text-sm font-semibold">
                        Flujo de pedido
                      </span>
                      <ArrowRight className="h-4 w-4" />
                    </div>

                    <p className="text-center text-[10px] text-slate-400">
                      Representación ilustrativa. No corresponde a una captura
                      real de la aplicación.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -left-5 top-24 hidden items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-lg sm:flex">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-[#1749C7]">
                  <WifiOff className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#10274D]">
                    Modo offline
                  </p>
                  <p className="text-[10px] text-slate-500">
                    Registro de pedidos
                  </p>
                </div>
              </div>

              <div className="absolute -right-3 bottom-20 hidden items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-lg sm:flex">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <RefreshCw className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#10274D]">
                    Conexión con ERP
                  </p>
                  <p className="text-[10px] text-slate-500">
                    Flujo comercial integrado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFICIOS */}
        <section className="border-y border-slate-100 bg-slate-50/70 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#1749C7]">
                Una venta mejor organizada
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#10274D] sm:text-4xl">
                Más agilidad para el equipo comercial
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Facilita el trabajo de tus vendedores y mejora la continuidad
                entre el registro del pedido y los procesos internos.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {benefits.map((benefit) => (
                <article
                  key={benefit.value}
                  className="rounded-2xl border border-slate-200/80 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-950/5 sm:p-8"
                >
                  <span className="text-sm font-bold text-[#1749C7]">
                    {benefit.value}
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-[#10274D]">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {benefit.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FUNCIONALIDADES */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#1749C7]">
                Funcionalidades
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#10274D] sm:text-4xl">
                Todo lo necesario para tomar pedidos en campo
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Herramientas pensadas para vendedores, asesores comerciales,
                distribuidores y empresas que necesitan agilizar su operación
                de ventas.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <article
                    key={feature.title}
                    className="group rounded-2xl border border-slate-200/80 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/5 sm:p-7"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#1749C7] transition-colors duration-300 group-hover:bg-[#1749C7] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#1749C7]">
                      {feature.tag}
                    </span>

                    <h3 className="mt-2 text-lg font-bold text-[#10274D]">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {feature.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* FLUJO COMERCIAL */}
        <section className="bg-[#10274D] py-16 text-white sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
                Del campo a la operación
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Un flujo comercial conectado
              </h2>
              <p className="mt-4 leading-relaxed text-blue-100/75">
                DSI Pedidos ayuda a conectar el trabajo del vendedor con los
                procesos de gestión de la empresa.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-4">
              {[
                {
                  icon: Smartphone,
                  number: '01',
                  title: 'Visita comercial',
                  description: 'El vendedor atiende al cliente en campo.',
                },
                {
                  icon: ClipboardList,
                  number: '02',
                  title: 'Registro del pedido',
                  description: 'Registra los productos y el detalle solicitado.',
                },
                {
                  icon: Boxes,
                  number: '03',
                  title: 'Conexión con el ERP',
                  description: 'El pedido se integra al flujo de gestión.',
                },
                {
                  icon: ChartNoAxesCombined,
                  number: '04',
                  title: 'Continuidad operativa',
                  description: 'El equipo continúa con los procesos internos.',
                },
              ].map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6"
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-blue-200">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-sm font-semibold text-blue-300/70">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="font-bold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-blue-100/70">
                      {step.description}
                    </p>
                    {index < 3 && (
                      <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 text-blue-300 md:block" />
                    )}
                  </div>
                );
              })}
            </div>

            <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-blue-100/60">
              La disponibilidad de información y el envío de pedidos dependen
              de la conexión y de la configuración de integración de la empresa.
            </p>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 to-white p-8 text-center sm:p-12 lg:p-16">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-100/60 blur-3xl" />
              <div className="relative mx-auto max-w-2xl">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1749C7] text-white shadow-lg shadow-blue-900/20">
                  <Zap className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-extrabold tracking-tight text-[#10274D] sm:text-4xl">
                  Lleva tus ventas al siguiente nivel
                </h2>
                <p className="mt-4 leading-relaxed text-slate-600">
                  Conoce cómo DSI Pedidos puede adaptarse al trabajo de tu
                  equipo comercial y conectarse con la gestión de tu empresa.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <Button
                    to="/contacto"
                    variant="primary"
                    icon={<ArrowRight className="h-4 w-4" />}
                  >
                    Solicitar una demostración
                  </Button>
                  <Button to="/soluciones/dsinet-erp-core" variant="outline">
                    Explorar DSI-NET
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
