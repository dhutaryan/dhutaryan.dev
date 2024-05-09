import { PropsWithChildren } from 'react'
import { styled } from '@macaron-css/react'
import { createVar, fallbackVar } from '@macaron-css/core'
import { assignInlineVars } from '@macaron-css/core/dynamic'

const gapVar = createVar()

const Container = styled('div', {
  base: {
    display: 'flex',
    gap: fallbackVar(gapVar, '0'),
  },
  variants: {
    direction: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
    },
    alignSelf: {
      baseline: {
        alignSelf: 'baseline',
      },
      stretch: {
        alignSelf: 'stretch',
      },
      start: {
        alignSelf: 'flex-start',
      },
      center: {
        alignSelf: 'center',
      },
      end: {
        alignSelf: 'flex-end',
      },
      initial: {
        alignSelf: 'initial',
      },
    },
  },
  defaultVariants: {
    direction: 'row',
    alignSelf: 'initial',
  },
})

type FlexProps = {
  direction?: 'row' | 'column'
  alignSelf?: 'baseline' | 'stretch' | 'start' | 'center' | 'end' | 'initial'
  gap?: string
}

export const Flex = ({
  children,
  gap,
  ...props
}: PropsWithChildren<FlexProps>) => {
  return (
    <Container style={assignInlineVars({ [gapVar]: gap })} {...props}>
      {children}
    </Container>
  )
}
