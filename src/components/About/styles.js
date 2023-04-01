import styled from "styled-components";

export const AboutContainer = styled.section`
    position: relative;
    max-width: 1036px;
    margin: 0 auto;
    padding: 0 1rem;

    .about__row1 {
        display: flex;
        justify-content: space-between;
        margin-bottom: 6rem;

        .about__img {
            width: 361px;
            height: 506px;
            position: relative;
            margin-right: 2rem;
        }
        .about__txt {
            max-width: 775px;

            p {
                font-family: 'Montserrat', sans-serif;
                font-size: 2.18rem;
                font-weight: 300;
                color: ${({theme}) => theme.primary};
                margin-bottom: .7rem;
            }
            h2 {
                font-size: 3.5rem;
                font-family: 'Montserrat', sans-serif;
                font-weight: 900;
                line-height: 1;
                color: ${({theme}) => theme.primary};
                margin-bottom: .5rem;
            }
            span {
                font-size: 1.31rem;
                color: ${({theme}) => theme.secondary};
                font-family: 'Montserrat', sans-serif;
                font-weight: 700;
                text-transform: uppercase;
                margin-bottom: 2.5rem;
                display: block;
            }

            ul {
                li {
                    font-family: 'Raleway', sans-serif;
                    font-size: 0.9rem;
                    color: ${({theme}) => theme.greysecond};
                    margin-bottom: .8rem;
                }
            }
        }
    }

    .about__quote {
        max-width: 575px;
        width: 100%;
        margin: 0 auto 6rem;
        display: flex;
        align-items: flex-end;
        position: relative;

        span {
            font-size: 9rem;
            font-family: 'Open Sans', sans-serif;
            font-weight: 700;
            color: ${({theme}) => theme.primary};
            position: absolute;

            &:first-child {
                left: -24%;
                top: -90%;
            }
        }

        .about__quote__sign2 {
            right: -24%;
            top: -23%;
        }

        .about__quote__txt {
            display: flex;
            flex-direction: column;
            align-items: center;
            /* top: -55px; */
            position: relative;

            blockquote {
                font-family: 'Raleway', sans-serif;
                font-size: 1rem;
                font-weight: 300;
                margin-bottom: 2.18rem;
                color: ${({theme}) => theme.greysecond};
            }
            .about__border {
                width: 445px;
                height: 3px;
                display: block;
                background-color: ${({theme}) => theme.primary};
            }
        }
    }
`;