import { useState } from 'react';
import { AppScreen } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PillarsSection } from './components/PillarsSection';
import { PipelineSection } from './components/PipelineSection';
import { VrioSection } from './components/VrioSection';
import { PersonasSection } from './components/PersonasSection';
import { ComplianceSection } from './components/ComplianceSection';
import { AutodiagnosisSection } from './components/AutodiagnosisSection';
import { AuditCalculatorView } from './components/AuditCalculatorView';
import { AbcMatrixView } from './components/AbcMatrixView';
import { Footer } from './components/Footer';

export function App() {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>('landing');

  const scrollToDiagnosis = () => {
    if (currentScreen !== 'landing') {
      setCurrentScreen('landing');
      setTimeout(() => {
        const el = document.getElementById('diagnostico');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const el = document.getElementById('diagnostico');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleScreenChange = (screen: AppScreen) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#080C14] text-gray-200 selection:bg-cyan-500/30 selection:text-cyan-200 flex flex-col font-sans antialiased">
      {/* Top Fixed Header */}
      <Navbar
        currentScreen={currentScreen}
        onScreenChange={handleScreenChange}
        onOpenDiagnosis={scrollToDiagnosis}
      />

      {/* Main Screen Content */}
      <main className="flex-1">
        {currentScreen === 'landing' && (
          <div className="space-y-0">
            <HeroSection
              onOpenDiagnosis={scrollToDiagnosis}
              onScreenChange={handleScreenChange}
            />
            <PillarsSection onOpenDiagnosis={scrollToDiagnosis} />
            <PipelineSection />
            <VrioSection />
            <PersonasSection />
            <ComplianceSection />
            <AutodiagnosisSection id="diagnostico" />
          </div>
        )}

        {currentScreen === 'calculator' && (
          <AuditCalculatorView
            onBackToLanding={() => handleScreenChange('landing')}
            onGoToDiagnosis={scrollToDiagnosis}
          />
        )}

        {currentScreen === 'matrix' && (
          <AbcMatrixView
            onBackToLanding={() => handleScreenChange('landing')}
            onGoToDiagnosis={scrollToDiagnosis}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onScreenChange={handleScreenChange}
        onOpenDiagnosis={scrollToDiagnosis}
      />
    </div>
  );
}

export default App;
