import { ReactNode } from 'react'

type buttonProps = {
  children: ReactNode
}
export function Button({ children }: buttonProps) {
  return (
    <button className="py-3 px-5 bg-zinc-950 rounded-[4px] font-Montserrat flex items-center justify-center">
      {children}
    </button>
  )
}
