import { styled } from '@macaron-css/react'

type Props = { accomplishments: string[] }

const AccomplishmentsList = styled('ul', {
  base: {
    paddingLeft: 0,
    listStyleType: 'none',
  },
})
const AccomplishmentItem = styled('li', {
  base: {
    ':before': {
      marginRight: '0.25rem',
      content: '✓',
    },
  },
})

export const Accomplishments = ({ accomplishments }: Props) => {
  return (
    <AccomplishmentsList>
      {accomplishments.map((accomplishment, index) => (
        <AccomplishmentItem key={index}>{accomplishment}</AccomplishmentItem>
      ))}
    </AccomplishmentsList>
  )
}
