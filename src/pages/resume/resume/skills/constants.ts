import { Skill } from '../../../../shared/types'

export const SKILLS: Skill[] = [
  {
    category: 'Programming',
    names: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'SASS/SCSS'],
  },
  {
    category: 'Frameworks / Libraries',
    names: [
      'Angular',
      'React',
      'Angular material',
      'RxJs',
      'NGXS / Redux',
      'Tailwind',
      'NestJS',
      'styled-components',
      'Bootstrap',
      'Storybook',
    ],
  },
  {
    category: 'Serverless',
    names: ['Firebase/Firestore', 'Cognito'],
  },
  {
    category: 'Databases',
    names: ['MongoDB', 'PostgreSQL'],
  },
  {
    category: 'Tools / Utilities',
    names: ['Figma', 'Git', 'VS Code', 'Docker', 'Jenkins', 'JIRA'],
  },
]
