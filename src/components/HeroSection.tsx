import React from 'react';
import { OFFICIAL_BANNER_URL } from '../data/logisticsData';
import { ArrowRight, ChevronDown, Sparkles, TrendingUp } from 'lucide-react';
import { AppScreen } from '../types';

interface HeroSectionProps {
  onOpenDiagnosis: () => void;
  onScreenChange: (screen: AppScreen) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenDiagnosis,
  onScreenChange
}) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-16 sm:py-20 px-4 sm:px-6 cyber-grid overflow-hidden border-b border-cyan-500/20">
      {/* Background Gradient Fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#080C14]/70 to-[#080C14] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Banner Reference Strip (Direct visual from user prompt) */}
        <div className="mb-10 sm:mb-12 w-full rounded-2xl overflow-hidden border border-cyan-400/35 relative shadow-glow-cobalt group">
          <div className="absolute inset-0 bg-gradient-to-t from-[#080C14] via-transparent to-transparent opacity-60 z-10 pointer-events-none"></div>
          <img
            src={OFFICIAL_BANNER_URL}
            alt="Banner Oficial Fluxus Quantum - Logística Inteligente para un Mundo en Movimiento"
            className="w-full h-auto object-cover max-h-[300px] sm:max-h-[320px] transition-transform duration-700 group-hover:scale-[1.015]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-3 left-4 z-20 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold tracking-wider uppercase bg-[#080C14]/90 backdrop-blur-md text-cyan-300 border border-cyan-400/50">
              <span className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse mr-2"></span>
              Estética Oficial & Arquitectura B2B
            </span>
            <span className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-full text-[10px] uppercase font-medium bg-[#0D1322]/80 text-gray-300 border border-white/10">
              Supply Chain & Operaciones
            </span>
          </div>
        </div>

        <div className="text-center max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {/* Top Category Badge with Official Logo Icon */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0D1322]/90 border border-cyan-400/40 text-cyan-300 text-xs font-semibold tracking-widest uppercase shadow-glow-cyan">
              <img
                src="/fluxus-quantum-logo.jpg"
                alt="Fluxus Quantum Emblem"
                className="w-5 h-5 rounded-full object-cover border border-cyan-400/60"
              />
              <span className="font-['Syncopate'] font-bold text-[10px] text-white">FLUXUS</span>
              <span className="text-cyan-400 font-['Syncopate'] font-bold text-[10px]">QUANTUM</span>
            </div>

            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0D1322]/90 border border-emerald-400/30 text-emerald-300 text-xs font-semibold tracking-widest uppercase shadow-glow-green font-['Montserrat']">
              <span>PLANIFICACIÓN</span>
              <span className="text-cyan-400 font-bold">/</span>
              <span>EFICIENCIA</span>
              <span className="text-cyan-400 font-bold">/</span>
              <span>RESULTADOS</span>
            </div>
          </div>

          {/* Main Title (H1) with Brand Geometric Typography */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-['Syncopate'] font-bold tracking-tight text-white leading-[1.25]">
            LOGÍSTICA{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 text-glow-cyan">
              INTELIGENTE
            </span>
            <br />
            <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-gray-200 font-medium tracking-normal block mt-2 sm:mt-3 font-['Montserrat']">
              PARA UN MUNDO EN MOVIMIENTO
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 font-normal max-w-3xl mx-auto leading-relaxed">
            Optimiza tu cadena de suministro, reduce costos operativos y aumenta tu
            competitividad mediante diagnósticos rigurosos, analítica en tiempo real
            y transferencia de capacidades autogestionables.
          </p>

          {/* 4 Value Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 pt-2">
            <div className="px-4 py-2 rounded-lg bg-[#111827]/80 border border-cyan-400/30 text-xs font-semibold uppercase tracking-wider text-cyan-300 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-glow-cyan"></span>
              EFICIENCIA
            </div>
            <div className="px-4 py-2 rounded-lg bg-[#111827]/80 border border-emerald-400/30 text-xs font-semibold uppercase tracking-wider text-emerald-300 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-glow-green"></span>
              TECNOLOGÍA
            </div>
            <div className="px-4 py-2 rounded-lg bg-[#111827]/80 border border-cyan-400/30 text-xs font-semibold uppercase tracking-wider text-cyan-300 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-glow-cyan"></span>
              SOSTENIBILIDAD
            </div>
            <div className="px-4 py-2 rounded-lg bg-[#111827]/80 border border-emerald-400/30 text-xs font-semibold uppercase tracking-wider text-emerald-300 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-glow-green"></span>
              CRECIMIENTO
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 sm:pt-6">
            <button
              id="hero-cta-audit"
              onClick={onOpenDiagnosis}
              className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider bg-gradient-to-r from-cyan-400 to-emerald-400 text-[#080C14] shadow-glow-cyan hover:shadow-glow-green transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              Solicitar Auditoría Exprés
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              id="hero-cta-process"
              href="#flujo"
              className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider bg-transparent border border-cyan-400/50 text-white hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Ver Proceso de Transformación
              <ChevronDown className="w-4 h-4 text-cyan-400" />
            </a>

            <button
              id="hero-cta-calculator"
              onClick={() => onScreenChange('calculator')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider bg-[#0D1322] border border-emerald-400/40 text-emerald-300 hover:bg-emerald-500/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              Simular ROI en Planta
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
