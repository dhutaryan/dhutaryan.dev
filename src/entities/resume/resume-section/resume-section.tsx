import { PropsWithChildren } from 'react'
import { styled } from '@macaron-css/react'

import { theme } from '../../../shared/config/theme/theme'

type Props = {
  title: string
}

const Container = styled('div', {})

const Title = styled('h6', {
  base: {
    marginBottom: '1rem',
    color: theme.color.primary.default,
    textTransform: 'uppercase',
  },
})

export const ResumeSection = ({
  children,
  title,
}: PropsWithChildren<Props>) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  )
}
