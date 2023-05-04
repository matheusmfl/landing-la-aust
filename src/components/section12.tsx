import { Span } from './microComponents/Span'

export default function Section12() {
  return (
    <section className="bg-stone-100 flex flex-col px-5 py-10 ">
      <div className="bg-white px-2 py-6 flex flex-col gap-10 filter shadow-2xl text-center">
        <Span>
          Desde sempre eu soube que o meu propósito era ajudar as pessoas, e eu
          sou muito abençoada por poder fazer isso através do meu trabalho. A La
          Aust surgiu em 2018 aos pouquinhos, primeiramente ajudando familiares
          e amigos e então conquistando espaço com clientes no Brasil e em
          outros países.
        </Span>

        <Span>
          De tudo, o que eu mais amo é poder gerar uma mudança verdadeira: não
          só dar cara para um negócio, mas transformar verdadeiramente aquele
          profissional e aquela história. Cada pessoa é única, cada marca é
          única e o método que eu desenvolvi é feito para celebrar essa
          individualidade.
        </Span>
      </div>
    </section>
  )
}
