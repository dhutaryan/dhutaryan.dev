import { useRef } from 'react'
import { styled } from '@macaron-css/react'

import { Header } from './header'
import { Divider, Flex } from '../../../shared/ui'
import { Summary } from './summary'
import { Skills } from './skills'
import { Experience } from './experience'
import { Breakpoints } from '../../../shared/config'
import { Languages } from './languages'
import { Education } from './education'

const Container = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
})

const ContentContainer = styled('div', {
  base: {
    display: 'flex',
    gap: '2rem',
    '@media': {
      [Breakpoints['lt-md']]: {
        flexDirection: 'column-reverse',
      },
    },
  },
})

const LeftContainer = styled(Flex, {
  base: {
    flex: '1 1 100%',
    maxWidth: '30%',
    '@media': {
      [Breakpoints['lt-md']]: {
        maxWidth: '100%',
      },
    },
  },
})

const RightContainer = styled(Flex, {
  base: {
    width: '100%',
  },
})

export const ResumePage = () => {
  const element = useRef(null)

  const onGeneratePdf = async () => {
    const html2pdf = (await import('html2pdf.js')).default

    const options = {
      filename: 'Dzmitry_Hutaryan_Frontend_Resume.pdf',
      margin: 8,
      jsPDF: { unit: 'mm', format: 'A4', orientation: 'portrait' },
      html2canvas: { dpi: 300, letterRendering: true },
      pagebreak: { mode: ['avoid-all', 'css'] },
    }

    html2pdf().from(element.current).set(options).save()
  }

  return (
    <Container ref={element}>
      <Header generatePdf={onGeneratePdf} />
      <Divider />
      <Summary />
      <Divider />
      <ContentContainer>
        <LeftContainer direction="column" gap="1rem">
          <Skills />
          <Divider />
          <Languages />
        </LeftContainer>
        <Divider />
        <RightContainer direction="column" gap="1rem">
          <Experience />
          <Divider />
          <Education />
        </RightContainer>
      </ContentContainer>
    </Container>
  )
}
