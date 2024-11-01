import { styled } from '@macaron-css/react'

import { theme } from '../../../../shared/config/theme/theme'
import { Flex, Icon, Link } from '../../../../shared/ui'
import { Breakpoints } from '../../../../shared/config'

type Props = {
  generatePdf: () => void
}

const Container = styled('header', {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '@media': {
      [Breakpoints['lt-md']]: {
        flexDirection: 'column',
        alignItems: 'initial',
      },
    },
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

const PdfIcon = styled(Icon, {
  base: {
    marginLeft: '0.25rem',
    cursor: 'pointer',
  },
})

const email = 'dzmitry.hutaryan@gmail.com'

export const Header = ({ generatePdf }: Props) => {
  return (
    <Container>
      <Flex direction="column">
        <Title>
          Dzmitry Hutaryan
          <PdfIcon icon="pdfFile" ignoreForPdf={true} onClick={generatePdf} />
        </Title>
        <SubTitle>Front-end Developer</SubTitle>
      </Flex>

      <InfoContainer>
        <Link href={'mailto:' + email}>{email}</Link>
        <Flex gap="0.5rem" alignSelf="flex-end">
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
