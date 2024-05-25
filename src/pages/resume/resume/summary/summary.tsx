import { styled } from '@macaron-css/react'

import { ResumeSection } from '../../../../entities/resume'

const Content = styled('p', {})

export const Summary = () => {
  return (
    <ResumeSection title="Summary">
      <Content>
        I’m a front-end developer with more than 6 years of experience. Worked
        as a QA Automation engineer. Now focusing on Angular and Angular
        ecosystem but also have vast knowledge of React. Worked in different
        teams from 3 to 40 people. I have had projects in different domains such
        as e-commerce (with blockchain), medicine, travel, intranet, logistic,
        non-commercial.
      </Content>
    </ResumeSection>
  )
}
