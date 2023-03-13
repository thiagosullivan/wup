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
            <p><strong>Vamos despertar</strong><br/>
            seu potencial?</p>
            <div className='footer__content'>
                <Link href="/" className='footer__logo'>
                    <Image src={LogoFooter} />
                </Link>
                <div className='footer__links'>
                    <nav>
                        <Link href="/">Nossos estudos</Link>
                        <Link href="/">Sobre a WUP</Link>
                        <Link href="/">Sobre a Marta</Link>
                    </nav>
                    <div className='footer__external__links'>
                        <Link href="/" target="_blank" rel='noreferrer noopener'>
                            Nos chame no whats
                            <FaWhatsapp />
                        </Link>
                        <Link href="/" target="_blank" rel='noreferrer noopener'>
                            <FaLinkedinIn />
                        </Link>
                        <Link href="/" target="_blank" rel='noreferrer noopener'>
                            <FaFacebookF />
                        </Link>
                        <Link href="/" target="_blank" rel='noreferrer noopener'>
                            <FaTwitter />
                        </Link>
                        <Link href="/" target="_blank" rel='noreferrer noopener'>
                            <FaInstagram />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className='footer__bottom'>
            <p>Pensado e desenvolvido com muito carinho</p>
            <Link href="/" target="_blank" rel='noreferrer noopener'>Surto - Marketing Inteligente</Link>
            <p>2023</p>
        </div>
    </FooterContainer>
  )
}

export default Footer