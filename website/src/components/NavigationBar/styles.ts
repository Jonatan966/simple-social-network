import styled from 'styled-components';

export const Container = styled.div`
    background: #C4C4C4;
    box-shadow: 0px 0px 10px 2px #474747;

    display: flex;
    justify-content: center;

    padding: 5px;
    position: relative;

    a {
        padding: 15px 0px;
        margin: 5px;
        width: 10%;

        border: none;
        border-radius: 15px;

        font-size: 1.25rem;
        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
        background: #B5B5B5;

        text-decoration: none;
        color: black;

        display: flex;
        justify-content: center;
        align-items: center;

        > svg {
            transform: translateY(15%);
        }
    }

    .plusBtn {
        transform: translateY(-60%);
        width: 5%;
        margin: 0 25px;

        font-size: 2rem;
    }

    .selected {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        background: #E5E5E5;

        > svg {
            transform: translateY(0%);
        }
    }

`;
