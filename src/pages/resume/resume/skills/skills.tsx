import { styled } from '@macaron-css/react'

import { ResumeSection } from '../../../../entities/resume'
import { Flex } from '../../../../shared/ui'
import { SKILLS } from './constants'

type Props = {
  className?: string
}

const Header = styled('h5', {})

const List = styled('ul', {
  base: {
    paddingLeft: 0,
    listStyleType: 'none',
  },
})

const ListItem = styled('li', {})

export const Skills = ({ className }: Props) => {
  return (
    <ResumeSection className={className} title="Skills">
      <Flex direction="column" gap="1rem">
        {SKILLS.map((skill) => {
          return (
            <Flex direction="column" gap="0.5rem" key={skill.category}>
              <Header>{skill.category}</Header>
              <List>
                {skill.names.map((skillName) => (
                  <ListItem key={skillName}>{skillName}</ListItem>
                ))}
              </List>
            </Flex>
          )
        })}
      </Flex>
    </ResumeSection>
  )
}
