import { ReactNode } from 'react'
import { H2 } from './microComponents/H2'

type baloonProps = {
  children: ReactNode
}

function Baloon({ children }: baloonProps) {
  return (
    <div
      className="bg-gray-50 w-[350px] h-[68px]
     flex items-center justify-center text-center px-10 rounded-tl-[22px] rounded-br-[22px]"
    >
      {children}
    </div>
  )
}

export default function Section4() {
  return (
    <section
      className="py-10 px-5 flex flex-col items-center justify-center gap-5 bg-cover bg-opacity-80 bg-center"
      style={{ backgroundImage: "url('/section4.jpg')" }}
    >
      <H2>Podemos te ajudar se você... </H2>
      <div className="font-Montserrat text-base text-zinc-950 flex flex-col gap-[10px]">
        <Baloon>Se sente frustrada com a falta de reconhecimento</Baloon>
        <Baloon>Deseja ter mais visibilidade</Baloon>
        <Baloon>Quer ser vista como autoridade na sua área</Baloon>
        <Baloon>Quer aumentar as suas vendas</Baloon>
        <Baloon>Quer receber o valor justo pelos seus serviços</Baloon>
        <Baloon>Quer se comunicar com um público qualificado</Baloon>
      </div>
    </section>
  )
}
