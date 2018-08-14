import { Component, BaseComponent } from "@twist/react";

@Component
export class Pagination extends BaseComponent {

    @Attribute size:string = '';

    render() {
        return <nav>
            <ul class={ 'pagination pagination-' + this.size } { ...this.undeclaredAttributes() }>
                { this.children }
            </ul>
        </nav>;
    }

}

@Component
export class PaginationLink extends BaseComponent {

    @Attribute active:boolean = false;

    @Attribute disabled:boolean = false;

    render() {
        return <li class='page-item' class-active={ this.active } class-disabled={ this.disabled }>
            <a class='page-link' { ...this.undeclaredAttributes() }>{ this.children }</a>
        </li>;
    }
}
