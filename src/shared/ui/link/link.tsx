import { AnchorHTMLAttributes, forwardRef } from 'react'
import { styled } from '@macaron-css/react'

import { theme } from '../../config/theme/theme'

const Container = styled('a', {
  base: {
    color: theme.color.primary.default,
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline',
    },
  },
})

export const Link = forwardRef<
  HTMLAnchorElement,
  AnchorHTMLAttributes<HTMLAnchorElement>
>((props, ref) => {
  return <Container ref={ref} {...props} />
})
