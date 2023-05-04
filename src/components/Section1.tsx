import { Button } from './microComponents/Button'
import { Span } from './microComponents/Span'
import icon from '../../public/iconScroll.svg'
import Image from 'next/image'

export default function Section1() {
  return (
    <section className="bg-stone-100 flex flex-col gap-10 items-center justify-center py-10 text-center px-5">
      <Span>
        Já imaginou ter uma identidade que transmite a sensação de exclusividade
        e sofisticação para o seu público?
      </Span>
      <Button>QUERO CRIAR UMA MARCA ÚNICA</Button>

      <Image src={icon} alt="icone de scrolls" />
    </section>
  )
}
