export type PortfolioCategory =
  | 'projects'
  | 'interiors'
  | 'site_inspection'
  | 'college'
  | 'profile';

export interface PortfolioAsset {
  id: string;
  category: PortfolioCategory;
  filename: string;
  filePath: string;
  temporaryIdentifier: string;
  titlePlaceholder?: string;
  technicalDetails?: string[];
  documentType?: 'photograph' | 'drawing' | 'plan' | 'document';
  caption?: string;
  verifiedData?: {
    location?: string;
    firm?: string;
    architect?: string;
    elements?: string[];
  };
}

export const portfolioCategories = [
  { id: 'projects', label: 'PROJECTS', description: 'Architectural design, residential schemes, and institutional plans' },
  { id: 'interiors', label: 'INTERIORS', description: 'Interior design, materiality, and bespoke spatial compositions' },
  { id: 'site_inspection', label: 'SITE INSPECTION', description: 'On-site execution, structural supervision, and field documentation' },
  { id: 'college', label: 'ACADEMIC / COLLEGE', description: 'Lectures, studio reviews, field visits, and academic conclaves' },
  { id: 'profile', label: 'PROFILE', description: 'Editorial portraits and professional identity records' }
] as const;

export const portfolioAssetsData: PortfolioAsset[] = [
  // PROFILE ASSETS
  {
    id: 'asset-quotes-editorial',
    category: 'profile',
    filename: 'quotes.jpeg',
    filePath: '/assets/portfolio/quotes.jpeg',
    temporaryIdentifier: 'quotes.jpeg',
    titlePlaceholder: 'Ar. Nenmeli Jayaraman — Editorial Monograph Portrait',
    documentType: 'photograph',
    caption: 'Ar. Nenmeli Jayaraman seated within architectural and material design environment.',
    verifiedData: {
      architect: 'Ar. Nenmeli Jayaraman',
      location: 'Showroom & Design Studio Environment'
    }
  },
  {
    id: 'asset-card-identity',
    category: 'profile',
    filename: 'card.jpeg',
    filePath: '/assets/portfolio/card.jpeg',
    temporaryIdentifier: 'card.jpeg',
    titlePlaceholder: 'Visiting Card & Professional Identity Source',
    documentType: 'document',
    caption: 'Official business card of Ar. N. Jayaraman, Sri Janaki & Associates.',
    verifiedData: {
      firm: 'Sri Janaki & Associates',
      architect: 'Ar. N. Jayaraman',
      location: 'No. 81 B, Rajaji Street, Chengalpattu, Chengalpattu District - 603001'
    }
  },

  // PROJECTS CATEGORY
  {
    id: 'asset-proj-nenmeli-house-technical',
    category: 'projects',
    filename: 'resedential_house.png',
    filePath: '/assets/portfolio/projects/resedential_house.png',
    temporaryIdentifier: 'projects/resedential_house.png',
    titlePlaceholder: 'Proposed Residential Building Drawing — Nenmeli Village',
    documentType: 'drawing',
    caption: 'Documented proposed residential building drawing in Nenmeli Village, Chengalpattu District, signed under Sri Janaki & Associates by Ar. N. Jayaraman.',
    technicalDetails: [
      'Ground Floor Plan',
      'First Floor Plan',
      'Front Elevation & Cross Section',
      'Site Plan & Plot Layout',
      'Foundation Structural Details',
      'Septic Tank Details',
      'Bore / Well & Rainwater Storage Details',
      'Rainwater Harvesting & Percolation System'
    ],
    verifiedData: {
      location: 'Nenmeli Village, Chengalpattu District, Tamil Nadu',
      firm: 'Sri Janaki & Associates',
      architect: 'Ar. N. Jayaraman',
      elements: [
        'Ground Floor Plan',
        'First Floor Plan',
        'Front Elevation',
        'Section',
        'Site Plan',
        'Foundation Details',
        'Septic Tank Details',
        'Rainwater Harvesting Details'
      ]
    }
  },
  {
    id: 'asset-proj-iit-palakkad',
    category: 'projects',
    filename: 'IITPalakad_plan.jpeg',
    filePath: '/assets/portfolio/projects/IITPalakad_plan.jpeg',
    temporaryIdentifier: 'projects/IITPalakad_plan.jpeg',
    titlePlaceholder: 'IIT Palakkad Institutional Plan',
    documentType: 'plan',
    caption: 'Institutional layout and spatial planning schematic.',
    verifiedData: {
      location: 'Palakkad',
      firm: 'Sri Janaki & Associates / Academic Consultation'
    }
  },
  {
    id: 'asset-proj-nenmeli',
    category: 'projects',
    filename: 'nenmeli.jpeg',
    filePath: '/assets/portfolio/projects/nenmeli.jpeg',
    temporaryIdentifier: 'projects/nenmeli.jpeg',
    titlePlaceholder: 'Residential Scheme — Nenmeli',
    documentType: 'photograph',
    caption: 'Exterior elevation documentation for residential project in Nenmeli.'
  },
  {
    id: 'asset-proj-door',
    category: 'projects',
    filename: 'door.jpeg',
    filePath: '/assets/portfolio/projects/door.jpeg',
    temporaryIdentifier: 'projects/door.jpeg',
    titlePlaceholder: 'Architectural Joinery & Entrance Detail',
    documentType: 'photograph',
    caption: 'Crafted timber main entrance door and joinery detail.'
  },
  {
    id: 'asset-proj-project',
    category: 'projects',
    filename: 'project.jpeg',
    filePath: '/assets/portfolio/projects/project.jpeg',
    temporaryIdentifier: 'projects/project.jpeg',
    titlePlaceholder: 'Residential Construction Documentation',
    documentType: 'photograph',
    caption: 'Architectural structure execution view.'
  },
  {
    id: 'asset-proj-site-archive',
    category: 'projects',
    filename: 'WhatsApp Image 2026-09-19 at 19.30.14 (2) 7.54.01 PM.jpeg',
    filePath: '/assets/portfolio/projects/WhatsApp%20Image%202026-09-19%20at%2019.30.14%20(2)%207.54.01%E2%80%AFPM.jpeg',
    temporaryIdentifier: 'projects/WhatsApp Image 2026-09-19 at 19.30.14 (2) 7.54.01 PM.jpeg',
    titlePlaceholder: 'Site Survey & Documentation Record',
    documentType: 'photograph',
    caption: 'Field architectural survey and spatial documentation.'
  },
  {
    id: 'asset-proj-master-suite-01',
    category: 'projects',
    filename: 'WhatsApp Image 2026-11-02 at 17.28.40.jpeg',
    filePath: '/assets/portfolio/projects/WhatsApp%20Image%202026-11-02%20at%2017.28.40.jpeg',
    temporaryIdentifier: 'projects/WhatsApp Image 2026-11-02 at 17.28.40.jpeg',
    titlePlaceholder: 'Executive Master Bedroom Suite',
    documentType: 'photograph',
    caption: 'Floor-to-ceiling customized wardrobe millwork with integrated display niche and warm ambient cove lighting.'
  },
  {
    id: 'asset-proj-master-suite-02',
    category: 'projects',
    filename: 'WhatsApp Image 2026-11-02 at 17.28.40 (1).jpeg',
    filePath: '/assets/portfolio/projects/WhatsApp%20Image%202026-11-02%20at%2017.28.40%20(1).jpeg',
    temporaryIdentifier: 'projects/WhatsApp Image 2026-11-02 at 17.28.40 (1).jpeg',
    titlePlaceholder: 'Master Bedroom Study & Workstation',
    documentType: 'photograph',
    caption: 'Integrated ergonomic workstation with acoustic timber wall fluting and overhead storage cabinetry.'
  },
  {
    id: 'asset-proj-master-suite-03',
    category: 'projects',
    filename: 'WhatsApp Image 2026-11-02 at 17.28.41.jpeg',
    filePath: '/assets/portfolio/projects/WhatsApp%20Image%202026-11-02%20at%2017.28.41.jpeg',
    temporaryIdentifier: 'projects/WhatsApp Image 2026-11-02 at 17.28.41.jpeg',
    titlePlaceholder: 'Walk-In Dressing & Wardrobe Suite',
    documentType: 'photograph',
    caption: 'Tailored architectural dressing suite with fluted glass cabinetry and concealed dressing mirror.'
  },
  {
    id: 'asset-proj-master-suite-04',
    category: 'projects',
    filename: 'WhatsApp Image 2026-11-02 at 17.28.41 (1).jpeg',
    filePath: '/assets/portfolio/projects/WhatsApp%20Image%202026-11-02%20at%2017.28.41%20(1).jpeg',
    temporaryIdentifier: 'projects/WhatsApp Image 2026-11-02 at 17.28.41 (1).jpeg',
    titlePlaceholder: 'Master Suite Media Console',
    documentType: 'photograph',
    caption: 'Custom wood veneer media console with concealed peripheral warm ambient perimeter lighting.'
  },
  {
    id: 'asset-proj-master-suite-05',
    category: 'projects',
    filename: 'WhatsApp Image 2026-11-02 at 17.28.41 (2).jpeg',
    filePath: '/assets/portfolio/projects/WhatsApp%20Image%202026-11-02%20at%2017.28.41%20(2).jpeg',
    temporaryIdentifier: 'projects/WhatsApp Image 2026-11-02 at 17.28.41 (2).jpeg',
    titlePlaceholder: 'Master Suite Bedroom Interior Perspective',
    documentType: 'photograph',
    caption: 'Spatial composition balancing floor-to-ceiling drapery, natural illumination, and bespoke millwork.'
  },
  {
    id: 'asset-proj-living-salon-01',
    category: 'projects',
    filename: 'WhatsApp Image 2026-11-02 at 17.28.41 (3).jpeg',
    filePath: '/assets/portfolio/projects/WhatsApp%20Image%202026-11-02%20at%2017.28.41%20(3).jpeg',
    temporaryIdentifier: 'projects/WhatsApp Image 2026-11-02 at 17.28.41 (3).jpeg',
    titlePlaceholder: 'Contemporary Living Lounge Salon',
    documentType: 'photograph',
    caption: 'Formal reception lounge featuring vertical metallic fluting, statuario marble wall cladding, and designer pendant fixtures.'
  },
  {
    id: 'asset-proj-living-salon-02',
    category: 'projects',
    filename: 'WhatsApp Image 2026-11-02 at 17.28.43.jpeg',
    filePath: '/assets/portfolio/projects/WhatsApp%20Image%202026-11-02%20at%2017.28.43.jpeg',
    temporaryIdentifier: 'projects/WhatsApp Image 2026-11-02 at 17.28.43.jpeg',
    titlePlaceholder: 'Formal Reception Feature Wall',
    documentType: 'photograph',
    caption: 'Symmetrical architectural wall panelling with fluted accents and cove illumination.'
  },
  {
    id: 'asset-proj-living-salon-03',
    category: 'projects',
    filename: 'WhatsApp Image 2026-11-02 at 17.28.43 (1).jpeg',
    filePath: '/assets/portfolio/projects/WhatsApp%20Image%202026-11-02%20at%2017.28.43%20(1).jpeg',
    temporaryIdentifier: 'projects/WhatsApp Image 2026-11-02 at 17.28.43 (1).jpeg',
    titlePlaceholder: 'Living Room Spatial Composition',
    documentType: 'photograph',
    caption: 'Wide-angle perspective of living salon highlighting layered acoustic ceiling raft and marble accents.'
  },
  {
    id: 'asset-proj-living-salon-04',
    category: 'projects',
    filename: 'WhatsApp Image 2026-11-02 at 17.28.43 (2).jpeg',
    filePath: '/assets/portfolio/projects/WhatsApp%20Image%202026-11-02%20at%2017.28.43%20(2).jpeg',
    temporaryIdentifier: 'projects/WhatsApp Image 2026-11-02 at 17.28.43 (2).jpeg',
    titlePlaceholder: 'Lounge Seating & Sculptural Accents',
    documentType: 'photograph',
    caption: 'Refined spatial planning with low-profile seating, metallic accent tables, and sculptural lighting elements.'
  },
  {
    id: 'asset-proj-office-workstation-01',
    category: 'projects',
    filename: 'WhatsApp Image 2026-11-02 at 17.28.45.jpeg',
    filePath: '/assets/portfolio/projects/WhatsApp%20Image%202026-11-02%20at%2017.28.45.jpeg',
    temporaryIdentifier: 'projects/WhatsApp Image 2026-11-02 at 17.28.45.jpeg',
    titlePlaceholder: 'Corporate Office Workstation Pods',
    documentType: 'photograph',
    caption: 'Open-plan corporate workspace with biophilic planter dividers, ergonomic task stations, and coffered timber ceiling raft.'
  },
  {
    id: 'asset-proj-office-workstation-02',
    category: 'projects',
    filename: 'WhatsApp Image 2026-11-02 at 17.28.46.jpeg',
    filePath: '/assets/portfolio/projects/WhatsApp%20Image%202026-11-02%20at%2017.28.46.jpeg',
    temporaryIdentifier: 'projects/WhatsApp Image 2026-11-02 at 17.28.46.jpeg',
    titlePlaceholder: 'Executive Workstation Bay & East Wall',
    documentType: 'photograph',
    caption: 'Linear workstation arrangement with acoustic partition panels, task lighting, and integrated wall cabinetry.'
  },
  {
    id: 'asset-proj-office-reception',
    category: 'projects',
    filename: 'WhatsApp Image 2026-11-02 at 17.28.46 (1).jpeg',
    filePath: '/assets/portfolio/projects/WhatsApp%20Image%202026-11-02%20at%2017.28.46%20(1).jpeg',
    temporaryIdentifier: 'projects/WhatsApp Image 2026-11-02 at 17.28.46 (1).jpeg',
    titlePlaceholder: 'Corporate Reception & Waiting Lounge',
    documentType: 'photograph',
    caption: 'Angular marble reception desk with natural wood paneling, biophilic planting, and brand backdrop.'
  },
  {
    id: 'asset-proj-office-workstation-03',
    category: 'projects',
    filename: 'WhatsApp Image 2026-11-02 at 17.28.47.jpeg',
    filePath: '/assets/portfolio/projects/WhatsApp%20Image%202026-11-02%20at%2017.28.47.jpeg',
    temporaryIdentifier: 'projects/WhatsApp Image 2026-11-02 at 17.28.47.jpeg',
    titlePlaceholder: 'Integrated Workstation Array & West Wall',
    documentType: 'photograph',
    caption: 'Modular desktop workstations with cable management raceways and framed acoustic art panels.'
  },
  {
    id: 'asset-proj-office-workstation-04',
    category: 'projects',
    filename: 'WhatsApp Image 2026-11-02 at 17.28.47 (1).jpeg',
    filePath: '/assets/portfolio/projects/WhatsApp%20Image%202026-11-02%20at%2017.28.47%20(1).jpeg',
    temporaryIdentifier: 'projects/WhatsApp Image 2026-11-02 at 17.28.47 (1).jpeg',
    titlePlaceholder: 'Open Office Floor Layout Perspective',
    documentType: 'photograph',
    caption: 'Spacious office circulation layout with wood-trimmed ceiling coffers and ergonomic desk clusters.'
  },
  {
    id: 'asset-proj-office-workstation-05',
    category: 'projects',
    filename: 'WhatsApp Image 2026-11-02 at 17.28.47 (2).jpeg',
    filePath: '/assets/portfolio/projects/WhatsApp%20Image%202026-11-02%20at%2017.28.47%20(2).jpeg',
    temporaryIdentifier: 'projects/WhatsApp Image 2026-11-02 at 17.28.47 (2).jpeg',
    titlePlaceholder: 'South Wall Workstation Suite',
    documentType: 'photograph',
    caption: 'Symmetrical desk array with overhead bookstacks, storage lockers, and warm architectural under-cabinet illumination.'
  },
  {
    id: 'asset-proj-office-plan',
    category: 'projects',
    filename: 'WhatsApp Image 2026-11-02 at 17.28.47 (3).jpeg',
    filePath: '/assets/portfolio/projects/WhatsApp%20Image%202026-11-02%20at%2017.28.47%20(3).jpeg',
    temporaryIdentifier: 'projects/WhatsApp Image 2026-11-02 at 17.28.47 (3).jpeg',
    titlePlaceholder: 'Office Space Planning & Layout Plan',
    documentType: 'drawing',
    caption: 'Detailed architectural space plan with dimensional workstation grid, partition specifications, and circulation clearances.'
  },

  // INTERIORS CATEGORY
  {
    id: 'asset-int-design',
    category: 'interiors',
    filename: 'design.jpeg',
    filePath: '/assets/portfolio/interiors/design.jpeg',
    temporaryIdentifier: 'interiors/design.jpeg',
    titlePlaceholder: 'Interior Spatial Composition & Lighting',
    documentType: 'photograph',
    caption: 'Bespoke ceiling detail, warm ambient lighting, and timber paneling.'
  },
  {
    id: 'asset-int-1',
    category: 'interiors',
    filename: 'interior1.jpeg',
    filePath: '/assets/portfolio/interiors/interior1.jpeg',
    temporaryIdentifier: 'interiors/interior1.jpeg',
    titlePlaceholder: 'Residential Interior — Living Space',
    documentType: 'photograph',
    caption: 'Custom joinery and interior spatial design.'
  },
  {
    id: 'asset-int-2',
    category: 'interiors',
    filename: 'interior2.jpeg',
    filePath: '/assets/portfolio/interiors/interior2.jpeg',
    temporaryIdentifier: 'interiors/interior2.jpeg',
    titlePlaceholder: 'Interior Joinery & Cabinetry Detail',
    documentType: 'photograph',
    caption: 'Material finish and tailored storage design.'
  },
  {
    id: 'asset-int-3',
    category: 'interiors',
    filename: 'interior3.jpeg',
    filePath: '/assets/portfolio/interiors/interior3.jpeg',
    temporaryIdentifier: 'interiors/interior3.jpeg',
    titlePlaceholder: 'Material Palette & Surface Texture',
    documentType: 'photograph',
    caption: 'Interior accent wall and material combination.'
  },

  // SITE INSPECTION CATEGORY
  {
    id: 'asset-site-1',
    category: 'site_inspection',
    filename: 'site1.jpeg',
    filePath: '/assets/portfolio/site_inspection/site1.jpeg',
    temporaryIdentifier: 'site_inspection/site1.jpeg',
    titlePlaceholder: 'Site Quality Inspection & Layout Verification',
    documentType: 'photograph',
    caption: 'On-site technical evaluation and foundation level checks.'
  },
  {
    id: 'asset-site-2',
    category: 'site_inspection',
    filename: 'site2.jpeg',
    filePath: '/assets/portfolio/site_inspection/site2.jpeg',
    temporaryIdentifier: 'site_inspection/site2.jpeg',
    titlePlaceholder: 'Structural Framing & Column Supervision',
    documentType: 'photograph',
    caption: 'Structural alignment and reinforcement verification on site.'
  },

  // ACADEMIC / COLLEGE CATEGORY
  {
    id: 'asset-col-prof-talk',
    category: 'college',
    filename: 'prof_talk.jpeg',
    filePath: '/assets/portfolio/college/prof_talk.jpeg',
    temporaryIdentifier: 'college/prof_talk.jpeg',
    titlePlaceholder: 'Academic Lecture & Studio Presentation',
    documentType: 'photograph',
    caption: 'Prof. Ar. N. Jayaraman delivering an architecture lecture and thesis review.'
  },
  {
    id: 'asset-col-college-1',
    category: 'college',
    filename: 'college1.jpeg',
    filePath: '/assets/portfolio/college/college1.jpeg',
    temporaryIdentifier: 'college/college1.jpeg',
    titlePlaceholder: 'Design Studio & Faculty Interaction',
    documentType: 'photograph',
    caption: 'Studio guidance and architectural drawing critique with students.'
  },
  {
    id: 'asset-col-field-visit',
    category: 'college',
    filename: 'field_visit.jpeg',
    filePath: '/assets/portfolio/college/field_visit.jpeg',
    temporaryIdentifier: 'college/field_visit.jpeg',
    titlePlaceholder: 'Architectural Field Study & Heritage Documentation',
    documentType: 'photograph',
    caption: 'Leading students on site study and measured heritage drawing tour.'
  },
  {
    id: 'asset-col-group-ph',
    category: 'college',
    filename: 'group_ph.jpeg',
    filePath: '/assets/portfolio/college/group_ph.jpeg',
    temporaryIdentifier: 'college/group_ph.jpeg',
    titlePlaceholder: 'School of Architecture Faculty & Batch Conclave',
    documentType: 'photograph',
    caption: 'Department leadership and student graduation cohort.'
  }
];
