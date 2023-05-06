import { ReactNode } from 'react'

type H2Props = {
  children: ReactNode
  align?: string
  variant?: string
}

export function H2({ children, align, variant }: H2Props) {
  return (
    <h2
      className={`${
        align
          ? `text-${align} font-sans text-black text-4xl lg:text-5xl ${variant}`
          : `text-center font-sans text-black text-4xl lg:text-5xl ${variant}`
      }`}
    >
      {children}
    </h2>
  )
}
