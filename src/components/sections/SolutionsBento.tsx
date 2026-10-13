
import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { PRODUCTOS_MENU, SERVICIOS_MENU } from '../../data/navigation';
import { Link } from 'react-router-dom';
import {
  Boxes,
  Headphones,
  ArrowRight,
  Clock,
  ShieldCheck,
  Server,
  FileCode,
  Code2,
  Calculator,
  ShoppingBag,
  TrendingUp,
  CloudLightning,
} from 'lucide-react';
import { MotionCard } from '../ui/MotionCard';

export const SolutionsBento: React.FC = () => {
  const getProductIcon = (name: string) => {
    if (name.includes('ERP')) {
      return <Boxes className="w-5 h-5 text-[#1749C7]" />;
    }
    if (name.includes('Contabilidad')) {
      return <Calculator className="w-5 h-5 text-[#1749C7]" />;
    }
    if (name.includes('Pedidos')) {
      return <ShoppingBag className="w-5 h-5 text-[#1749C7]" />;
    }
    if (name.includes('Gerencial')) {
      return <TrendingUp className="w-5 h-5 text-[#1749C7]" />;
    }
    return <Code2 className="w-5 h-5 text-[#1749C7]" />;
  };

  const getServiceIcon = (name: string) => {
    if (name.includes('Soporte')) {
      return <Headphones className="w-5 h-5 text-[#1749C7]" />;
    }
    if (name.includes('Certificados')) {
      return <ShieldCheck className="w-5 h-5 text-[#1749C7]" />;
    }
    if (name.includes('NubeFact')) {
      return <CloudLightning className="w-5 h-5 text-[#1749C7]" />;
    }
    if (name.includes('VPS')) {
      return <Server className="w-5 h-5 text-[#1749C7]" />;
    }
    return <FileCode className="w-5 h-5 text-[#1749C7]" />;
  };

  const linkClassName =
    'group block p-3.5 rounded-xl border border-slate-100 ' +
    'hover:border-blue-200 hover:bg-blue-50/50 ' +
    'hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-900/5 ' +
    'transition-all duration-300';

  return (
    <section
      id="soluciones"
      className="py-20 lg:py-28 bg-slate-50/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Catálogo Integral"
          title="Productos y Servicios Especializados"
          description="Estructura modular diseñada para cubrir tanto el software central de la empresa como los servicios técnicos de soporte, infraestructura y validación electrónica."
          className="mb-14"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <MotionCard
            delay={0.1}
            className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm h-full flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center">
                  <Boxes className="w-5 h-5 text-[#1749C7]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#10274D]">
                    Productos de Software
                  </h3>
                  <p className="text-xs text-slate-500">
                    Sistemas centrales de gestión desarrollados por nuestra fábrica
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {PRODUCTOS_MENU.map((prod) => (
                  <Link
                    key={prod.href}
                    to={prod.href}
                    className={linkClassName}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-slate-50 group-hover:bg-blue-100/70 flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-300">
                          {getProductIcon(prod.name)}
                        </div>

                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-sm font-bold text-slate-900 group-hover:text-[#1749C7] transition-colors">
                              {prod.name}
                            </span>

                            {prod.badge && (
                              <span className="inline-flex items-center gap-1 text-[10px] font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                                <Clock className="w-2.5 h-2.5" />
                                {prod.badge}
                              </span>
                            )}
                          </div>

                          <p className="text-xs text-slate-500 mt-1 leading-snug">
                            {prod.description}
                          </p>
                        </div>
                      </div>

                      <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#1749C7] group-hover:translate-x-1 transition-all duration-300 shrink-0 mt-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </MotionCard>

          <MotionCard
            delay={0.22}
            className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm h-full flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center">
                  <Headphones className="w-5 h-5 text-[#1749C7]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#10274D]">
                    Servicios Especializados
                  </h3>
                  <p className="text-xs text-slate-500">
                    Soporte técnico, validación tributaria y adecuación técnica continua
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {SERVICIOS_MENU.map((serv) => (
                  <Link
                    key={serv.href}
                    to={serv.href}
                    className={linkClassName}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-slate-50 group-hover:bg-blue-100/70 flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-300">
                          {getServiceIcon(serv.name)}
                        </div>

                        <div>
                          <span className="text-sm font-bold text-slate-900 group-hover:text-[#1749C7] transition-colors block">
                            {serv.name}
                          </span>

                          <p className="text-xs text-slate-500 mt-1 leading-snug">
                            {serv.description}
                          </p>
                        </div>
                      </div>

                      <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#1749C7] group-hover:translate-x-1 transition-all duration-300 shrink-0 mt-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </MotionCard>
        </div>
      </div>
    </section>
  );
};
