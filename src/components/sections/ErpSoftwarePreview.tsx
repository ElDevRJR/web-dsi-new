
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import {
  Boxes,
  FileCheck2,
  CreditCard,
  Search,
  CheckCircle2,
  Layers,
  ArrowRight,
  Database,
  ShieldCheck,
  Building,
} from 'lucide-react';

type Screen = 'kardex' | 'facturacion' | 'letras';

const screenOptions: {
  id: Screen;
  label: string;
  icon: React.ReactNode;
}[] = [
  {
    id: 'kardex',
    label: 'Kardex y stock',
    icon: <Boxes className="h-4 w-4" />,
  },
  {
    id: 'facturacion',
    label: 'Facturación y GRE',
    icon: <FileCheck2 className="h-4 w-4" />,
  },
  {
    id: 'letras',
    label: 'Letras y créditos',
    icon: <CreditCard className="h-4 w-4" />,
  },
];

export const ErpSoftwarePreview: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<Screen>('kardex');

  return (
    <section className="relative overflow-hidden bg-[#0B1730] py-16 text-white sm:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] [background-size:44px_44px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-600/[0.09] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-7 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <SectionHeading
              isDark
              kicker="Conoce el entorno"
              title="Una mirada al entorno de gestión de DSINet"
              description="Explora ejemplos de las pantallas que representan tareas clave de inventario, facturación y control comercial."
            />
          </div>

          <div className="flex flex-wrap gap-2" aria-label="Vistas de demostración">
            {screenOptions.map((option) => {
              const isActive = activeScreen === option.id;

              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setActiveScreen(option.id)}
                  aria-pressed={isActive}
                  className={`inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border px-3 py-2.5 text-xs font-semibold transition-all duration-200 sm:px-4 ${
                    isActive
                      ? 'border-blue-400/50 bg-[#1749C7] text-white shadow-lg shadow-blue-950/30'
                      : 'border-white/10 bg-white/[0.04] text-slate-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white'
                  }`}
                >
                  {option.icon}
                  <span>{option.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#080F1F] shadow-2xl shadow-black/30 sm:rounded-3xl">
            <div className="flex flex-col gap-3 border-b border-white/[0.08] bg-[#111C31] px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:px-5">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex shrink-0 items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </div>

                <span className="truncate text-xs font-bold tracking-wide text-white">
                  DSINet <span className="font-normal text-slate-400">/ ERP Core</span>
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/20 bg-amber-300/[0.08] px-2.5 py-1 text-[10px] font-semibold text-amber-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                  Vista ilustrativa
                </span>

                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1 text-[10px] text-slate-400">
                  <Building className="h-3 w-3" />
                  Empresa de ejemplo
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto border-b border-white/[0.08] bg-[#0D1729] px-4 py-2.5 sm:px-5">
              <span className="flex shrink-0 items-center gap-2 rounded-lg bg-white/[0.06] px-3 py-2 text-[11px] font-semibold text-blue-300">
                <Layers className="h-3.5 w-3.5" />
                {screenOptions.find((option) => option.id === activeScreen)?.label}
              </span>

              <span className="shrink-0 px-2 text-[11px] text-slate-500">
                Entorno de demostración
              </span>

              <div className="ml-auto hidden shrink-0 items-center gap-2 text-[10px] text-slate-500 sm:flex">
                <ShieldCheck className="h-3.5 w-3.5" />
                Datos ilustrativos
              </div>
            </div>

            <div className="min-h-[360px] bg-[#080F1F] p-4 sm:min-h-[390px] sm:p-6 lg:p-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeScreen}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  {activeScreen === 'kardex' && <KardexScreen />}
                  {activeScreen === 'facturacion' && <FacturacionScreen />}
                  {activeScreen === 'letras' && <LetrasScreen />}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex flex-col gap-2 border-t border-white/[0.08] bg-[#0D1729] px-4 py-3 text-[10px] text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-5">
              <span>DSINet ERP Core · Vista referencial</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-blue-400" />
                La interfaz final puede variar según la configuración contratada.
              </span>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <FeatureNote
            icon={<Database className="h-4 w-4" />}
            title="Información organizada"
            description="Visualiza los datos relevantes para cada proceso."
          />
          <FeatureNote
            icon={<Layers className="h-4 w-4" />}
            title="Procesos conectados"
            description="Relaciona la información comercial y operativa."
          />
          <FeatureNote
            icon={<ShieldCheck className="h-4 w-4" />}
            title="Adaptado a tu operación"
            description="Conoce las opciones que corresponden a tu empresa."
          />
        </div>
      </div>
    </section>
  );
};

const KardexScreen: React.FC = () => {
  const products = [
    {
      code: 'ART-0001',
      name: 'Producto de ejemplo A',
      location: 'Almacén central',
      physical: '420',
      committed: '45',
      available: '375',
      cost: '18.40',
    },
    {
      code: 'ART-0002',
      name: 'Producto de ejemplo B',
      location: 'Almacén central',
      physical: '180',
      committed: '20',
      available: '160',
      cost: '24.15',
    },
    {
      code: 'ART-0003',
      name: 'Producto de ejemplo C',
      location: 'Almacén secundario',
      physical: '640',
      committed: '120',
      available: '520',
      cost: '6.20',
    },
    {
      code: 'ART-0004',
      name: 'Producto de ejemplo D',
      location: 'Almacén central',
      physical: '96',
      committed: '0',
      available: '96',
      cost: '32.50',
    },
  ];

  return (
    <div className="space-y-5">
      <ScreenHeader
        icon={<Boxes className="h-4 w-4" />}
        title="Consulta de inventario"
        description="Existencias y movimientos de productos"
      />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex max-w-sm items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5">
          <Search className="h-3.5 w-3.5 shrink-0 text-slate-500" />
          <span className="text-xs text-slate-500">Buscar por código o descripción...</span>
        </div>

        <span className="text-[11px] text-slate-500">
          Moneda referencial: PEN
        </span>
      </div>

      <div className="overflow-hidden rounded-xl border border-white/[0.08]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-xs">
            <thead className="bg-white/[0.035]">
              <tr className="border-b border-white/[0.08] text-[10px] uppercase tracking-wider text-slate-500">
                <th className="px-4 py-3 font-semibold">Código</th>
                <th className="px-4 py-3 font-semibold">Descripción</th>
                <th className="px-4 py-3 font-semibold">Ubicación</th>
                <th className="px-4 py-3 text-right font-semibold">Físico</th>
                <th className="px-4 py-3 text-right font-semibold">Comprometido</th>
                <th className="px-4 py-3 text-right font-semibold">Disponible</th>
                <th className="px-4 py-3 text-right font-semibold">Costo</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-white/[0.06]">
              {products.map((product) => (
                <tr
                  key={product.code}
                  className="transition-colors hover:bg-white/[0.035]"
                >
                  <td className="whitespace-nowrap px-4 py-3.5 font-mono text-slate-400">
                    {product.code}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3.5 font-medium text-slate-200">
                    {product.name}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3.5 text-slate-400">
                    {product.location}
                  </td>
                  <td className="px-4 py-3.5 text-right tabular-nums text-slate-300">
                    {product.physical}
                  </td>
                  <td className="px-4 py-3.5 text-right tabular-nums text-amber-300">
                    {product.committed}
                  </td>
                  <td className="px-4 py-3.5 text-right font-semibold tabular-nums text-emerald-300">
                    {product.available}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3.5 text-right font-mono tabular-nums text-slate-300">
                    S/ {product.cost}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 text-[11px]">
        <span className="text-slate-500">Ejemplo ilustrativo de consulta de stock.</span>
        <span className="inline-flex items-center gap-1.5 text-emerald-300">
          <CheckCircle2 className="h-3.5 w-3.5" />
          Datos de ejemplo
        </span>
      </div>
    </div>
  );
};

const FacturacionScreen: React.FC = () => {
  return (
    <div className="space-y-5">
      <ScreenHeader
        icon={<FileCheck2 className="h-4 w-4" />}
        title="Documentos electrónicos"
        description="Vista referencial de facturación y guías de remisión"
      />

      <div className="grid gap-3 md:grid-cols-3">
        <DataCard
          label="Comprobante"
          title="Factura electrónica"
          value="F001-0000001"
          detail="Serie y correlativo ilustrativos"
          accent="blue"
        />
        <DataCard
          label="Cliente"
          title="Empresa de ejemplo S.A.C."
          value="RUC: DATOS FICTICIOS"
          detail="Datos del receptor de ejemplo"
          accent="neutral"
        />
        <DataCard
          label="Documento de traslado"
          title="Guía de remisión"
          value="T001-0000001"
          detail="Referencia ilustrativa"
          accent="green"
        />
      </div>

      <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-4 sm:p-5">
        <p className="mb-4 text-[10px] font-bold uppercase tracking-wider text-slate-500">
          Resumen de importes de ejemplo
        </p>

        <div className="grid gap-4 sm:grid-cols-3">
          <Amount label="Subtotal" value="S/ 1,000.00" />
          <Amount label="IGV ilustrativo (18%)" value="S/ 180.00" />
          <Amount label="Total referencial" value="S/ 1,180.00" highlight />
        </div>
      </div>

      <div className="flex items-start gap-3 rounded-xl border border-blue-400/15 bg-blue-400/[0.05] p-4">
        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-blue-300" />
        <p className="text-xs leading-5 text-slate-400">
          Esta pantalla no representa una transmisión real ni confirma una
          respuesta de SUNAT. La emisión disponible depende de la configuración
          y los servicios habilitados.
        </p>
      </div>
    </div>
  );
};

const LetrasScreen: React.FC = () => {
  const bills = [
    {
      id: 'LET-EJ-001',
      client: 'Cliente de ejemplo A',
      issue: '01/10/2026',
      due: '31/10/2026',
      status: 'En cartera',
      amount: 'S/ 4,250.00',
    },
    {
      id: 'LET-EJ-002',
      client: 'Cliente de ejemplo B',
      issue: '01/10/2026',
      due: '30/11/2026',
      status: 'Pendiente',
      amount: 'S/ 3,800.00',
    },
    {
      id: 'LET-EJ-003',
      client: 'Cliente de ejemplo C',
      issue: '05/10/2026',
      due: '04/12/2026',
      status: 'Pendiente',
      amount: 'S/ 2,600.00',
    },
  ];

  return (
    <div className="space-y-5">
      <ScreenHeader
        icon={<CreditCard className="h-4 w-4" />}
        title="Seguimiento de crédito y letras"
        description="Vista referencial de documentos y vencimientos"
      />

      <div className="grid gap-3 sm:grid-cols-3">
        <MetricCard label="Documentos de ejemplo" value="03" />
        <MetricCard label="Importe referencial" value="S/ 10,650" />
        <MetricCard label="Pendientes de seguimiento" value="03" />
      </div>

      <div className="overflow-hidden rounded-xl border border-white/[0.08]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-xs">
            <thead className="bg-white/[0.035]">
              <tr className="border-b border-white/[0.08] text-[10px] uppercase tracking-wider text-slate-500">
                <th className="px-4 py-3 font-semibold">Documento</th>
                <th className="px-4 py-3 font-semibold">Cliente</th>
                <th className="px-4 py-3 font-semibold">Emisión</th>
                <th className="px-4 py-3 font-semibold">Vencimiento</th>
                <th className="px-4 py-3 font-semibold">Estado</th>
                <th className="px-4 py-3 text-right font-semibold">Importe</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-white/[0.06]">
              {bills.map((bill) => (
                <tr key={bill.id} className="transition-colors hover:bg-white/[0.035]">
                  <td className="whitespace-nowrap px-4 py-3.5 font-mono text-slate-400">
                    {bill.id}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3.5 text-slate-200">
                    {bill.client}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3.5 text-slate-400">
                    {bill.issue}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3.5 text-slate-300">
                    {bill.due}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3.5">
                    <span className="rounded-full border border-amber-300/15 bg-amber-300/[0.08] px-2 py-1 text-[10px] font-medium text-amber-200">
                      {bill.status}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3.5 text-right font-mono text-slate-200">
                    {bill.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-[11px] leading-5 text-slate-500">
        Los registros, importes y estados mostrados son ilustrativos; no
        corresponden a operaciones financieras reales.
      </p>
    </div>
  );
};

interface ScreenHeaderProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ScreenHeader: React.FC<ScreenHeaderProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="flex items-start gap-3 border-b border-white/[0.08] pb-4">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-400/[0.08] text-blue-300">
      {icon}
    </div>

    <div className="min-w-0">
      <h3 className="text-sm font-bold leading-6 text-white sm:text-base">
        {title}
      </h3>
      <p className="mt-1 text-xs leading-5 text-slate-400">{description}</p>
    </div>
  </div>
);

interface DataCardProps {
  label: string;
  title: string;
  value: string;
  detail: string;
  accent: 'blue' | 'green' | 'neutral';
}

const DataCard: React.FC<DataCardProps> = ({
  label,
  title,
  value,
  detail,
  accent,
}) => {
  const accentClass = {
    blue: 'text-blue-300',
    green: 'text-emerald-300',
    neutral: 'text-slate-200',
  }[accent];

  return (
    <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-4">
      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
        {label}
      </p>
      <h4 className="mt-3 text-xs font-semibold leading-5 text-white">{title}</h4>
      <p className={`mt-2 break-words font-mono text-xs ${accentClass}`}>
        {value}
      </p>
      <p className="mt-2 text-[10px] leading-4 text-slate-500">{detail}</p>
    </div>
  );
};

interface AmountProps {
  label: string;
  value: string;
  highlight?: boolean;
}

const Amount: React.FC<AmountProps> = ({ label, value, highlight }) => (
  <div>
    <p className="text-xs text-slate-500">{label}</p>
    <p
      className={`mt-2 font-mono text-base font-bold tabular-nums ${
        highlight ? 'text-emerald-300' : 'text-white'
      }`}
    >
      {value}
    </p>
  </div>
);

interface MetricCardProps {
  label: string;
  value: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ label, value }) => (
  <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-4">
    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
      {label}
    </p>
    <p className="mt-2 font-mono text-xl font-bold tracking-tight text-white">
      {value}
    </p>
  </div>
);

interface FeatureNoteProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureNote: React.FC<FeatureNoteProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="flex items-start gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] p-4 transition-colors hover:border-white/[0.15] hover:bg-white/[0.04]">
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-400/[0.09] text-blue-300">
      {icon}
    </span>
    <div>
      <h4 className="text-xs font-bold text-white">{title}</h4>
      <p className="mt-1 text-xs leading-5 text-slate-400">{description}</p>
    </div>
  </div>
);
