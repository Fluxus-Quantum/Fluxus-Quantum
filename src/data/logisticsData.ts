import { ServicePillar, PipelineNode, PersonaContent, PersonaRole } from '../types';

export const OFFICIAL_BANNER_URL =
  '/hero-bg.jpg';

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: 'logistica-integral',
    title: 'Logística Integral',
    description:
      'Control y visibilidad de extremo a extremo, desde el origen hasta el destino final. Orquestamos cadenas multimodales con trazabilidad transparente.',
    badge: 'ORIGEN ➔ DESTINO 100% AUDITADO',
    iconName: 'truck',
    accentColor: 'cyan',
    deliverables: [
      'Orquestación de transporte multimodal (terrestre, marítimo y aéreo)',
      'Torre de control logística unificada 24/7',
      'Matriz de eventos y alertas tempranas por desviaciones de ruta',
      'Trazabilidad digital sin puntos ciegos en aduana y última milla'
    ],
    kpiImpact: 'Reducción de hasta un 32% en incidencias en tránsito'
  },
  {
    id: 'supply-chain-estrategico',
    title: 'Supply Chain Estratégico',
    description:
      'Generación de mayor valor financiero y operativo en cada eslabón de la cadena, alineando la estrategia de compras con la demanda real del mercado.',
    badge: 'ALINEACIÓN FINANCIERA & ROI',
    iconName: 'network',
    accentColor: 'green',
    deliverables: [
      'Alineación S&OP (Sales & Operations Planning) entre Finanzas y Planta',
      'Modelo predictivo de demanda con amortiguamiento dinámico',
      'Estrategia de abastecimiento estratégico y mitigación de cuellos de botella',
      'Matriz Kraljic optimizada para categorización de proveedores'
    ],
    kpiImpact: 'Liberación de capital de trabajo de hasta un 24%'
  },
  {
    id: 'optimizacion-procesos',
    title: 'Optimización de Procesos',
    description:
      'Máxima eficiencia operativa a menor costo de almacenamiento y transporte mediante rediseño de layouts y balanceo de cargas de trabajo.',
    badge: 'EFICIENCIA Y MENOR COSTO',
    iconName: 'trendingUp',
    accentColor: 'cyan',
    deliverables: [
      'Rediseño ergonómico y lean de layouts de centros de distribución (CEDIS)',
      'Estrategias de zonificación de picking (Wave, Batch y Zone picking)',
      'Balanceo dinámico de cuadrillas operativas y reducción de horas extra',
      'Estandarización rigurosa de Procedimientos Operativos Estándar (SOPs)'
    ],
    kpiImpact: 'Aumento del 28% en productividad de líneas de preparación'
  },
  {
    id: 'sostenibilidad-verde',
    title: 'Sostenibilidad Logística Verde',
    description:
      'Implementación de operaciones responsables, optimización de rutas para descarbonización y reducción activa de huella de carbono bajo estándares ESG.',
    badge: 'OPERACIONES RESPONSABLES ESG',
    iconName: 'leaf',
    accentColor: 'green',
    deliverables: [
      'Cálculo y auditoría de huella de carbono según normativa GHG Protocol Scope 3',
      'Algoritmos de ruteo verde para optimizar llenado de cubicaje y kilometraje',
      'Logística inversa circular y reducción de mermas de packaging secundario',
      'Informes cuantitativos auditables para inversores y comités de sostenibilidad'
    ],
    kpiImpact: 'Disminución del 19% en emisiones de CO2e y combustible'
  },
  {
    id: 'transformacion-digital',
    title: 'Transformación Digital',
    description:
      'Integración de tecnología y analítica avanzada que genera resultados medibles con dashboards en la nube conectados a tu ERP sin fricciones.',
    badge: 'TECNOLOGÍA QUE GENERA RESULTADOS',
    iconName: 'cpu',
    accentColor: 'cyan',
    deliverables: [
      'Conectores API no invasivos para SAP, Oracle NetSuite, Dynamics y WMS',
      'Dashboards ejecutivos interactivos en la nube con refresco en tiempo real',
      'Sistemas de alerta automatizada para roturas inminentes de stock',
      'Arquitectura de datos unificada para eliminar silos operativos en hojas de cálculo'
    ],
    kpiImpact: 'Disponibilidad de información crítica en <2 segundos'
  },
  {
    id: 'inventarios-control',
    title: 'Inventarios y Control',
    description:
      'Visibilidad total en tiempo real de tu stock con modelos ABC/XYZ para eliminar mermas, capital inmovilizado y cuellos de botella en almacén.',
    badge: 'VISIBILIDAD TOTAL DE STOCK',
    iconName: 'shieldCheck',
    accentColor: 'green',
    deliverables: [
      'Clasificación cruzada de inventarios mediante matriz ABC (volumen) / XYZ (variabilidad)',
      'Cálculo de niveles de stock de seguridad matemáticamente ajustados a nivel SKU',
      'Protocolos de conteo cíclico permanente en sustitución de inventarios anuales ciegos',
      'Erradicación sistemática de mermas, pérdidas desconocidas y obsolescencia'
    ],
    kpiImpact: 'Exactitud de inventario (IRA) elevada a >99.4%'
  }
];

export const PIPELINE_NODES: PipelineNode[] = [
  {
    id: 'proveedores',
    name: 'PROVEEDORES',
    subtitle: 'Homologación y SLAs',
    accent: 'cyan',
    icon: 'Building2',
    kpi: 'Cumplimiento de Plazos >94%',
    description:
      'Gestión de relaciones de suministro con evaluación rigurosa de capacidades fabriles y acuerdos de nivel de servicio blindados.',
    challenges: [
      'Falta de visibilidad sobre los tiempos de producción del proveedor',
      'Incumplimiento frecuente de ventanas de entrega sin aviso previo',
      'Desviaciones de calidad en materias primas en recepción'
    ],
    fluxusSolution: [
      'Portal de homologación y evaluación cuantitativa de proveedores',
      'Matriz de penalidades y bonificaciones vinculada a SLAs verificables',
      'Protocolo de recepción anticipada (ASN - Advanced Shipping Notice)'
    ]
  },
  {
    id: 'fabricacion',
    name: 'FABRICACIÓN',
    subtitle: 'Planificación MRP',
    accent: 'cyan',
    icon: 'Factory',
    kpi: 'OEE de Producción >85%',
    description:
      'Sincronización exacta entre requerimientos de materiales (MRP), planes maestros de producción y disponibilidad de insumos en planta.',
    challenges: [
      'Paradas imprevistas de línea por falta de un SKU crítico menor',
      'Sobreproducción de referencias de baja rotación acumulando WIP',
      'Desalineación entre pronóstico de ventas y capacidad fabril real'
    ],
    fluxusSolution: [
      'Implementación de sistemas Kanban visuales y reabastecimiento Pull',
      'Programación de lotes económicos ajustada a la volatilidad de la demanda',
      'Estandarización de cambios de formato rápidos (SMED en líneas críticas)'
    ]
  },
  {
    id: 'almacenamiento',
    name: 'ALMACENAMIENTO',
    subtitle: 'Control ABC/XYZ',
    accent: 'green',
    icon: 'Boxes',
    kpi: 'Ocupación Óptima 82-87%',
    description:
      'Diseño y gobierno operativo de centros de distribución, maximizando la densidad volumétrica y minimizando los recorridos de picking.',
    challenges: [
      'Pasillos congestionados y pérdidas de tiempo en localización de pallets',
      'Artículos de alta rotación ubicados en posiciones lejanas a muelles',
      'Altas tasas de roturas y deterioros por manipulación inadecuada'
    ],
    fluxusSolution: [
      'Slotting dinámico basado en rotación estacional y pesos de carga',
      'Balanceo de cargas entre zonas de alta densidad y zonas de preparación',
      'Auditorías continuas de mermas y conteos cíclicos guiados'
    ]
  },
  {
    id: 'transporte',
    name: 'TRANSPORTE',
    subtitle: 'Rutas & TMS Eficiente',
    accent: 'green',
    icon: 'Truck',
    kpi: 'Llenado de Flota >91%',
    description:
      'Planificación y monitoreo satelital de flotas propias y terceros con algoritmos de consolidación de carga y minimización de kilómetros en vacío.',
    challenges: [
      'Sobrecostos desorbitados por fletes exprés de última hora',
      'Falta de consolidación de cargas con camiones al 50% de capacidad',
      'Poca visibilidad del estado de los despachos en carretera'
    ],
    fluxusSolution: [
      'Algoritmo de consolidación de rutas troncales y distribución capilar',
      'Tarifarios dinámicos y licitación transparente con transportistas evaluados',
      'Geocercas de control para detección automática de demoras en descarga'
    ]
  },
  {
    id: 'distribucion',
    name: 'DISTRIBUCIÓN',
    subtitle: 'Cross-Docking & Hubs',
    accent: 'cyan',
    icon: 'MapPin',
    kpi: 'Tiempo en Hub <4 Horas',
    description:
      'Estrategias de transferencia ágil de mercancías sin paso por inventario intermedio, acelerando los tiempos de respuesta a clientes regionales.',
    challenges: [
      'Retenciones excesivas de mercancía en plataformas intermedias',
      'Errores de segregación y despacho equivocado en muelles',
      'Falta de sincronización entre arribos de línea y salidas locales'
    ],
    fluxusSolution: [
      'Flujos continuos de Cross-Docking sincronizados por ventanas horarias',
      'Lectura óptica y validación de etiquetas estándar GS1-128',
      'SOPs de clasificación rápida con zonas de staging identificadas'
    ]
  },
  {
    id: 'cliente',
    name: 'CLIENTE',
    subtitle: 'OTIF Máximo (>95%)',
    accent: 'green',
    icon: 'Users',
    kpi: 'OTIF >95% Consistente',
    description:
      'Cumplimiento exacto de fecha y completitud de pedido, garantizando fidelización, cero penalizaciones comerciales y reputación de marca impecable.',
    challenges: [
      'Reclamos comerciales y deducciones en facturas por faltantes de producto',
      'Entregas tardías que rompen el calendario de los canales de venta',
      'Incapacidad de entregar comprobantes de entrega (POD) digitalizados al instante'
    ],
    fluxusSolution: [
      'Prueba de entrega digitalizada (e-POD) inmediata con firma en dispositivo',
      'Índice de satisfacción CSAT y NPS operacional auditado por cliente',
      'Resolución de disputas acelerada con historial inmutable de trazabilidad'
    ]
  }
];

export const PERSONA_CONTENTS: Record<PersonaRole, PersonaContent> = {
  coo: {
    id: 'coo',
    buttonLabel: 'Directores de Operaciones (COO)',
    tag: 'DIAGNÓSTICO OPERATIVO EN PLANTA',
    title: 'Control de Cuellos de Botella y Matriz ABC/XYZ',
    description:
      'Eliminamos la incertidumbre en los centros de distribución. Analizamos tiempos muertos, optimizamos la velocidad de picking y sincronizamos los flujos de entrada y salida para erradicar las horas extras no productivas.',
    bullets: [
      'Visibilidad en tiempo real de líneas de despacho y recepción.',
      'Clasificación dinámica ABC/XYZ de existencias críticas.',
      'Despliegue de tableros kanban y balanceo dinámico de operadores.'
    ],
    statValue: '-35%',
    statLabel: 'Tiempos de Ciclo en Despacho',
    statSubtext: 'Medido en centros de distribución de alta densidad.',
    accent: 'cyan'
  },
  cfo: {
    id: 'cfo',
    buttonLabel: 'Directoras Financieras (CFO)',
    tag: 'RETORNO FINANCIERO Y CAPITAL DE TRABAJO',
    title: 'Liberación de Flujo de Caja y Auditoría de Mermas',
    description:
      'El inventario estancado es efectivo atrapado. Diseñamos planes de amortiguamiento precisos que reducen el inventario de seguridad sin arriesgar ventas, maximizando el EBITDA y el margen operativo neto.',
    bullets: [
      'Reducción demostrada de mermas y costos ocultos de almacenaje.',
      'Métricas de ciclo de conversión de efectivo (CCC) optimizadas.',
      'Justificación cuantitativa para presupuestos de Capex en supply chain.'
    ],
    statValue: '+28%',
    statLabel: 'Margen Operativo Neto',
    statSubtext: 'Impacto tras reducción sistemática de inventarios inmovilizados.',
    accent: 'green'
  },
  '3pl': {
    id: '3pl',
    buttonLabel: 'Operadores 3PL & Retail',
    tag: 'ESCALABILIDAD Y FULFILLMENT',
    title: 'Sincronización Multicanal y Última Milla',
    description:
      'Garantizamos que los operadores logísticos y empresas de retail alcancen estándares omnicanal con cumplimiento riguroso de SLAs frente a retailers globales y marketplaces exigentes.',
    bullets: [
      'Integración de última milla con trazabilidad de incidentes en tiempo real.',
      'Estandarización de SOPs para onboarding acelerado de nuevos clientes 3PL.',
      'Cumplimiento impecable de slots de descarga y ventanas horarias.'
    ],
    statValue: '99.2%',
    statLabel: 'Tasa de Precisión en Despachos',
    statSubtext: 'En entornos multi-referencia y de alta rotación SKU.',
    accent: 'cyan'
  }
};

export const ABC_MATRIX_DATA = [
  { code: 'AX', label: 'Alta Rotación / Demanda Predecible', strategy: 'Just-in-Time, reposición automática frecuente, stock de seguridad mínimo.', share: '22%', color: 'border-greenNeon text-greenNeon bg-greenNeon/10' },
  { code: 'AY', label: 'Alta Rotación / Variabilidad Media', strategy: 'Monitoreo semanal, contratos marco con entregas escalonadas.', share: '12%', color: 'border-cyanNeon text-cyanNeon bg-cyanNeon/10' },
  { code: 'AZ', label: 'Alta Rotación / Demanda Errática', strategy: 'Buffer estratégico dinámico, negociación estrecha con proveedores clave.', share: '6%', color: 'border-yellow-400 text-yellow-400 bg-yellow-400/10' },
  { code: 'BX', label: 'Rotación Media / Demanda Predecible', strategy: 'Revisión periódica quincenal, pedidos de lote económico estándar.', share: '18%', color: 'border-cyanNeon/80 text-cyanNeon/90 bg-cyanNeon/5' },
  { code: 'BY', label: 'Rotación Media / Variabilidad Media', strategy: 'Stock de seguridad moderado, análisis de causas de variabilidad.', share: '14%', color: 'border-sky-400 text-sky-400 bg-sky-400/10' },
  { code: 'BZ', label: 'Rotación Media / Demanda Errática', strategy: 'Políticas de stock por campaña, consolidación con clientes clave.', share: '8%', color: 'border-orange-400 text-orange-400 bg-orange-400/10' },
  { code: 'CX', label: 'Baja Rotación / Demanda Predecible', strategy: 'Compra bajo pedido o lotes mínimos, evitar almacenamiento continuo.', share: '10%', color: 'border-slate-400 text-slate-300 bg-slate-400/10' },
  { code: 'CY', label: 'Baja Rotación / Variabilidad Media', strategy: 'Eliminar referencias redundantes, consolidar proveedores alternativos.', share: '6%', color: 'border-red-400/70 text-red-300 bg-red-400/10' },
  { code: 'CZ', label: 'Baja Rotación / Demanda Errática', strategy: 'Candidatos críticos a depuración, liquidación o gestión Make-to-Order.', share: '4%', color: 'border-rose-500 text-rose-400 bg-rose-500/10' },
];
