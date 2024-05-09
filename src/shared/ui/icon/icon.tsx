import type { SVGProps } from 'react'

import { icons } from './icons'

export type IconName = keyof typeof icons

type IconProps = {
  icon: IconName
  size?: number
} & SVGProps<SVGSVGElement>

export const Icon = ({ icon, size, ...props }: IconProps) => {
  const Component = icons[icon]
  const { width = 24, height = 24 } = props

  return <Component {...props} width={size || width} height={size || height} />
}
