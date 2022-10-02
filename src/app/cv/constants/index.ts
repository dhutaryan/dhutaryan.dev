import { Experience, Skill } from '../models';

export const EXPERIENCE: Experience[] = [
  {
    companyName: 'Itransition',
    role: 'QA Engineer',
    from: 'November 2013',
    to: 'August 2016',
    responsibilities: [
      'Evaluating and testing new features according to business and functional requirements',
      'Performing system testing, black box functional testing, UI testing',
      'Performing quality engineering reviews of documentation for compliance with stated requirements',
      'Keeping up to date and expanding existing test documentation',
      'Maintaining test environments, where testing can be carried out',
    ],
    order: 1,
  },
  {
    companyName: 'Intellectsoft',
    role: 'QA Engineer',
    from: 'August 2016',
    to: 'March 2017',
    responsibilities: [
      'Evaluating and testing new features according to business and functional requirements',
      'Performing API level testing, black box functional testing, UI testing',
      'Applying test methodology, engineering and product knowledge in the design of tests and testing strategies for the analysis',
      'Performing quality engineering reviews of documentation for compliance with stated requirements',
      'Investigation of significant issues identified during quality assurance activities and providing recommended process improvements to management',
    ],
    order: 2,
  },
  {
    companyName: 'Intellectsoft',
    role: 'Automation QA Engineer',
    from: 'March 2017',
    to: 'May 2018',
    responsibilities: [
      'Creation UI auto tests',
      'Creation API auto tests',
      'Support existing auto tests',
      'Code review',
      'Architecting UI and API auto tests',
      'Grooming and planning new stories',
      'Preparing and teaching automation courses in the company',
    ],
    order: 3,
  },
  {
    companyName: 'Intellectsoft',
    role: 'Front-End developer',
    from: 'May 2018',
    to: 'April 2019',
    responsibilities: [
      'Building and maintenance application',
      'Implementation of various features and business rules',
      'Development of page components',
      'Architecting of page components',
      'Bugs fixing',
      'Code review',
      'Grooming and planning new stories',
      'Task estimation',
    ],
    order: 4,
  },
  {
    companyName: 'Cactussoft',
    role: 'Front-End developer',
    from: 'April 2019',
    to: 'April 2021',
    responsibilities: [
      'Development and maintenance projects from scratch',
      'Creation of projects architecture',
      'Implementation of various features and business rules',
      'Development of page components',
      'Bugs fixing',
      'Code review',
      'Grooming and planning new stories',
      'Task estimation',
      'Working at DDT',
    ],
    order: 5,
  },
  {
    companyName: 'Cortlex',
    role: 'Front-End developer',
    from: 'April 2021',
    to: 'Present',
    responsibilities: [],
    order: 6,
  },
];

export const SKILLS: Skill[] = [
  {
    category: 'Programming',
    names: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'SASS/SCSS'],
  },
  {
    category: 'Frameworks / Libraries',
    names: [
      'Angular',
      'Angular material',
      'NestJS',
      'ReactJS',
      'RxJs',
      'NgXS / Redux',
    ],
  },
  {
    category: 'Tools / Utilities',
    names: ['Git', 'VS Code', 'Docker', 'Jenkins', 'JIRA', 'TFS'],
  },
  {
    category: 'Serverless',
    names: ['Firebase/Firestore', 'Cognito'],
  },
  {
    category: 'Databases',
    names: ['MongoDB', 'PostgreSQL'],
  },
];
