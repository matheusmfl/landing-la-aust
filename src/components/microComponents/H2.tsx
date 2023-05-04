import { ReactNode } from 'react'

type H2Props = {
  children: ReactNode
  align?: string
}

export function H2({ children, align }: H2Props) {
  return (
    <h2
      className={`${
        align
          ? `text-${align} font-sans text-black text-4xl`
          : 'text-center font-sans text-black text-4xl'
      }`}
    >
      {children}
    </h2>
  )
}
