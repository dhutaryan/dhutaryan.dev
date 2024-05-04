import { globalStyle } from '@macaron-css/core'

globalStyle('*', {
  boxSizing: 'border-box',
})

globalStyle('html, body, #root', {
  position: 'relative',
  height: '100%',
})

globalStyle('html', {
  scrollBehavior: 'smooth',
})

globalStyle('body', {
  margin: 0,
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
})

globalStyle('h1, h2, h3, h4, h5, h6', {
  margin: 0,
})

globalStyle('h1', {
  fontSize: '2.5rem',
})

globalStyle('h2', {
  fontSize: '2rem',
})

globalStyle('h3', {
  fontSize: '1.75rem',
})

globalStyle('h4', {
  fontSize: '1.5rem',
})

globalStyle('h5', {
  fontSize: '1.25rem',
})

globalStyle('h6', {
  fontSize: '1rem',
})
