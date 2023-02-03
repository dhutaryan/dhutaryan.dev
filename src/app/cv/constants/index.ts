import { Education, Experience, Skill } from '../models';

export const EXPERIENCE: Experience[] = [
  {
    companyName: 'Itransition',
    role: 'QA Engineer',
    from: 'November 2013',
    to: 'August 2016',
    responsibilities: [
      'Went through functional testing according to business and technical requirements',
      'Overwent 3 projects practicing QA approaches',
    ],
    order: 1,
  },
  {
    companyName: 'Intellectsoft',
    role: 'QA Engineer / Automation QA',
    from: 'August 2016',
    to: 'May 2018',
    responsibilities: [
      'High proficiency in creation and maintenance of Web UI and API automated tests',
      'Participated in Agile methodologes (Scrum, Kanban)',
      'Set of automated testing using CI/CD',
      'Regularly analyzed of automated testing results',
    ],
    accomplishments: [
      'Implemented and promoted automated testing in the company',
      'Released automated testing course from scratch',
    ],
    order: 2,
  },
  {
    companyName: 'Intellectsoft',
    role: 'Front-End developer',
    from: 'May 2018',
    to: 'April 2019',
    responsibilities: [
      'Implemented new features in active project phase and maintenanced of existing codebase',
      'Participated in Scrum ceremonies (daily, retro, planning, grooming and etc.)',
      'Participated in code review processes as a reviewer',
    ],
    accomplishments: ['Reduced bundle size by 10%'],
    order: 4,
  },
  {
    companyName: 'Cactussoft',
    role: 'Front-End developer',
    from: 'April 2019',
    to: 'April 2021',
    responsibilities: [
      'Participated in grooming and planning sessions',
      'Took part in project for check in employees based on sensor monitor',
      'Participated in the design of project architecture',
    ],
    accomplishments: [
      'Released successfully 3 projects from scratch being a single front-end developer',
      'Took position of key developer of 4 projects at the same time',
    ],
    order: 5,
  },
  {
    companyName: 'Cortlex',
    role: 'Front-End developer',
    from: 'April 2021',
    to: 'Present',
    responsibilities: [
      'Wrote programming code that comply with the next patterns and approaches: KISS, DRY, YAGNI, SOLID, REST, layered architecture',
      'Active customer communication (especially BA & Designers team)',
      'Refactored existing codebase',
      'Conducting architecture planning processes, reviewing programming code, bug fixing',
    ],
    accomplishments: [
      'Developed successfully UI components library from scratch to the release',
    ],
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

export const EDUCATION: Education[] = [
  {
    institution: 'Belarusian National Technical University',
    speciality: 'Automation of Technological Processes and Production',
    from: 2009,
    to: 2014,
  },
];
