export type AppScreen = 'landing' | 'calculator' | 'matrix';

export interface ServicePillar {
  id: string;
  title: string;
  description: string;
  badge: string;
  iconName: 'truck' | 'network' | 'trendingUp' | 'leaf' | 'cpu' | 'shieldCheck';
  accentColor: 'cyan' | 'green';
  deliverables: string[];
  kpiImpact: string;
}

export interface PipelineNode {
  id: string;
  name: string;
  subtitle: string;
  accent: 'cyan' | 'green';
  icon: string;
  kpi: string;
  description: string;
  challenges: string[];
  fluxusSolution: string[];
}

export type PersonaRole = 'coo' | 'cfo' | '3pl';

export interface PersonaContent {
  id: PersonaRole;
  buttonLabel: string;
  tag: string;
  title: string;
  description: string;
  bullets: string[];
  statValue: string;
  statLabel: string;
  statSubtext: string;
  accent: 'cyan' | 'green';
}

export interface AuditFormData {
  name: string;
  role: string;
  company: string;
  email: string;
  sector: string;
  notes?: string;
}

export interface RoiSimulationParams {
  annualTurnover: number; // in USD or EUR
  inventoryValue: number;
  currentOtif: number;
  currentDsi: number; // Days sales of inventory
  sector: string;
}
