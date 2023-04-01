import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SectionTwoImg from '../../../assets/sec-2-img-2.png';
import BackgroundTwo from '../../../assets/bg-2.png';
import { SectionTwoContainer } from './styles';
import NavigationMenu from '../NavigationMenu';

function SectionTwo() {
  return (
    <div className='main__div' id="nossos-estudos">
      <NavigationMenu
        btnOne="Nossos estudos"
        btnOneLink="#nossos-estudos"
        btnTwo="Sobre a WUP"
        btnTwoLink="#sobre-a-wup"
        btnThree="Sobre a Marta"
        btnThreeLink="#sobre-a-marta"
      />
      <div className='separator'></div>
      <SectionTwoContainer>
        <Image src={BackgroundTwo} className="sec2__bg" />
        <div className='sec2__img'>
            <Image src={SectionTwoImg} fill />
        </div>
        <div className='sec2__txt'>
            <h2>Sucessão <br/> em <br/> empresas</h2>
            <p>Descubra como o planejamento, a capacitação da nova liderança e a consultoria especializada podem garantir um caminho assertivo na sucessão em empresas.</p>
            <p>É possível fazer dar certo, e estamos deixando dicas fundamentais para você saber por onde começar.</p>
            <span>Tempo de leitura: 10 minutos</span>
            <Link href="/">Evolua</Link>
        </div>
      </SectionTwoContainer>
    </div>
  )
}

export default SectionTwo