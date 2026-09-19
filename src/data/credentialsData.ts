import type { EducationItem, RegistrationItem, RecognitionItem } from '../types/portfolio';

export const educationData: EducationItem[] = [
  {
    degree: 'Postgraduate Degree in City Planning (MCP)',
    institution: 'Indian Institute of Technology (IIT) Kharagpur',
    year: '1999',
    gradeScore: 'CGPA 7.99',
    details: 'Specialization in regional city master planning, urban infrastructure, land use zoning, GIS, and development regulations.'
  },
  {
    degree: 'Bachelor Degree in Architecture (B.Arch)',
    institution: 'Bharat Institute of Science & Technology, University of Madras',
    year: '1998',
    gradeScore: '67.7%',
    details: 'Five-year professional degree in architectural design, structural engineering, building technology, and construction management.'
  },
  {
    degree: 'Bachelor of Laws (LLB)',
    institution: 'University Degree in Law',
    year: 'Professional Degree',
    details: 'Legal foundation covering statutory urban development bylaws, land regulations, arbitration, and property valuation.'
  },
  {
    degree: 'Graduate Aptitude Test in Engineering (GATE)',
    institution: 'National Coordination Board / IITs',
    year: '1998',
    details: 'All-India qualified in Architecture & Planning, securing national fellowship for postgraduate study at IIT Kharagpur.'
  }
];

export const registrationsData: RegistrationItem[] = [
  {
    organization: 'Council of Architecture (COA)',
    shortName: 'COA New Delhi',
    location: 'New Delhi, India',
    registrationNumber: 'CA / 98 / 24015',
    designationOrType: 'Registered Architect (Statutory National Body)'
  },
  {
    organization: 'Indian Institute of Architects (IIA)',
    shortName: 'IIA Mumbai',
    location: 'Mumbai, India',
    registrationNumber: 'A13017',
    designationOrType: 'Associate Member'
  },
  {
    organization: 'Institute of Town Planners, India (ITPI)',
    shortName: 'ITPI New Delhi',
    location: 'New Delhi, India',
    registrationNumber: '2001-086 / AITP',
    designationOrType: 'Associate Member (Town Planner)'
  },
  {
    organization: 'Institution of Insolvency and Valuation (IIV)',
    shortName: 'IIV Pune / Registered Valuer',
    location: 'Pune, India',
    registrationNumber: 'CAT-I-F-8356',
    designationOrType: 'Registered Valuer (Immovable Property)'
  },
  {
    organization: 'Directorate of Town & Country Planning & Chengalpattu Municipality',
    shortName: 'DTCP & Municipal Licensed Professional',
    location: 'Tamil Nadu, India',
    registrationNumber: 'Registered / Licensed Professional',
    designationOrType: 'Statutory Planning & Municipal Approvals'
  }
];

export const recognitionsData: RecognitionItem[] = [
  {
    title: 'Best Teacher Award (2007)',
    conferringBody: 'Lions Club of Chennai',
    year: '2007',
    description: 'Awarded in recognition of exceptional dedication, pedagogical excellence, and inspiring leadership in architectural education.'
  },
  {
    title: 'Certificate of Recognition & Academic Leadership',
    conferringBody: 'Academic Institutions & Professional Conclaves',
    description: 'Conferred across academic leadership tenures for contribution to architecture curriculum development, council accreditation compliances, and student thesis mentorship.'
  }
];
