import { ReactNode } from 'react'

type spanProps = {
  children: ReactNode
  variant?: string
}

export function Span({ children, variant }: spanProps) {
  return (
    <span
      className={`font-Montserrat font-normal text-base text-zinc-950 lg:text-lg ${variant}`}
    >
      {children}
    </span>
  )
}
