import { darken } from "polished";
import styled from "styled-components";

export const HeroContainer = styled.section`
    max-width: 1150px;
    width: 100%;
    margin-left: 7rem;
    margin-bottom: 21rem;
    /* margin-right: auto; */
    /* margin: 0 auto 21rem; */
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    .hero_bg {
        background-color: ${({theme}) => theme.primary};
        max-width: 500px;
        width: 100%;
        height: 100vh;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        z-index: -1;
    }
    .hero__img {
        width: 535px;
        height: 685px;
        display: block;
        position: relative;
    }
    .hero__txt {
        max-width: 500px;
        width: 100%;

        h2 {
            font-size: 5rem;
            font-family: 'Open Sans', sans-serif;
            font-weight: 700;
            line-height: 1;
            color: ${({theme}) => theme.primary};
            margin-bottom: 2.2rem;
        }
        p {
            color: ${({theme}) => theme.greysecond};
            font-family: 'Raleway', sans-serif;
            font-size: 1.5rem;
            line-height: 1.5;
            text-align: justify;
            margin-bottom: 2rem;
        }
        a {
            background-color: ${({theme}) => theme.primary};
            width: 230px;
            height: 73px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.37rem;
            font-family: 'Raleway', sans-serif;
            font-weight: 700;
            color: ${({theme}) => theme.white};
            border-radius: 20px;
            transition: all 100ms ease-in;
            
            &:hover {
                background-color: ${({theme}) => darken(0.1, theme.grey)};
            }
        }
    }
`;