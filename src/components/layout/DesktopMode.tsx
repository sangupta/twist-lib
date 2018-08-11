import { Component, BaseComponent, Attribute, Bind } from '@twist/react';
import React from 'react';

@Component
export default class DesktopMode {
    
    render() {
        return <if condition={ this.scope.twistLibPageMode == 'desktop' }>
            { this.children }
        </if>
    }

}
