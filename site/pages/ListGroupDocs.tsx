import { Component, BaseComponent, Attribute } from "@twist/react";
import { Props, Prop } from '../Props';
import React from 'react';

@Component
export default class ListGroupDocs extends BaseComponent {

    render() {
        return <g>
            <Props label='ListGroup'>
                <Prop name='flush' type='boolean' required='false' description='Remove some borders and rounded corners to render list-group items edge-to-edge in parent container (e.g. cards).' />
            </Props>

            <Props label='ListGroupItem'>
                <Prop name="variant" type="enum" values="primary, secondary, success, danger, warning, info" required="false" />
                <Prop name='active' type='boolean' required='false' description='Set active state on list-group item.' />
                <Prop name='disabled' type='boolean' required='false' description='Set disabled state on list-group item.' />
            </Props>

            <Props label='ListGroupLink'>
                <Prop name="variant" type="enum" values="primary, secondary, success, danger, warning, info" required="false" />
                <Prop name='active' type='boolean' required='false' description='Set active state on list-group item.' />
                <Prop name='disabled' type='boolean' required='false' description='Set disabled state on list-group item.' />
            </Props>

            <Props label='ListGroupButton'>
                <Prop name="variant" type="enum" values="primary, secondary, success, danger, warning, info" required="false" />
                <Prop name='active' type='boolean' required='false' description='Set active state on list-group item.' />
                <Prop name='disabled' type='boolean' required='false' description='Set disabled state on list-group item.' />
                <Prop name='type' type='string' required='false' initial='button' description="Value of the 'type' attribute" />
            </Props>

        </g>;
    }

}
