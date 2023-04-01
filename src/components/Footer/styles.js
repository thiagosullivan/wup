import { darken } from "polished";
import styled from "styled-components";

export const FooterContainer = styled.footer`
    .footer__top {
        width: 100%;
        /* margin: 0 auto; */
        display: flex;
        align-items: center;
        background-color: ${({theme}) => theme.secondary};
    
        .footer__content {
            max-width: 1820px;
            width: 100%;
            margin-left: auto;
            padding: 3.12rem 1rem;
            display: flex;
            align-items: center;
            justify-content: space-evenly;

            p {
                color: ${({theme}) => theme.primary};
                font-family: 'Open Sans', sans-serif;
                font-size: 2.18rem;
                font-weight: 300;
            }
    
            .footer__logo {
                width: 210px;
                height: 107px;
                position: relative;
            }
            .footer__links {
                color: ${({theme}) => theme.white};
                display: flex;
                flex-direction: column;
                max-width: 380px;
                width: 100%;

                a {
                    transition: all 90ms ease-in;

                    &:hover {
                        opacity: .8;
                    }
                }
    
                nav {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 2.37rem;
    
                    a {
                        font-family: 'Raleway', sans-serif;
                        font-size: 0.72rem;
                        font-weight: 700;
                        text-transform: uppercase;
                    }
                }
                .footer__external__links {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
    
                    a {                        
                        svg {
                            width: 21px;
                            height: 21px;
                        }
    
                        &:first-child {
                            width: 224px;
                            height: 37px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            border: 1px solid ${({theme}) => theme.white};
                            border-radius: 5px;
                            font-family: 'Raleway', sans-serif;
                            font-size: 0.72rem;
                            font-weight: 700;
                            text-transform: uppercase;
                            transition: all 90ms ease-in;

                            &:hover {
                                background-color: ${({theme}) => theme.white};
                                color: ${({theme}) => theme.secondary};
                                opacity: 1;
                            }
    
                            svg {
                                margin-left: 12px;
                            }
                        }
                    }
                }
            }
        }
    }

    .footer__bottom {
        font-family: 'Montserrat', sans-serif;
        font-size: 0.72rem;
        font-weight: 400;
        line-height: 1.7;
        padding: 0.9rem 1rem;
        text-align: center;
        background-color: ${({theme}) => theme.primary};
        color: rgba(255, 255, 255, .8);
        
        a {
            transition: all 80ms ease-in;
            text-transform: uppercase;
            &:hover {
                color: ${({theme}) => darken(.2, theme.secondary)}
            }
        }
    }
`;