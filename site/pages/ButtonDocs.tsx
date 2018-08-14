import Button from 'components/Button';
import { Component, BaseComponent, Attribute } from "@twist/react";
import { Props, Prop } from '../Props';
import React from 'react';
import Aux from 'helper/Aux';

@Component
export default class ButtonDocs extends BaseComponent {

    render() {
        return <Aux>
            <h3>Button</h3>

            <Props>
                <Prop name="variant" type="enum" values="primary, secondary, success, danger, warning, info" initial="primary" />
                <Prop name="outline" type="boolean" initial="false" description="Show button as an outline." />
                <Prop name="size" type="string" values="lg, sm" initial="null" description="Specify the size of the button." />
                <Prop name="block" type="boolean" initial="false" description="Display button as a block button." />
                <Prop name="active" type="boolean" initial="false" description="Apply active state to the button." />
                <Prop name="disabled" type="boolean" initial="false" description="Apply disabled state to the button." />
                <Prop name="type" type="string" initial="button" description="The value to use for 'type' attribute." />
            </Props>
        </Aux>;
    }

}