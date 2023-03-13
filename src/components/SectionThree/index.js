import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SecThreeImg from '../../../assets/sec-3-img.png';
import BackgroundTwo from '../../../assets/bg-2.png';
import { SecondThreeContainer } from './styles';

function SectionThree() {
  return (
    <div className='main__div'>
      <SecondThreeContainer>
        <div className='separator'></div>
        <div className='sec3__txt'>
            <h2>Gerir pessoas <br/>em metrópoles</h2>
            <p>O gerenciamento de profissionais em grandes centros urbanos apresenta desafios únicos, como a alta rotatividade, o trânsito intenso e a pressão por produtividade. Descubra estratégias eficazes para gerir equipes em grandes metrópoles, promover a qualidade de vida dos colaboradores e garantir a eficiência e o sucesso dos negócios.</p>
            <span>Tempo de leitura: 10 minutos</span>
            <Link href="/">Leia mais</Link>
        </div>
        <div className='sec3__img'>
            <Image src={SecThreeImg} alt="Marta" responsive="true"/>
        </div>
        <Image src={BackgroundTwo} className="sec3__bg" />
      </SecondThreeContainer>
    </div>
  )
}

export default SectionThree