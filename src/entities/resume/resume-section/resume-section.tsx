import { PropsWithChildren } from 'react'
import { styled } from '@macaron-css/react'

import { theme } from '../../../shared/config/theme/theme'

type Props = {
  title: string
  className?: string
}

const Container = styled('div', {})

const Title = styled('h5', {
  base: {
    marginBottom: '1rem',
    color: theme.color.primary.default,
    textTransform: 'uppercase',
  },
})

export const ResumeSection = ({
  children,
  title,
  className,
}: PropsWithChildren<Props>) => {
  return (
    <Container className={className}>
      <Title>{title}</Title>
      {children}
    </Container>
  )
}
