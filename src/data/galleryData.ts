export type GalleryCategory = 'ALL' | 'PROJECTS' | 'INTERIORS' | 'COLLEGE' | 'SITE INSPECTION';

export interface GalleryImage {
  id: string;
  category: 'PROJECTS' | 'INTERIORS' | 'COLLEGE' | 'SITE INSPECTION';
  src: string;
  title: string;
  categoryLabel: string;
  caption: string;
}

export const galleryCategories: { id: GalleryCategory; label: string }[] = [
  { id: 'ALL', label: 'ALL WORKS' },
  { id: 'PROJECTS', label: 'PROJECTS' },
  { id: 'INTERIORS', label: 'INTERIORS' },
  { id: 'COLLEGE', label: 'COLLEGE' },
  { id: 'SITE INSPECTION', label: 'SITE INSPECTION' },
];

export const galleryImages: GalleryImage[] = [
  // ==========================================
  // PROJECTS CATEGORY (22 VERIFIED IMAGES)
  // ==========================================
  {
    id: 'proj-residential-house-drawing',
    category: 'PROJECTS',
    categoryLabel: 'Technical Working Drawing',
    title: 'Residential Project Working Drawings',
    caption: 'Detailed municipal architectural sanction plans & elevation grid',
    src: '/assets/portfolio/projects/resedential_house.png'
  },
  {
    id: 'proj-iit-palakkad',
    category: 'PROJECTS',
    categoryLabel: 'Institutional Master Plan',
    title: 'IIT Palakkad Master Plan',
    caption: 'Comprehensive campus spatial zoning and circulation layout',
    src: '/assets/portfolio/projects/IITPalakad_plan.jpeg'
  },
  {
    id: 'proj-nenmeli',
    category: 'PROJECTS',
    categoryLabel: 'Residential Architecture',
    title: 'Nenmeli Residential Scheme',
    caption: 'Contemporary residential exterior elevation and massing',
    src: '/assets/portfolio/projects/nenmeli.jpeg'
  },
  {
    id: 'proj-door-joinery',
    category: 'PROJECTS',
    categoryLabel: 'Detailing & Millwork',
    title: 'Architectural Joinery Detail',
    caption: 'Custom crafted timber door and portal framework',
    src: '/assets/portfolio/projects/door.jpeg'
  },
  {
    id: 'proj-construction-view',
    category: 'PROJECTS',
    categoryLabel: 'Construction Practice',
    title: 'Project Execution & Framing',
    caption: 'Structural column alignments and on-site building supervision',
    src: '/assets/portfolio/projects/project.jpeg'
  },
  {
    id: 'proj-site-archive',
    category: 'PROJECTS',
    categoryLabel: 'Project Archive',
    title: 'Site Documentation Record',
    caption: 'Field architectural survey and spatial record',
    src: '/assets/portfolio/projects/WhatsApp%20Image%202026-09-19%20at%2019.30.14%20(2)%207.54.01%E2%80%AFPM.jpeg'
  },
  {
    id: 'proj-master-suite-01',
    category: 'PROJECTS',
    categoryLabel: 'Residential Architecture',
    title: 'Executive Master Bedroom Suite',
    caption: 'Floor-to-ceiling customized wardrobe millwork with integrated display niche and warm ambient cove lighting',
    src: '/assets/portfolio/projects/WhatsApp%20Image%202026-11-02%20at%2017.28.40.jpeg'
  },
  {
    id: 'proj-master-suite-02',
    category: 'PROJECTS',
    categoryLabel: 'Residential Architecture',
    title: 'Master Bedroom Study & Workstation',
    caption: 'Integrated ergonomic workstation with acoustic timber wall fluting and overhead storage cabinetry',
    src: '/assets/portfolio/projects/WhatsApp%20Image%202026-11-02%20at%2017.28.40%20(1).jpeg'
  },
  {
    id: 'proj-master-suite-03',
    category: 'PROJECTS',
    categoryLabel: 'Residential Architecture',
    title: 'Walk-In Dressing & Wardrobe Suite',
    caption: 'Tailored architectural dressing suite with fluted glass cabinetry and concealed dressing mirror',
    src: '/assets/portfolio/projects/WhatsApp%20Image%202026-11-02%20at%2017.28.41.jpeg'
  },
  {
    id: 'proj-master-suite-04',
    category: 'PROJECTS',
    categoryLabel: 'Residential Architecture',
    title: 'Master Suite Media Console',
    caption: 'Custom wood veneer media console with concealed peripheral warm ambient perimeter lighting',
    src: '/assets/portfolio/projects/WhatsApp%20Image%202026-11-02%20at%2017.28.41%20(1).jpeg'
  },
  {
    id: 'proj-master-suite-05',
    category: 'PROJECTS',
    categoryLabel: 'Residential Architecture',
    title: 'Master Suite Bedroom Interior Perspective',
    caption: 'Spatial composition balancing floor-to-ceiling drapery, natural illumination, and bespoke millwork',
    src: '/assets/portfolio/projects/WhatsApp%20Image%202026-11-02%20at%2017.28.41%20(2).jpeg'
  },
  {
    id: 'proj-living-salon-01',
    category: 'PROJECTS',
    categoryLabel: 'Residential Architecture',
    title: 'Contemporary Living Lounge Salon',
    caption: 'Formal reception lounge featuring vertical metallic fluting, statuario marble wall cladding, and designer pendant fixtures',
    src: '/assets/portfolio/projects/WhatsApp%20Image%202026-11-02%20at%2017.28.41%20(3).jpeg'
  },
  {
    id: 'proj-living-salon-02',
    category: 'PROJECTS',
    categoryLabel: 'Residential Architecture',
    title: 'Formal Reception Feature Wall',
    caption: 'Symmetrical architectural wall panelling with fluted accents and cove illumination',
    src: '/assets/portfolio/projects/WhatsApp%20Image%202026-11-02%20at%2017.28.43.jpeg'
  },
  {
    id: 'proj-living-salon-03',
    category: 'PROJECTS',
    categoryLabel: 'Residential Architecture',
    title: 'Living Room Spatial Composition',
    caption: 'Wide-angle perspective of living salon highlighting layered acoustic ceiling raft and marble accents',
    src: '/assets/portfolio/projects/WhatsApp%20Image%202026-11-02%20at%2017.28.43%20(1).jpeg'
  },
  {
    id: 'proj-living-salon-04',
    category: 'PROJECTS',
    categoryLabel: 'Residential Architecture',
    title: 'Lounge Seating & Sculptural Accents',
    caption: 'Refined spatial planning with low-profile seating, metallic accent tables, and sculptural lighting elements',
    src: '/assets/portfolio/projects/WhatsApp%20Image%202026-11-02%20at%2017.28.43%20(2).jpeg'
  },
  {
    id: 'proj-office-workstation-01',
    category: 'PROJECTS',
    categoryLabel: 'Commercial Architecture',
    title: 'Corporate Office Workstation Pods',
    caption: 'Open-plan corporate workspace with biophilic planter dividers, ergonomic task stations, and coffered timber ceiling raft',
    src: '/assets/portfolio/projects/WhatsApp%20Image%202026-11-02%20at%2017.28.45.jpeg'
  },
  {
    id: 'proj-office-workstation-02',
    category: 'PROJECTS',
    categoryLabel: 'Commercial Architecture',
    title: 'Executive Workstation Bay & East Wall',
    caption: 'Linear workstation arrangement with acoustic partition panels, task lighting, and integrated wall cabinetry',
    src: '/assets/portfolio/projects/WhatsApp%20Image%202026-11-02%20at%2017.28.46.jpeg'
  },
  {
    id: 'proj-office-reception',
    category: 'PROJECTS',
    categoryLabel: 'Commercial Architecture',
    title: 'Corporate Reception & Waiting Lounge',
    caption: 'Angular marble reception desk with natural wood paneling, biophilic planting, and brand backdrop',
    src: '/assets/portfolio/projects/WhatsApp%20Image%202026-11-02%20at%2017.28.46%20(1).jpeg'
  },
  {
    id: 'proj-office-workstation-03',
    category: 'PROJECTS',
    categoryLabel: 'Commercial Architecture',
    title: 'Integrated Workstation Array & West Wall',
    caption: 'Modular desktop workstations with cable management raceways and framed acoustic art panels',
    src: '/assets/portfolio/projects/WhatsApp%20Image%202026-11-02%20at%2017.28.47.jpeg'
  },
  {
    id: 'proj-office-workstation-04',
    category: 'PROJECTS',
    categoryLabel: 'Commercial Architecture',
    title: 'Open Office Floor Layout Perspective',
    caption: 'Spacious office circulation layout with wood-trimmed ceiling coffers and ergonomic desk clusters',
    src: '/assets/portfolio/projects/WhatsApp%20Image%202026-11-02%20at%2017.28.47%20(1).jpeg'
  },
  {
    id: 'proj-office-workstation-05',
    category: 'PROJECTS',
    categoryLabel: 'Commercial Architecture',
    title: 'South Wall Workstation Suite',
    caption: 'Symmetrical desk array with overhead bookstacks, storage lockers, and warm architectural under-cabinet illumination',
    src: '/assets/portfolio/projects/WhatsApp%20Image%202026-11-02%20at%2017.28.47%20(2).jpeg'
  },
  {
    id: 'proj-office-plan',
    category: 'PROJECTS',
    categoryLabel: 'Technical Working Drawing',
    title: 'Office Space Planning & Layout Plan',
    caption: 'Detailed architectural space plan with dimensional workstation grid, partition specifications, and circulation clearances',
    src: '/assets/portfolio/projects/WhatsApp%20Image%202026-11-02%20at%2017.28.47%20(3).jpeg'
  },
  {
    id: 'proj-chengalpattu-aerial',
    category: 'PROJECTS',
    categoryLabel: 'Urban & Regional Planning',
    title: 'Chengalpattu Town & College Corridor — Aerial Context',
    caption: 'Satellite spatial survey mapping urban fabric density, arterial highway alignment, railway corridor, and institutional campus land-use in Chengalpattu',
    src: '/assets/portfolio/projects/chengalpattu_aerial.jpeg'
  },

  // ==========================================
  // INTERIORS CATEGORY (4 VERIFIED IMAGES)
  // ==========================================
  {
    id: 'int-design-feature',
    category: 'INTERIORS',
    categoryLabel: 'Interior Architecture',
    title: 'Bespoke Interior Environment',
    caption: 'Spatial flow, ambient lighting, and bespoke material palette',
    src: '/assets/portfolio/interiors/design.jpeg'
  },
  {
    id: 'int-1',
    category: 'INTERIORS',
    categoryLabel: 'Interior Design',
    title: 'Living Space Detailing',
    caption: 'Residential living room interior composition',
    src: '/assets/portfolio/interiors/interior1.jpeg'
  },
  {
    id: 'int-2',
    category: 'INTERIORS',
    categoryLabel: 'Interior Joinery',
    title: 'Custom Cabinetry & Millwork',
    caption: 'Integrated storage millwork and surface finishes',
    src: '/assets/portfolio/interiors/interior2.jpeg'
  },
  {
    id: 'int-3',
    category: 'INTERIORS',
    categoryLabel: 'Material Detailing',
    title: 'Architectural Interior Finishes',
    caption: 'Detailed interior finish specifications and lighting',
    src: '/assets/portfolio/interiors/interior3.jpeg'
  },

  // ==========================================
  // COLLEGE / ACADEMIC CATEGORY (4 VERIFIED IMAGES)
  // ==========================================
  {
    id: 'col-prof-talk',
    category: 'COLLEGE',
    categoryLabel: 'Academic Leadership',
    title: 'Department Academic Lecture',
    caption: 'Architecture institutional lecture and keynote presentation',
    src: '/assets/portfolio/college/prof_talk.jpeg'
  },
  {
    id: 'col-field-visit',
    category: 'COLLEGE',
    categoryLabel: 'Studio Pedagogy',
    title: 'Student Architectural Field Visit',
    caption: 'Practical field study and site survey with architecture cohort',
    src: '/assets/portfolio/college/field_visit.jpeg'
  },
  {
    id: 'col-studio-interaction',
    category: 'COLLEGE',
    categoryLabel: 'Academic Mentorship',
    title: 'Design Studio Review & Critique',
    caption: 'Interactive architectural studio critique and drawing review',
    src: '/assets/portfolio/college/college1.jpeg'
  },
  {
    id: 'col-group-photo',
    category: 'COLLEGE',
    categoryLabel: 'Institutional Leadership',
    title: 'Architecture Faculty & Cohort',
    caption: 'Academic department conference and student delegation',
    src: '/assets/portfolio/college/group_ph.jpeg'
  },

  // ==========================================
  // SITE INSPECTION CATEGORY (2 VERIFIED IMAGES)
  // ==========================================
  {
    id: 'site-inspection-1',
    category: 'SITE INSPECTION',
    categoryLabel: 'Field Engineering',
    title: 'Structural Site Inspection',
    caption: 'On-site inspection of structural foundation and slab casting',
    src: '/assets/portfolio/site_inspection/site1.jpeg'
  },
  {
    id: 'site-inspection-2',
    category: 'SITE INSPECTION',
    categoryLabel: 'Site Supervision',
    title: 'Foundation Alignment & Verification',
    caption: 'Detailed site level verification and structural compliance check',
    src: '/assets/portfolio/site_inspection/site2.jpeg'
  }
];
