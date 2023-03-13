import { darken } from "polished";
import styled from "styled-components";

export const SecondThreeContainer = styled.section`
    max-width: 1480px;
    width: 100%;
    margin-left: 14rem;
    margin-bottom: 18rem;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    position: relative;

    .separator {
        left: -21.5rem;
    }

    .sec3__img {
        width: 760px;
        height: 890px;
        display: block;
        margin-left: 4rem;
    }
    .sec3__bg {
        position: absolute;
        right: -21%;
        top: 50%;
        transform: translateY(-50%) scaleX(-1);
    }
    .sec3__txt {
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
            /* margin-bottom: 2rem; */
        }
        span {
            font-family: 'Raleway', sans-serif;
            font-weight: 700;
            color: ${({theme}) => theme.secondary};
            text-transform: uppercase;
            display: block;
            margin-top: 6.56rem;
            margin-bottom: 1.25rem;
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