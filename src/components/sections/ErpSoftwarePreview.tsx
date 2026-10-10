import React, { useState } from 'react';
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

export const ErpSoftwarePreview: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<'kardex' | 'facturacion' | 'letras'>('kardex');

  return (
    <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            isDark
            kicker="Arquitectura Visual"
            title="Representación fiel del entorno operativo DSINet"
            description="Una plataforma transaccional diseñada para alta productividad: tiempos de respuesta rápidos, consultas ágiles de stock y emisión electrónica sin fricciones."
          />

          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white/10 rounded-xl border border-white/10 shrink-0">
            <button
              type="button"
              onClick={() => setActiveScreen('kardex')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeScreen === 'kardex'
                  ? 'bg-[#1749C7] text-white shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Kardex & Stock
            </button>
            <button
              type="button"
              onClick={() => setActiveScreen('facturacion')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeScreen === 'facturacion'
                  ? 'bg-[#1749C7] text-white shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Comprobantes & GRE
            </button>
            <button
              type="button"
              onClick={() => setActiveScreen('letras')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeScreen === 'letras'
                  ? 'bg-[#1749C7] text-white shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Letras & Créditos
            </button>
          </div>
        </div>

        <Reveal delay={0.15}>
          <div className="rounded-2xl border border-white/15 bg-slate-950/95 shadow-2xl overflow-hidden font-sans">
            <div className="px-4 py-3 bg-slate-900/90 border-b border-white/10 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-slate-300 font-semibold text-[11px] pl-2">
                  DSINet ERP Core · Empresa: Distribuidora & Comercio Perú S.A.C. (RUC 20601849201)
                </span>
              </div>
              <div className="flex items-center gap-3 text-[10px] text-slate-400 font-mono">
                <span>SEDE: Almacén Central (Lima)</span>
                <span>·</span>
                <span>SUNAT: Conectado</span>
              </div>
            </div>

            <div className="px-4 py-2 bg-slate-900/50 border-b border-white/5 flex items-center gap-6 text-[11px] text-slate-300 font-medium">
              <span className="hover:text-blue-400 cursor-pointer">Archivo</span>
              <span className="text-blue-400 font-bold border-b border-blue-400 pb-0.5 cursor-pointer">
                Almacenes & Kardex
              </span>
              <span className="hover:text-blue-400 cursor-pointer">Ventas & Pedidos</span>
              <span className="hover:text-blue-400 cursor-pointer">Facturación Electrónica</span>
              <span className="hover:text-blue-400 cursor-pointer">Cobranzas & Letras</span>
              <span className="hover:text-blue-400 cursor-pointer">Reportes Gerenciales</span>
            </div>

            <div className="p-5 sm:p-6 min-h-[380px] bg-slate-950 text-slate-200">
              {activeScreen === 'kardex' && (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2 text-xs">
                      <Boxes className="w-4 h-4 text-blue-400" />
                      <span className="font-bold text-white">Consulta de Inventario Multisede & Kardex Valorizado</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                      <span>Filtro: Todos los Almacenes</span>
                      <span>·</span>
                      <span>Moneda: Soles (PEN)</span>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-white/10 text-slate-400 uppercase tracking-wider text-[10px] font-mono">
                          <th className="py-2.5 px-3">Código</th>
                          <th className="py-2.5 px-3">Descripción de Mercadería</th>
                          <th className="py-2.5 px-3">Ubicación</th>
                          <th className="py-2.5 px-3 text-right">Físico</th>
                          <th className="py-2.5 px-3 text-right">Comprometido</th>
                          <th className="py-2.5 px-3 text-right text-blue-400">Disponible</th>
                          <th className="py-2.5 px-3 text-right">Costo Prom.</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 font-sans">
                        <tr className="hover:bg-white/5 transition-colors">
                          <td className="py-2.5 px-3 font-mono text-slate-400">TUB-PVC-02</td>
                          <td className="py-2.5 px-3 font-medium text-white">Tubo PVC Sanitario 2" x 3m Clase Pesada</td>
                          <td className="py-2.5 px-3 text-slate-400">Pasillo A · Rack 03-B</td>
                          <td className="py-2.5 px-3 text-right tabular-nums">420 und</td>
                          <td className="py-2.5 px-3 text-right tabular-nums text-amber-400">45 und</td>
                          <td className="py-2.5 px-3 text-right tabular-nums text-emerald-400 font-bold">375 und</td>
                          <td className="py-2.5 px-3 text-right tabular-nums font-mono">S/. 18.40</td>
                        </tr>
                        <tr className="hover:bg-white/5 transition-colors">
                          <td className="py-2.5 px-3 font-mono text-slate-400">VAL-BOLA-01</td>
                          <td className="py-2.5 px-3 font-medium text-white">Válvula de Bola Bronce 1/2" Paso Total</td>
                          <td className="py-2.5 px-3 text-slate-400">Pasillo B · Gaveta 12</td>
                          <td className="py-2.5 px-3 text-right tabular-nums">180 und</td>
                          <td className="py-2.5 px-3 text-right tabular-nums text-amber-400">20 und</td>
                          <td className="py-2.5 px-3 text-right tabular-nums text-emerald-400 font-bold">160 und</td>
                          <td className="py-2.5 px-3 text-right tabular-nums font-mono">S/. 24.15</td>
                        </tr>
                        <tr className="hover:bg-white/5 transition-colors">
                          <td className="py-2.5 px-3 font-mono text-slate-400">ACC-CODO-90</td>
                          <td className="py-2.5 px-3 font-medium text-white">Codo PVC 90° 4" Desagüe Inyectado</td>
                          <td className="py-2.5 px-3 text-slate-400">Pasillo A · Rack 01-A</td>
                          <td className="py-2.5 px-3 text-right tabular-nums">640 und</td>
                          <td className="py-2.5 px-3 text-right tabular-nums text-amber-400">120 und</td>
                          <td className="py-2.5 px-3 text-right tabular-nums text-emerald-400 font-bold">520 und</td>
                          <td className="py-2.5 px-3 text-right tabular-nums font-mono">S/. 6.20</td>
                        </tr>
                        <tr className="hover:bg-white/5 transition-colors">
                          <td className="py-2.5 px-3 font-mono text-slate-400">PEG-SOLV-500</td>
                          <td className="py-2.5 px-3 font-medium text-white">Pegamento Extra Fuerte Lata 500ml c/Brocha</td>
                          <td className="py-2.5 px-3 text-slate-400">Almacén Químicos</td>
                          <td className="py-2.5 px-3 text-right tabular-nums">96 und</td>
                          <td className="py-2.5 px-3 text-right tabular-nums text-amber-400">0 und</td>
                          <td className="py-2.5 px-3 text-right tabular-nums text-emerald-400 font-bold">96 und</td>
                          <td className="py-2.5 px-3 text-right tabular-nums font-mono">S/. 32.50</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between text-[11px] text-slate-400">
                    <span>Valuación Total de Kardex en Sede: <strong className="text-white font-mono">S/. 184,920.50</strong></span>
                    <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                      <CheckCircle2 className="w-3 h-3" />
                      Inventario cuadrado con libros electrónicos
                    </span>
                  </div>
                </div>
              )}

              {activeScreen === 'facturacion' && (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2 text-xs">
                      <FileCheck2 className="w-4 h-4 text-emerald-400" />
                      <span className="font-bold text-white">
                        Factura Electrónica SUNAT F001-0004921 & Guía Remitente GRE T001-0001284
                      </span>
                    </div>
                    <span className="text-[11px] text-emerald-400 font-mono">
                      ● Estado CDR: ACEPTADO POR SUNAT
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div className="bg-white/5 rounded-xl p-3.5 space-y-1">
                      <span className="text-[10px] text-slate-400 uppercase font-mono">Receptor</span>
                      <p className="font-semibold text-white">CONSORCIO CONSTRUCTOR DEL CENTRO S.A.C.</p>
                      <p className="text-slate-400 font-mono text-[11px]">RUC: 20551984219</p>
                    </div>

                    <div className="bg-white/5 rounded-xl p-3.5 space-y-1">
                      <span className="text-[10px] text-slate-400 uppercase font-mono">Condición Comercial</span>
                      <p className="font-semibold text-white">Crédito a 30 días · 1 Cuota</p>
                      <p className="text-slate-400 text-[11px]">Vcto: 15/11/2024</p>
                    </div>

                    <div className="bg-white/5 rounded-xl p-3.5 space-y-1">
                      <span className="text-[10px] text-slate-400 uppercase font-mono">Guía GRE Remitente</span>
                      <p className="font-semibold text-white">T001-0001284 (24 Bultos)</p>
                      <p className="text-slate-400 text-[11px]">Placa: V8B-914 · Conductor acreditado</p>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
                    <div>Subtotal Gravado: <span className="text-white font-bold">S/. 12,584.75</span></div>
                    <div>IGV (18%): <span className="text-white font-bold">S/. 2,265.25</span></div>
                    <div className="text-sm">TOTAL COMPROBANTE: <span className="text-emerald-400 font-bold">S/. 14,850.00</span></div>
                  </div>
                </div>
              )}

              {activeScreen === 'letras' && (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2 text-xs">
                      <CreditCard className="w-4 h-4 text-amber-400" />
                      <span className="font-bold text-white">
                        Módulo de Canje de Letras & Seguimiento de Crédito Comercial
                      </span>
                    </div>
                    <span className="text-[11px] text-blue-400 font-mono">
                      Línea Autorizada: S/. 80,000.00
                    </span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-white/10 text-slate-400 uppercase tracking-wider text-[10px] font-mono">
                          <th className="py-2 px-3">N° Letra</th>
                          <th className="py-2 px-3">Cliente Aceptante</th>
                          <th className="py-2 px-3">Fecha Giro</th>
                          <th className="py-2 px-3">Vencimiento</th>
                          <th className="py-2 px-3">Situación Bancaria</th>
                          <th className="py-2 px-3 text-right">Importe</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 font-sans">
                        <tr className="hover:bg-white/5">
                          <td className="py-2.5 px-3 font-mono text-slate-400">LET-2024-0891</td>
                          <td className="py-2.5 px-3 text-white font-medium">FERRETERÍA INDUSTRIAL DEL SUR E.I.R.L.</td>
                          <td className="py-2.5 px-3 text-slate-400">10/10/2024</td>
                          <td className="py-2.5 px-3 text-slate-300">09/11/2024 (En 30 días)</td>
                          <td className="py-2.5 px-3 text-blue-400">En Descuento BCP</td>
                          <td className="py-2.5 px-3 text-right tabular-nums font-mono text-white">S/. 8,450.00</td>
                        </tr>
                        <tr className="hover:bg-white/5">
                          <td className="py-2.5 px-3 font-mono text-slate-400">LET-2024-0892</td>
                          <td className="py-2.5 px-3 text-white font-medium">FERRETERÍA INDUSTRIAL DEL SUR E.I.R.L.</td>
                          <td className="py-2.5 px-3 text-slate-400">10/10/2024</td>
                          <td className="py-2.5 px-3 text-slate-300">09/12/2024 (En 60 días)</td>
                          <td className="py-2.5 px-3 text-slate-300">En Cartera Libre</td>
                          <td className="py-2.5 px-3 text-right tabular-nums font-mono text-white">S/. 8,450.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Estado del cliente: <strong>Crédito Vigente sin Mora</strong></span>
                    <span className="font-mono text-blue-300">Saldo Disponible: S/. 63,100.00</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
