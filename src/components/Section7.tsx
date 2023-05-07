import { H2 } from './microComponents/H2'
import image1 from '../../public/sectionFeedback/FEEDBACK1.png'
import image2 from '../../public/sectionFeedback/FEEDBACK2.png'
import image3 from '../../public/sectionFeedback/FEEDBACK3.png'
import image4 from '../../public/sectionFeedback/FEEDBACK4.png'
import image5 from '../../public/sectionFeedback/FEEDBACK7.png'
import image6 from '../../public/sectionFeedback/FEEDBACK9.png'
import Image from 'next/image'

export default function Section7() {
  return (
    <section
      className="py-10 px-5 text-center flex flex-col gap-10 bg-cover bg-opacity-80 bg-center lg:px-80 lg:py-20"
      style={{ backgroundImage: "url('/feedbackBg.png')" }}
    >
      <H2 align="white">O que dizem nossos clientes</H2>

      <div className="flex flex-col gap-5 items-center lg:flex-row">
        <div>
          <Image
            src={image1}
            alt="Balão de fala relatando como foi trabalhar com a LaAust"
          />
        </div>
        <div>
          <Image
            src={image2}
            alt="Balão de fala relatando como foi trabalhar com a LaAust"
          />
        </div>
        <div>
          <Image
            src={image3}
            alt="Balão de fala relatando como foi trabalhar com a LaAust"
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 items-center lg:flex-row">
        <div>
          <Image
            src={image4}
            alt="Balão de fala relatando como foi trabalhar com a LaAust"
          />
        </div>
        <div>
          <Image
            src={image5}
            alt="Balão de fala relatando como foi trabalhar com a LaAust"
          />
        </div>
        <div>
          <Image
            src={image6}
            alt="Balão de fala relatando como foi trabalhar com a LaAust"
          />
        </div>
      </div>
    </section>
  )
}
