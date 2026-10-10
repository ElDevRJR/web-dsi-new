import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import { PRODUCTOS_MENU, SERVICIOS_MENU, SECTORES_MENU } from '../../data/navigation';
import {
  ChevronDown,
  Menu,
  X,
  Boxes,
  Headphones,
  Building2,
  PhoneCall,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [sectoresOpen, setSectoresOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileSectoresOpen, setMobileSectoresOpen] = useState(false);

  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const sectoresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setSolutionsOpen(false);
    setSectoresOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSolutionsOpen(false);
      }
      if (sectoresRef.current && !sectoresRef.current.contains(event.target as Node)) {
        setSectoresOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSolutionsOpen(false);
        setSectoresOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const isSolutionsActive =
    location.pathname.startsWith('/soluciones') || location.pathname.startsWith('/servicios');
  const isSectoresActive = location.pathname.startsWith('/sectores');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-3 sm:pt-4 px-3 sm:px-6">

      <div
        className={`mx-auto max-w-7xl transition-all duration-500 rounded-[28px] border border-transparent ${scrolled
            ? 'bg-white/40 backdrop-blur-[32px] backdrop-saturate-150 shadow-xl shadow-slate-900/[0.08] py-2.5 px-4 sm:px-6'
            : 'bg-white/25 backdrop-blur-[28px] backdrop-saturate-150 shadow-lg shadow-slate-900/[0.04] py-3.5 px-5 sm:px-7'
          }`}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex shrink-0 items-center self-center">
            <Logo />
          </div>

          <nav
            aria-label="Navegación principal"
            className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-slate-700"
          >
            <Link
              to="/"
              className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap ${location.pathname === '/'
                ? 'text-[#1749C7] font-semibold bg-blue-50/70'
                : 'hover:text-[#1749C7] hover:bg-slate-50'
                }`}
            >
              Inicio
            </Link>

            <Link
              to="/nosotros"
              className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap ${location.pathname === '/nosotros'
                ? 'text-[#1749C7] font-semibold bg-blue-50/70'
                : 'hover:text-[#1749C7] hover:bg-slate-50'
                }`}
            >
              Nosotros
            </Link>

            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => {
                  setSolutionsOpen(!solutionsOpen);
                  setSectoresOpen(false);
                }}
                onMouseEnter={() => setSolutionsOpen(true)}
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-md transition-colors whitespace-nowrap ${isSolutionsActive || solutionsOpen
                  ? 'text-[#1749C7] font-semibold bg-blue-50/70'
                  : 'hover:text-[#1749C7] hover:bg-slate-50'
                  }`}
                aria-expanded={solutionsOpen}
                aria-haspopup="true"
              >
                <span>Soluciones</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${solutionsOpen ? 'rotate-180 text-[#1749C7]' : 'text-slate-400'
                    }`}
                  aria-hidden="true"
                />
              </button>

              <AnimatePresence>
                {solutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    onMouseLeave={() => setSolutionsOpen(false)}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-[660px] xl:w-[720px]"
                  >
                    <div className="bg-white rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-200/90 p-6 overflow-hidden">
                      <div className="grid grid-cols-2 gap-8 divide-x divide-slate-100">
                        <div className="pr-4">
                          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
                            <Boxes className="w-4 h-4 text-[#1749C7]" />
                            <span className="text-xs font-bold tracking-wider uppercase text-[#10274D]">
                              Productos
                            </span>
                          </div>
                          <ul className="space-y-1">
                            {PRODUCTOS_MENU.map((item) => {
                              const isCurrent = location.pathname === item.href;
                              return (
                                <li key={item.href}>
                                  <Link
                                    to={item.href}
                                    className={`group block p-2 rounded-lg transition-colors ${isCurrent ? 'bg-blue-50/80 text-[#1749C7]' : 'hover:bg-slate-50'
                                      }`}
                                  >
                                    <div className="flex items-center justify-between">
                                      <span className="text-sm font-semibold text-slate-900 group-hover:text-[#1749C7] transition-colors">
                                        {item.name}
                                      </span>
                                      {item.badge && (
                                        <span className="inline-flex items-center gap-1 text-[10px] font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                                          <Clock className="w-2.5 h-2.5" />
                                          {item.badge}
                                        </span>
                                      )}
                                    </div>
                                    {item.description && (
                                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                                        {item.description}
                                      </p>
                                    )}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>

                        <div className="pl-8">
                          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
                            <Headphones className="w-4 h-4 text-[#1749C7]" />
                            <span className="text-xs font-bold tracking-wider uppercase text-[#10274D]">
                              Servicios
                            </span>
                          </div>
                          <ul className="space-y-1">
                            {SERVICIOS_MENU.map((item) => {
                              const isCurrent = location.pathname === item.href;
                              return (
                                <li key={item.href}>
                                  <Link
                                    to={item.href}
                                    className={`group block p-2 rounded-lg transition-colors ${isCurrent ? 'bg-blue-50/80 text-[#1749C7]' : 'hover:bg-slate-50'
                                      }`}
                                  >
                                    <span className="text-sm font-semibold text-slate-900 group-hover:text-[#1749C7] transition-colors block">
                                      {item.name}
                                    </span>
                                    {item.description && (
                                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                                        {item.description}
                                      </p>
                                    )}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                        <span>¿Tienes dudas sobre qué solución se ajusta a tu empresa?</span>
                        <Link
                          to="/contacto"
                          className="font-semibold text-[#1749C7] hover:underline inline-flex items-center gap-1"
                        >
                          Hablar con un asesor técnico
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative" ref={sectoresRef}>
              <button
                type="button"
                onClick={() => {
                  setSectoresOpen(!sectoresOpen);
                  setSolutionsOpen(false);
                }}
                onMouseEnter={() => setSectoresOpen(true)}
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-md transition-colors whitespace-nowrap ${isSectoresActive || sectoresOpen
                  ? 'text-[#1749C7] font-semibold bg-blue-50/70'
                  : 'hover:text-[#1749C7] hover:bg-slate-50'
                  }`}
                aria-expanded={sectoresOpen}
                aria-haspopup="true"
              >
                <span>Sectores</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${sectoresOpen ? 'rotate-180 text-[#1749C7]' : 'text-slate-400'
                    }`}
                  aria-hidden="true"
                />
              </button>

              <AnimatePresence>
                {sectoresOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    onMouseLeave={() => setSectoresOpen(false)}
                    className="absolute top-full left-0 pt-2.5 w-72"
                  >
                    <div className="bg-white rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-200/90 p-4">
                      <div className="flex items-center gap-2 pb-2 mb-2 border-b border-slate-100">
                        <Building2 className="w-4 h-4 text-[#1749C7]" />
                        <span className="text-xs font-bold tracking-wider uppercase text-[#10274D]">
                          Por Tipo de Empresa
                        </span>
                      </div>
                      <ul className="space-y-1">
                        {SECTORES_MENU.map((item) => (
                          <li key={item.href}>
                            <Link
                              to={item.href}
                              className={`block p-2 rounded-lg text-sm transition-colors ${location.pathname === item.href
                                ? 'bg-blue-50 text-[#1749C7] font-semibold'
                                : 'text-slate-800 hover:text-[#1749C7] hover:bg-slate-50'
                                }`}
                            >
                              <div className="font-semibold text-xs text-slate-900">{item.name}</div>
                              <div className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                                {item.description}
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-2 pt-2 border-t border-slate-100">
                        <Link
                          to="/sectores"
                          className="text-xs text-[#1749C7] font-semibold hover:underline block text-center"
                        >
                          Ver índice de sectores →
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/mesa-de-ayuda"
              className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap ${location.pathname === '/mesa-de-ayuda'
                ? 'text-[#1749C7] font-semibold bg-blue-50/70'
                : 'hover:text-[#1749C7] hover:bg-slate-50'
                }`}
            >
              Mesa de Ayuda
            </Link>

            <Link
              to="/blog"
              className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap ${location.pathname.startsWith('/blog')
                ? 'text-[#1749C7] font-semibold bg-blue-50/70'
                : 'hover:text-[#1749C7] hover:bg-slate-50'
                }`}
            >
              Blog
            </Link>
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <Button
              to="/contacto"
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex"
              icon={<PhoneCall className="w-3.5 h-3.5" />}
              iconPosition="left"
            >
              Solicitar Demo
            </Button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#1749C7]"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-2 mx-auto max-w-7xl bg-white rounded-2xl shadow-2xl border border-slate-200 p-5 max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-3 rounded-lg text-base font-semibold ${location.pathname === '/' ? 'text-[#1749C7] bg-blue-50' : 'text-slate-800'
                  }`}
              >
                Inicio
              </Link>

              <Link
                to="/nosotros"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-3 rounded-lg text-base font-semibold ${location.pathname === '/nosotros' ? 'text-[#1749C7] bg-blue-50' : 'text-slate-800'
                  }`}
              >
                Nosotros
              </Link>

              <div className="border border-slate-100 rounded-xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                  className="w-full flex items-center justify-between p-3 bg-slate-50/70 text-slate-900 font-semibold text-left"
                >
                  <span className="flex items-center gap-2">
                    <Boxes className="w-4 h-4 text-[#1749C7]" />
                    Soluciones
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${mobileSolutionsOpen ? 'rotate-180' : ''
                      }`}
                  />
                </button>

                {mobileSolutionsOpen && (
                  <div className="p-3 bg-white space-y-4">
                    {/* Productos */}
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-[#1749C7] mb-2 px-2">
                        Productos
                      </div>
                      <div className="space-y-1">
                        {PRODUCTOS_MENU.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center justify-between p-2 rounded-lg text-sm hover:bg-slate-50 text-slate-800"
                          >
                            <span>{item.name}</span>
                            {item.badge && (
                              <span className="text-[10px] text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded">
                                {item.badge}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#1749C7] mb-2 px-2">
                        Servicios
                      </div>
                      <div className="space-y-1">
                        {SERVICIOS_MENU.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block p-2 rounded-lg text-sm hover:bg-slate-50 text-slate-800"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="border border-slate-100 rounded-xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => setMobileSectoresOpen(!mobileSectoresOpen)}
                  className="w-full flex items-center justify-between p-3 bg-slate-50/70 text-slate-900 font-semibold text-left"
                >
                  <span className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1749C7]" />
                    Sectores
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${mobileSectoresOpen ? 'rotate-180' : ''
                      }`}
                  />
                </button>

                {mobileSectoresOpen && (
                  <div className="p-3 bg-white space-y-1">
                    {SECTORES_MENU.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block p-2 rounded-lg text-sm hover:bg-slate-50 text-slate-800"
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Link
                      to="/sectores"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block p-2 text-xs font-semibold text-[#1749C7]"
                    >
                      Ver índice de sectores →
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/mesa-de-ayuda"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-3 rounded-lg text-base font-semibold ${location.pathname === '/mesa-de-ayuda' ? 'text-[#1749C7] bg-blue-50' : 'text-slate-800'
                  }`}
              >
                Mesa de Ayuda
              </Link>

              <Link
                to="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-3 rounded-lg text-base font-semibold ${location.pathname.startsWith('/blog') ? 'text-[#1749C7] bg-blue-50' : 'text-slate-800'
                  }`}
              >
                Blog
              </Link>

              <Link
                to="/contacto"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-3 rounded-lg text-base font-semibold ${location.pathname === '/contacto' ? 'text-[#1749C7] bg-blue-50' : 'text-slate-800'
                  }`}
              >
                Contacto
              </Link>

              <div className="pt-2">
                <Button
                  to="/contacto"
                  variant="primary"
                  size="md"
                  className="w-full justify-center"
                >
                  Solicitar Demostración
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
