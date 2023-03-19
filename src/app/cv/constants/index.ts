import { Education, Experience, Skill } from '../models';

export const EXPERIENCE: Experience[] = [
  {
    companyName: 'Itransition',
    role: 'QA Engineer',
    from: 'November 2013',
    to: 'August 2016',
    responsibilities: [
      'Went through functional testing according to business and technical requirements',
      'Delivered 3 projects applying my knowledge as QA specialist in practice',
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
      'Participated in Agile methodologies (Scrum, Kanban)',
      'Set of automated testing using CI/CD',
      'Regularly analysis of automated testing results',
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
      'Implemented new features in the active project phase and maintenance of the existing codebase',
      'Participated in Scrum ceremonies (daily, retro, planning, grooming, etc.)',
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
      'Participated in the design of the project architecture',
    ],
    accomplishments: [
      'Successfully released 3 projects from scratch being a solo front-end developer',
      'Was the key developer on 4 projects at the same time',
    ],
    order: 5,
  },
  {
    companyName: 'Cortlex',
    role: 'Front-End developer',
    from: 'April 2021',
    to: 'Present',
    responsibilities: [
      'Coding complying with KISS, DRY, YAGNI, SOLID, REST, layered architecture',
      'Active communication with customers (especially ba & designer team)',
      'Refactoring the existing codebase',
      'Conducting architecture planning processes, reviewing the code, bug fixing',
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
