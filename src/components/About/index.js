import Image from 'next/image';
import React from 'react';
import AboutImg from '../../../assets/about-img.png';
import { AboutContainer } from './styles';

function About() {
  return (
    <div className='main__div'>
        <div className='separator'></div>
        <AboutContainer>
            <div className='about__row1'>
                <div className='about__img'>
                    <Image src={AboutImg} alt="Marta" fill/>
                </div>    
                <div className='about__txt'>
                    <p>Nossa especialista!</p>
                    <h2>Marta Dias</h2>
                    <span>CEO/Founder</span>
                    <ul>
                        <li>• Psicologia organizacional.</li>
                        <li>• Graduada em Administração de empresas e Recursos Humanos;</li>
                        <li>• Pós graduada em Gestão de Pessoas, Marketing, Comercial e Projetos;</li>
                        <li>• Perita Grafotécnica;</li>
                        <li>• Analista comportamental e posicionamento no mercado digital;</li>
                        <li>• Há mais de 15 anos atuando na área de gestão estratégica de pessoas.</li>
                        <li>• Há 5 anos atuando como mentora executiva, alavancando negócios e pessoas;</li>
                        <li>• Coaching em Gestão e Consultoria Empresarial;</li>
                    </ul>
                </div>
            </div>
            <div className='about__quote'>
                <span>“</span>
                <div className='about__quote__txt'>
                    <blockquote>“Usando métodos desenvolvidos ao longo dos 15 anos de atuação dentro de empresas familiares, transformamos empresas e despertamos líderes”.</blockquote>
                    <div className='about__border'></div>
                </div>
            </div>
        </AboutContainer>
    </div>
  )
}

export default About