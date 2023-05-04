import { H2 } from './microComponents/H2'
import image1 from '../../public/section6Imgs/1.png'
import image2 from '../../public/section6Imgs/2.png'
import image3 from '../../public/section6Imgs/3.png'
import image4 from '../../public/section6Imgs/4.png'
import Image from 'next/image'

export function Section6() {
  return (
    <section className="py-10 px-5 flex flex-col items-center justify-center gap-10 bg-zinc-50">
      <H2>Algumas marcas que transformamos...</H2>

      <div className="flex flex-col gap-5">
        <div className="filter drop-shadow-lg">
          <Image src={image1} alt="Imagem de portfólio 1" />
        </div>

        <div className="filter drop-shadow-lg">
          <Image src={image2} alt="Imagem de portfólio 2" />
        </div>

        <div className="filter drop-shadow-lg">
          <Image src={image3} alt="Imagem de portfólio 3" />
        </div>

        <div className="filter drop-shadow-lg">
          <Image src={image4} alt="Imagem de portfólio 4" />
        </div>
      </div>
    </section>
  )
}
