import { Presentations, Project, NewsItem, SocialLink } from './types';

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Gmail', url: 'mailto:obedhonoureje@gmail.com', icon: 'mail' },
  { label: 'CV', url: 'https://drive.google.com/file/d/1ONDGiYvja8WI9i-zuL1x4szbvVwQy0SO/view?usp=drive_link', icon: 'file-text' },
  { label: 'GitHub', url: 'https://github.com/HonourObed', icon: 'github' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/obed-honour-eje-atomic/', icon: 'linkedin' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    year: '2026',
    title: 'Markerless Cartesian Teleoperation System for a 6-DOF Robotic Arm',
    description: 'Architected a distributed ROS 2 node pipeline isolating vision processing, kinematic mapping, and hardware actuation for real-time teleoperation. Developed a markerless hand-tracking node using OpenCV and MediaPipe, mapping 2D pixel area to a dynamic Z-axis depth proxy to overcome monocular limitations.',
    type: 'Robotics Project',
    links: [{ label: 'GitHub', url: 'https://github.com/HonourObed/edgemind_ws', type: 'github' }]
  },
  {
    id: '2',
    year: '2026',
    title: 'Hyperparameter Scaling and Convergence Analysis of YOLOv3 for Road Anomaly Detection',
    description: 'Implemented transfer learning using COCO-pretrained YOLOv3 under standardized augmentation constraints to detect multi-class road anomalies. Conducted systematic learning rate sensitivity experiments across five orders of magnitude to analyze convergence stability, overshooting behavior, and optimization dynamics.',
    type: 'Computer Vision Research',
    links: [{ label: 'GitHub', url: 'https://github.com/HonourObed/YOLOv3-Road-Anomaly-Detection', type: 'github' }]
  },
  {
    id: '3',
    year: '2026',
    title: 'Autonomous Precision Agriculture Robot (AgroScout)',
    description: 'Designed a distributed perception–action system for autonomous navigation, integrating learning-based visual inference with probabilistic control and real-time decision-making under resource constraints.',
    type: 'Independent Research Project',
    links: [{ label: 'GitHub', url: 'https://github.com/HonourObed/agriscout_robot', type: 'github' }]
  },
  {
    id: '4',
    year: '2025–Present',
    title: 'Autonomous Mobile Robot Navigation System',
    description: 'Explored probabilistic state estimation and mapping for autonomous navigation, investigating how uncertainty modeling influences localization and planning performance in unstructured environments.',
    type: 'Undergraduate Research Project',
    links: []
  }
];

export const PRESENTATIONS: Presentations[] = [
  {
    id: '1',
    title: 'A Stone Against Goliath: Beating Occlusion Without LiDAR on Resource-Constrained Robots',
    authors: 'Onyenweaku, C., Adele, T., Abdulkareem, S., and Eje, O. H.',
    venue: 'Women in Machine Learning (WiML) Symposium, ICML 2026',
    type: 'Poster Presentation'
  },
  {
    id: '2',
    title: 'Africa Robotics Network Community Building Program',
    authors: 'Panelist',
    venue: 'ICRA 2026, Vienna',
    date: 'June 2026',
    type: 'Panelist'
  },
  {
    id: '3',
    title: 'Benchmarking Classification Performance for Binary-Class Fault Detection Under Real-World Imbalanced Data Conditions',
    authors: 'Kuzayet, B. G., Eje, O. H., and Bala, J. A.',
    venue: 'IndabaX Nigeria 2026 (Deep Learning Indaba)',
    type: 'Paper Presentation'
  },
  {
    id: '4',
    title: 'Evaluating Architectural Robustness to Domain Shift in Road Anomaly Detection: CNNs, Two-stage Detectors and Vision Transformers',
    authors: 'Accepted',
    venue: 'IndabaX Nigeria 2026 (Deep Learning Indaba)',
    type: 'Poster Presentation'
  },
  {
    id: '5',
    title: 'Occlusion-Aware Object Detection for Autonomous Robots Using Monocular Depth Estimation',
    authors: 'Co-presenter',
    venue: 'ML Collective Research Jam',
    date: 'April 2026',
    type: 'Presentation'
  }
];

export const NEWS_ITEMS: NewsItem[] = [
  { 
    id: '15', 
    date: 'April 2026', 
    content: 'Selected for the ROSCon 2026 Diversity Scholarship Program with fully sponsored participation at ROSCon 2026, Toronto.',
    link: 'https://roscon.ros.org/2026/'
  },
  { 
    id: '14', 
    date: 'Feb 2026', 
    content: 'Won the IDEA Travel Grant for fully funded participation at the IEEE International Conference on Robotics and Automation (ICRA) 2026, Austria.',
    link: 'https://2026.ieee-icra.org/'
  },
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
    content: 'Awarded the Petroleum Trust Fund (PTDF) In-Country Scholarship (ISS).',
    link: 'https://ptdf.gov.ng/'
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