import { Component, BaseComponent, Attribute } from "@twist/react";
import { Props, Prop } from '../Props';
import React from 'react';

@Component
export default class InfiniteScrollDocs extends BaseComponent {

    render() {
        return <g>
            <Props>
                <Prop name="scrollThreshold" />
                <Prop name="stopDetection" />
            </Props>
        </g>;
    }
}
