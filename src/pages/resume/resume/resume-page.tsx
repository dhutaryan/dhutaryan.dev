import { styled } from '@macaron-css/react'

import { Header } from './header'
import { Divider } from '../../../shared/ui'
import { Summary } from './summary'
import { Skills } from './skills'
import { Experience } from './experience'
import { Breakpoints } from '../../../shared/config'

const Container = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
})

const ContentContainer = styled('div', {
  base: {
    display: 'flex',
    gap: '2rem',
    '@media': {
      [Breakpoints['lt-md']]: {
        flexDirection: 'column-reverse',
      },
    },
  },
})

const SkillsContainer = styled(Skills, {
  base: {
    flex: '1 1 100%',
    maxWidth: '30%',
    '@media': {
      [Breakpoints['lt-md']]: {
        maxWidth: '100%',
      },
    },
  },
})

const ExperienceContainer = styled(Experience, {
  base: {
    width: '100%',
  },
})

export const ResumePage = () => {
  return (
    <Container>
      <Header />
      <Divider />
      <Summary />
      <Divider />
      <ContentContainer>
        <SkillsContainer />
        <Divider />
        <ExperienceContainer />
      </ContentContainer>
    </Container>
  )
}
