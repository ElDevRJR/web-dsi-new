
import React from 'react';
import { Link } from 'react-router-dom';
import {
  PRODUCTOS_MENU,
  SERVICIOS_MENU,
  SECTORES_MENU,
  COMPANY_CONTACT,
} from '../../data/navigation';
import {
  Mail,
  Phone,
  ExternalLink,
  ArrowUpRight,
} from 'lucide-react';
import { BlurText } from '../ui/BlurText';
import { TechnicalGrid } from '../ui/TechnicalGrid';
import { HexagonMotif } from '../ui/HexagonMotif';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const linkClass =
    'inline-flex items-center gap-1 text-sm text-slate-300 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-sm';

  const headingClass =
    'mb-4 text-xs font-bold uppercase tracking-[0.14em] text-blue-300';

  return (
    <footer className="relative isolate overflow-hidden border-t border-white/10 bg-[#10274D] text-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <TechnicalGrid variant="dark" crosshairs={false} />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B1D38]/70" />

        <div className="absolute -right-24 -top-24 opacity-15">
          <HexagonMotif variant="dark" size={240} />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-white/10 py-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-10 lg:py-14">
          <div className="space-y-5 sm:col-span-2 lg:col-span-2 lg:pr-8">
            <Link
              to="/"
              aria-label="DSISAC - Inicio"
              className="inline-flex items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <img
                src="/images/dsisac-logo-blanco.png"
                alt="DSISAC - Fábrica de Software"
                className="block h-10 w-auto max-w-[210px] object-contain sm:h-11"
              />
            </Link>

            <p className="max-w-md text-sm leading-relaxed text-slate-300">
              Fábrica de software peruana especializada en soluciones de
              gestión empresarial. Desarrollamos DSINet ERP Core y
              plataformas que conectan las operaciones, los almacenes,
              las finanzas y la facturación electrónica.
            </p>

            <div className="space-y-3 pt-1">
              <a
                href={`mailto:${COMPANY_CONTACT.email}`}
                className="group flex w-fit items-center gap-3 rounded-sm text-sm text-slate-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-blue-300 transition-colors group-hover:bg-[#1749C7] group-hover:text-white">
                  <Mail className="h-4 w-4" />
                </span>
                <span>{COMPANY_CONTACT.email}</span>
              </a>

              <a
                href={COMPANY_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-fit items-center gap-3 rounded-sm text-sm text-slate-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-blue-300 transition-colors group-hover:bg-[#1749C7] group-hover:text-white">
                  <Phone className="h-4 w-4" />
                </span>
                <span>{COMPANY_CONTACT.phone} · Central de atención</span>
              </a>
            </div>

            <div className="pt-1">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                Canales oficiales
              </p>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                {[
                  {
                    name: 'Facebook',
                    href: COMPANY_CONTACT.social.facebook,
                  },
                  {
                    name: 'Instagram',
                    href: COMPANY_CONTACT.social.instagram,
                  },
                  {
                    name: 'TikTok',
                    href: COMPANY_CONTACT.social.tiktok,
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    {social.name}
                    <ExternalLink className="h-3 w-3 opacity-50" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <nav aria-label="Productos">
            <h3 className={headingClass}>Productos</h3>

            <ul className="space-y-3">
              {PRODUCTOS_MENU.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="group flex items-start justify-between gap-2 text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    <span>{item.name}</span>

                    {item.badge && (
                      <span className="shrink-0 rounded bg-amber-400/10 px-1.5 py-0.5 text-[10px] text-amber-300">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Servicios">
            <h3 className={headingClass}>Servicios</h3>

            <ul className="space-y-3">
              {SERVICIOS_MENU.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className={linkClass}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Sectores y recursos">
            <h3 className={headingClass}>Por tipo de empresa</h3>

            <ul className="space-y-3">
              {SECTORES_MENU.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className={linkClass}>
                    {item.name}
                  </Link>
                </li>
              ))}

              <li className="border-t border-white/10 pt-3">
                <Link to="/mesa-de-ayuda" className={linkClass}>
                  Mesa de ayuda
                </Link>
              </li>

              <li>
                <Link to="/blog" className={linkClass}>
                  Blog técnico
                </Link>
              </li>

              <li>
                <Link to="/contacto" className={linkClass}>
                  Contacto comercial
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="select-none border-b border-white/10 py-7 sm:py-8">
          <BlurText
            text="DSISAC"
            as="h2"
            className="block text-center text-[clamp(3.5rem,13vw,9rem)] font-extrabold leading-none tracking-[-0.07em] text-white/[0.09] transition-colors duration-500 hover:text-white/[0.14]"
          />
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs leading-relaxed text-slate-400">
            © {currentYear} DSI S.A.C. Todos los derechos reservados.
            <span className="hidden sm:inline"> · </span>
            <span className="block sm:inline">Lima, Perú.</span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link to="/soluciones/dsinet-erp-core" className={linkClass}>
              DSINet ERP Core
            </Link>

            <Link to="/mesa-de-ayuda" className={linkClass}>
              Soporte
            </Link>

            <Link to="/contacto" className={linkClass}>
              Cotizaciones
              <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
