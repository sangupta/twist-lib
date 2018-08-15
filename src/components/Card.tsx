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

@Component
export class CardTitle extends BaseComponent {

    render() {
        return <h5 class="card-title" { ...this.undeclaredAttributes() }>{ this.children }</h5>;
    }
}

@Component
export class CardSubTitle extends BaseComponent {

    render() {
        return <h6 class="card-subtitle" { ...this.undeclaredAttributes() }>{ this.children }</h6>
    }
}

@Component
export class CardText extends BaseComponent {

    render() {
        return <p class="card-text" { ...this.undeclaredAttributes() }>{ this.children }</p>;
    }
}
