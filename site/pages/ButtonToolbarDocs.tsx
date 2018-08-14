import ButtonToolbar from 'components/ButtonToolbar';
import { Component, BaseComponent, Attribute } from "@twist/react";
import { Props, Prop } from '../Props';
import React from 'react';

@Component
export default class ButtonToolbarDocs extends BaseComponent {

    render() {
        return <g>
            <Props>
                <Prop name="role" type="string" initial="group" description="Value for the 'role' attribute." />
            </Props>
        </g>;
    }
}