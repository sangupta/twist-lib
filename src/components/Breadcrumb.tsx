import { Component, BaseComponent } from "@twist/react";

@Component
export default class Breadcrumb extends BaseComponent {

    render() {
        return <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                { this.children }
            </ol>
        </nav>;
    }

}
