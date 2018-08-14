import { Component, BaseComponent, Attribute } from "@twist/react";
import { Props, Prop } from '../Props';
import React from 'react';

@Component
export default class JumbotronDocs extends BaseComponent {

    render() {
        return <g>
            <Props>
                <Prop name="fluid" />
            </Props>
        </g>;
    }
}
