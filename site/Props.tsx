import { Component, BaseComponent, Attribute } from "@twist/react";
import React from 'react';
import If from 'helper/If';

@Component
export class Props extends BaseComponent {

    @Attribute label:string = null;

    isNotEmpty(s:string):boolean {
        if(!s) {
            return false;
        }

        if(s === null) {
            return false;
        }

        if(s === '') {
            return false;
        }

        return true;
    }

    render() {
        console.log(this.label);

        return <div class='props-container'>
            <If condition={ this.isNotEmpty(this.label) }>
                <h3>Available Properties for { this.label }</h3>   
            </If>
            <If condition={ !this.isNotEmpty(this.label) }>
                <h3>Available Properties</h3>
            </If>

            <table class='table table-striped table-bordered table-hover'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Required</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    { this.children }
                </tbody>
            </table>
        </div>;
    }

}

@Component
export class Prop extends BaseComponent {

    @Attribute name:string = '';

    @Attribute type:string = '';

    @Attribute initial:string = '';

    @Attribute required:boolean = false;

    @Attribute description:string = '';

    @Attribute values:string = '';

    render() {
        return <tr>
            <td>{ this.name }</td>
            <td>{ this.type }</td>
            <td>{ this.initial }</td>
            <td>{ this.required }</td>
            <td>
                { this.description }
                <if condition={ this.values }>
                    { 'Valid values are: ' + this.values }
                </if>
            </td>
        </tr>
    }
}
