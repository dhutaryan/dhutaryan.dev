import type { SVGProps } from 'react'

import { icons } from './icons'

export type IconName = keyof typeof icons

type IconProps = {
  icon: IconName
  size?: number
  ignoreForPdf?: boolean
} & SVGProps<SVGSVGElement>

export const Icon = ({ icon, size, ignoreForPdf, ...props }: IconProps) => {
  const Component = icons[icon]
  const { width = 24, height = 24 } = props

  return (
    <Component
      data-html2canvas-ignore={ignoreForPdf}
      {...props}
      width={size || width}
      height={size || height}
    />
  )
}
