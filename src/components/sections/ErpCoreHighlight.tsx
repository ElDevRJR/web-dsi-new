import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import { ImageReveal } from '../ui/ImageReveal';
import {
  Boxes,
  Truck,
  Receipt,
  FileCheck2,
  PackageCheck,
  CreditCard,
  ArrowRight,
  Check,
} from 'lucide-react';
import warehouseImg from '../../assets/images/erp_warehouse_logistics_1791563334821.jpg';

export const ErpCoreHighlight: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'operaciones' | 'comercial' | 'tributario' | 'creditos'>('operaciones');

  const tabContent = {
    operaciones: {
      title: 'Almacenes, Kardex y Logística de Despacho',
      description:
        'Control estricto de existencias físicas frente a inventario valorizado. DSINet permite mapear múltiples sedes, transferencias en tránsito y procesos de picking y packing.',
      points: [
        'Kardex valorizado en tiempo real por sede y almacén.',
        'Zonificación de pasillos, estantes y niveles para picking rápido.',
        'Packing con verificación de bultos y código de barras.',
        'Transferencias internas con emisión de guías de remisión entre locales.',
      ],
      icon: <Boxes className="w-5 h-5 text-[#1749C7]" />,
    },
    comercial: {
      title: 'Ventas, Preventa en Ruta y Cobranzas',
      description:
        'Acelera el ciclo comercial desde que el vendedor toma el pedido en mostrador o en la calle hasta que se emite la orden de despacho y se controla la cobranza.',
      points: [
        'Módulo ágil para cotizaciones, notas de pedido y preventas.',
        'Múltiples listas de precios (mayorista, distribuidor, mostrador).',
        'Control de caja diaria, medios de pago y depósitos bancarios.',
        'Registro de cuentas por cobrar con alertas de morosidad.',
      ],
      icon: <Truck className="w-5 h-5 text-[#1749C7]" />,
    },
    tributario: {
      title: 'Facturación y Guías Electrónicas SUNAT',
      description:
        'Emisión directa sin intermediarios engorrosos. Cumplimiento total con los estándares vigentes de UBL y catálogo de motivos de traslado.',
      points: [
        'Facturas, Boletas, Notas de Crédito y Débito electrónicas.',
        'Guías de Remisión Electrónicas Remitente y Transportista (GRE).',
        'Gestión de detracciones del Banco de la Nación y percepciones.',
        'Integración con NubeFact OSE para validación en milisegundos.',
      ],
      icon: <FileCheck2 className="w-5 h-5 text-[#1749C7]" />,
    },
    creditos: {
      title: 'Líneas de Crédito, Letras e Importaciones',
      description:
        'Diseñado para empresas importadoras y mayoristas que financian a su red de distribuidores con letras bancarias y requieren costeo landed exacto.',
      points: [
        'Liquidación de carpetas de importación (DUA/DAM) con costeo landed.',
        'Asignación y bloqueo automático por tope de línea de crédito.',
        'Cartera de letras: en cartera, descuento y cobranza libre.',
        'Letras por pagar a proveedores comerciales con calendario de vencimiento.',
      ],
      icon: <CreditCard className="w-5 h-5 text-[#1749C7]" />,
    },
  };

  return (
    <section className="py-20 lg:py-28 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            kicker="Producto Insignia"
            title="DSINet ERP Core: Gestión adaptada al mercado peruano"
            description="Construido desde la realidad operativa del comercio, la distribución y la importación en Perú. Sin módulos abstractos ni configuraciones forzadas."
          />
          <div className="shrink-0">
            <Button
              to="/soluciones/dsinet-erp-core"
              variant="outline"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Ver ficha completa del ERP
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 rounded-xl mb-8 max-w-2xl">
          <button
            type="button"
            onClick={() => setActiveTab('operaciones')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'operaciones'
                ? 'bg-white text-[#10274D] shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Almacenes & Logística
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('comercial')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'comercial'
                ? 'bg-white text-[#10274D] shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Ventas & Cobranzas
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('tributario')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'tributario'
                ? 'bg-white text-[#10274D] shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Comprobantes & GRE
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('creditos')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'creditos'
                ? 'bg-white text-[#10274D] shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Líneas, Letras & Importaciones
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 bg-slate-50/80 rounded-2xl p-8 sm:p-10 border border-slate-200/80 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                {tabContent[activeTab].icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#10274D] mb-3">
                {tabContent[activeTab].title}
              </h3>
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                {tabContent[activeTab].description}
              </p>

              <div className="space-y-3.5 mb-8">
                {tabContent[activeTab].points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#1749C7]/10 text-[#1749C7] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-sm text-slate-700 font-medium">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                Módulo compatible con pequeñas, medianas, distribuidoras e importadoras.
              </span>
              <Button to="/contacto" variant="primary" size="sm">
                Solicitar Demostración de DSINet
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-200 shadow-md min-h-[340px]">
            <ImageReveal
              src={warehouseImg}
              alt="Operación de almacenes y logística con DSINet ERP"
              direction="up"
              duration={0.9}
              overlayScrim={true}
              className="w-full h-full min-h-[340px]"
            >
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-xs font-semibold uppercase tracking-wider text-blue-300">
                  Logística Conectada
                </div>
                <div className="text-base font-bold mt-1">
                  Desde la llegada del contenedor hasta la entrega al cliente final.
                </div>
              </div>
            </ImageReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
