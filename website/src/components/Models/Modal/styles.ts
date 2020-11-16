import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;

    width: 100%;
    height: 100%;

    top: 0;
    z-index: 3;

    justify-content: center;
    align-items: center;
    flex-direction: column;

    background: rgba(46, 49, 49, 0.5);

    > button{
        width: 20em;

        padding: 5px;
        margin-top: 10px;

        border-radius: 10px;
        border: none;

        font-weight: bold;
        font-size: 1em;
    }
`;
