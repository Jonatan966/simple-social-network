import styled from 'styled-components';

export const Container = styled.div`
    background: #D5D5D5;
    border: 3px solid #C4C4C4;
    padding: 10px;

    width: 500px;

    display: flex;
    flex-direction: column;

    text-align: center;

    > h2 {
        position: relative;

        :after {
            content: '';
            position: absolute;

            bottom: 0;
            left: 0;

            width: 100%;
            height: 3px;

            background: #4E4E4E;
        }
    }

    label {
        display: flex;
        align-items: center;
        margin: 7.5px 0;

        > input, select {
            flex: 1;

            margin-left: 5px;
        }
    }

    input, textarea, select {
        background: #9B9B9B;
        border: 2px solid #4E4E4E;
        padding: 5px;
    }

    > button {
        background: #81AF76;
        border: 2px solid #4B6849;

        color: #4B6849;
        font-size: 1rem;
        font-weight: bold;

        padding: 5px;
        margin-top: 10px;
    }

    .image-picker {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 16px;

        img {
            width: 100%;
            height: 75px;
            object-fit: cover;
            border: 2px solid #4E4E4E;
        }

        .new-image {
            height: 75px;
            background: #9B9B9B;
            border: 2px dashed #4E4E4E;
            cursor: pointer;

            display: flex;
            justify-content: center;
            align-items: center;
        }

    }

    > section {
        margin: 7.5px 0;

        display: flex;
        flex-direction: column;
        
        background: #C4C4C4;
        border: 2px solid #4E4E4E;
        padding: 7.5px;

        > label {
            margin: 0;
        }
    }

    > .h-grid {
        display: grid;
        grid-template-columns: 2fr 1fr;

        label:nth-child(2) {
            margin-left: 5px;
        }
    }
`;
