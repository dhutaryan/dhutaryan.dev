import { styled } from '@macaron-css/react'

import { ResumeSection } from '../../../../entities/resume'

const List = styled('ul', {
  base: {
    paddingLeft: 0,
    listStyleType: 'none',
  },
})

const ListItem = styled('li', {})
const Name = styled('strong', {})

export const Languages = () => {
  return (
    <ResumeSection title="Languages">
      <List>
        <ListItem>
          <Name>English</Name> - B2
        </ListItem>
        <ListItem>
          <Name>Belarusian/Russian</Name> - Native
        </ListItem>
      </List>
    </ResumeSection>
  )
}
