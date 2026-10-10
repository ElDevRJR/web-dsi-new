import React from 'react';
import { SEO } from '../components/ui/SEO';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { BlurText } from '../components/ui/BlurText';
import { Reveal } from '../components/ui/Reveal';
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
  Building2,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Truck,
  Users,
} from 'lucide-react';
import erpImg from '../assets/images/hero_erp_operations_1791563324980.jpg';

export const ErpCore: React.FC = () => {
  const problems = [
    {
      title: 'Descuadre continuo entre stock físico y registros',
      description: 'Diferencias constantes entre lo que el vendedor consulta en pantalla y lo que realmente existe en almacén, generando cancelaciones y clientes molestos.',
    },
    {
      title: 'Emisión de comprobantes y guías con demoras',
      description: 'Largas filas en mostrador o camiones detenidos en el andén de despacho por complicaciones técnicas al validar facturas o guías GRE con SUNAT.',
    },
    {
      title: 'Falta de control en cobranzas y créditos',
      description: 'Incertidumbre sobre qué clientes mantienen facturas o letras vencidas, incrementando el riesgo de cartera pesada y falta de liquidez.',
    },
    {
      title: 'Costeo inexacto en importaciones',
      description: 'Desconocimiento del margen real por no prorratear fletes internacionales, derechos aduaneros y seguros sobre el costo unitario de cada ítem.',
    },
  ];

  const modules = [
    {
      name: 'Compras y Proveedores',
      icon: <ShoppingCart className="w-5 h-5 text-[#1749C7]" />,
      description: 'Registro riguroso de órdenes de compra, control de recepción en almacén, historial de precios por proveedor y cálculo de costos promedio ponderados.',
      highlights: ['Órdenes de compra y recepción', 'Historial comparativo de cotizaciones', 'Registro de comprobantes de compra', 'Afectación automática a cuentas por pagar'],
    },
    {
      name: 'Almacenes e Inventarios',
      icon: <Boxes className="w-5 h-5 text-[#1749C7]" />,
      description: 'Gestión multisede con control de stock en tiempo real, Kardex valorizado conforme a SUNAT, alertas por stock mínimo y transferencias entre sucursales.',
      highlights: ['Kardex valorizado permanente', 'Zonificación física (pasillos, estantes)', 'Transferencias internas con guías de remisión', 'Ajustes de inventario y tomas físicas'],
    },
    {
      name: 'Ventas y Preventa',
      icon: <TrendingUp className="w-5 h-5 text-[#1749C7]" />,
      description: 'Flujo completo de cotizaciones, pedidos comerciales, preventa en ruta y facturación ágil en punto de venta con listas de precios segmentadas.',
      highlights: ['Cotizaciones convertibles a pedido', 'Listas de precio por tipo de cliente o volumen', 'Punto de venta con soporte para lectores ópticos', 'Comisiones y metas por vendedor'],
    },
    {
      name: 'Cobranzas y Cuentas por Cobrar',
      icon: <CreditCard className="w-5 h-5 text-[#1749C7]" />,
      description: 'Monitoreo diario de deudas pendientes, estados de cuenta por cliente, registro de abonos parciales y programación de cobros.',
      highlights: ['Alertas de vencimiento por cliente', 'Historial crediticio y de cumplimiento', 'Registro multimoneda (Soles y Dólares)', 'Cierre y arqueo de caja diario'],
    },
    {
      name: 'Comprobantes Electrónicos y Guías GRE',
      icon: <FileCheck2 className="w-5 h-5 text-[#1749C7]" />,
      description: 'Emisión directa de Facturas, Boletas, Notas de Crédito, Notas de Débito y Guías de Remisión Electrónicas (Remitente y Transportista) con validación automática.',
      highlights: ['Emisión masiva o unitaria', 'Conexión directa o mediante OSE (NubeFact)', 'Generación de representación impresa (A4, ticket)', 'Control de detracciones y percepciones'],
    },
    {
      name: 'Picking y Packing Especializado',
      icon: <Package className="w-5 h-5 text-[#1749C7]" />,
      description: 'Optimización de la preparación física de pedidos para distribuidoras y mayoristas, reduciendo tiempos de recorrido y errores de despacho.',
      highlights: ['Listas de preparación por ruta o pedido', 'Lectura de código de barras para verificación', 'Etiquetado de bultos y packing list', 'Sincronización con la guía de remisión'],
    },
    {
      name: 'Importaciones y Costeo Landed',
      icon: <Layers className="w-5 h-5 text-[#1749C7]" />,
      description: 'Liquidación de despachos aduaneros (DUA / DAM) con distribución de gastos de flete, seguro y almacenaje sobre el costo landed final de cada producto.',
      highlights: ['Prorrateo por valor o por peso/volumen', 'Actualización de costo de reposición', 'Recepción de mercadería por contenedores', 'Control de diferencias en packing list'],
    },
    {
      name: 'Líneas de Crédito y Letras Bancarias',
      icon: <ShieldCheck className="w-5 h-5 text-[#1749C7]" />,
      description: 'Módulo de crédito comercial para establecer límites por cliente y administrar la cartera de letras en cobranza libre, descuento o garantía.',
      highlights: ['Bloqueo preventivo por morosidad', 'Registro de letras con código único', 'Emisión y canje de facturas por letras', 'Control de letras por pagar a proveedores'],
    },
  ];

  return (
    <>
      <SEO
        title="DSINet - ERP Core | Software de Gestión Empresarial en Perú"
        description="Conoce DSINet ERP Core: el sistema integral para compras, almacenes, facturación electrónica SUNAT, guías GRE, cobranzas y picking adaptado al mercado peruano."
        canonicalPath="/soluciones/dsinet-erp-core"
      />

      <main className="py-12 lg:py-20">
        <Container>
          {/* Header */}
          <div className="max-w-4xl mb-16 relative">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1749C7] mb-2.5 block">
              Producto Insignia de DSISAC
            </span>
            <BlurText
              text="DSINet - ERP Core"
              as="h1"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#10274D] tracking-tight leading-tight"
            />
            <p className="mt-5 text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
              Gestión empresarial adaptada a la realidad operativa y tributaria peruana. Unifica
              compras, inventarios multisede, preventa, facturación electrónica y control crediticio
              en un solo flujo sólido y confiable.
            </p>
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <Button to="/contacto" variant="primary" size="lg">
                Solicitar Demostración de DSINet
              </Button>
              <Button href="#circuito" variant="outline" size="lg">
                Ver circuito de datos
              </Button>
            </div>
          </div>

          {/* Hero Banner Visual with Mask Reveal */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl mb-24 group">
            <ImageReveal
              src={erpImg}
              alt="Plataforma de control operativo empresarial DSINet ERP Core"
              direction="scale"
              duration={0.9}
              overlayScrim={true}
              className="w-full h-[380px] sm:h-[480px]"
            >
              <div className="absolute bottom-6 left-6 right-6 text-white max-w-2xl">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-300">
                  Diseñado para la Empresa Peruana
                </div>
                <div className="text-xl sm:text-2xl font-bold mt-1">
                  Conectividad entre áreas para eliminar islas de información y errores operativos.
                </div>
              </div>
            </ImageReveal>
          </div>

          {/* Problemas que ayuda a resolver */}
          <div className="mb-24">
            <SectionHeading
              kicker="Diagnóstico"
              title="Problemas operativos que DSINet ayuda a erradicar"
              description="La mayoría de retrasos y pérdidas comerciales en una empresa ocurren en la desconexión entre el almacén y el punto de venta. DSINet aborda directamente esos puntos de fricción."
              className="mb-12"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {problems.map((p, i) => (
                <Reveal key={i} delay={0.08 * i}>
                  <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/80 h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                        0{i + 1}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-[#10274D] mb-2">{p.title}</h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {p.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>

        {/* 1. SECCIÓN NARRATIVA Y DIAGRAMA DE PROCESOS INTERACTIVO */}
        <div id="circuito" className="scroll-mt-24">
          <ErpInteractiveFlow />
        </div>

        {/* 2. PANTALLAS Y ENTORNO VISUAL REAL DE DSINET ERP */}
        <ErpSoftwarePreview />

        <Container className="pt-24">
          {/* Detailed Modules Grid */}
          <div id="modulos" className="mb-24 scroll-mt-28">
            <SectionHeading
              kicker="Arquitectura de Módulos"
              title="Capacidades operativas de DSINet ERP"
              description="Módulos interconectados en una misma base de datos. Cada área opera con su propia interfaz especializada mientras la información fluye sin duplicidad."
              className="mb-14"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {modules.map((m, index) => (
                <Reveal key={m.name} delay={0.06 * index}>
                  <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-blue-300 hover:shadow-md transition-all h-full flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
                        {m.icon}
                      </div>
                      <h3 className="text-lg font-bold text-[#10274D] mb-2">{m.name}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-5">{m.description}</p>
                    </div>

                    <div className="pt-4 border-t border-slate-100">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                        Funciones incluidas:
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {m.highlights.map((h, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1749C7] shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Differentiating Modules by Enterprise Profile */}
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white mb-20 relative overflow-hidden">
            <TechnicalGrid variant="dark" />
            <div className="relative max-w-3xl mb-10">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 block mb-2">
                Escalabilidad Controlada
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Módulos según el perfil de tu empresa
              </h2>
              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                Reconocemos que una pequeña empresa no requiere la complejidad de un módulo de
                despacho aduanero o de letras bancarias. Configuramos los permisos y pantallas
                adecuadas a tu volumen real.
              </p>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <span className="text-xs font-bold text-blue-300 uppercase tracking-wider">
                  Pequeña Empresa
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Compras, almacén central, ventas de mostrador, cobranzas directas y facturación SUNAT.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <span className="text-xs font-bold text-blue-300 uppercase tracking-wider">
                  Mediana Empresa
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Control multisede, transferencia entre sucursales, roles granulares y cuentas por pagar.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <span className="text-xs font-bold text-blue-300 uppercase tracking-wider">
                  Distribuidoras
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Zonificación de almacén, picking y packing, preventa en ruta y guías GRE masivas.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <span className="text-xs font-bold text-blue-300 uppercase tracking-wider">
                  Importadoras
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Costeo landed de DUA, recepción de contenedores, letras por cobrar y líneas de crédito.
                </p>
              </div>
            </div>

            <div className="relative mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-400">
                ¿Deseas verificar si tus flujos actuales son compatibles con DSINet?
              </span>
              <Button to="/contacto" variant="primary" size="md">
                Coordinar demostración con un especialista
              </Button>
            </div>
          </div>
        </Container>
      </main>

      <CTASection />
    </>
  );
};
