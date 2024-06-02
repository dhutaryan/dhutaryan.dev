import { styled } from '@macaron-css/react'

import { CompanyExpertise } from '../../../../shared/types'
import { Breakpoints, theme } from '../../../../shared/config'
import { Flex } from '../../../../shared/ui'
import { Accomplishments } from './accomplishments'
import { Responsibilities } from './responsibilities'

type Props = {
  company: CompanyExpertise
}

const Header = styled(Flex, {
  base: {
    '@media': {
      [Breakpoints['lt-md']]: {
        flexDirection: 'column',
      },
    },
  },
})

const Role = styled('h5', {})
const Name = styled('span', {
  base: {
    color: theme.color.secondary.default,
    fontWeight: 'normal',
  },
})

const Dates = styled('span', {
  base: {
    color: theme.color.secondary.default,
  },
})
const ListTitle = styled('h6', {
  base: {
    marginTop: '0.5rem',
  },
})

export const CompanyExperience = ({ company }: Props) => {
  return (
    <Flex direction="column">
      <Header justifyContent="space-between">
        <Role>
          {company.role} <Name> / {company.name}</Name>
        </Role>
        <Dates>
          {company.from} - {company.to}
        </Dates>
      </Header>
      {company.accomplishments && (
        <>
          <ListTitle>Accomplishments</ListTitle>
          <Accomplishments accomplishments={company.accomplishments} />
        </>
      )}
      <ListTitle>Responsibilities</ListTitle>
      <Responsibilities responsibilities={company.responsibilities} />
    </Flex>
  )
}
