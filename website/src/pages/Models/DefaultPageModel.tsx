import React from 'react';
import styled from 'styled-components';
import NavigationBar from '../../components/NavigationBar';
import TopBar from '../../components/TopBar';

interface DefaultPageModelProps {
    pageName: string;
}

const DefaultPageModel: React.FC<DefaultPageModelProps> = ({children, pageName}) => {
    return (
        <Container>
            <TopBar/>
                {children}
            <NavigationBar pageName={pageName}/>
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;

    > .pageContent {
        flex: 1;
        overflow-y: auto;

        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 25px 0;
    }
`

export default DefaultPageModel;