import { Component, BaseComponent, Attribute, Bind } from '@twist/react';
import React from 'react';

@Component
export default class MobileMode extends BaseComponent {
    
    render() {
        return <if condition={ this.scope.twistLibPageMode == 'mobile' }>
            { this.children }
        </if>
    }

}
