import { Component, BaseComponent, Attribute } from "@twist/react";
import { Props, Prop } from '../Props';
import React from 'react';
import Nav from 'components/Nav';

@Component
export default class NavListDocs extends BaseComponent {

    render() {
        return <g>
        <h3>NavList</h3>

        Navigation component based on <code>ul</code> HTML tag. If you are looking for a <code>nav</code> based
        navigation, check the <b>Nav</b> component.
        
            <Props>
                <Prop name='asTabs' type='boolean' initial='false' description='Render the navigation as tabs.' />
                <Prop name='asPills' type='boolean' initial='false' description='Render the navigation as pills.' />
                <Prop name='vertical' type='boolean' initial='false' description='Render the navigation vertically.' />
            </Props>
        </g>;
    }

}
