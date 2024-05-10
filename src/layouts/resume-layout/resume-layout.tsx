import { PropsWithChildren } from 'react'
import { styled } from '@macaron-css/react'

const Container = styled('main', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 100%',
    maxWidth: '60rem',
    width: '100%',
    marginInline: 'auto',
    marginBlock: '0',
    padding: '1.5rem 1rem',
  },
})

export const ResumeLayout = ({ children }: PropsWithChildren) => {
  return <Container>{children}</Container>
}
