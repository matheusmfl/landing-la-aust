import { Border } from './microComponents/Border'
import { Button } from './microComponents/Button'
import { H2 } from './microComponents/H2'
import { Span } from './microComponents/Span'

export default function Section5() {
  return (
    <section className="py-10 px-5 flex flex-col gap-10 bg-gray-100 text-zinc-950">
      <Border />
      <H2>
        Sinta a diferença quando sua marca poderosa e identidade luxuosa
        começarem a atrair clientes high-ticket com facilidade.
      </H2>
      <div className="mt-[-20px]">
        <Span>(Não aceite menos do que você merece!)</Span>
      </div>

      <Button>QUERO TRANSFORMAR A MINHA MARCA AGORA!</Button>

      <Border />
    </section>
  )
}
