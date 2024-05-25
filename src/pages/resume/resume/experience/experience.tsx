import { ResumeSection } from '../../../../entities/resume'
import { Flex } from '../../../../shared/ui'
import { CompanyExperience } from './company-experience'
import { EXPERIENCE } from './constants'

type Props = {
  className?: string
}

export const Experience = ({ className }: Props) => {
  return (
    <ResumeSection className={className} title="Experience">
      <Flex direction="column" gap="1.25rem">
        {EXPERIENCE.map((company) => (
          <CompanyExperience
            key={company.from + company.to}
            company={company}
          />
        ))}
      </Flex>
    </ResumeSection>
  )
}
