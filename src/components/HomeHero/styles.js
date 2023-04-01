import { darken } from "polished";
import styled from "styled-components";

export const HeroContainer = styled.section`
    .hero__content {
        max-width: 1036px;
        width: 100%;
        margin: 0 auto;
        padding: 0 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    
        .hero__img {
            width: 375px;
            height: 480px;
            display: block;
            position: relative;
        }
        .hero__txt {
            max-width: 350px;
            width: 100%;
    
            h2 {
                font-size: 2.5rem;
                font-family: 'Montserrat', sans-serif;
                font-weight: 900;
                line-height: 1;
                color: ${({theme}) => theme.primary};
                margin-bottom: 1.37rem;
            }
            p {
                color: ${({theme}) => theme.greysecond};
                font-family: 'Raleway', sans-serif;
                font-size: 0.85rem;
                line-height: 22px;
                text-align: justify;
                margin-bottom: 3.75rem;
            }
            a {
                background-color: ${({theme}) => theme.primary};
                width: 126px;
                height: 38px;
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.75rem;
                font-family: 'Raleway', sans-serif;
                font-weight: 700;
                text-transform: uppercase;
                color: ${({theme}) => theme.white};
                transition: all 100ms ease-in;
                
                &:hover {
                    background-color: ${({theme}) => darken(0.1, theme.grey)};
                }
            }
        }
    }
`;