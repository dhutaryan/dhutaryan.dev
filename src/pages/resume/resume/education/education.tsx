import { styled } from '@macaron-css/react'

import { ResumeSection } from '../../../../entities/resume'
import { Flex } from '../../../../shared/ui'
import { EDUCATION } from './constants'
import { theme } from '../../../../shared/config'

const Institution = styled('h5', {})
const Specialty = styled('span', {})
const Dates = styled('span', {
  base: {
    color: theme.color.secondary.default,
  },
})

export const Education = () => {
  return (
    <ResumeSection title="Education">
      {EDUCATION.map((item, index) => (
        <Flex key={index} direction="column">
          <Institution>{item.institution}</Institution>
          <Specialty>{item.speciality}</Specialty>
          <Dates>
            {item.from} - {item.to}
          </Dates>
        </Flex>
      ))}
    </ResumeSection>
  )
}
