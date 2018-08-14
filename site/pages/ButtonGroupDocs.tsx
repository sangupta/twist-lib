import ButtonGroup from 'components/ButtonGroup';
import { Component, BaseComponent, Attribute } from "@twist/react";
import { Props, Prop } from '../Props';
import React from 'react';

@Component
export default class ButtonGroupDocs extends BaseComponent {

    render() {
        return <g>
        <Props>
            <Prop name="size" type="string" values="lg, sm" initial="null" description="Specify the size of the button." />
            <Prop name="vertical" type="boolean" initial="false" description="Show button group vertically aligned." />
            <Prop name="role" type="string" initial="group" description="Value for the 'role' attribute." />
        </Props>
        </g>;
    }
}