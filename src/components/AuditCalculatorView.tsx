import React, { useState } from 'react';
import { OFFICIAL_BANNER_URL } from '../data/logisticsData';
import {
  Calculator,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building,
  RotateCcw
} from 'lucide-react';

interface AuditCalculatorViewProps {
  onBackToLanding: () => void;
  onGoToDiagnosis: () => void;
}

export const AuditCalculatorView: React.FC<AuditCalculatorViewProps> = ({
  onBackToLanding,
  onGoToDiagnosis
}) => {
  const [turnover, setTurnover] = useState<number>(25000000); // $25M USD
  const [inventoryValue, setInventoryValue] = useState<number>(5000000); // $5M USD
  const [currentOtif, setCurrentOtif] = useState<number>(84); // 84%
  const [currentDsi, setCurrentDsi] = useState<number>(68); // 68 days
  const [sector, setSector] = useState<string>('manufactura');

  // Multipliers based on sector
  const sectorMultipliers: Record<string, { wasteRate: number; leadTimeDays: number; name: string }> = {
    manufactura: { wasteRate: 0.045, leadTimeDays: 24, name: 'Manufactura & Ensamblaje' },
    retail: { wasteRate: 0.065, leadTimeDays: 14, name: 'Retail & Gran Consumo' },
    '3pl': { wasteRate: 0.035, leadTimeDays: 10, name: 'Operador Logístico 3PL' },
    farmaceutico: { wasteRate: 0.05, leadTimeDays: 30, name: 'Farmacéutico & Salud' },
    agro: { wasteRate: 0.08, leadTimeDays: 18, name: 'Agroindustria & Exportación' }
  };

  const currentSectorData = sectorMultipliers[sector] || sectorMultipliers.manufactura;

  // Real calculations
  // Inventory reduction with VRIO/ABC: typically 18% to 26%
  const inventoryReductionPct = 0.22;
  const workingCapitalFreed = Math.round(inventoryValue * inventoryReductionPct);

  // Waste and holding cost reduction (cost of carrying inventory ~ 15-20% per year)
  const annualHoldingSavings = Math.round(workingCapitalFreed * 0.16 + inventoryValue * currentSectorData.wasteRate * 0.4);

  // Target OTIF
  const targetOtif = Math.min(97.5, Math.max(95, currentOtif + 11));
  const otifImprovement = (targetOtif - currentOtif).toFixed(1);

  // Target DSI
  const targetDsi = Math.round(currentDsi * 0.72);
  const dsiDaysSaved = currentDsi - targetDsi;

  const handleReset = () => {
    setTurnover(25000000);
    setInventoryValue(5000000);
    setCurrentOtif(84);
    setCurrentDsi(68);
    setSector('manufactura');
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className="py-24 px-4 sm:px-6 max-w-7xl mx-auto space-y-12 animate-fadeIn">
      {/* Visual Header Strip */}
      <div className="w-full rounded-2xl overflow-hidden border border-cyan-400/30 relative shadow-glow-cobalt max-h-[160px] sm:max-h-[200px]">
        <img
          src={OFFICIAL_BANNER_URL}
          alt="Fluxus Quantum"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080C14] via-[#080C14]/80 to-transparent flex items-center px-6 sm:px-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-300 text-[11px] font-semibold tracking-wider uppercase mb-2">
              <Calculator className="w-3.5 h-3.5" />
              Módulo de Modelado Cuantitativo
            </div>
            <h1 className="text-lg sm:text-2xl font-['Syncopate'] font-bold text-white tracking-tight">
              AUDITORÍA EXPRÉS & CALCULADORA DE RETORNO (ROI)
            </h1>
          </div>
        </div>
      </div>

      {/* Main Grid: Inputs (Left) and Live Projections (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Parameter Sliders */}
        <div className="lg:col-span-6 glass-card p-6 sm:p-8 rounded-2xl border border-cyan-400/30 space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h3 className="text-lg font-['Orbitron'] font-bold text-white flex items-center gap-2">
              <Calculator className="w-5 h-5 text-cyan-400" />
              Parámetros Operativos
            </h3>
            <button
              onClick={handleReset}
              className="text-xs text-gray-400 hover:text-white flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Restablecer
            </button>
          </div>

          {/* Sector Select */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-gray-300 flex items-center gap-2">
              <Building className="w-3.5 h-3.5 text-cyan-400" />
              Sector Industrial de la Compañía
            </label>
            <select
              value={sector}
              onChange={(e) => setSector(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#080C14] border border-cyan-400/30 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400"
            >
              <option value="manufactura">Manufactura & Ensamblaje Industrial</option>
              <option value="retail">Retail & Gran Consumo (FMCG)</option>
              <option value="3pl">Operador Logístico 3PL & Almacenaje</option>
              <option value="farmaceutico">Farmacéutico / Cadena de Frío</option>
              <option value="agro">Agroindustria & Exportación</option>
            </select>
          </div>

          {/* Valor de Inventario Medio */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold uppercase tracking-wider text-gray-300">
                Valor Medio de Inventario en Stock
              </span>
              <span className="font-['Orbitron'] font-bold text-cyan-400 text-sm">
                {formatCurrency(inventoryValue)}
              </span>
            </div>
            <input
              type="range"
              min={500000}
              max={30000000}
              step={250000}
              value={inventoryValue}
              onChange={(e) => setInventoryValue(Number(e.target.value))}
              className="w-full accent-cyan-400 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-gray-400 font-mono">
              <span>$500K</span>
              <span>$15M</span>
              <span>$30M</span>
            </div>
          </div>

          {/* Facturación Anual */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold uppercase tracking-wider text-gray-300">
                Facturación o Movimiento Logístico Anual
              </span>
              <span className="font-['Orbitron'] font-bold text-emerald-400 text-sm">
                {formatCurrency(turnover)}
              </span>
            </div>
            <input
              type="range"
              min={2000000}
              max={150000000}
              step={1000000}
              value={turnover}
              onChange={(e) => setTurnover(Number(e.target.value))}
              className="w-full accent-emerald-400 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-gray-400 font-mono">
              <span>$2M</span>
              <span>$75M</span>
              <span>$150M</span>
            </div>
          </div>

          {/* Días de Venta de Inventario (DSI) Actuales */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold uppercase tracking-wider text-gray-300">
                Días de Inventario Actuales (DSI)
              </span>
              <span className="font-['Orbitron'] font-bold text-white text-sm">
                {currentDsi} días
              </span>
            </div>
            <input
              type="range"
              min={20}
              max={120}
              step={1}
              value={currentDsi}
              onChange={(e) => setCurrentDsi(Number(e.target.value))}
              className="w-full accent-cyan-400 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-gray-400 font-mono">
              <span>20 días (ágil)</span>
              <span>60 días (estándar)</span>
              <span>120 días (estancado)</span>
            </div>
          </div>

          {/* Cumplimiento OTIF Actual */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold uppercase tracking-wider text-gray-300">
                Nivel OTIF Actual (On-Time In-Full)
              </span>
              <span
                className={`font-['Orbitron'] font-bold text-sm ${
                  currentOtif < 85 ? 'text-rose-400' : 'text-yellow-400'
                }`}
              >
                {currentOtif}%
              </span>
            </div>
            <input
              type="range"
              min={60}
              max={94}
              step={1}
              value={currentOtif}
              onChange={(e) => setCurrentOtif(Number(e.target.value))}
              className="w-full accent-cyan-400 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-gray-400 font-mono">
              <span>60% (crítico)</span>
              <span>80% (vulnerable)</span>
              <span>94% (competente)</span>
            </div>
          </div>
        </div>

        {/* Right Column: Live Projected Returns & Timeline */}
        <div className="lg:col-span-6 space-y-6">
          {/* Main Results Showcase Card */}
          <div className="glass-card p-6 sm:p-8 rounded-2xl border border-emerald-400/40 relative shadow-glow-green space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs uppercase font-bold tracking-widest text-emerald-300 font-['Orbitron']">
                Impacto Cuantitativo Proyectado
              </span>
              <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-400/10 text-emerald-300 border border-emerald-400/30">
                Basado en Metodología VRIO
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Stat 1: Capital de Trabajo Liberado */}
              <div className="p-4 rounded-xl bg-[#080C14] border border-cyan-400/30 space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold block flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5 text-cyan-400" />
                  Capital de Trabajo Liberable
                </span>
                <span className="text-2xl sm:text-3xl font-['Orbitron'] font-extrabold text-cyan-400 block">
                  {formatCurrency(workingCapitalFreed)}
                </span>
                <p className="text-[10px] text-gray-300">
                  Reducción estimada del 22% en stock inmovilizado.
                </p>
              </div>

              {/* Stat 2: Ahorro Anual Mermas & Costos de Almacenaje */}
              <div className="p-4 rounded-xl bg-[#080C14] border border-emerald-400/30 space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold block flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  Ahorro Anual Recurrente
                </span>
                <span className="text-2xl sm:text-3xl font-['Orbitron'] font-extrabold text-emerald-400 block">
                  {formatCurrency(annualHoldingSavings)} / año
                </span>
                <p className="text-[10px] text-gray-300">
                  Erradicación de mermas y costos ocultos de holding.
                </p>
              </div>

              {/* Stat 3: OTIF Benchmark */}
              <div className="p-4 rounded-xl bg-[#080C14] border border-white/10 space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold block flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-white" />
                  Elevación OTIF
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-['Orbitron'] font-bold text-white">
                    {targetOtif.toFixed(1)}%
                  </span>
                  <span className="text-xs text-emerald-400 font-bold">
                    (+{otifImprovement} pts)
                  </span>
                </div>
                <p className="text-[10px] text-gray-300">
                  Cumplimiento en entregas a nivel clase mundial.
                </p>
              </div>

              {/* Stat 4: Días de Lead Time Ganados */}
              <div className="p-4 rounded-xl bg-[#080C14] border border-white/10 space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold block flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  Compresión DSI
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-['Orbitron'] font-bold text-cyan-300">
                    {targetDsi} días
                  </span>
                  <span className="text-xs text-cyan-400 font-bold">
                    (-{dsiDaysSaved} días)
                  </span>
                </div>
                <p className="text-[10px] text-gray-300">
                  Rotación acelerada del ciclo de efectivo.
                </p>
              </div>
            </div>

            {/* Implementation Timeline */}
            <div className="pt-2 border-t border-white/10 space-y-3">
              <span className="text-xs uppercase font-bold text-gray-200 block">
                Roadmap de Ejecución Autogestionable Fluxus:
              </span>
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2.5 rounded-lg bg-[#080C14] border border-cyan-400/20">
                  <span className="text-cyan-400 font-bold block text-[11px]">Semanas 1 - 2</span>
                  <span className="text-white text-[10px] block font-semibold">Diagnóstico & Matriz ABC</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#080C14] border border-emerald-400/20">
                  <span className="text-emerald-400 font-bold block text-[11px]">Semanas 3 - 6</span>
                  <span className="text-white text-[10px] block font-semibold">SOPs en Planta & ERP</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#080C14] border border-cyan-400/20">
                  <span className="text-cyan-400 font-bold block text-[11px]">Semanas 7 - 10</span>
                  <span className="text-white text-[10px] block font-semibold">Autonomía & Cierre</span>
                </div>
              </div>
            </div>

            {/* Action CTA inside Calculator */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onGoToDiagnosis}
                className="flex-1 py-3.5 px-4 rounded-xl text-xs font-extrabold uppercase tracking-wider bg-gradient-to-r from-cyan-400 to-emerald-400 text-[#080C14] shadow-glow-cyan flex items-center justify-center gap-2 cursor-pointer hover:opacity-95"
              >
                Auditar Estos Resultados en Mi Empresa
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onBackToLanding}
                className="py-3.5 px-4 rounded-xl bg-[#080C14] border border-white/20 text-gray-300 text-xs font-semibold hover:bg-white/5 cursor-pointer"
              >
                Volver a la Portada
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
