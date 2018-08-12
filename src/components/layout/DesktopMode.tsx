import { Component, BaseComponent, Attribute, Bind } from '@twist/react';
import React from 'react';

@Component
export default class DesktopMode extends BaseComponent {
    
    render() {
        return <if condition={ this.scope.twistLibPageMode == 'desktop' }>
            { this.children }
        </if>
    }

}
