import { Project } from '../components/projects/ProjectCard';

export const projects: Project[] = [
  {
    id: 1,
    title: 'FixItNow services',
    description: 'FixItNow, a neighborhood service platform connecting residents with verified professionals (electricians, plumbers, etc.).',
    image: '/FixitNow.png',
    tags: ['Java','Springboot','React','MongoDB',],
    //demoUrl: 'https://example.com',
    githubUrl: 'https://github.com/akshaykhardekar10/Fixitnow-1',
  },
  {
    id: 2,
    title: 'AI-Powered-Career-Guidance-System',
    description: 'Developed an AI-driven freelancing platform with chatbots and job-matching features using Spring Boot,React.js, and MongoDB',
    image: 'AiCareerGuidanceLogo.png',
    tags: ['Java','Springboot','React','MongoDB',],
   // demoUrl: 'https://example.com',
    githubUrl: 'https://github.com/akshaykhardekar10/AI-Powered-Career-Guidance-System-FE',
  },
  {
    id: 3,
    title: 'AI powered Freelancing platform',
    description: 'An AI powered freelancing platform for Freelancers and Recuriters for efficient MatchMaking',
    image: '/freelance.png',
    tags: ['Java','Springboot','React','MongoDB',],
    //demoUrl: ' ',
    githubUrl: 'https://github.com/akshaykhardekar10/FreelanceHub-Frontend',
  }
];