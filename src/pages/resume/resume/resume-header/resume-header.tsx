import { styled } from '@macaron-css/react'

import { theme } from '../../../../shared/config/theme/theme'
import { Flex, Icon, Link } from '../../../../shared/ui'

const Container = styled('header', {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})

const Title = styled('h2', {
  base: {
    color: theme.color.primary.default,
  },
})

const SubTitle = styled('h5', {
  base: {
    textTransform: 'uppercase',
  },
})

const InfoContainer = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  },
})

const SocialLink = styled('a', {
  base: {
    opacity: 0.5,
    ':hover': {
      opacity: 1,
    },
  },
})

const email = 'dzmitry.hutaryan@gmail.com'

export const ResumeHeader = () => {
  return (
    <Container>
      <Flex direction="column">
        <Title>Dzmitry Hutaryan</Title>
        <SubTitle>Front-end Developer</SubTitle>
      </Flex>

      <InfoContainer>
        <Link href={'mailto:' + email}>{email}</Link>
        <Flex gap="0.5rem" alignSelf="end">
          <SocialLink
            href="https://www.linkedin.com/in/dzmitry-hutaryan/"
            target="_blank"
          >
            <Icon icon="linkedin" size={32} />
          </SocialLink>
          <SocialLink href="https://github.com/dhutaryan" target="_blank">
            <Icon icon="github" size={32} />
          </SocialLink>
        </Flex>
      </InfoContainer>
    </Container>
  )
}
