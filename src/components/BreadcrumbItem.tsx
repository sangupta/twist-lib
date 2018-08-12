import { Component, BaseComponent, Attribute } from "@twist/react";

@Component
export default class BreadcrumbItem extends BaseComponent {

    @Attribute active:boolean = false;

    render() {
        return <li class='breadcrumb-item' class-active={ this.active }>
            { this.children }
        </li>;
    }

}
