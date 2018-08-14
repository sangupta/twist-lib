import { Component, BaseComponent, Attribute } from "@twist/react";
import { Props, Prop } from '../Props';
import React from 'react';
import Aux from "helper/Aux";

@Component
export default class BreadcrumbDocs extends BaseComponent {

    render() {
        return <Aux>
            <Props label='Breadcrumb'>
                <Prop name='ariaLabel' />
            </Props>

            <Props label='BreadcrumbItem'>
                <Prop name='active' />
            </Props>

            <Props label='BreadcrumbLink'>
                <Prop name='active' />
                <Prop name='href' />
                <Prop name='title' />
                <Prop name='target' />
            </Props>
        </Aux>;
    }

}
