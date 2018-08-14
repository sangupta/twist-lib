import { Component, BaseComponent, Attribute, Bind } from '@twist/react';
import React from 'react';

@Component
export class Card extends BaseComponent {

    render() {
        return <div class='card' { ...this.undeclaredAttributes() }>
            { this.children }
        </div>;
    }

}

@Component
export class CardImage extends BaseComponent {

    @Attribute src:string = '';

    render() {
        return <img class='card-img-top' src={ this.src } { ...this.undeclaredAttributes() }></img>;
    }

}

@Component
export class CardBody extends BaseComponent {

    render() {
        return <div class="card-body" { ...this.undeclaredAttributes() }>
            { this.children }
        </div>;
    }
}
