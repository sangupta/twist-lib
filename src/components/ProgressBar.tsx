import { Component, BaseComponent, Attribute, Bind } from '@twist/react';
import React from 'react';

@Component
export default class ProgressBar extends BaseComponent {

    @Attribute label:string = '';

    @Attribute percent:number = 0;

    @Attribute variant:string = '';

    @Attribute min:number = 0;

    @Attribute max:number = 100;

    @Attribute role:string = 'progressbar';
    
    render() {
        return <div class='progress'>
            <div class= { 'progress-bar bg-' + this.variant } style={ 'width: ' + this.percent + '%' }  
                 role={ this.role } aria-valuenow={ this.percent } 
                 aria-valuemin={ this.min } aria-valuemax={ this.max } { ...this.undeclaredAttributes() }>
                { this.label }
            </div>
        </div>;
    }

}
