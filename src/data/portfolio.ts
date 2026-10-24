/**
 * Central portfolio data for Ayush Raj — customize this file to update the whole site.
 * Facts are based on the public portfolio supplied by Ayush. Replace placeholders where noted.
 */
export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Ayush Raj',
  displayName: 'Ayush Raj',
  firstName: 'AYUSH',
  seriesTag: 'PORTFOLIO',
  originalLabel: 'AYUSH RAJ • DEVELOPER PORTFOLIO',
  role: 'Full-Stack Developer',
  tagline: ['Full-Stack Developer', 'Creative Builder', 'B.Tech CSE'],
  intro: 'I am Ayush Raj, a Computer Science undergraduate at Uttaranchal University. I bridge the gap between complex backend logic and beautiful frontend design, building useful products across web, mobile, and interactive experiences.',
  location: 'India',
  // Replace this sample address with your preferred public contact email.
  email: 'ayushmishra2622@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/ayush-raj-79401231a/',
    github: 'https://github.com/Ayush2621',
  },
  resumePdf: '/assets/Ayush_Raj_Resume.pdf',
  portrait: {
    src: '/assets/ayush-portrait.png',
    srcSet: '',
    alt: 'Ayush Raj portrait',
  },
  interests: ['Full-Stack Development', 'AI-powered Products', 'Game Development'],
};

export const education = [
  {
    school: 'Uttaranchal University',
    place: 'Dehradun, India',
    degree: 'B.Tech — Computer Science and Engineering',
    period: '2023 – Present',
    score: 'Computer Science',
  },
];

export const experience = [
  {
    company: 'Younity',
    role: 'Business Management Intern',
    place: 'India',
    period: '2 months',
    points: [
      'Worked as a Business Management Intern, gaining experience in communication, coordination, and business workflows.',
      'Built practical understanding of teamwork, project execution, and professional collaboration.',
    ],
  },
  {
    company: 'Freelance',
    role: 'Web & App Developer',
    place: 'Remote',
    period: 'Recent projects',
    points: [
      'Built and iterated on web and mobile app experiences, connecting frontend interfaces to backend services.',
      'Worked with modern web technologies, Flutter, Firebase, APIs, and deployment platforms.',
    ],
  },
];

export type Metric = { value: string; label: string };
export type Project = {
  id: string; title: string; year: string; genre: string; logline: string; stack: string[];
  build: string[]; features: string[]; metrics: Metric[]; github?: string; live?: string;
  palette: Palette; motif: 'shield' | 'flow' | 'tenants';
};
const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const projects: Project[] = [
  {
    id: 'levoe', title: 'Levoe', year: '2025', genre: 'E-Commerce • Full-Stack',
    logline: 'A modern online shopping experience with product discovery, cart workflows, and payment integration.',
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Razorpay'],
    build: ['Designed a responsive shopping experience inspired by modern retail platforms.', 'Worked on product browsing, cart flows, backend integration, and payment gateway setup.'],
    features: ['Product catalogue and shopping UI', 'Cart and checkout experience', 'Backend integration', 'Payment gateway integration'],
    metrics: [{ value: 'Full-stack', label: 'shopping experience' }, { value: 'Responsive', label: 'web interface' }],
    github: 'https://github.com/Ayush2621/levoe', palette: crimson, motif: 'flow',
  },
  {
    id: 'justice-junction', title: 'Justice Junction', year: '2025', genre: 'EdTech • Gamification',
    logline: 'A gamified educational website that makes learning the Indian Constitution more accessible and engaging.',
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
    build: ['Created an interactive learning experience around constitutional knowledge.', 'The project achieved 5th place at IIT Bombay Eureka Hackathon.'],
    features: ['Gamified learning flows', 'Constitution-focused educational content', 'Interactive UI', 'Student-friendly experience'],
    metrics: [{ value: '#5', label: 'IIT Bombay Eureka Hackathon' }, { value: 'EdTech', label: 'learning platform' }],
    github: 'https://github.com/Ayush2621', palette: ocean, motif: 'shield',
  },
  {
    id: 'kbr-ordering', title: 'KBR Food Ordering', year: '2026', genre: 'Mobile • Food Delivery',
    logline: 'A customer and restaurant-owner ordering system designed around a clean food delivery experience.',
    stack: ['Flutter', 'Node.js', 'Express', 'PostgreSQL', 'Prisma'],
    build: ['Developed customer and owner app workflows for browsing menu items, managing orders, and inventory.', 'Connected Flutter apps to a hosted backend API and database.'],
    features: ['Customer menu and cart', 'Owner order management', 'Pay on Delivery checkout', 'Order status and delivery workflow'],
    metrics: [{ value: '2 apps', label: 'customer + owner' }, { value: 'API', label: 'backend connected' }],
    github: 'https://github.com/Ayush2621', palette: amber, motif: 'tenants',
  },
  {
    id: 'mediscan-ai', title: 'MediScan AI', year: '2026', genre: 'Flutter • AI Assistant',
    logline: 'A mobile-first AI-powered first-aid assistant concept with image scanning and analysis screens.',
    stack: ['Flutter', 'Dart', 'Gemini API', 'Provider'],
    build: ['Designed a multi-screen mobile app flow for scanning, previewing, and analyzing images.', 'Focused on clear guidance and a simple first-aid assistant experience.'],
    features: ['Image picker and preview', 'AI-assisted image analysis flow', 'Onboarding and authentication screens', 'Mobile-first UI'],
    metrics: [{ value: 'Flutter', label: 'cross-platform app' }, { value: 'AI', label: 'assisted analysis concept' }],
    github: 'https://github.com/Ayush2621', palette: jade, motif: 'shield',
  },
  {
    id: 'car-racing', title: '3D Car Racing Game', year: '2025', genre: 'Unity • Game Development',
    logline: 'A mobile racing game prototype with vehicle controls, UI, sound effects, and level design.',
    stack: ['Unity', 'C#', 'Blender'],
    build: ['Created a 3D mobile racing game prototype using Unity Engine and C#.', 'Worked on controls, game UI, sound effects, level design, and Android performance.'],
    features: ['3D driving gameplay', 'Vehicle controls', 'Game UI and sound', 'Android-focused optimization'],
    metrics: [{ value: '3D', label: 'mobile game' }, { value: 'Unity', label: 'game engine' }],
    github: 'https://github.com/Ayush2621/car-racing-game', palette: violet, motif: 'flow',
  },
];

export type Achievement = { id: string; title: string; org: string; detail: string; laurel: string; link?: string };
export const achievements: Achievement[] = [
  { id: 'eureka', title: 'Ranked 5th', org: 'IIT Bombay Eureka Hackathon', detail: 'Recognized for Justice Junction, a gamified educational platform for learning the Indian Constitution.', laurel: 'Hackathon Achievement' },
  { id: 'freelance', title: 'Independent Builder', org: 'Freelance Web & App Development', detail: 'Built and iterated on web and mobile development projects.', laurel: 'Product Development' },
  { id: 'esports', title: 'Content Creator', org: 'Uttaranchal University E-sports Club', detail: 'Contributed as a content creator for the university esports club.', laurel: 'Campus Involvement' },
];

export type Certification = { issuer: string; name: string; link?: string };
// Credentials listed in the résumé supplied for this portfolio. Add individual certificate URLs when available.
export const certifications: Certification[] = [
  { issuer: 'Oasis Infobyte', name: 'Letter of Recommendation — Web Development & Designing Internship' },
  { issuer: 'Forage', name: 'Solutions Architecture Job Simulation' },
  { issuer: 'Forage', name: 'GenAI-Powered Data Analytics Job Simulation' },
  { issuer: 'IIT Bombay', name: 'Eureka Hackathon 2024 — Certificate of Participation' },
  { issuer: 'ISRO / Aditya-L1', name: 'Online Quiz on the Launch of Aditya-L1' },
  { issuer: 'Training Program', name: 'Ethical Hacker Training Program — Certificate of Completion' },
  { issuer: 'Notion Press', name: 'Certificate of Publishing' },
  { issuer: 'GitHub', name: 'Projects and source code', link: 'https://github.com/Ayush2621' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };
export const skillCategories: SkillCategory[] = [
  { id: 'languages', title: 'Languages', subtitle: 'The building blocks', skills: [{ name: 'JavaScript', mono: 'Js' }, { name: 'Dart', mono: 'Da' }, { name: 'PHP', mono: 'Ph' }, { name: 'C#', mono: 'C#' }] },
  { id: 'frontend', title: 'Frontend', subtitle: 'Interfaces & web experiences', skills: [{ name: 'React', mono: 'Re' }, { name: 'HTML', mono: 'Ht' }, { name: 'CSS', mono: 'Cs' }, { name: 'JavaScript', mono: 'Js' }, { name: 'Three.js', mono: '3D' }] },
  { id: 'backend', title: 'Backend', subtitle: 'APIs and application logic', skills: [{ name: 'Node.js', mono: 'No' }, { name: 'Express', mono: 'Ex' }, { name: 'PHP', mono: 'Ph' }, { name: 'REST APIs', mono: 'Ap' }] },
  { id: 'mobile', title: 'Mobile & Game Dev', subtitle: 'Apps and interactive worlds', skills: [{ name: 'Flutter', mono: 'Fl' }, { name: 'Dart', mono: 'Da' }, { name: 'Unity', mono: 'Un' }, { name: 'C#', mono: 'C#' }] },
  { id: 'databases', title: 'Databases & Cloud', subtitle: 'Data and deployment', skills: [{ name: 'MySQL', mono: 'My' }, { name: 'MongoDB', mono: 'Mg' }, { name: 'Firebase', mono: 'Fb' }, { name: 'PostgreSQL', mono: 'Pg' }, { name: 'Vercel', mono: 'Ve' }, { name: 'Render', mono: 'Rn' }] },
  { id: 'tools', title: 'Tools & Creative Tech', subtitle: 'Design, build, ship', skills: [{ name: 'Git / GitHub', mono: 'Gt' }, { name: 'Blender', mono: 'Bl' }, { name: 'Unreal Engine', mono: 'UE' }, { name: 'Figma', mono: 'Fg' }] },
];
export const skillEvidence: Record<string, string[]> = {
  React: ['Levoe', 'Justice Junction'], JavaScript: ['Levoe', 'Portfolio'], Flutter: ['KBR Food Ordering', 'MediScan AI'], Dart: ['KBR Food Ordering', 'MediScan AI'],
  'Node.js': ['KBR Food Ordering'], Express: ['KBR Food Ordering'], PHP: ['Levoe'], MySQL: ['Levoe'], Firebase: ['SmartCart AI'], Unity: ['3D Car Racing Game'], 'C#': ['3D Car Racing Game'],
  'Git / GitHub': ['Personal projects'], 'REST APIs': ['KBR Food Ordering', 'MediScan AI'],
};

export type Episode = { code: string; title: string; description: string; tags: string[]; runtime: string; palette: Palette };
export type Season = { number: number; title: string; period: string; synopsis: string; episodes: Episode[] };
export const seasons: Season[] = [
  { number: 1, title: 'The Foundation', period: 'B.Tech · Present', synopsis: 'Building a foundation in Computer Science and Engineering at Uttaranchal University.', episodes: [
    { code: 'S01 E01', title: 'The Student', description: 'Learning core computer science concepts and turning them into practical projects.', tags: ['B.Tech', 'CSE'], runtime: 'University years', palette: violet },
    { code: 'S01 E02', title: 'The Creator', description: 'Joining the Uttaranchal University E-sports Club as a content creator.', tags: ['Content', 'Campus'], runtime: 'Campus life', palette: amber },
  ] },
  { number: 2, title: 'Learning to Build', period: '2024 – 2025', synopsis: 'Moving from ideas to full-stack websites, interactive experiences, and hackathon projects.', episodes: [
    { code: 'S02 E01', title: 'The E-Commerce Build', description: 'Building Levoe, an online shopping experience with product and cart workflows.', tags: ['Web', 'E-Commerce'], runtime: 'Project', palette: crimson },
    { code: 'S02 E02', title: 'The Hackathon', description: 'Justice Junction earns 5th place at IIT Bombay Eureka Hackathon.', tags: ['EdTech', 'Achievement'], runtime: 'IIT Bombay Eureka', palette: ocean },
    { code: 'S02 E03', title: 'The Freelancer', description: 'Taking on web and app development work and learning through real project needs.', tags: ['Freelance', 'Delivery'], runtime: 'Ongoing', palette: jade },
  ] },
  { number: 3, title: 'Across Platforms', period: '2025 – 2026', synopsis: 'Expanding into Flutter apps, backend APIs, AI concepts, and 3D game development.', episodes: [
    { code: 'S03 E01', title: 'The App Builder', description: 'Building mobile experiences including MediScan AI and KBR food ordering apps.', tags: ['Flutter', 'Mobile'], runtime: 'Current projects', palette: jade },
    { code: 'S03 E02', title: 'The Game Developer', description: 'Experimenting with Unity, C#, 3D assets, and interactive game mechanics.', tags: ['Unity', '3D'], runtime: 'Game development', palette: violet },
    { code: 'S03 E03', title: 'The Next Chapter', description: 'Continuing to explore scalable systems, cloud deployment, and AI-powered products.', tags: ['Cloud', 'AI', 'Full-Stack'], runtime: 'In production', palette: amber },
  ] },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };
export const topPicks: TopPick[] = [
  { label: 'Hackathon highlight', title: 'Rank #5', detail: 'IIT Bombay Eureka', palette: crimson },
  { label: 'Featured project', title: 'Justice Junction', detail: 'Gamified Constitution learning', palette: ocean },
  { label: 'E-Commerce', title: 'Levoe', detail: 'Online shopping experience', palette: amber },
  { label: 'Mobile app', title: 'MediScan AI', detail: 'AI-powered first-aid assistant concept', palette: jade },
  { label: 'Food tech', title: 'KBR Ordering', detail: 'Customer + owner apps', palette: violet },
  { label: 'Game dev', title: 'Car Racing', detail: 'Unity and C# mobile game', palette: ocean },
  { label: 'Mobile stack', title: 'Flutter', detail: 'Cross-platform app development', palette: jade },
  { label: 'Web stack', title: 'React', detail: 'Modern interactive interfaces', palette: amber },
  { label: 'Community', title: 'E-sports', detail: 'Campus content creation', palette: crimson },
  { label: 'Current focus', title: 'Build & Ship', detail: 'Web, apps, AI and games', palette: violet },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };
export const introSlides: IntroSlide[] = [
  { kicker: 'Education', title: 'B.Tech · CSE', lines: ['Uttaranchal University', 'Computer Science and Engineering'], chips: ['Software Development'] },
  { kicker: 'What I build', title: 'Web to mobile.', lines: ['React, JavaScript, backend APIs', 'Flutter apps and interactive experiences'], chips: ['Full-Stack', 'Mobile'] },
  { kicker: 'Projects', title: 'Built to explore.', lines: ['Levoe — e-commerce', 'Justice Junction — gamified EdTech', 'KBR Ordering · MediScan AI · Car Racing'] },
  { kicker: 'Achievement', title: 'Top 5 at Eureka.', lines: ['Justice Junction ranked 5th', 'IIT Bombay Eureka Hackathon'], chips: ['Hackathon'] },
  { kicker: 'Current mission', title: 'Make it real.', lines: ['Building practical web and mobile products', 'Exploring AI, cloud and game development'] },
];

export type ProfileId = 'ayush' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';
export const viewerProfiles: { id: ProfileId; name: string; blurb: string; color: string; order: SectionId[] }[] = [
  { id: 'ayush', name: 'Ayush', blurb: 'The full series, in order', color: '#e5132b', order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'] },
  { id: 'recruiter', name: 'Recruiter', blurb: 'Experience, achievements & skills first', color: '#4cc9ff', order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'] },
  { id: 'developer', name: 'Developer', blurb: 'Projects, stack & GitHub first', color: '#46e3a8', order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'] },
  { id: 'creative', name: 'Creative', blurb: 'The story arc & highlights first', color: '#ffb547', order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'] },
];
export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & experience', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • Selected builds`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Highlights from the series', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Links`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
