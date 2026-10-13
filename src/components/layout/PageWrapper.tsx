
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';

interface PageWrapperProps {
  children: React.ReactNode;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  const { pathname } = useLocation();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const content = document.querySelector('.dsisac-page-content');
    if (!content) return;

    const animatedElements = new Set<HTMLElement>();
    let elementIndex = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target as HTMLElement;

          element.style.transitionDelay = `${
            (elementIndex++ % 4) * 70
          }ms`;

          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
          element.style.filter = 'blur(0px)';

          observer.unobserve(element);
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const prepareElement = (element: HTMLElement) => {
      if (animatedElements.has(element)) return;

      // Respetar elementos excluidos expresamente.
      if (element.closest('[data-no-global-reveal]')) return;

      // No duplicar la animación de los títulos dentro de Reveal.
      if (
        element.matches('h1, h2, h3, h4') &&
        element.closest('[data-reveal]')
      ) {
        return;
      }

      animatedElements.add(element);

      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.filter = 'blur(6px)';
      element.style.transition = [
        'opacity 750ms cubic-bezier(0.22, 1, 0.36, 1)',
        'transform 750ms cubic-bezier(0.22, 1, 0.36, 1)',
        'filter 750ms cubic-bezier(0.22, 1, 0.36, 1)',
      ].join(', ');

      observer.observe(element);
    };

    const scanElements = (root: ParentNode) => {
      root.querySelectorAll<HTMLElement>(
        'h1, h2, h3, h4, p'
      ).forEach(prepareElement);

      if (
        root instanceof HTMLElement &&
        root.matches('h1, h2, h3, h4, p')
      ) {
        prepareElement(root);
      }
    };

    // Detectar los textos que ya existen.
    scanElements(content);

    // Detectar textos que aparezcan posteriormente.
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            scanElements(node);
          }
        });
      });
    });

    mutationObserver.observe(content, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();

      animatedElements.forEach((element) => {
        element.style.removeProperty('opacity');
        element.style.removeProperty('transform');
        element.style.removeProperty('filter');
        element.style.removeProperty('transition');
        element.style.removeProperty('transition-delay');
      });
    };
  }, [pathname, shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <div className="pt-24 dsisac-page-content">
        {children}
      </div>
    );
  }

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="pt-24 dsisac-page-content"
    >
      {children}
    </motion.div>
  );
};
