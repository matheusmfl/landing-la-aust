import { ReactNode } from 'react'

type spanProps = {
  children: ReactNode
}

export function Span({ children }: spanProps) {
  return (
    <span className="font-Montserrat font-normal text-base text-zinc-950">
      {children}
    </span>
  )
}
