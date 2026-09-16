import React, { useState } from 'react';
import { PERSONA_CONTENTS } from '../data/logisticsData';
import { PersonaRole } from '../types';
import { Check } from 'lucide-react';

export const PersonasSection: React.FC = () => {
  const [activeRole, setActiveRole] = useState<PersonaRole>('coo');
  const persona = PERSONA_CONTENTS[activeRole];

  return (
    <section id="perfiles" className="py-20 sm:py-24 px-4 sm:px-6 relative border-b border-cyan-500/20 bg-[#0D1322]/25">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            Perfiles de Solución B2B
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-['Syncopate'] font-bold text-white tracking-tight">
            DISEÑADO PARA TU <span className="text-cyan-400">ROL DIRECTIVO</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-300">
            Respuestas específicas a los dolores operativos y financieros de tu
            sector.
          </p>
        </div>

        {/* Interactive Tabs Control */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
          {(['coo', 'cfo', '3pl'] as PersonaRole[]).map((role) => {
            const item = PERSONA_CONTENTS[role];
            const isActive = activeRole === role;
            return (
              <button
                key={role}
                id={`tab-btn-${role}`}
                onClick={() => setActiveRole(role)}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-['Montserrat'] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? 'border border-cyan-400 bg-cyan-400/15 text-cyan-300 shadow-glow-cyan'
                    : 'border border-cyan-400/25 bg-[#080C14] text-gray-400 hover:border-cyan-400/60 hover:text-gray-200'
                }`}
              >
                {item.buttonLabel}
              </button>
            );
          })}
        </div>

        {/* Tab Content Panel */}
        <div className="glass-card rounded-2xl p-6 sm:p-10 md:p-12 border border-cyan-400/30 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-4">
              <span
                className={`text-xs uppercase tracking-widest font-bold font-['Orbitron'] ${
                  persona.accent === 'cyan' ? 'text-cyan-400' : 'text-emerald-400'
                }`}
              >
                {persona.tag}
              </span>

              <h3 className="text-xl sm:text-2xl font-bold text-white font-['Montserrat']">
                {persona.title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {persona.description}
              </p>

              <ul className="space-y-2.5 text-xs text-gray-300 pt-2">
                {persona.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check
                      className={`w-4 h-4 font-bold flex-shrink-0 ${
                        persona.accent === 'cyan'
                          ? 'text-cyan-400'
                          : 'text-emerald-400'
                      }`}
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stat Callout Card */}
            <div
              className={`p-6 sm:p-8 rounded-xl bg-[#080C14] border text-center space-y-2 ${
                persona.accent === 'cyan'
                  ? 'border-cyan-400/35 shadow-glow-cyan'
                  : 'border-emerald-400/35 shadow-glow-green'
              }`}
            >
              <span
                className={`text-4xl sm:text-5xl font-['Orbitron'] font-extrabold block ${
                  persona.accent === 'cyan' ? 'text-cyan-400' : 'text-emerald-400'
                }`}
              >
                {persona.statValue}
              </span>
              <p className="text-xs font-semibold text-white uppercase tracking-wider">
                {persona.statLabel}
              </p>
              <p className="text-[11px] text-gray-400 leading-tight">
                {persona.statSubtext}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
