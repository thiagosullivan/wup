import { darken } from "polished";
import styled from "styled-components";

export const FooterContainer = styled.footer`
    .footer__top {
        width: 90%;
        margin-left: auto;
        margin-bottom: 13.75rem;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    
        p {
            color: ${({theme}) => theme.primary};
            font-family: 'Open Sans', sans-serif;
            font-size: 3.12rem;
            font-weight: 300;
        }
    
        .footer__content {
            background-color: ${({theme}) => theme.secondary};
            width: 70%;
            margin-left: auto;
            padding: 4.37rem;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
    
            .footer__logo {
                margin-right: 7.81rem;
            }
            .footer__links {
                color: ${({theme}) => theme.white};
                display: flex;
                flex-direction: column;
                max-width: 560px;
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
                        font-size: 0.93rem;
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
                            width: 30px;
                            height: 30px;
                        }
    
                        &:first-child {
                            width: 320px;
                            height: 55px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            border: 1px solid ${({theme}) => theme.white};
                            font-family: 'Raleway', sans-serif;
                            font-size: 0.93rem;
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
        font-family: 'Raleway', sans-serif;
        font-size: 0.93rem;
        font-weight: 700;
        line-height: 1.7;
        color: rgba(48, 48, 48, .6);
        text-align: center;
        text-transform: uppercase;
        margin-bottom: 2.25rem;        

        a {
            transition: all 80ms ease-in;

            &:hover {
                color: ${({theme}) => darken(.2, theme.secondary)}
            }
        }
    }
`;