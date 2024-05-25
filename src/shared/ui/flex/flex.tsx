import { PropsWithChildren } from 'react'
import { styled } from '@macaron-css/react'
import { createVar, fallbackVar } from '@macaron-css/core'
import { assignInlineVars } from '@macaron-css/core/dynamic'

const gapVar = createVar()
const justifyContentVar = createVar()

const Container = styled('div', {
  base: {
    display: 'flex',
    gap: fallbackVar(gapVar, '0'),
    justifyContent: fallbackVar(justifyContentVar, 'initial'),
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
  justifyContent?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'initial'
  alignSelf?: 'baseline' | 'stretch' | 'start' | 'center' | 'end' | 'initial'
  gap?: string
}

export const Flex = ({
  children,
  gap,
  justifyContent,
  ...props
}: PropsWithChildren<FlexProps>) => {
  return (
    <Container
      style={assignInlineVars({
        [gapVar]: gap || '0',
        [justifyContentVar]: justifyContent || 'initial',
      })}
      {...props}
    >
      {children}
    </Container>
  )
}
