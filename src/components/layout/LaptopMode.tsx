import { Component, BaseComponent, Attribute, Bind } from '@twist/react';
import React from 'react';

@Component
export default class LaptopMode {
    
    render() {
        return <if condition={ this.scope.twistLibPageMode == 'laptop' }>
            { this.children }
        </if>
    }

}
