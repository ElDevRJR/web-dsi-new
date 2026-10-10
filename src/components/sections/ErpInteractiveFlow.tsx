import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import {
  ShoppingCart,
  Boxes,
  Truck,
  FileCheck2,
  CreditCard,
  ArrowRight,
  CheckCircle2,
  Database,
  ShieldCheck,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Stage {
  id: string;
  number: string;
  name: string;
  short: string;
  icon: React.ReactNode;
  summary: string;
  inputs: string[];
  systemAction: string;
  outputs: string[];
  peruSpecific: string;
}

export const ErpInteractiveFlow: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>('02');

  const stages: Stage[] = [
    {
      id: '01',
      number: '01',
      name: 'Compras & Recepción',
      short: 'Compras',
      icon: <ShoppingCart className="w-4 h-4" />,
      summary:
        'Registro de órdenes de compra nacionales o carpetas de importación aduanera (DUA/DAM), asociando costos de flete y gastos de despacho.',
      inputs: ['Orden de Compra a Proveedor', 'Factura Comercial o DUA / DAM', 'Gastos de Flete y Almacenaje'],
      systemAction:
        'Calcula el costo landed unitario por producto y programa la fecha estimada de arribo a almacén central.',
      outputs: ['Ingreso programado a almacén', 'Cuenta por pagar al proveedor', 'Letras comerciales pendientes'],
      peruSpecific: 'Control de detracciones del Banco de la Nación y retenciones de IGV según régimen tributario.',
    },
    {
      id: '02',
      number: '02',
      name: 'Almacén & Kardex Valorizado',
      short: 'Almacén / Kardex',
      icon: <Boxes className="w-4 h-4" />,
      summary:
        'Recepción física de mercadería, asignación de ubicaciones (pasillo, estante) y actualización automática del inventario en todas las sedes.',
      inputs: ['Guía de Remisión de Proveedor', 'Packing List verificado con lector óptico'],
      systemAction:
        'Genera el movimiento de entrada en el Kardex valorizado bajo método Promedio Ponderado en tiempo real.',
      outputs: ['Stock disponible para venta', 'Ubicación física mapeada', 'Alerta de reposición de stock mínimo'],
      peruSpecific: 'Kardex formalmente estructurado conforme a las especificaciones del Libro Electrónico SUNAT.',
    },
    {
      id: '03',
      number: '03',
      name: 'Ventas, Preventa & Picking',
      short: 'Ventas & Picking',
      icon: <Truck className="w-4 h-4" />,
      summary:
        'Los vendedores en campo o ejecutivos de mostrador registran pedidos consultando stock en vivo, disparando la lista de preparación en bodega.',
      inputs: ['Pedido de Preventa o Mostrador', 'Lista de precios según categoría de cliente'],
      systemAction:
        'Reserva el stock en el sistema y genera la ruta óptima de picking en el almacén para los recolectores.',
      outputs: ['Orden de preparación (Picking list)', 'Bultos verificados y embalados', 'Validación de línea de crédito'],
      peruSpecific: 'Validación de límite de crédito comercial antes de liberar la mercadería para su empaque.',
    },
    {
      id: '04',
      number: '04',
      name: 'Facturación & Guía GRE SUNAT',
      short: 'SUNAT & GRE',
      icon: <FileCheck2 className="w-4 h-4" />,
      summary:
        'Al cerrar el packing, el sistema genera la Factura Electrónica y la Guía de Remisión Electrónica con firma digital y validación inmediata.',
      inputs: ['Verificación de bultos y peso bruto', 'Datos de vehículo, conductor o empresa de transportes'],
      systemAction:
        'Construye el XML con estándar UBL 2.1, lo firma con el Certificado Digital y lo transmite a SUNAT o NubeFact OSE.',
      outputs: ['Constancia de Recepción (CDR Aceptado)', 'Representación impresa con código QR', 'GRE lista para ruta'],
      peruSpecific: 'Emisión obligatoria de GRE Remitente con QR y código de autorización para evitar retenciones en ruta.',
    },
    {
      id: '05',
      number: '05',
      name: 'Cobranzas, Letras & Caja',
      short: 'Cobranzas',
      icon: <CreditCard className="w-4 h-4" />,
      summary:
        'Cierre del circuito: liquidación de cobranza al contado, registro de transferencias bancarias o canje de facturas por letras comerciales.',
      inputs: ['Comprobante de pago emitido', 'Condición comercial (Contado, Crédito a 30/60 días, Letras)'],
      systemAction:
        'Actualiza el estado de cuenta del cliente y programa el calendario de vencimientos de letras en cartera o cobranza bancaria.',
      outputs: ['Estado de cuenta conciliado', 'Arqueo de caja y bancos', 'Reporte de rotación y margen bruto'],
      peruSpecific: 'Control de letras bancarias en descuento o cobranza libre en moneda nacional y dólares.',
    },
  ];

  const currentStage = stages.find((s) => s.id === activeStageId) || stages[1];

  return (
    <section className="py-20 lg:py-28 bg-white border-y border-slate-100 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-[radial-gradient(#1749C706_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Circuito Integrado DSINet"
          title="El flujo de datos continuo: desde la compra hasta la cobranza"
          description="En lugar de islas de información donde el almacén no habla con ventas y facturación depende de un digitador, DSINet articula cada eslabón de la operación."
          className="mb-14"
        />

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 p-1.5 bg-slate-100 rounded-2xl mb-8">
          {stages.map((st) => {
            const isActive = st.id === activeStageId;
            return (
              <button
                key={st.id}
                type="button"
                onClick={() => setActiveStageId(st.id)}
                className={`flex flex-col sm:flex-row items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white text-[#10274D] shadow-sm shadow-slate-900/5'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    isActive ? 'bg-[#1749C7] text-white' : 'bg-slate-200/80 text-slate-700'
                  }`}
                >
                  {st.icon}
                </div>
                <span className="whitespace-nowrap">{st.short}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStage.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="bg-slate-50/80 rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[#1749C7]">
                    ETAPA {currentStage.number} DE 05
                  </span>
                  <span className="text-slate-300">·</span>
                  <span className="text-xs text-slate-500 font-medium">Trazabilidad Centralizada</span>
                </div>

                <h3 className="text-2xl font-bold text-[#10274D]">{currentStage.name}</h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {currentStage.summary}
                </p>

                <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200/80 space-y-1 mt-4">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#1749C7]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Realidad Operativa Peruana</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-snug">
                    {currentStage.peruSpecific}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl p-5 border border-slate-200/80 space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    01. Datos de Entrada
                  </span>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {currentStage.inputs.map((inp, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-1.5" />
                        <span>{inp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#10274D] text-white rounded-2xl p-5 border border-blue-950 space-y-3 sm:-my-2 sm:shadow-lg sm:shadow-blue-950/20">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 block">
                    02. Proceso DSINet
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed font-normal">
                    {currentStage.systemAction}
                  </p>
                  <div className="pt-2 text-[10px] text-blue-300 font-mono">
                    ✓ 0% doble digitación
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-5 border border-slate-200/80 space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#1749C7] block">
                    03. Resultado Inmediato
                  </span>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {currentStage.outputs.map((out, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1749C7] shrink-0 mt-0.5" />
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
