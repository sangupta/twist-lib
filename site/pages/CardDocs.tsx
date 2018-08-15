import { Component, BaseComponent, Attribute } from "@twist/react";
import { Props, Prop } from '../Props';
import React from 'react';
import Aux from 'helper/Aux';
import { Card, CardImage, CardBody, CardTitle, CardSubTitle, CardText } from "components/Card";

@Component
export default class CardDocs extends BaseComponent {

    render() {
        return <Aux>
            <h3>Card Component</h3>

            <div class='example'>
                <div class='result'>
                    <Card style={{ width: 200 }}>
                        <CardImage src='http://via.placeholder.com/200x200' />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubTitle>Card subtitle</CardSubTitle>
                            <CardText>
                                This is a card that is rendered using the card component.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <pre>
{`
import { Card, CardImage, CardBody, CardTitle, CardSubTitle, CardText } from 'twist-lib/components/Card';

@Component
export class Example {

    render() {
        return <Card style={{ width: 200 }}>
                    <CardImage src='http://via.placeholder.com/200x200' />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubTitle>Card subtitle</CardSubTitle>
                        <CardText>
                            This is a card that is rendered using the card component.
                        </CardText>
                    </CardBody>
                </Card>;
    }
    
}
`}                    
                </pre>
            </div>

            <Props>
            </Props>
        </Aux>;
    }

}
