import React from 'react'
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import './MyCard.css'


export default function MyCard(props){
    return (
        <div>
            <Card>
            <CardImage tag="div">
        <div className="view gradient-card-header blue-gradient">
            <h2 className="h2-responsive">Heading</h2>
            <p>Subheading</p>
        </div>
    </CardImage>
    <CardBody >
        <CardTitle>What the hell</CardTitle>
        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        <Button href="#">Button</Button>
    </CardBody>
</Card>
           
         </div>
    )
}


