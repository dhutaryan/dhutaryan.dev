import { styled } from '@macaron-css/react'

import { theme } from '../../config/theme/theme'
import { HTMLAttributes } from 'react'

type DividerProps = HTMLAttributes<HTMLHRElement>

const BORDER_WIDTH = '0.5px'
const BORDER_STYLE = 'solid'

const Container = styled('hr', {
  base: {
    margin: '0',
    borderWidth: BORDER_WIDTH,
    borderStyle: BORDER_STYLE,
    borderColor: theme.border.divider,
  },
})

export const Divider = ({ ...props }: DividerProps) => {
  return <Container {...props} />
}
