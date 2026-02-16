import { Project, NewsItem, SocialLink } from './types';

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Gmail', url: 'mailto:obedhonoureje@gmail.com', icon: 'mail' },
  { label: 'CV', url: 'https://drive.google.com/file/d/1bWPb3eZLOpv8KrLwv_FPiIe7_CJP3TTg/view', icon: 'file-text' },
  { label: 'GitHub', url: 'https://github.com/HonourObed', icon: 'github' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/obed-honour-eje-atomic/', icon: 'linkedin' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    year: '2026',
    title: 'Autonomous Precision Agriculture Robot (AgroScout)',
    description: 'Designed a distributed perception–action system for autonomous navigation, integrating learning-based visual inference with probabilistic control and real-time decision-making under resource constraints.',
    type: 'Independent Research Project',
    links: [{ label: 'GitHub', url: 'https://github.com/HonourObed/agriscout_robot', type: 'github' }]
  },
  {
    id: '2',
    year: '2025',
    title: 'Web-Teleoperated Hospital Logistics Robot (MediBot)',
    description: 'Implemented a real-time teleoperation system for mobile robotics, focusing on low-latency communication, control responsiveness, and robustness in human-in-the-loop environments.',
    type: 'Course Project',
    links: [{ label: 'GitHub', url: 'https://github.com/HonourObed/MediBot--Web-Teleoperated-Hospital-Logistics-Robot', type: 'github' }]
  },
  {
    id: '3',
    year: '2025',
    title: 'Smart Fire Detection and Extinguishing System',
    description: 'Developed an embedded autonomous response system combining environmental sensing, rule-based decision logic, and constrained real-time execution.',
    type: 'Embedded Systems Project',
    links: [{ label: 'View Project', url: 'https://drive.google.com/file/d/1bWPb3eZLOpv8KrLwv_FPiIe7_CJP3TTg/view', type: 'demo' }]
  },
  {
    id: '4',
    year: '2024',
    title: 'Machine Learning Model for Agricultural Planning',
    description: 'Built a data-driven decision-support model for agricultural planning, exploring trade-offs between predictive accuracy, interpretability, and real-world usability.',
    type: 'Data Science Project',
    links: []
  },
  {
    id: '5',
    year: '2025–Present',
    title: 'Autonomous Mobile Robot Navigation System',
    description: 'Explored probabilistic state estimation and mapping for autonomous navigation, investigating how uncertainty modeling influences localization and planning performance in unstructured environments.',
    type: 'Undergraduate Research Project',
    links: []
  }
];

export const NEWS_ITEMS: NewsItem[] = [
  { 
    id: '1', 
    date: 'Jan 2026', 
    content: 'Developed AgroScout, an autonomous precision agriculture robot integrating learning-based visual perception with probabilistic navigation and real-time control.',
    link: 'https://github.com/HonourObed/agriscout_robot'
  },
  { 
    id: '2', 
    date: 'Jan 2026', 
    content: 'Delivered a departmental lecture on research consistency and long-term academic development, discussing structured technical growth.' 
  },
  { 
    id: '3', 
    date: 'Aug 2025', 
    content: 'Developed a Smart Fire Detection and Response System, combining embedded sensing, rule-based decision logic, and constrained real-time execution.',
    link: 'https://github.com/HonourObed/Smart-Fire-Detection-and-Extinguishing-System'
  },
  { 
    id: '4', 
    date: 'June 2025', 
    content: 'Awarded the NNPC–Chevron Joint Venture Undergraduate Scholarship.' 
  },
  { 
    id: '5', 
    date: 'June 2025', 
    content: 'Developed MediBot, a real-time teleoperated mobile robot exploring low-latency communication and human-in-the-loop control.',
    link: 'https://github.com/HonourObed/MediBot--Web-Teleoperated-Hospital-Logistics-Robot'
  },
  { 
    id: '6', 
    date: 'June 2025', 
    content: 'Contributed to the development of a machine-learning-based Anxiety Detection System under the Green Wireless Networking Group (GWIN), focusing on physiological signal acquisition and uncertainty in real-time inference.' 
  },
  { 
    id: '7', 
    date: 'Jan 2025', 
    content: 'Awarded the Petroleum Trust Fund (PTDF) In-Country Scholarship (ISS).' 
  },
  { 
    id: '8', 
    date: 'Jan 2025', 
    content: 'Secured 5th Place at PAADC 8.0 as Technical Lead of Team Enactus FUTMinna, overseeing system architecture and technical implementation.',
    link: 'https://drive.google.com/file/d/1DVtbSGGjaSjrCkbZ0eWDeIc8wl-d1x5h/view?usp=sharing'
  },
  { 
    id: '9', 
    date: 'Dec 2024', 
    content: 'Appointed Technical Lead of the MATLAB Student Community, FUTMinna, organizing structured workshops in modeling and computational systems.',
    link: 'https://www.linkedin.com/company/futminna-matlab-space/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B0hzBv4YlRsmkiGOs2SBU5w%3D%3D'
  },
  { 
    id: '10', 
    date: 'Nov 2024', 
    content: 'Received an Honourable Mention for “Tidiest Interface” at the National MATLAB Competition.' 
  },
  { 
    id: '11', 
    date: 'April 2024', 
    content: 'Joined the Green Wireless Networking Group under Professor Elizabeth Onwuka, contributing to research in AI-enabled physiological monitoring systems.',
    link: 'https://www.researchgate.net/scientific-contributions/Elizabeth-N-Onwuka-2120992756'
  },
  { 
    id: '12', 
    date: 'Dec 2023', 
    content: 'Joined the Advanced Engineering Innovation Research Group (AEIRG), initiating formal research engagement in intelligent systems.',
    link: 'https://aeirg.com.ng/'
  },
];