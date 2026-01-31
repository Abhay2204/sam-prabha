import { Service, Testimonial, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'research-topic',
    title: 'Research Topic Selection',
    description: 'Strategic identification of novel and feasible research topics aligned with current scientific trends.',
    iconName: 'Search',
    deliverables: ['Trend Analysis', 'Feasibility Report', 'Novelty Check'],
    bestFor: 'PhD Scholars, Master Students',
    timeline: '5-7 Business Days',
  },
  {
    id: 'thesis-writing',
    title: 'Thesis & Dissertation',
    description: 'Comprehensive writing assistance ensuring academic rigor, clarity, and adherence to university guidelines.',
    iconName: 'BookOpen',
    deliverables: ['Chapter Drafting', 'Formatting', 'Plagiarism Check'],
    bestFor: 'PhD & Masters Candidates',
    timeline: '30-60 Business Days',
  },
  {
    id: 'patent-guidance',
    title: 'Patent Guidance & Filing',
    description: 'End-to-end support in navigating the legal and technical landscape of intellectual property.',
    iconName: 'ShieldCheck',
    deliverables: ['Novelty Search Report', 'Draft Preparation', 'Filing Assistance'],
    bestFor: 'PhD Scholars, Startups',
    timeline: '14-21 Business Days',
  },
  {
    id: 'data-analysis',
    title: 'Statistical Data Analysis',
    description: 'Advanced statistical modeling and data interpretation using industry-standard software.',
    iconName: 'BarChart3',
    deliverables: ['SPSS/ANOVA Output', 'Graphical Representation', 'Interpretation Report'],
    bestFor: 'Researchers, Clinical Trials',
    timeline: '7-10 Business Days',
  },
  {
    id: 'manuscript',
    title: 'Research Paper Publication',
    description: 'Guidance on journal selection, manuscript editing, and submission processes for high-impact journals.',
    iconName: 'FileText',
    deliverables: ['Journal Selection', 'Peer Review Response', 'Formatting'],
    bestFor: 'Faculty, Scholars',
    timeline: 'Variable',
  },
  {
    id: 'review-paper',
    title: 'Review Paper Writing',
    description: 'Systematic literature reviews and meta-analyses constructed with critical scientific insight.',
    iconName: 'Library',
    deliverables: ['Literature Matrix', 'Synthesized Content', 'Reference Management'],
    bestFor: 'Academics',
    timeline: '15-20 Business Days',
  },
  {
    id: 'presentation',
    title: 'Conference Presentation',
    description: 'Creating high-impact posters and slide decks for scientific conferences.',
    iconName: 'Projector',
    deliverables: ['PowerPoint Deck', 'Poster Design', 'Speech Notes'],
    bestFor: 'Conference Attendees',
    timeline: '3-5 Business Days',
  },
  {
    id: 'grant-writing',
    title: 'Grant Proposal Writing',
    description: 'Persuasive and technically sound grant proposals for funding agencies.',
    iconName: 'PenTool',
    deliverables: ['Technical Proposal', 'Budget Justification', 'Admin Compliance'],
    bestFor: 'Principal Investigators',
    timeline: '10-15 Business Days',
  },
  {
    id: 'lab-setup',
    title: 'Lab Setup Consultation',
    description: 'Strategic planning for equipment procurement and laboratory layout design.',
    iconName: 'FlaskConical',
    deliverables: ['Equipment List', 'Vendor Contacts', 'Safety Layout'],
    bestFor: 'Institutions, Startups',
    timeline: 'Consultation Basis',
  },
  {
    id: 'career-counseling',
    title: 'Scientific Career Counseling',
    description: 'Mentorship for navigating careers in academia, industry, or research.',
    iconName: 'Users',
    deliverables: ['CV Review', 'Career Roadmap', 'Interview Prep'],
    bestFor: 'Students, Early Career',
    timeline: '1-3 Sessions',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "Samprabha's guidance on my patent filing was exceptional. They turned a complex legal process into a streamlined strategy.",
    author: "Dr. Rajesh K.",
    role: "Biotech Entrepreneur"
  },
  {
    id: 2,
    quote: "The statistical analysis support I received saved my thesis. The depth of understanding they have for pharma data is unmatched.",
    author: "Priya S.",
    role: "PhD Scholar, Pharmacology"
  },
  {
    id: 3,
    quote: "Professional, ethical, and deeply knowledgeable. They are not just editors; they are scientific partners.",
    author: "Dr. Alok V.",
    role: "Senior Researcher"
  },
  {
    id: 4,
    quote: "Their research topic selection service helped me identify a unique angle for my dissertation. Highly recommended!",
    author: "Amit P.",
    role: "Master's Student"
  },
  {
    id: 5,
    quote: "The manuscript editing was thorough and insightful. My paper got accepted in a Q1 journal on the first submission.",
    author: "Dr. Meera T.",
    role: "Assistant Professor"
  },
  {
    id: 6,
    quote: "Excellent support for grant proposal writing. Their attention to detail and scientific rigor is commendable.",
    author: "Prof. Suresh M.",
    role: "Principal Investigator"
  },
  {
    id: 7,
    quote: "The lab setup consultation saved us months of research. Their vendor network and technical expertise are invaluable.",
    author: "Kavita R.",
    role: "Lab Manager"
  },
  {
    id: 8,
    quote: "Career counseling sessions were transformative. They helped me navigate the transition from academia to industry seamlessly.",
    author: "Rohit S.",
    role: "Research Scientist"
  },
  {
    id: 9,
    quote: "Data analysis support was exceptional. Complex statistical models were explained clearly and implemented perfectly.",
    author: "Dr. Anjali D.",
    role: "Clinical Researcher"
  },
  {
    id: 10,
    quote: "Review paper writing service exceeded expectations. The literature synthesis was comprehensive and well-structured.",
    author: "Vikram N.",
    role: "PhD Candidate"
  },
  {
    id: 11,
    quote: "Conference presentation design was stunning. The visual storytelling helped me win the best poster award.",
    author: "Neha J.",
    role: "Postdoctoral Fellow"
  },
  {
    id: 12,
    quote: "Their ethical approach and confidentiality standards are exemplary. I trust them with all my research projects.",
    author: "Dr. Karthik B.",
    role: "Senior Scientist"
  }
];

export const CONTACT_INFO = {
  phone: "+91 6359982599",
  whatsappLink: "https://wa.me/916359982599",
  email: "contact@samprabha.com", // Placeholder
  address: "Gandhinagar, Gujarat, India",
  instagram: "@samprabha_scientific_services"
};