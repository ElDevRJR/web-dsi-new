import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import { Bot, MessageSquare, Database, ArrowRight, ShieldCheck } from 'lucide-react';

export const DsiBotPreview: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#10274D] text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-[linear-gradient(to_right,#3B82F60A_1px,transparent_1px),linear-gradient(to_bottom,#3B82F60A_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
                <Bot className="w-4 h-4" />
                <span>Innovación Operativa</span>
              </div>

              <SectionHeading
                isDark
                title="DSI Bot IA: Consultas operativas y agilidad en datos de tu ERP"
                description="Concebido para brindar respuestas inmediatas sobre stock, saldos de clientes y estado de despachos directamente a la fuerza comercial y directivos, sin requerir acceso completo a terminales de escritorio."
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-3.5">
                  <Database className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold block text-white">Consulta de Stock Inmediata</span>
                    <span className="text-[11px] text-slate-300">
                      Disponibilidad por producto y sede para vendedores en campo.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-3.5">
                  <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold block text-white">Seguridad y Permisos</span>
                    <span className="text-[11px] text-slate-300">
                      Acceso segmentado según el perfil y nivel de autorización del colaborador.
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  to="/contacto"
                  variant="primary"
                  className="bg-[#1749C7] hover:bg-blue-600"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Consultar disponibilidad e integración
                </Button>
                
                <Button
                  to="/soluciones/dsinet-erp-core"
                  variant="outline"
                  className="!bg-transparent !text-white !border-white/30 hover:!bg-white/10 hover:!border-white hover:!text-white"
                  > 
                  Ver arquitectura de DSINet
                  </Button>

              </div>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.2}>
                <div className="bg-slate-900/90 rounded-2xl border border-white/15 p-5 shadow-2xl backdrop-blur-md space-y-3.5 font-sans">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="font-semibold text-white">DSI Bot IA · Conexión ERP</span>
                    </div>
                    <span className="text-slate-400 text-[10px]">Modo Operativo</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[10px] text-slate-300 shrink-0">
                      VR
                    </div>
                    <div className="bg-white/10 rounded-xl rounded-tl-none p-3 text-xs text-slate-200">
                      ¿Stock disponible del código <code className="bg-black/30 px-1 py-0.5 rounded text-blue-300 font-mono">TUB-PVC-04</code> en almacén central?
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 justify-end">
                    <div className="bg-[#1749C7]/30 border border-blue-400/30 rounded-xl rounded-tr-none p-3 text-xs text-slate-100 max-w-[85%] space-y-1.5">
                      <div className="font-semibold text-blue-300 text-[11px] flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        <span>Kardex Actualizado</span>
                      </div>
                      <p>
                        Stock Físico: <strong>140 unidades</strong>.<br />
                        Comprometido en órdenes: <strong>25 unidades</strong>.<br />
                        <strong>Disponible para venta: 115 unidades</strong>.
                      </p>
                      <div className="text-[10px] text-slate-400 pt-1 border-t border-white/10">
                        Almacén Central (Lima) · Verificado hace 2 min.
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function CheckCircle2({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}
