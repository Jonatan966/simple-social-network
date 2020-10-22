import styled from 'styled-components';

export const Container = styled.div`
    margin: 20px 0;
    padding: 10px;
    width: 40%;
    background: #d5d5d5;
    box-shadow: 0px 0px 15px 1px #474747;

    /* border-radius: 10px; */
    border: 3px solid #C4C4C4;

    display: flex;
    flex-direction: column;

    cursor: pointer;

    .mainContent {
        display: flex;
        align-items: center;
        
        .mainDetails {
            flex: 1;

            h1 {
                background: #9B9B9B;

                border: 2px solid #4E4E4E;
                margin-bottom: 10px;
                padding: 0px 10px;
            }

            p {
                background: #C4C4C4;
                border: 1px solid #7A7A7A;

                padding: 10px;
            }
        }

        img {
            width: 25%;

            margin-right: 10px;
            border: 2px solid #4E4E4E;
        }
    }

    .otherDetails {
        display: flex;
        
        justify-content: space-between;

        label {
            background: #AAAAAA;
            border: 1px solid #4E4E4E;
            width: 30%;
            
            padding: 5px;
            margin-top: 10px;
            
            display: flex;
            justify-content: center;
            align-items: center;

            font-weight: bold;
            cursor: pointer;

            svg {
                margin-right: 5px;
            }
        }
    }
`;
