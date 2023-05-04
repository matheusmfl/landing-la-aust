import { Border } from './microComponents/Border'
import { Button } from './microComponents/Button'
import { H2 } from './microComponents/H2'

export default function Section8() {
  return (
    <section className="bg-gray-100 gap-10 py-10 px-5 flex flex-col items-center justify-center">
      <Border />
      <H2>
        Agende agora mesmo uma consulta de avaliação gratuita e descubra como
        posso te ajudar a criar uma marca luxuosa e exclusiva que reflete a
        excelência que você oferece.
      </H2>

      <Button>Estou convencida, quero estar no topo</Button>

      <Border />
    </section>
  )
}
