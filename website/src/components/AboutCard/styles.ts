import styled from 'styled-components';

export const Container = styled.div`
    background: #d5d5d5;
    box-shadow: 0px 0px 15px 1px #474747;
    border: 3px solid #C4C4C4;

    width: 40%;
    margin: 20px 0;
    padding: 10px;

    display: flex;
    flex-direction: column;

    > h2 {
        position: relative;
        text-align: center;

        padding: 5px 0;
        margin-bottom: 5px;

        :after {
            content: '';
            position: absolute;

            bottom: 0;
            left: 0;

            width: 100%;
            height: 2px;

            background: black;
        }
    }

    > p {
        text-align: justify;
    }

    .image-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 16px;

        margin-top: 7.5px;

        img {
            width: 100%;
            height: 125px;
            object-fit: cover;
            border: 2px solid #4E4E4E;
        }
    }
`;
