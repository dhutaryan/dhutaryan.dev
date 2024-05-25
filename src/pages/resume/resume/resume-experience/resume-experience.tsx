import { ResumeSection } from '../../../../entities/resume'
import { Flex } from '../../../../shared/ui'
import { CompanyExpertise } from '../../types'
import { CompanyExperience } from './company-experience'

const experience: CompanyExpertise[] = [
  {
    name: 'Sigli',
    role: 'Front-End developer',
    from: 'April 2021',
    to: 'Present',
    responsibilities: [
      'Coding complying with KISS, DRY, YAGNI, SOLID, REST, layered architecture',
      'Active communication with customers (especially ba & designer team)',
      'Refactoring the existing codebase',
      'Conducting architecture planning processes, reviewing the code, bug fixing',
    ],
    accomplishments: [
      'Developed successfully UI components library from scratch to the release',
    ],
  },
  {
    name: 'Cactussoft',
    role: 'Front-End developer',
    from: 'April 2019',
    to: 'April 2021',
    responsibilities: [
      'Participated in grooming and planning sessions',
      'Took part in project for check in employees based on sensor monitor',
      'Participated in the design of the project architecture',
    ],
    accomplishments: [
      'Successfully released 3 projects from scratch being a solo front-end developer',
      'Was the key developer on 4 projects at the same time',
    ],
  },
  {
    name: 'Intellectsoft',
    role: 'Front-End developer',
    from: 'May 2018',
    to: 'April 2019',
    responsibilities: [
      'Implemented new features in the active project phase and maintenance of the existing codebase',
      'Participated in Scrum ceremonies (daily, retro, planning, grooming, etc.)',
      'Participated in code review processes as a reviewer',
    ],
    accomplishments: ['Reduced bundle size by 10%'],
  },
  {
    name: 'Intellectsoft',
    role: 'QA Engineer / Automation QA',
    from: 'August 2016',
    to: 'May 2018',
    responsibilities: [
      'High proficiency in creation and maintenance of Web UI and API automated tests',
      'Participated in Agile methodologies (Scrum, Kanban)',
      'Set of automated testing using CI/CD',
      'Regularly analysis of automated testing results',
    ],
    accomplishments: [
      'Implemented and promoted automated testing in the company',
      'Released automated testing course from scratch',
    ],
  },
  {
    name: 'Itransition',
    role: 'QA Engineer',
    from: 'November 2013',
    to: 'August 2016',
    responsibilities: [
      'Went through functional testing according to business and technical requirements',
      'Delivered 3 projects applying my knowledge as QA specialist in practice',
    ],
  },
]

type Props = {
  className?: string
}

export const ResumeExperience = ({ className }: Props) => {
  return (
    <ResumeSection className={className} title="Experience">
      <Flex direction="column" gap="1.25rem">
        {experience.map((company) => (
          <CompanyExperience
            key={company.from + company.to}
            company={company}
          />
        ))}
      </Flex>
    </ResumeSection>
  )
}
