import React from 'react';
import { Card, CardGroup, CardBody, CardImg, CardTitle, CardSubtitle, CardText} from 'reactstrap';

function RenderCard({item}) {
    return (
        <CardGroup>
            <Card>
                <CardImg src={item.image} />
                <CardBody>
                    <CardTitle>{item.nane}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                    <CardText>{ item.description}</CardText>
                </CardBody>
            </Card>
        </CardGroup>
        
    );
}

function Home(props) {
    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col-md m-1">
                    <RenderCard item={props.dish} />
                </div>
                <div className="col-md m-1">
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-md m-1">
                    <RenderCard item={props.leader} />
                </div>
            </div>
        </div>
    );
    
}

export default Home;