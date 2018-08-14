import { Component, BaseComponent, Attribute } from "@twist/react";
import { Props, Prop } from '../Props';
import React from 'react';

@Component
export default class ImageDocs extends BaseComponent {

    render() {
        return <g>
            <Props>
                <Prop name="src" type="string" required='true' description="Image source to use." />
                <Prop name="responsive" type="boolean" initial="true" description="Use repsonsive image layout to fill parent." />
                <Prop name="thumbnail" type="boolean" initial="false" description="Show image as thumbnail." />
            </Props>
        </g>;
    }
}
