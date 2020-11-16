import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    margin: 20px 0;
    padding: 10px;
    width: 40%;
    background: #d5d5d5;
    box-shadow: 0px 0px 15px 1px #474747;

    /* border-radius: 10px; */
    border: 3px solid #C4C4C4;

    .cardTop {
        display: flex;
        align-items: center;

        margin-bottom: 10px;

        .postTitle {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;

            background: #C4C4C4;
            border: 2px solid #4E4E4E;
        }

        a {
            background: #9B9B9B;
            border: 2px solid #474747;
            height: 100%;

            display: flex;
            align-items: center;

            padding: 0 20px;
            margin-left: 10px;
        }
    }

    .cardContent {
        display: flex;

        .btnContainer {
            display: flex;
            flex-direction: column;

            margin-right: 10px;

            button {
                flex: 1;

                background: #AAAAAA;
                border: 2px solid #4E4E4E;
                padding: 40px 15px;

                cursor: pointer;

                :nth-child(2) {
                    margin: 10px 0;
                }
            }
        }

        .postContent {
            flex: 1;
            display: flex;
            flex-direction: column;

            background: #C4C4C4;
            border: 2px solid #4E4E4E;
            padding: 5px;

            text-align: justify;

            button {
                width: 100%;
                background: #AAAAAA;
                border: 2px solid #4E4E4E;
                padding: 5px;
                
                font-size: 20px;

                cursor: pointer;
            }

            p {
                flex: 1;
            }
        }
    }

    @media(max-width: 1000px) {
        width: 85%;
    }
`;
