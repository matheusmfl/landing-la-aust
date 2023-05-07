import { ReactNode } from 'react'

type buttonProps = {
  children: ReactNode
}
export function Button({ children }: buttonProps) {
  return (
    <button className="py-3 px-5 bg-zinc-950 text-white rounded-[4px] font-Montserrat flex items-center justify-center max-w-xl lg:px-10 lg:py-3">
      <a
        href="https://wa.me/message/6JWU3WOO6HHUJ1"
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    </button>
  )
}
