import { styled } from '@macaron-css/react'

import { ResumeHeader } from './resume-header'

const Container = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
  },
})

export const Resume = () => {
  return (
    <Container>
      <ResumeHeader />
    </Container>
  )
}
