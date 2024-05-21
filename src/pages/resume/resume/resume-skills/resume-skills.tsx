import { styled } from '@macaron-css/react'
import { ResumeSection } from '../../../../entities/resume'
import { Flex } from '../../../../shared/ui'

const SKILLS = [
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

type Props = {
  className?: string
}

const SkillsHeader = styled('h6', {})

const SkillsList = styled('ul', {
  base: {
    paddingLeft: 0,
    listStyleType: 'none',
  },
})

const SkillsListItem = styled('li', {})

export const ResumeSkills = ({ className }: Props) => {
  return (
    <ResumeSection className={className} title="Skills">
      <Flex direction="column" gap="1rem">
        {SKILLS.map((skill) => {
          return (
            <Flex direction="column" gap="0.5rem" key={skill.category}>
              <SkillsHeader>{skill.category}</SkillsHeader>
              <SkillsList>
                {skill.names.map((skillName) => (
                  <SkillsListItem key={skillName}>{skillName}</SkillsListItem>
                ))}
              </SkillsList>
            </Flex>
          )
        })}
      </Flex>
    </ResumeSection>
  )
}
