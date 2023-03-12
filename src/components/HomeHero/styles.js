import { darken } from "polished";
import styled from "styled-components";

export const HeroContainer = styled.section`
    max-width: 1400px;
    width: 100%;
    margin-right: auto;
    display: flex;
    align-items: flex-start;
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
        height: 750px;
        display: block;
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
                background-color: ${({theme}) => darken(0.1, theme.primary)};
            }
        }
    }
`;