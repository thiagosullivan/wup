import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import WupLogo from '../../../assets/wup-logo.png';
import { HeaderContainer } from './styles';

function Header() {
  return (
    <HeaderContainer>
        <Link href="/">
            <Image src={WupLogo} fill />
        </Link>
    </HeaderContainer>
  )
}

export default Header