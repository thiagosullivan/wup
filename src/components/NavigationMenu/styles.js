import styled from "styled-components";

export const NavigationMenuContainer = styled.nav`
    max-width: 1036px;
    width: 100%;
    margin: 0 auto;
    padding: 2.5rem 1rem 2.37rem;
    display: flex;
    align-items: center;

    a {
        width: 148px;
        height: 44px;
        padding: 16px 21px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        font-family: 'Raleway', sans-serif;
        font-size: 0.72rem;
        color: ${(theme) => theme.greythird};
        transition: all 50ms ease-in;
        
        &:first-child {
            border: 1px solid #353535;
            border-radius: 50px;
        }

        &:hover {
            opacity: 0.6;
        }
    }
`;