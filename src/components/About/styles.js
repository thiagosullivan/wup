import styled from "styled-components";

export const AboutContainer = styled.section`
    position: relative;

    .about__row1 {
        display: flex;
        justify-content: center;

        .about__img {
            width: 515px;
            height: 725px;
            position: relative;
            margin-right: 10.5rem;
        }
        .about__txt {

            p {
                font-family: 'Open Sans', sans-serif;
                font-size: 3.12rem;
                font-weight: 300;
                color: ${({theme}) => theme.primary};
            }
            h2 {
                font-size: 5rem;
                font-weight: 700;
                color: ${({theme}) => theme.primary};
                font-family: 'Open Sans', sans-serif;
            }
            span {
                font-size: 1.87rem;
                color: ${({theme}) => theme.secondary};
                font-family: 'Open Sans', sans-serif;
                margin-bottom: 2.5rem;
                display: block;
            }

            ul {
                li {
                    font-family: 'Raleway', sans-serif;
                    font-size: 1.31rem;
                    color: ${({theme}) => theme.greysecond};
                    margin-bottom: 2rem;
                }
            }
        }
    }

    .about__quote {
        max-width: 1000px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        align-items: flex-end;

        span {
            font-size: 13rem;
            font-family: 'Open Sans', sans-serif;
            font-weight: 700;
            color: ${({theme}) => theme.primary};
        }

        .about__quote__txt {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-left: 4rem;
            top: -55px;
            position: relative;

            blockquote {
                font-family: 'Raleway', sans-serif;
                font-size: 1.5rem;
                margin-bottom: 3.43rem;
                color: ${({theme}) => theme.greysecond};
            }
            .about__border {
                width: 650px;
                height: 3px;
                display: block;
                background-color: ${({theme}) => theme.primary};
            }
        }
    }
`;