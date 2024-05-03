import { styled } from '@macaron-css/react'

const Container = styled('header', {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})

export const ResumeHeader = () => {
  return <Container>header</Container>
}
