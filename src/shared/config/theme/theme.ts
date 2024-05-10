import { createGlobalTheme } from '@macaron-css/core'

export const theme = createGlobalTheme(':root', {
  color: {
    text: {
      default: '#333333',
    },
    primary: {
      default: '#3c93ca',
    },
  },
  border: {
    divider: '#eeeeee',
  },
})
