export type GalleryCategory = 'ALL' | 'PROJECTS' | 'INTERIORS' | 'COLLEGE' | 'SITE INSPECTION';

export interface GalleryImage {
  id: string;
  category: 'PROJECTS' | 'INTERIORS' | 'COLLEGE' | 'SITE INSPECTION';
  src: string;
  filename: string;
  categoryLabel: string;
  aspect?: 'tall' | 'wide' | 'square' | 'large';
  feature?: boolean;
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
    categoryLabel: 'Projects // Technical Drawing',
    src: '/assets/portfolio/projects/resedential_house.png',
    filename: 'resedential_house.png',
    aspect: 'large',
    feature: true
  },
  {
    id: 'proj-iit-palakkad',
    category: 'PROJECTS',
    categoryLabel: 'Projects // Master Plan',
    src: '/assets/portfolio/projects/IITPalakad_plan.jpeg',
    filename: 'IITPalakad_plan.jpeg',
    aspect: 'wide'
  },
  {
    id: 'proj-nenmeli',
    category: 'PROJECTS',
    categoryLabel: 'Projects // Residential Scheme',
    src: '/assets/portfolio/projects/nenmeli.jpeg',
    filename: 'nenmeli.jpeg',
    aspect: 'square'
  },
  {
    id: 'proj-door-joinery',
    category: 'PROJECTS',
    categoryLabel: 'Projects // Joinery Detail',
    src: '/assets/portfolio/projects/door.jpeg',
    filename: 'door.jpeg',
    aspect: 'tall'
  },
  {
    id: 'proj-construction-view',
    category: 'PROJECTS',
    categoryLabel: 'Projects // Construction',
    src: '/assets/portfolio/projects/project.jpeg',
    filename: 'project.jpeg',
    aspect: 'wide'
  },
  {
    id: 'proj-whatsapp-archive',
    category: 'PROJECTS',
    categoryLabel: 'Projects // Documentation',
    src: '/assets/portfolio/projects/WhatsApp%20Image%202026-09-19%20at%2019.30.14%20(2)%207.54.01%E2%80%AFPM.jpeg',
    filename: 'WhatsApp Image 2026-09-19.jpeg',
    aspect: 'square'
  },

  // INTERIORS
  {
    id: 'int-design-feature',
    category: 'INTERIORS',
    categoryLabel: 'Interiors // Spatial Composition',
    src: '/assets/portfolio/interiors/design.jpeg',
    filename: 'design.jpeg',
    aspect: 'large',
    feature: true
  },
  {
    id: 'int-1',
    category: 'INTERIORS',
    categoryLabel: 'Interiors // Living Space',
    src: '/assets/portfolio/interiors/interior1.jpeg',
    filename: 'interior1.jpeg',
    aspect: 'tall'
  },
  {
    id: 'int-2',
    category: 'INTERIORS',
    categoryLabel: 'Interiors // Cabinetry Detail',
    src: '/assets/portfolio/interiors/interior2.jpeg',
    filename: 'interior2.jpeg',
    aspect: 'square'
  },
  {
    id: 'int-3',
    category: 'INTERIORS',
    categoryLabel: 'Interiors // Material Finish',
    src: '/assets/portfolio/interiors/interior3.jpeg',
    filename: 'interior3.jpeg',
    aspect: 'square'
  },

  // COLLEGE / ACADEMIC
  {
    id: 'col-prof-talk',
    category: 'COLLEGE',
    categoryLabel: 'College // Academic Lecture',
    src: '/assets/portfolio/college/prof_talk.jpeg',
    filename: 'prof_talk.jpeg',
    aspect: 'wide',
    feature: true
  },
  {
    id: 'col-field-visit',
    category: 'COLLEGE',
    categoryLabel: 'College // Field Visit',
    src: '/assets/portfolio/college/field_visit.jpeg',
    filename: 'field_visit.jpeg',
    aspect: 'tall'
  },
  {
    id: 'col-studio-interaction',
    category: 'COLLEGE',
    categoryLabel: 'College // Studio Review',
    src: '/assets/portfolio/college/college1.jpeg',
    filename: 'college1.jpeg',
    aspect: 'square'
  },
  {
    id: 'col-group-photo',
    category: 'COLLEGE',
    categoryLabel: 'College // Department Cohort',
    src: '/assets/portfolio/college/group_ph.jpeg',
    filename: 'group_ph.jpeg',
    aspect: 'wide'
  },

  // SITE INSPECTION
  {
    id: 'site-inspection-1',
    category: 'SITE INSPECTION',
    categoryLabel: 'Site Inspection // Field Supervision',
    src: '/assets/portfolio/site_inspection/site1.jpeg',
    filename: 'site1.jpeg',
    aspect: 'wide',
    feature: true
  },
  {
    id: 'site-inspection-2',
    category: 'SITE INSPECTION',
    categoryLabel: 'Site Inspection // Structure Alignment',
    src: '/assets/portfolio/site_inspection/site2.jpeg',
    filename: 'site2.jpeg',
    aspect: 'tall'
  }
];
