import styled from 'styled-components';

export const ConversationBaloonContainer = styled.div`
    background: ${(props: {isMy: boolean}) => props.isMy ? '#81AF76' : '#AAAAAA' };
    border: 1px solid #4E4E4E;

    padding: 10px;
    margin: 10px 5px;

    max-width: 70%;

    align-self: ${(props: {isMy: boolean}) => props.isMy ? 'flex-end' : 'flex-start' };

    > .conversationDetails{
        display: flex;
        align-items: center;

        position: relative;

        > h3 {
            flex: 1;
        }

        ::after {
            content: '';

            position: absolute;
            bottom: 0;

            width: 100%;
            height: 3px;

            background: #4E4E4E;
        }
    }
`

export const Container = styled.div`
    background: #D5D5D5;
    border: 3px solid #C8C8C2;    
    box-shadow: 0px 0px 15px 1px #474747;

    width: 50%;
    max-height: 85%;

    padding: 10px;

    display: flex;
    flex-direction: column;

    > .userDetails {
        display: flex;
        align-items: center;

        > h1 {
            flex: 1;

            background: #9B9B9B;
            border: 2px solid #4E4E4E;
            margin-left: 10px;
            padding: 2.5px 7.5px;

            height: 100%;
        }

        > button {
            padding: 2.5px;
            border: 2px solid #4E4E4E;
            background: #9B9B9B;

            height: 100%;

            margin-left: 10px;
            padding: 0 15px;

            font-weight: bold;
            font-size: 1em;

            display: flex;
            align-items: center;
            justify-content: center;
        }

        > img {
            width: 3em;
            height: 3em;

            border: 2px solid #474747;
        }
    }

    > .conversationArea {
        display: flex;
        flex-direction: column;

        overflow-y: auto;

        > h1 {
            align-self: flex-end;
        }
    }

    .conversationArea {
        background: #C4C4C4;
        border: 2px solid #7A7A7A;

        margin: 10px 0px;
        padding: 5px;

        flex: 1;
    }

    .sendMessageArea {
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
`;
