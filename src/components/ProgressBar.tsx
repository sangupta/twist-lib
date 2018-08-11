import { Component, BaseComponent, Attribute, Bind } from '@twist/react';
import React from 'react';

@Component
export default class ProgressBar {

    @Attribute label:string = '';

    @Attribute percent:number = 0;

    @Attribute variant:string = '';

    render() {
        return <div class='progress'>
            <div class= { 'progress-bar bg-' + this.variant } style={ 'width: ' + this.percent + '%' }  
                 role='progressbar' aria-valuenow={ this.percent } 
                 aria-valuemin='0' aria-valuemax='100'>
                { this.label }
            </div>
        </div>;
    }

}
