import styled from "styled-components";

export const SectionFourContainer = styled.section`
    width: 100%;
    position: relative;
    margin-bottom: 18rem;

    .sec4__title {
        max-width: 1450px;
        margin: 4.75rem 0 6.25rem 14rem;

        h2 {
            color: ${({theme}) => theme.primary};
            font-size: 5rem;
            margin-bottom: 3.3rem;
        }
        p {
            color: ${({theme}) => theme.greysecond};
            font-family: 'Raleway', sans-serif;
            font-size: 1.5rem;
            line-height: 1.5;
            text-align: justify;
        }
    }
    .sec4__row1 {
        display: flex;
        position: relative;
        margin-bottom: 11.25rem;

        .sec4__square {
            background-color: ${({theme}) => theme.primary};
            max-width: 640px;
            width: 100%;
            padding: 3.1rem;
            font-size: 5rem;
            font-family: 'Open Sans', sans-serif;
            font-weight: 700;
            text-align: right;
            color: ${({theme}) => theme.white};
            text-transform: uppercase;
        }

        .sec4__txt {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            max-width: 1030px;
            padding: 0 1rem 0 4.68rem;

            li {
                color: ${({theme}) => theme.greysecond};
                font-family: 'Raleway', sans-serif;
                font-size: 1.5rem;
                line-height: 1.5;
                text-align: justify;
            }
        }

        .sec4__separator {
            display: block;
            width: 35%;
            height: 5px;
            background-color: ${({theme}) => theme.primary};
            position: absolute;
            bottom: 0;
            right: 0;
        }
    }
    .sec4__row2 {
        display: flex;
        justify-content: flex-end;

        .sec4__txt {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            max-width: 1150px;
            width: 100%;
            padding: 3rem 4.68rem 3rem 1rem;

            li {
                color: ${({theme}) => theme.greysecond};
                font-family: 'Raleway', sans-serif;
                font-size: 1.5rem;
                line-height: 1.5;
                text-align: justify;
            }
        }

        .sec4__square {
            background-color: ${({theme}) => theme.primary};
            max-width: 640px;
            width: 100%;
            padding: 3.1rem;
            font-size: 5rem;
            font-family: 'Open Sans', sans-serif;
            font-weight: 700;
            text-align: left;
            color: ${({theme}) => theme.white};
            text-transform: uppercase;
        }
    }
`;