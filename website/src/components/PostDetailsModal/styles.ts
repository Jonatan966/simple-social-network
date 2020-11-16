import styled from 'styled-components';

export const Container = styled.div`
    padding: 10px;
    width: 40%;
    max-height: 30%;

    overflow-y: auto;

    background: #d5d5d5;

    box-shadow: 0px 0px 15px 1px #474747;
    border: 3px solid #C4C4C4;

    > .commentArea {
        display: flex;

        > input {
            flex: 1;

            background: #AAAAAA;

            border: 2px solid #7A7A7A;
            padding: 7.5px;
            margin-right: 10px;
        }

        > button {
            background: #81AF76;

            border: 2px solid #4B6849;
            padding: 7.5px 15px;
        }
    }

    > h1 {
        text-align: center;
    }

    > hr {
        margin-top: 10px;
    }
`;

export const PostCommentContainer = styled.div`
    background: #C4C4C4;
    border: 1px solid #4E4E4E;

    padding: 0 7.5px 7.5px 7.5px;

    margin: 10px 0;

    display: flex;
    flex-direction: column;
    align-items: stretch;

    > .userDetails {
        display: flex;
        align-items: center;

        position: relative;
        padding: 5px 0;

        > a {
            display: flex;
            align-items: center;

            > img {
                width: 35px;
                height: 35px;

                border-radius: 50%;
            }
        }

        > span {
            flex: 1;
            text-align: end;
        }

        ::after {
            content: '';

            position: absolute;
            bottom: 0;

            width: 100%;
            height: 3px;

            background: gray;
        }
    }

    > p {
        text-align: justify;
        padding: 7.5px 0;
    }

    > .actions {
        display: flex;
        justify-content: stretch;

        > button {
            flex: 1;

            margin: 2.5px;
            padding: 5px;

            background: #AAAAAA;
            border: 1px solid #4E4E4E;
        }
    }
`;