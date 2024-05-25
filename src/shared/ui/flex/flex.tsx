import { PropsWithChildren } from 'react'
import { styled } from '@macaron-css/react'
import { createVar, fallbackVar } from '@macaron-css/core'
import { assignInlineVars } from '@macaron-css/core/dynamic'

const gapVar = createVar()
const justifyContentVar = createVar()
const alignSelfVar = createVar()

const Container = styled('div', {
  base: {
    display: 'flex',
    gap: fallbackVar(gapVar, '0'),
    justifyContent: fallbackVar(justifyContentVar, 'initial'),
    alignSelf: fallbackVar(alignSelfVar, 'initial'),
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
  },
  defaultVariants: {
    direction: 'row',
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
  alignSelf?:
    | 'baseline'
    | 'stretch'
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'initial'
  gap?: string
}

export const Flex = ({
  children,
  gap,
  justifyContent,
  alignSelf,
  ...props
}: PropsWithChildren<FlexProps>) => {
  return (
    <Container
      style={assignInlineVars({
        [gapVar]: gap || '0',
        [justifyContentVar]: justifyContent || 'initial',
        [alignSelfVar]: alignSelf || 'initial',
      })}
      {...props}
    >
      {children}
    </Container>
  )
}
