import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import LogoFooter from '../../../assets/logo-footer.png';
import { FaWhatsapp, FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FooterContainer } from './styles';

function Footer() {
  return (
    <FooterContainer>
        <div className='footer__top'>
            <div className='footer__content'>
            <p><strong>Vamos despertar</strong><br/>
            seu potencial?</p>
                <Link href="/" className='footer__logo'>
                    <Image src={LogoFooter} fill />
                </Link>
                <div className='footer__links'>
                    <nav>
                        <Link href="/#nossos-estudos">Nossos estudos</Link>
                        <Link href="/#sobre-a-wup">Sobre a WUP</Link>
                        <Link href="/#sobre-a-marta">Sobre a Marta</Link>
                    </nav>
                    <div className='footer__external__links'>
                        <Link href="/" target="_blank" rel='noreferrer noopener'>
                            Nos chame no whats
                            <FaWhatsapp />
                        </Link>
                        <Link href="https://www.linkedin.com/" target="_blank" rel='noreferrer noopener'>
                            <FaLinkedinIn />
                        </Link>
                        <Link href="https://pt-br.facebook.com/" target="_blank" rel='noreferrer noopener'>
                            <FaFacebookF />
                        </Link>
                        <Link href="https://twitter.com/" target="_blank" rel='noreferrer noopener'>
                            <FaTwitter />
                        </Link>
                        <Link href="https://instagram.com/" target="_blank" rel='noreferrer noopener'>
                            <FaInstagram />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className='footer__bottom'>
            <p>Pensado e desenvolvido com muito carinho</p>
            <p>
                <Link href="/" target="_blank" rel='noreferrer noopener'>Surto - Marketing Inteligente </Link>
                | 2023
            </p>
        </div>
    </FooterContainer>
  )
}

export default Footer