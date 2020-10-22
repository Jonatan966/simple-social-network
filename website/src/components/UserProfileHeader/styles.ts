import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 25px 0;
    width: 40%;

    > img {
        width: 100%;

        border: 3px solid #474747;
    }

    > .mainContent {
        display: flex;

        margin-top: 10px;
        margin-bottom: 15px;

        width: 100%;

        > img {
            width: 75px;

            border: 2px solid #474747;
        }

        > .mainSubContent {
            flex: 1;

            margin-left: 10px;
            margin-right: 10px;

            > h2 {
                background: #9B9B9B;
                
                border: 2px solid #4E4E4E;
                margin-bottom: 10px;
                padding-left: 5px;

                width: 100%;
            }

            > .btnGrid {
                width: 100%;
                display: flex;
                justify-content: space-between;

                > button {
                    width: 48.5%;
                }
            }
        }

        > .secondSubContent {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
    }

    > .otherContent {        
        background: #C4C4C4;
        border: 1px solid #7A7A7A;

        padding: 10px;
        margin-bottom: 10px;

        > h1 {
            text-align: center;
        }
    }

    > .profileSubMenus {
        display: flex;
        justify-content: space-between;

        width: 100%;

        > .selected {
            background: #81AF76;
            border-color: #3A513A;
        }

        > a {
            background: #AAAAAA;
            border: 1px solid #4E4E4E;
            padding: 7.5px;

            text-align: center;
            font-weight: bold;

            width: 32%;
        }
    }

    button {
        background: #AAAAAA;
        border: 1px solid #4E4E4E;
        padding: 7px;

        font-weight: bold;
    }

    hr {
        width: 100%;
        margin-bottom: 10px;
        height: 3px;
        border: none;
        background: gray;
    }
`;
