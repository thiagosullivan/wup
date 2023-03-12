import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import HeroImage from '../../../assets/hero-img.png';
import { HeroContainer } from './styles';

function HomeHero() {
  return (
    <HeroContainer>
        <div className='hero__txt'>
            <h2>Chega de <br/> promessas!</h2>
            <p>Já superamos a ilusão da fórmula mágica para o sucesso nos negócios. Sabemos que uma boa ideia é apenas o começo. Para ter um negócio bem-sucedido, é necessário um posicionamento profissional estratégico, que otimize processos e desenvolva pessoas.</p>
            <Link href="/">Evolua</Link>
        </div>
        <div className='hero__img'>
            <Image src={HeroImage} alt="Marta sentada" responsive/>
        </div>
        <div className='hero_bg'></div>
    </HeroContainer>
  )
}

export default HomeHero