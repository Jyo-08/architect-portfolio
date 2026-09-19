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
  // PROJECTS
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
    id: 'proj-whatsapp-archive',
    category: 'PROJECTS',
    categoryLabel: 'Project Archive',
    title: 'Site Documentation Record',
    caption: 'Field architectural survey and spatial record',
    src: '/assets/portfolio/projects/WhatsApp%20Image%202026-09-19%20at%2019.30.14%20(2)%207.54.01%E2%80%AFPM.jpeg'
  },

  // INTERIORS
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

  // COLLEGE / ACADEMIC
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

  // SITE INSPECTION
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
