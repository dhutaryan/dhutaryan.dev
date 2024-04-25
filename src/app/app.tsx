import { styled } from '@macaron-css/react'

import { theme } from '../shared/config/theme/theme'
import './styles/index.scss'

const Container = styled('div', {
  base: {
    color: theme.color.text.default,
  },
})

export const App = () => {
  return <Container>App</Container>
}
