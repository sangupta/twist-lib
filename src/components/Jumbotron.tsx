import { Component, BaseComponent, Attribute, Bind } from '@twist/react';
import React from 'react';

/**
 * Jumbotron component from BS
 * 
 * Ref: http://getbootstrap.com/docs/4.1/components/jumbotron/
 */
@Component
export default class Jumbotron extends BaseComponent {

    @Attribute fluid:boolean = false;

    render() {
        return <div class='jumbotron' class-jumbotron-fluid={ this.fluid }>
            { this.children }
        </div>;
    }

}
