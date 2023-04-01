import React from 'react';
import { SectionFourContainer } from './styles';
import NavigationMenu from '../NavigationMenu';

function SectionFour() {
  return (
    <SectionFourContainer id="sobre-a-wup">
      <div className='separator'></div>
      <NavigationMenu
        btnOne="Sobre a WUP"
        btnOneLink="#sobre-a-wup"
        btnTwo="Sobre a Marta"
        btnTwoLink="#sobre-a-marta"
        btnThree="Nossos estudos"
        btnThreeLink="#nossos-estudos"
      />
      <div className='sec4__title'>
        <h2>Temos alguns propósitos…</h2>
        <p>Nós buscamos inspirar e despertar pessoas, incentivando-as a viver experiências novas e desafiadoras. Para isso, acreditamos que o autoconhecimento é fundamental para desenvolver o autogerenciamento e identificar pontos fortes, possibilitando a superação de bloqueios emocionais e culturais e o alcance de melhores resultados.</p>
      </div>
      <div className='sec4__row1'>
        <div className='sec4__square'>
          <span>O que<br/>
            podemos<br/>
            fazer<br/>
            por<br/>
            você</span>
        </div>
        <ul className='sec4__txt'>
          <li>- Programa de liderança estratégica: desenvolvimento de habilidades de liderança, focando em planejamento estratégico, gestão de pessoas, comunicação, tomada de decisões e solução de problemas.</li>
          <li>- Mentoria em desenvolvimento de negócios: treinamento em planejamento de negócios, desenvolvimento de estratégias de mercado, análise de concorrência, gestão de riscos e oportunidades de expansão.</li>
          <li>- Treinamento em gestão de mudanças: capacitação em gestão de mudanças organizacionais, envolvendo técnicas de comunicação, gestão de resistências, mobilização de equipes e implementação de mudanças culturais.</li>
          <li>- Treinamento em produtividade e gestão do tempo: capacitação em técnicas de produtividade e gestão do tempo, envolvendo planejamento estratégico, priorização de tarefas, gerenciamento de projetos, delegação, gestão de interrupções e tomada de decisões.</li>
        </ul>
        <div className='sec4__separator'></div>
      </div>
      <div className='sec4__row2'>
        <ul className='sec4__txt'>
          <li>- Soluções personalizadas para empresas familiares.</li>
          <li>- Definição de papéis, planos de sucessão e preparação de líderes.</li>
          <li>- Definição de missão, visão e valores e criação de uma cultura organizacional saudável.</li>
          <li>- Capacitação de liderança e treinamento para equipes, desenvolvendo habilidades de comunicação, planejamento estratégico, gestão de conflitos e resolução de problemas.</li>
          <li>- Planos personalizados de capacitação para as equipes, identificando pontos fortes e áreas de melhoria e desenvolvendo habilidades e competências para melhorar os resultados.</li>
          <li>- Soluções personalizadas para a gestão de RH, incluindo treinamentos e capacitação para os profissionais, desenvolvimento de políticas e processos, e estratégias de motivação e engajamento das equipes.</li>
        </ul>
        <div className='sec4__square'>
          <span>O que<br/>
            podemos<br/>
            fazer<br/>
            pela sua<br/>
            empresa</span>
        </div>
        <div className='separator'></div>
      </div>
    </SectionFourContainer>
  )
}

export default SectionFour