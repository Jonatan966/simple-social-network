import React from 'react';

import {Container} from './styles';

const AboutCard: React.FC<{title: string, desc: string, images?: string[]}> = ({title, desc, images = []}) => {
    return (
        <Container>
            <h2>{title}</h2>
            <p>{desc}</p>

            {
                images.length > 0 &&
                <div className="image-container">
                    {images.map((img, x) => {
                        return <img src={img} key={x}/>
                    })}
                </div>
            }
        </Container>
    )
}

export default AboutCard;