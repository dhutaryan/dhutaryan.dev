import { styled } from '@macaron-css/react'

import { theme } from '../shared/config/theme/theme'
import { Pages } from '../pages'
import { Flex } from '../shared/ui'
import './styles'

const Container = styled(Flex, {
  base: {
    height: '100%',
    color: theme.color.text.default,
  },
})

export const App = () => {
  return (
    <Container direction="column">
      <Pages />
    </Container>
  )
}
