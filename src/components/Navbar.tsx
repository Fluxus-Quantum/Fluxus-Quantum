import React from 'react';
import { AppScreen } from '../types';
import { ArrowRight, BarChart3, Calculator, Home } from 'lucide-react';
import { FluxusLogo } from './FluxusLogo';

interface NavbarProps {
  currentScreen: AppScreen;
  onScreenChange: (screen: AppScreen) => void;
  onOpenDiagnosis: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentScreen,
  onScreenChange,
  onOpenDiagnosis
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Logo Branding */}
        <button
          id="nav-logo-btn"
          onClick={() => onScreenChange('landing')}
          className="group text-left cursor-pointer focus:outline-none transition-transform duration-200 hover:opacity-95"
        >
          <FluxusLogo variant="horizontal" size="md" />
        </button>

        {/* Screen Switcher Mode (Desktop & Tablet) */}
        <div className="hidden md:flex items-center gap-1.5 p-1 rounded-xl bg-[#080C14]/80 border border-cyan-500/20 text-xs font-semibold">
          <button
            id="nav-screen-landing"
            onClick={() => onScreenChange('landing')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
              currentScreen === 'landing'
                ? 'bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 shadow-glow-cyan'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span>Inicio</span>
          </button>
          <button
            id="nav-screen-calc"
            onClick={() => onScreenChange('calculator')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
              currentScreen === 'calculator'
                ? 'bg-emerald-400/20 text-emerald-300 border border-emerald-400/40 shadow-glow-green'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>Calculadora ROI</span>
          </button>
          <button
            id="nav-screen-matrix"
            onClick={() => onScreenChange('matrix')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
              currentScreen === 'matrix'
                ? 'bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 shadow-glow-cyan'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Matriz ABC/XYZ</span>
          </button>
        </div>

        {/* Desktop Anchor Links for Landing */}
        {currentScreen === 'landing' && (
          <nav className="hidden xl:flex items-center gap-6 text-xs uppercase tracking-wider font-medium text-gray-300">
            <a href="#soluciones" className="hover:text-cyan-400 transition-colors">
              Soluciones
            </a>
            <a href="#flujo" className="hover:text-cyan-400 transition-colors">
              Flujo End-to-End
            </a>
            <a href="#metodo-vrio" className="hover:text-cyan-400 transition-colors">
              Método VRIO
            </a>
            <a href="#perfiles" className="hover:text-cyan-400 transition-colors">
              Perfiles
            </a>
            <a href="#garantia-erp" className="hover:text-cyan-400 transition-colors">
              Garantía & ERP
            </a>
          </nav>
        )}

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <button
            id="nav-cta-express-audit"
            onClick={onOpenDiagnosis}
            className="relative group px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider overflow-hidden cursor-pointer"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-300 group-hover:opacity-90"></span>
            <span className="relative text-[#080C14] font-extrabold flex items-center gap-1.5">
              Auditoría Exprés
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Screen Switcher Bar */}
      <div className="md:hidden flex items-center justify-around px-4 py-2 border-t border-cyan-500/15 bg-[#080C14]/95 text-xs">
        <button
          onClick={() => onScreenChange('landing')}
          className={`flex items-center gap-1 py-1 px-2.5 rounded-md ${
            currentScreen === 'landing'
              ? 'text-cyan-400 font-bold bg-cyan-400/10'
              : 'text-gray-400'
          }`}
        >
          <Home className="w-3 h-3" />
          <span>Inicio</span>
        </button>
        <button
          onClick={() => onScreenChange('calculator')}
          className={`flex items-center gap-1 py-1 px-2.5 rounded-md ${
            currentScreen === 'calculator'
              ? 'text-emerald-400 font-bold bg-emerald-400/10'
              : 'text-gray-400'
          }`}
        >
          <Calculator className="w-3 h-3" />
          <span>Calculadora ROI</span>
        </button>
        <button
          onClick={() => onScreenChange('matrix')}
          className={`flex items-center gap-1 py-1 px-2.5 rounded-md ${
            currentScreen === 'matrix'
              ? 'text-cyan-400 font-bold bg-cyan-400/10'
              : 'text-gray-400'
          }`}
        >
          <BarChart3 className="w-3 h-3" />
          <span>Matriz ABC</span>
        </button>
      </div>
    </header>
  );
};
