
import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
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
  Workflow,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Stage {
  id: string;
  name: string;
  short: string;
  icon: React.ReactNode;
  summary: string;
  inputs: string[];
  systemAction: string;
  outputs: string[];
  peruSpecific: string;
}

const stages: Stage[] = [
  {
    id: '01',
    name: 'Compras y recepción',
    short: 'Compras',
    icon: <ShoppingCart className="h-4 w-4" />,
    summary:
      'Organiza las compras a proveedores y registra la información necesaria para dar seguimiento al abastecimiento de la empresa.',
    inputs: [
      'Órdenes de compra',
      'Información del proveedor',
      'Documentos de recepción',
    ],
    systemAction:
      'Centraliza los datos de compra para facilitar el seguimiento de los pedidos y su relación con el abastecimiento.',
    outputs: [
      'Compras registradas',
      'Información para recepción',
      'Datos para cuentas por pagar',
    ],
    peruSpecific:
      'La gestión debe considerar los documentos comerciales y las condiciones tributarias que correspondan a cada operación.',
  },
  {
    id: '02',
    name: 'Almacén e inventario',
    short: 'Almacén',
    icon: <Boxes className="h-4 w-4" />,
    summary:
      'Registra los movimientos de mercadería y ayuda a mantener una visión más ordenada de las existencias disponibles.',
    inputs: [
      'Documentos de ingreso',
      'Productos y cantidades recibidas',
      'Ubicaciones de almacén',
    ],
    systemAction:
      'Organiza los movimientos de inventario y relaciona la información de los productos con las operaciones de la empresa.',
    outputs: [
      'Movimientos registrados',
      'Consulta de existencias',
      'Información para reposición',
    ],
    peruSpecific:
      'La organización de los registros de inventario debe responder a los controles internos y obligaciones aplicables a la empresa.',
  },
  {
    id: '03',
    name: 'Ventas, preventa y despacho',
    short: 'Ventas',
    icon: <Truck className="h-4 w-4" />,
    summary:
      'Conecta la gestión comercial con la preparación de pedidos, desde el registro de la venta hasta la coordinación del despacho.',
    inputs: [
      'Pedidos de clientes',
      'Precios y condiciones comerciales',
      'Información de existencias',
    ],
    systemAction:
      'Relaciona los datos comerciales con la preparación de pedidos para facilitar el seguimiento de cada operación.',
    outputs: [
      'Pedidos registrados',
      'Información para preparación',
      'Datos para despacho',
    ],
    peruSpecific:
      'Las condiciones de venta y crédito deben respetar las políticas comerciales definidas por cada empresa.',
  },
  {
    id: '04',
    name: 'Facturación y guías electrónicas',
    short: 'Documentos',
    icon: <FileCheck2 className="h-4 w-4" />,
    summary:
      'Organiza la documentación de las operaciones comerciales y facilita la gestión de comprobantes y guías electrónicas.',
    inputs: [
      'Datos de la operación',
      'Información del cliente',
      'Datos requeridos para el traslado',
    ],
    systemAction:
      'Utiliza la información de la operación para gestionar los documentos electrónicos disponibles según la configuración del sistema.',
    outputs: [
      'Documentación comercial',
      'Información para el traslado',
      'Trazabilidad de la operación',
    ],
    peruSpecific:
      'La emisión de comprobantes y guías debe cumplir los requisitos vigentes de SUNAT según el tipo de operación.',
  },
  {
    id: '05',
    name: 'Cobranzas y cuentas por cobrar',
    short: 'Cobranzas',
    icon: <CreditCard className="h-4 w-4" />,
    summary:
      'Facilita el seguimiento de los compromisos de pago de los clientes y ayuda a organizar la información de cobranzas.',
    inputs: [
      'Documentos por cobrar',
      'Condiciones de pago',
      'Registro de cobranzas',
    ],
    systemAction:
      'Relaciona las operaciones comerciales con su información de pago para facilitar el seguimiento de los saldos pendientes.',
    outputs: [
      'Saldos por revisar',
      'Seguimiento de vencimientos',
      'Información para reportes',
    ],
    peruSpecific:
      'El control de los compromisos de pago debe considerar las condiciones pactadas y los procedimientos financieros de cada empresa.',
  },
];

export const ErpInteractiveFlow: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState('02');

  const currentStage =
    stages.find((stage) => stage.id === activeStageId) ?? stages[1];

  const activeIndex = stages.findIndex(
    (stage) => stage.id === activeStageId,
  );

  return (
    <section
      className="relative overflow-hidden border-y border-slate-200/80 bg-slate-50/70 py-16 sm:py-20 lg:py-24"
      aria-labelledby="erp-flow-title"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#1749C70A_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="El circuito de tu empresa"
          title="De la compra a la cobranza, con una visión integrada"
          description="Explora cómo se conectan las principales etapas de la operación y qué información interviene en cada una."
          className="mb-10 sm:mb-12"
        />

        <div className="mb-5 flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Workflow className="h-4 w-4 text-[#1749C7]" />
          <span>FLUJO OPERATIVO</span>
          <span className="h-px flex-1 bg-slate-200" />
          <span className="font-mono">
            {String(activeIndex + 1).padStart(2, '0')} / 05
          </span>
        </div>

        <div
          className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5"
          role="tablist"
          aria-label="Etapas del circuito DSINet"
        >
          {stages.map((stage, index) => {
            const isActive = stage.id === activeStageId;
            const isVisited = index <= activeIndex;

            return (
              <button
                key={stage.id}
                type="button"
                role="tab"
                id={`erp-stage-tab-${stage.id}`}
                aria-selected={isActive}
                aria-controls={`erp-stage-panel-${stage.id}`}
                onClick={() => setActiveStageId(stage.id)}
                className={`group relative flex min-h-[94px] flex-col items-start justify-between overflow-hidden rounded-2xl border p-3 text-left transition-all duration-300 sm:min-h-[108px] sm:p-4 ${
                  isActive
                    ? 'border-[#1749C7] bg-white shadow-md shadow-blue-950/[0.06]'
                    : 'border-slate-200 bg-white/70 hover:border-blue-200 hover:bg-white'
                }`}
              >
                <div className="flex w-full items-center justify-between gap-2">
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-xl transition-colors ${
                      isActive
                        ? 'bg-[#1749C7] text-white'
                        : 'bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-[#1749C7]'
                    }`}
                  >
                    {stage.icon}
                  </span>

                  <span
                    className={`font-mono text-[10px] ${
                      isActive ? 'text-[#1749C7]' : 'text-slate-400'
                    }`}
                  >
                    {stage.id}
                  </span>
                </div>

                <span
                  className={`mt-3 text-xs font-bold leading-snug sm:text-sm ${
                    isActive ? 'text-[#10274D]' : 'text-slate-600'
                  }`}
                >
                  {stage.short}
                </span>

                <span
                  className={`absolute bottom-0 left-0 h-[3px] transition-all duration-300 ${
                    isActive
                      ? 'w-full bg-[#1749C7]'
                      : isVisited
                        ? 'w-1/3 bg-blue-200'
                        : 'w-0 bg-slate-200'
                  }`}
                />
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStage.id}
            id={`erp-stage-panel-${currentStage.id}`}
            role="tabpanel"
            aria-labelledby={`erp-stage-tab-${currentStage.id}`}
            initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -6, filter: 'blur(3px)' }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
            className="mt-5 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm shadow-slate-900/[0.03] sm:mt-6"
          >
            <div className="grid lg:grid-cols-[0.85fr_1.5fr]">
              <div className="relative overflow-hidden bg-[#10274D] p-6 text-white sm:p-8 lg:p-9">
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/[0.08]"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full border border-white/[0.08]"
                  aria-hidden="true"
                />

                <div className="relative">
                  <div className="mb-7 flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-blue-200">
                      {React.cloneElement(
                        currentStage.icon as React.ReactElement,
                        { className: 'h-5 w-5' },
                      )}
                    </span>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-300">
                        Etapa {currentStage.id}
                      </p>
                      <p className="mt-1 text-xs text-slate-300">
                        Circuito DSINet
                      </p>
                    </div>
                  </div>

                  <h3 className="max-w-sm text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                    {currentStage.name}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {currentStage.summary}
                  </p>

                  <div className="mt-8 border-t border-white/15 pt-5">
                    <div className="flex items-start gap-3">
                      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-blue-300" />
                      <div>
                        <p className="text-xs font-bold text-white">
                          Consideraciones para Perú
                        </p>
                        <p className="mt-2 text-xs leading-6 text-slate-300">
                          {currentStage.peruSpecific}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-7 lg:p-8">
                <div className="mb-5 flex items-center gap-2">
                  <Database className="h-4 w-4 text-[#1749C7]" />
                  <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-[#10274D]">
                    Cómo fluye la información
                  </h4>
                </div>

                <div className="grid gap-3 md:grid-cols-3">
                  <InfoColumn
                    number="01"
                    title="Datos de entrada"
                    items={currentStage.inputs}
                    variant="default"
                  />

                  <InfoColumn
                    number="02"
                    title="Proceso"
                    items={[currentStage.systemAction]}
                    variant="primary"
                  />

                  <InfoColumn
                    number="03"
                    title="Resultados"
                    items={currentStage.outputs}
                    variant="result"
                  />
                </div>

                <div className="mt-5 flex flex-col gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs leading-relaxed text-slate-500">
                    Cada etapa forma parte de una operación conectada.
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      setActiveStageId(
                        stages[(activeIndex + 1) % stages.length].id,
                      )
                    }
                    className="inline-flex min-h-10 items-center justify-center gap-2 self-start rounded-xl bg-blue-50 px-4 py-2 text-xs font-bold text-[#1749C7] transition-colors hover:bg-blue-100 sm:self-auto"
                  >
                    {activeIndex === stages.length - 1
                      ? 'Volver al inicio'
                      : 'Siguiente etapa'}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <p className="mx-auto mt-5 max-w-2xl text-center text-[11px] leading-5 text-slate-400">
          Las funcionalidades y los documentos disponibles pueden variar
          según los módulos contratados y la configuración de DSINet.
        </p>
      </div>
    </section>
  );
};

interface InfoColumnProps {
  number: string;
  title: string;
  items: string[];
  variant: 'default' | 'primary' | 'result';
}

const InfoColumn: React.FC<InfoColumnProps> = ({
  number,
  title,
  items,
  variant,
}) => {
  const styles = {
    default: {
      wrapper: 'border-slate-200 bg-slate-50/70',
      number: 'bg-slate-200 text-slate-600',
      title: 'text-slate-500',
      text: 'text-slate-700',
      bullet: 'bg-slate-400',
    },
    primary: {
      wrapper: 'border-[#10274D] bg-[#10274D]',
      number: 'bg-white/10 text-blue-200',
      title: 'text-blue-200',
      text: 'text-slate-100',
      bullet: 'bg-blue-300',
    },
    result: {
      wrapper: 'border-blue-100 bg-blue-50/60',
      number: 'bg-blue-100 text-[#1749C7]',
      title: 'text-[#1749C7]',
      text: 'text-slate-700',
      bullet: 'bg-[#1749C7]',
    },
  }[variant];

  return (
    <div
      className={`flex min-w-0 flex-col rounded-2xl border p-4 sm:p-4 ${styles.wrapper}`}
    >
      <div className="mb-4 flex items-center gap-2">
        <span
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg font-mono text-[10px] font-bold ${styles.number}`}
        >
          {number}
        </span>
        <h5 className={`text-[10px] font-bold uppercase tracking-wider ${styles.title}`}>
          {title}
        </h5>
      </div>

      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={`${number}-${index}`} className="flex items-start gap-2">
            {variant === 'result' ? (
              <CheckCircle2
                className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${styles.title}`}
              />
            ) : (
              <span
                className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${styles.bullet}`}
              />
            )}

            <span className={`text-xs leading-5 ${styles.text}`}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
