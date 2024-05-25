import { styled } from '@macaron-css/react'

type Props = {
  responsibilities: string[]
}

const ResponsibilitiesList = styled('ul', {})
const ResponsibilityItem = styled('li', {})

export const Responsibilities = ({ responsibilities }: Props) => {
  return (
    <ResponsibilitiesList>
      {responsibilities.map((responsibility, index) => (
        <ResponsibilityItem key={index}>{responsibility}</ResponsibilityItem>
      ))}
    </ResponsibilitiesList>
  )
}
