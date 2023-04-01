import { darken } from "polished";
import styled from "styled-components";

export const SectionThreeContainer = styled.section`
    max-width: 1036px;
    width: 100%;
    margin: 0 auto;
    padding: 3.5rem 3.81rem;
    display: flex;
    align-items: center;
    position: relative;

    .separator {
        left: -21.5rem;
    }

    .sec3__img {
        width: 480px;
        height: 570px;
        display: block;
        position: relative;
    }
    .sec3__bg {
        width: 75px;
        height: 470px;
        position: absolute;
        right: -9rem;
        top: 50%;
        transform: translateY(-50%) scaleX(-1);
    }
    .sec3__txt {
        margin-right: 3rem;

        h2 {
            font-size: 3.5rem;
            font-family: 'Montserrat', sans-serif;
            font-weight: 900;
            line-height: 1;
            color: ${({theme}) => theme.primary};
            margin-bottom: 1.87rem;
            text-align: left;
        }
        p {
            color: ${({theme}) => theme.greysecond};
            font-family: 'Raleway', sans-serif;
            font-size: 1rem;
            font-weight: 300;
            line-height: 25px;
            text-align: left;
            max-width: 343px;
            /* margin-bottom: 2rem; */
        }
        span {
            font-family: 'Raleway', sans-serif;
            font-weight: 700;
            font-size: 0.72rem;
            color: ${({theme}) => theme.secondary};
            text-transform: uppercase;
            display: block;
            margin-top: 4.37rem;
            margin-bottom: 14px;
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
`;