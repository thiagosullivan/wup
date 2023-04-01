import React from 'react'
import { NavigationMenuContainer } from './styles'
import Link from 'next/link'

function NavigationMenu({ btnOne, btnTwo, btnThree, btnOneLink, btnTwoLink, btnThreeLink }) {
  return (
    <NavigationMenuContainer className='navMenu'>
        <Link href={`/${btnOneLink}`}>{btnOne}</Link>
        <Link href={`/${btnTwoLink}`}>{btnTwo}</Link>
        <Link href={`/${btnThreeLink}`}>{btnThree}</Link>
    </NavigationMenuContainer>
  )
}

export default NavigationMenu