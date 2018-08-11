import { Component, BaseComponent, Attribute, Bind } from '@twist/react';
import React from 'react';

@Component
export default class PhoneMode {
    
    render() {
        return <if condition={ this.scope.twistLibPageMode == 'phone' }>
            { this.children }
        </if>
    }

}
