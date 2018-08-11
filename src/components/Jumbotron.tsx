import { Component, BaseComponent, Attribute, Bind } from '@twist/react';
import React from 'react';

/**
 * Jumbotron component from BS
 * 
 * Ref: http://getbootstrap.com/docs/4.1/components/jumbotron/
 */
@Component
export default class Jumbotron {

    @Attribute fluid:boolean = false;

    render() {
        let classes = 'jumbotron';
        if(this.fluid) {
            classes += ' jumbotron-fluid';
        }

        return <div class={ classes }>
            { this.children }
        </div>;
    }

}
