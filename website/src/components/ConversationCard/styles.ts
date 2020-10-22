import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;

    margin: 20px 0;
    padding: 10px;
    width: 40%;
    background: #d5d5d5;
    box-shadow: 0px 0px 15px 1px #474747;

    border: 3px solid #C4C4C4;

    > .mainContainer {
        display: flex;
        flex-direction: column;
        flex: 1;

        > .userInfo {
            display: flex;

            h1 {
                flex: 1;

                background: #9B9B9B;
                border: 2px solid #4E4E4E;
                padding: 0px 5px;

                margin-right: 10px;
            }

            button {
                background: #9B9B9B;
                border: 2px solid #4E4E4E;
                padding: 0px 5px;

                font-weight: bold;
                font-size: 1rem;

                display: flex;
                justify-content: center;
                align-items: center;
            }
        }

        > .conversationMessages {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            background: #C4C4C4;
            border: 1px solid #7A7A7A;

            margin: 10px 0;

            > label {
                background: #AAAAAA;
                border: 1px solid #4E4E4E;

                width: 98%;
                margin: 5px;
                padding: 2.5px;
            }

            > h3 {
                margin: 5px 0;
                color: #4E4E4E;
            }
        }

        > button {
            background: #AAAAAA;
            border: 1px solid #4E4E4E;
            padding: 5px;

            font-weight: bold;
            font-size: 1rem;
        }
    }

    img {
        width: 100px;

        margin-right: 10px;
        border: 2px solid #4E4E4E;
    }

    @media(max-width: 850px) {
        width: 85%;
    }
`;
