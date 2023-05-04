import { H2 } from './microComponents/H2'
import { Span } from './microComponents/Span'

export default function Section2() {
  return (
    <section className="bg-gray-50 px-5 py-10 flex flex-col gap-10 text-center">
      <H2>
        Se você trabalha com um público de alto padrão, sabe que ter uma marca
        forte e uma identidade visual impactante é imprescindível.
      </H2>

      <Span>
        Somos especialistas em posicionamento de marca e identidade visual para
        profissionais. Estamos aqui para ajudar você a elevar sua marca a
        excelência e a atrair um público mais seleto e exigente.
      </Span>
    </section>
  )
}
