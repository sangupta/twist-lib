import { Component, BaseComponent, Attribute } from "@twist/react";

@Component
export class ListGroup extends BaseComponent {

    @Attribute flush:boolean = 'false';

    render() {
        return <ul class="list-group" class-list-group-flush={ this.flush} { ...this.undeclaredAttributes() }>
            { this.children }
        </ul>;
    }

}

@Component
export class ListGroupItem extends BaseComponent {

    @Attribute variant:string = '';

    @Attribute active:boolean = false;

    @Attribute disabled:boolean = false;

    render() {
        return <g>
            <li class={ 'list-group-item list-group-item-' + this.variant } class-active={ this.active }  class-disabled={ this.disabled } { ...this.undeclaredAttributes() }>{ this.children }</li>
        </g>;
    }
}

@Component
export class ListGroupLink extends BaseComponent {

    @Attribute variant:string = '';

    @Attribute active:boolean = false;

    @Attribute disabled:boolean = false;

    render() {
        return <g>
            <a class={ 'list-group-item list-group-item-action list-group-item-' + this.variant } class-active={ this.active }  class-disabled={ this.disabled } { ...this.undeclaredAttributes() }>{ this.children }</a>
        </g>;
    }
}

@Component
export class ListGroupButton extends BaseComponent {

    @Attribute type:string = 'button';

    @Attribute variant:string = '';

    @Attribute active:boolean = false;

    @Attribute disabled:boolean = false;

    render() {
        return <g>
            <button type='button' class={ 'list-group-item list-group-item-action list-group-item-' + this.variant } class-active={ this.active }  class-disabled={ this.disabled } { ...this.undeclaredAttributes() }>{ this.children }</button>
        </g>;
    }
}
