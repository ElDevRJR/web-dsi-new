import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../ui/Logo';
import { PRODUCTOS_MENU, SERVICIOS_MENU, SECTORES_MENU, COMPANY_CONTACT } from '../../data/navigation';
import { Mail, Phone, ExternalLink } from 'lucide-react';
import { BlurText } from '../ui/BlurText';
import { TechnicalGrid } from '../ui/TechnicalGrid';
import { HexagonMotif } from '../ui/HexagonMotif';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#10274D] text-white pt-20 pb-12 overflow-hidden border-t border-blue-950 relative">
      <TechnicalGrid variant="dark" crosshairs={false} />
      <div className="absolute -top-12 -right-12 opacity-30 pointer-events-none hidden md:block">
        <HexagonMotif variant="dark" size={260} />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-2 space-y-6 pr-4">
            <Link
              to="/"
              aria-label="DSISAC - Inicio"
              className="inline-flex items-center"
              > 
              <img 
              src="/images/dsisac-logo-blanco.png" 
              alt="DSISAC - Fábrica de Software" 
              className="block h-12 w-auto max-w-[220px] object-contain" 
              /> 
              </Link>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Fábrica de software peruana especializada en soluciones de gestión empresarial.
              Desarrollamos DSINet ERP Core y plataformas integradas que conectan tus operaciones,
              almacenes, finanzas y facturación electrónica.
            </p>

            <div className="space-y-3 pt-2">
              <a
                href={`mailto:${COMPANY_CONTACT.email}`}
                className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-[#1749C7] group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>{COMPANY_CONTACT.email}</span>
              </a>

              <a
                href={COMPANY_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-[#1749C7] group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span>{COMPANY_CONTACT.phone} (Central de Atención)</span>
              </a>
            </div>

            <div className="pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-3">
                Canales Oficiales
              </span>
              <div className="flex items-center gap-4 text-xs text-slate-300">
                <a
                  href={COMPANY_CONTACT.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  Facebook <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
                <span>·</span>
                <a
                  href={COMPANY_CONTACT.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  Instagram <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
                <span>·</span>
                <a
                  href={COMPANY_CONTACT.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  TikTok <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-4">
              Productos
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {PRODUCTOS_MENU.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="hover:text-white transition-colors flex items-center justify-between"
                  >
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className="text-[10px] text-amber-300/80 bg-amber-400/10 px-1.5 py-0.5 rounded">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-4">
              Servicios
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {SERVICIOS_MENU.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="hover:text-white transition-colors block">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-4">
              Por Tipo de Empresa
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {SECTORES_MENU.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="hover:text-white transition-colors block">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="pt-3 border-t border-white/10">
                <Link to="/mesa-de-ayuda" className="hover:text-white transition-colors block font-medium">
                  Mesa de Ayuda
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors block font-medium">
                  Blog Técnico & Artículos
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-white transition-colors block font-medium">
                  Contacto Comercial
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-12 border-b border-white/10 select-none">
          <BlurText
            text="DSISAC"
            as="h2"
            className="text-[clamp(3.5rem,15vw,11rem)] font-extrabold tracking-tighter text-white/10 hover:text-white/15 transition-colors duration-500 leading-none text-center block"
          />
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} DSI S.A.C. Todos los derechos reservados. Lima, Perú.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/soluciones/dsinet-erp-core" className="hover:text-white transition-colors">
              DSINet ERP Core
            </Link>
            <span>·</span>
            <Link to="/mesa-de-ayuda" className="hover:text-white transition-colors">
              Soporte a Clientes
            </Link>
            <span>·</span>
            <Link to="/contacto" className="hover:text-white transition-colors">
              Cotizaciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
