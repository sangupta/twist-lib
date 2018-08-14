import { Component, BaseComponent, Attribute, Bind } from '@twist/react';
import React from 'react';

@Component
export default class Image extends BaseComponent {

    @Attribute src:string = '';

    @Attribute responsive:boolean = true;

    @Attribute thumbnail:boolean = false;

    render() {
        return <img src={ this.src } class-img-fluid={ this.responsive } class-img-thumbnail={ this.thumbnail } { ...this.undeclaredAttributes() } />;
    }

}
