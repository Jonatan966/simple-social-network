import styled from 'styled-components';

export const Container = styled.div`
    background: #C4C4C4;
    padding: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 1;

    box-shadow:  0px 4px 4px gray;
    
    input {
        padding: 7.5px;
        width: 35%;
        margin: 0 10px;

        background: #AAAAAA;
        border: 3px solid #E5E5E5;
        border-radius: 10px;
    }

    button {
        padding: 0 10px;
        margin: 0 5px;

        background: #E5E5E5;
        border: 3px solid #AAAAAA;
        border-radius: 10px;

        height: 100%;
    }

    label {
        cursor: pointer;
    }

    @media(max-width: 800px) {
        input {
            flex: 1;
        }
    }
`;
