import { Component, BaseComponent, Attribute } from "@twist/react";
import Aux from "helper/Aux";

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
        return <li class={ 'list-group-item list-group-item-' + this.variant } class-active={ this.active }  
                    class-disabled={ this.disabled } { ...this.undeclaredAttributes() }>{ this.children }</li>;
    }
}

@Component
export class ListGroupLink extends BaseComponent {

    @Attribute variant:string = '';

    @Attribute active:boolean = false;

    @Attribute disabled:boolean = false;

    render() {
        return <a class={ 'list-group-item list-group-item-action list-group-item-' + this.variant } class-active={ this.active }  
                    class-disabled={ this.disabled } { ...this.undeclaredAttributes() }>{ this.children }</a>;
    }
}

@Component
export class ListGroupButton extends BaseComponent {

    @Attribute type:string = 'button';

    @Attribute variant:string = '';

    @Attribute active:boolean = false;

    @Attribute disabled:boolean = false;

    render() {
        return <button type='button' class={ 'list-group-item list-group-item-action list-group-item-' + this.variant } class-active={ this.active }  
                    class-disabled={ this.disabled } { ...this.undeclaredAttributes() }>{ this.children }</button>;
    }
}
