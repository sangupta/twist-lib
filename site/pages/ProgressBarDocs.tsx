import { Component, BaseComponent, Attribute } from "@twist/react";
import { Props, Prop } from '../Props';
import React from 'react';
import Aux from "helper/Aux";

@Component
export default class ProgressBarDocs extends BaseComponent {

    render() {
        return <Aux>
            <Props>
                <Prop name="label" />
            </Props>
        </Aux>;
    }
}
