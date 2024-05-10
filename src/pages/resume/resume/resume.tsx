import { styled } from '@macaron-css/react'

import { ResumeHeader } from './resume-header'
import { Divider } from '../../../shared/ui'

const Container = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
})

export const Resume = () => {
  return (
    <Container>
      <ResumeHeader />
      <Divider />
    </Container>
  )
}
