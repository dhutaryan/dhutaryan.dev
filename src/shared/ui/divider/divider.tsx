import { styled } from '@macaron-css/react'
import { createVar, fallbackVar } from '@macaron-css/core'

import { theme } from '../../config/theme/theme'
import { HTMLAttributes } from 'react'

type DividerProps = {
  vertical?: boolean
} & HTMLAttributes<HTMLHRElement>

const marginVar = createVar()
const BORDER_WIDTH = '1px'
const BORDER_STYLE = 'solid'

const Container = styled('hr', {
  base: {
    margin: '0',
    border: 'none',
  },
  variants: {
    direction: {
      horizontal: {
        width: '100%',
        marginBlock: fallbackVar(marginVar, '0'),
        borderTopWidth: BORDER_WIDTH,
        borderTopStyle: BORDER_STYLE,
        borderTopColor: theme.border.divider,
      },
      vertical: {
        height: '100%',
        marginInline: fallbackVar(marginVar, '0'),
        borderRightWidth: BORDER_WIDTH,
        borderRightStyle: BORDER_STYLE,
        borderRightColor: theme.border.divider,
      },
    },
  },
  defaultVariants: {
    direction: 'horizontal',
  },
})

export const Divider = ({ vertical, ...props }: DividerProps) => {
  return (
    <Container {...props} direction={vertical ? 'vertical' : 'horizontal'} />
  )
}
