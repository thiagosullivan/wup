import Image from 'next/image';
import React from 'react';
import AboutImg from '../../../assets/about-img-2.png';
import { AboutContainer } from './styles';
import NavigationMenu from '../NavigationMenu';

function About() {
  return (
    <div className='main__div aboutDiv' id="sobre-a-marta">
        {/* <div className='separator'></div> */}
        <NavigationMenu
            btnOne="Sobre a Marta"
            btnOneLink="#sobre-a-marta"
            btnTwo="Nossos estudos"
            btnTwoLink="#nossos-estudos"
            btnThree="Sobre a WUP"
            btnThreeLink="#sobre-a-wup"
        />
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
                <div className='about__quote__txt'>
                    <span>“</span>
                    <blockquote>“Usando métodos desenvolvidos ao longo dos 15 anos de atuação dentro de empresas familiares, transformamos empresas e despertamos líderes”.</blockquote>
                    <div className='about__border'></div>
                    <span className='about__quote__sign2'>“</span>
                </div>
            </div>
        </AboutContainer>
    </div>
  )
}

export default About