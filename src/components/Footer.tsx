import React from 'react';
import { AppScreen } from '../types';
import { ShieldCheck, Lock, Award } from 'lucide-react';
import { FluxusLogo } from './FluxusLogo';

interface FooterProps {
  onScreenChange: (screen: AppScreen) => void;
  onOpenDiagnosis: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScreenChange, onOpenDiagnosis }) => {
  return (
    <footer className="bg-[#080C14] border-t border-cyan-500/20 text-gray-400 text-xs py-14 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <button
              onClick={() => onScreenChange('landing')}
              className="text-left cursor-pointer focus:outline-none"
            >
              <FluxusLogo variant="horizontal" size="md" />
            </button>
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Transformamos cadenas de suministro complejas en motores de
              rentabilidad, visibilidad en tiempo real y sostenibilidad de clase
              mundial mediante metodología VRIO y transferencia de capacidades.
            </p>
            <div className="flex items-center gap-4 text-[11px] text-gray-400 pt-1">
              <span className="flex items-center gap-1.5 text-cyan-300">
                <Lock className="w-3.5 h-3.5" />
                NDA B2B Blindado
              </span>
              <span className="flex items-center gap-1.5 text-emerald-300">
                <ShieldCheck className="w-3.5 h-3.5" />
                ISO 9001 / 28000
              </span>
              <span className="flex items-center gap-1.5 text-white">
                <Award className="w-3.5 h-3.5 text-yellow-400" />
                SLA &gt;95%
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-white font-['Orbitron'] block">
              Navegación & Soluciones
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onScreenChange('landing')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Visión General & Soluciones
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScreenChange('calculator')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  Calculadora ROI de Intervención
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScreenChange('matrix')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Simulador de Matriz ABC/XYZ
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenDiagnosis}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  Autodiagnóstico Logístico Gratuito
                </button>
              </li>
            </ul>
          </div>

          {/* Executive Contact & Presence */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-white font-['Orbitron'] block">
              Atención a Comités Directivos
            </span>
            <p className="text-xs text-gray-400 leading-relaxed">
              Atención directa y confidencial para comités de operaciones (COO)
              y finanzas (CFO).
            </p>
            <div className="p-3.5 rounded-xl bg-[#0D1322] border border-cyan-400/20 space-y-1 text-xs">
              <span className="text-gray-400 block text-[10px] uppercase">
                Canal de Auditoría Exprés
              </span>
              <a
                href="mailto:contacto@fluxusquantum.com"
                className="text-cyan-400 font-mono font-bold hover:underline"
              >
                contacto@fluxusquantum.com
              </a>
              <span className="text-[10px] text-gray-400 block pt-1">
                Respuesta y asignación de consultor senior en &lt; 24h
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
          <p>© 2026 Fluxus Quantum. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-gray-300">Privacidad B2B</span>
            <span>•</span>
            <span className="hover:text-gray-300">Acuerdos de Confidencialidad</span>
            <span>•</span>
            <span className="hover:text-gray-300">Compatibilidad ERP</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
