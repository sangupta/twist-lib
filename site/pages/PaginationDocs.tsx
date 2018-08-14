import { Component, BaseComponent, Attribute } from "@twist/react";
import { Props, Prop } from '../Props';
import React from 'react';
import Aux from "helper/Aux";

@Component
export default class PaginationDocs extends BaseComponent {

    render() {
        return <Aux>
            <Props label='Pagination'>
                <Prop name="size" />
            </Props>

            <Props label='PaginationLink'>
                <Prop name="active" />
                <Prop name="disabled" />
            </Props>
        </Aux>;
    }
}
