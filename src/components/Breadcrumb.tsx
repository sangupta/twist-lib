import { Component, BaseComponent } from "@twist/react";

@Component
export class Breadcrumb extends BaseComponent {

    render() {
        return <nav aria-label="breadcrumb">
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
        return <li class='breadcrumb-item' class-active={ this.active }>
            { this.children }
        </li>;
    }

}
