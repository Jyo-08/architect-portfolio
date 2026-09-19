export interface OngoingProject {
  number: string;
  title: string;
  tag: string;
}

export const ongoingProjectsData: OngoingProject[] = [
  {
    number: '01',
    title: 'Apartment Design',
    tag: 'Residential Architecture'
  },
  {
    number: '02',
    title: 'Layout Proposals',
    tag: 'Town Planning & Layout'
  },
  {
    number: '03',
    title: 'Land Developments',
    tag: 'Site Planning & Development'
  },
  {
    number: '04',
    title: 'Road Constructions',
    tag: 'Infrastructure & Connectivity'
  },
  {
    number: '05',
    title: 'Design of Marriage Hall',
    tag: 'Commercial Architecture'
  },
  {
    number: '06',
    title: 'Petrol Bunk (E-Charging) Design',
    tag: 'Energy Infrastructure'
  }
];
