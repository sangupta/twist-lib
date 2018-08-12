import { Component, BaseComponent, Attribute, Bind } from '@twist/react';
import React from 'react';

@Component
export default class TabletMode extends BaseComponent {
    
    render() {
        return <if condition={ this.scope.twistLibPageMode == 'tablet' }>
            { this.children }
        </if>
    }

}
