import ButtonToolbar from 'components/ButtonToolbar';
import { Component, BaseComponent, Attribute } from "@twist/react";
import { Props, Prop } from '../Props';
import React from 'react';
import Aux from 'helper/Aux';

@Component
export default class ButtonToolbarDocs extends BaseComponent {

    render() {
        return <Aux>
            <Props>
                <Prop name="role" type="string" initial="group" description="Value for the 'role' attribute." />
            </Props>
        </Aux>;
    }
}