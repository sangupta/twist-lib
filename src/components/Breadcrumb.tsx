import { Component, BaseComponent } from "@twist/react";

@Component
export class Breadcrumb extends BaseComponent {

    render() {
        return <nav aria-label="breadcrumb" { ...this.undeclaredAttributes() }>
            <ol class="breadcrumb">
                { this.children }
            </ol>
        </nav>;
    }

}

@Component
export class BreadcrumbItem extends BaseComponent {

    @Attribute active:boolean = false;

    render() {
        return <li class='breadcrumb-item' class-active={ this.active } { ...this.undeclaredAttributes() }>
            { this.children }
        </li>;
    }

}

@Component
export class BreadcrumbLink extends BaseComponent {

    @Attribute active:boolean = false;

    @Attribute href:string = '';

    @Attribute title:string = '';

    @Attribute target:string = '';

    render() {
        return <li class='breadcrumb-item' class-active={ this.active } { ...this.undeclaredAttributes() }>
            <a href={ this.href } target={ this.target } title={ this.title }>{ this.children }</a>
    </li>;
    }
}
