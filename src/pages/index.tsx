import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Section1 from '@/components/Section1'
import { Section10 } from '@/components/Section10'
import Section11 from '@/components/Section11'
import Section2 from '@/components/Section2'
import Section3 from '@/components/Section3'
import Section4 from '@/components/Section4'
import Section5 from '@/components/Section5'
import { Section6 } from '@/components/Section6'
import Section7 from '@/components/Section7'
import Section8 from '@/components/Section8'
import Section9 from '@/components/Section9'
import { Cta } from '@/components/microComponents/Cta'
import Section12 from '@/components/section12'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title> LaAust Landing</title>
        <meta
          property="og:description"
          content="Desenvolvimento de soluções para você e sua empresa"
        />
        <meta
          name="description"
          content="Soluções digitais para você e sua empresa"
        />
        <meta
          name="keywords"
          content="branding, logo, web designer, landing pages, sites, criação de marcas"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" />
      </Head>
      <Cta />
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
      <Section12 />
      <Footer />
    </>
  )
}
