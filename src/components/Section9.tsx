import Image from 'next/image'
import { H2 } from './microComponents/H2'
import image1 from '../../public/sectionServicos/1.png'
import image2 from '../../public/sectionServicos/2.png'
import image3 from '../../public/sectionServicos/3.png'
import { Button } from './microComponents/Button'

export default function Section9() {
  return (
    <section className="px-5 py-10 flex flex-col gap-10 bg-gray-100 text-zinc-950 lg:py-20 lg:px-36 lg:items-center">
      <H2>Nossos serviços</H2>

      <div className="flex flex-col gap-5 text-center items-center justify-center lg:flex-row">
        <div className="flex flex-col gap-4">
          <div className="max-h-[430px]">
            <Image src={image1} alt="Mockup de serviço" />
          </div>
          <span>
            Identidade de marca
            <br /> e posicionamento
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <div className="max-h-[430px]">
            <Image src={image2} alt="Mockup de serviço" />
          </div>
          <span>
            DIA VIP - Sua marca
            <br /> pronta em 1 DIA
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <div className="max-h-[430px]">
            <Image src={image3} alt="Mockup de serviço" />
          </div>
          <span>
            Papelaria personalizada
            <br /> e Web Design
          </span>
        </div>
      </div>

      <Button>Quero saber mais!</Button>
    </section>
  )
}
