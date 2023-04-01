import styled from "styled-components";

export const SectionFourContainer = styled.section`
    width: 100%;
    position: relative;

    .sec4__title {
        max-width: 1036px;
        margin: 0 auto 4.37rem;
        padding: 0 1rem;

        h2 {
            font-size: 3.5rem;
            font-family: 'Montserrat', sans-serif;
            font-weight: 900;
            line-height: 1;
            color: ${({theme}) => theme.primary};
            margin-bottom: 2.81rem;
            /* text-align: center; */
        }
        p {
            color: ${({theme}) => theme.greysecond};
            font-family: 'Raleway', sans-serif;
            font-size: 1rem;
            font-weight: 300;
            line-height: 20px;
            text-align: justify;
        }
    }
    .sec4__row1 {
        display: flex;
        align-items: center;
        position: relative;
        margin-right: auto;
        margin-bottom: 8rem;
        max-width: 77%;

        .sec4__square {
            background-color: ${({theme}) => theme.primary};
            /* max-width: 640px; */
            width: 100%;
            padding: 3.1rem;
            font-size: 3.25rem;
            font-family: 'Montserrat', sans-serif;
            font-weight: 700;
            text-align: right;
            color: ${({theme}) => theme.white};
            text-transform: uppercase;
        }

        .sec4__txt {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            max-width: 721px;
            padding: 0 1rem 0 3.25rem;

            li {
                color: ${({theme}) => theme.greysecond};
                font-family: 'Raleway', sans-serif;
                font-size: 1rem;
                font-weight: 300;
                line-height: 20px;
                text-align: justify;
                margin-bottom: 1.3rem;
            }
        }

        .sec4__separator {
            display: block;
            width: 50%;
            height: 5px;
            background-color: ${({theme}) => theme.primary};
            position: absolute;
            bottom: 0;
            left: 82%;
        }
    }
    .sec4__row2 {
        display: flex;
        align-items: center;
        position: relative;
        margin-left: auto;
        max-width: 77%;
        padding-bottom: .5rem;

        .sec4__txt {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            max-width: 721px;
            padding: 0 3.25rem 0 1rem;

            li {
                color: ${({theme}) => theme.greysecond};
                font-family: 'Raleway', sans-serif;
                font-size: 1rem;
                font-weight: 300;
                line-height: 20px;
                text-align: justify;
                margin-bottom: 1.3rem;
            }
        }

        .sec4__square {
            background-color: ${({theme}) => theme.primary};
            /* max-width: 640px; */
            width: 100%;
            padding: 3.1rem;
            font-size: 3.25rem;
            font-family: 'Montserrat', sans-serif;
            font-weight: 700;
            text-align: left;
            color: ${({theme}) => theme.white};
            text-transform: uppercase;
        }
        .separator {
            bottom: 0;
            left: -30%;
        }
    }
`;