import { Component, BaseComponent, Attribute, Bind } from '@twist/react';
import React from 'react';

@Component
export default class MobileMode {
    
    render() {
        <if condition={ this.scope.twistLibPageMode == 'mobile' }>
            { this.children }
        </if>
    }

}
