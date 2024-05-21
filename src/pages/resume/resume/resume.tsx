import { styled } from '@macaron-css/react'

import { ResumeHeader } from './resume-header'
import { Divider } from '../../../shared/ui'
import { ResumeSummary } from './resume-summary'
import { ResumeSkills } from './resume-skills'
import { ResumeExperience } from './resume-experience'
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

const ResumeSkillsContainer = styled(ResumeSkills, {
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

export const Resume = () => {
  return (
    <Container>
      <ResumeHeader />
      <Divider />
      <ResumeSummary />
      <Divider />
      <ContentContainer>
        <ResumeSkillsContainer />
        <Divider />
        <ResumeExperience />
      </ContentContainer>
    </Container>
  )
}
