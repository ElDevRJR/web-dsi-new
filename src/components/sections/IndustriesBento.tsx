
import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { MotionCard } from '../ui/MotionCard';
import { INDUSTRIES_DATA } from '../../data/industries';
import {
  ArrowRight,
  Building,
  Layers,
  Truck,
  Globe,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const IndustriesBento: React.FC = () => {
  const getSectorIcon = (id: string) => {
    const iconClassName =
      'w-5 h-5 text-[#1749C7] group-hover:text-white transition-colors duration-300';

    switch (id) {
      case 'pequena-empresa':
        return <Building className={iconClassName} />;

      case 'mediana-empresa':
        return <Layers className={iconClassName} />;

      case 'distribuidoras':
        return <Truck className={iconClassName} />;

      case 'importadoras':
        return <Globe className={iconClassName} />;

      default:
        return <Building className={iconClassName} />;
    }
  };

  const industries = Object.values(INDUSTRIES_DATA);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de la sección */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeading
            kicker="Enfoque por Perfil Operativo"
            title="Soluciones según el tipo de empresa"
            description="No todas las organizaciones enfrentan los mismos cuellos de botella. Adaptamos los módulos y flujos a la escala y logística de tu negocio."
          />

          <div className="shrink-0">
            <Button
              to="/sectores"
              variant="outline"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Ver todos los sectores
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, index) => (
            <MotionCard
              key={ind.id}
              delay={0.18 * index}
              className="h-full"
              lift={7}
            >
              <div className="relative isolate overflow-hidden bg-slate-50/70 hover:bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-900/5 transition-colors duration-300 flex flex-col justify-between h-full group">
                <div className="absolute -right-12 -top-12 w-32 h-32 rounded-full bg-blue-100/0 group-hover:bg-blue-100/50 blur-3xl transition-colors duration-500 -z-10 pointer-events-none" />

                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5 group-hover:bg-[#1749C7] group-hover:border-[#1749C7] transition-colors duration-300">
                    {getSectorIcon(ind.id)}
                  </div>

                  <h3 className="text-lg font-bold text-[#10274D] group-hover:text-[#1749C7] transition-colors duration-300 mb-2">
                    {ind.name}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-6">
                    {ind.summary}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-slate-200/60">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Módulos prioritarios:
                    </span>

                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {ind.erpModules.slice(0, 3).map((mod, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-1.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1749C7] shrink-0 transition-transform duration-300 group-hover:scale-125" />

                          <span className="line-clamp-1">
                            {mod.title}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/60">
                  <Link
                    to={`/sectores/${ind.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1749C7] hover:text-[#10274D] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4 rounded-sm"
                  >
                    <span>Conocer solución específica</span>

                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
};
