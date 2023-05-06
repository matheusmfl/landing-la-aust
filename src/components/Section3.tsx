import { Button } from './microComponents/Button'
import { H2 } from './microComponents/H2'
import { Span } from './microComponents/Span'

export default function Section3() {
  return (
    <section
      className="px-5 py-10 bg-gray-50 flex flex-col gap-10 bg-cover bg-opacity-80 bg-center h-full lg:py-20 lg:px-80 lg:items-center lg:bg-[1280px]"
      style={{ backgroundImage: "url('/section2bg.png')" }}
    >
      <H2 align="left">
        Porque o posicionamento e a identidade da sua marca são tão importantes?
      </H2>

      <div className="flex flex-col gap-5">
        <Span>
          Seus clientes confiam em você para ajudá-los a atingir seus objetivos.
          Eles querem trabalhar com um profissional que seja confiável,
          experiente e que possa oferecer resultados de qualidade.
        </Span>
        <Span>
          Mas como eles vão saber que você é tudo isso se sua marca não estiver
          claramente definida?
        </Span>

        <Span>
          Ter uma identidade de Marca é essencial para transmitir sua mensagem
          de forma clara, eficaz e se estabelecer como uma autoridade em sua
          área.
        </Span>
      </div>

      <Button>
        QUERO SER VISTA COMO <br className="lg:hidden" />
        AUTORIDADE
      </Button>
    </section>
  )
}
