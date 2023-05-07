import { Border } from './microComponents/Border'
import { Button } from './microComponents/Button'

export default function Section8() {
  return (
    <section className="bg-gray-100 gap-10 py-10 px-5 flex flex-col items-center justify-center lg:py-20 lg:px-80">
      <Border />
      <h2 className="text-center font-sans text-black text-4xl lg:text-3xl">
        Agende agora mesmo uma consulta de avaliação gratuita e descubra como
        posso te ajudar a criar uma marca luxuosa e exclusiva que reflete a
        excelência que você oferece.
      </h2>

      <Button>Estou convencida, quero estar no topo</Button>

      <Border />
    </section>
  )
}
