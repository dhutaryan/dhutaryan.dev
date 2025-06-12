import { styled } from '@macaron-css/react'

import { ResumeSection } from '../../../../entities/resume'
import { Link } from '../../../../shared/ui'
import { getWorkDurationAsFrontend } from './calculate-experience-years'

const Content = styled('p', {})

export const Summary = () => {
  return (
    <ResumeSection title="Summary">
      <Content>
        I’m a front-end developer with more than {getWorkDurationAsFrontend()}{' '}
        years of experience. Creator of&nbsp;
        <Link
          href="https://www.npmjs.com/package/@dhutaryan/ngx-mat-timepicker"
          target="_blank"
        >
          ngx-mat-timepicker
        </Link>
        . Worked as a QA Automation engineer. Now focusing on Angular and
        Angular ecosystem but also have vast knowledge of React. Worked in
        different teams from 3 to 40 people. I have had projects in different
        domains such as e-commerce (with blockchain), medicine, travel,
        intranet, logistic, non-commercial.
      </Content>
    </ResumeSection>
  )
}
