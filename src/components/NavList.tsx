import { Component, BaseComponent, Attribute } from "@twist/react";

@Component
export class NavList extends BaseComponent {

    @Attribute vertical:boolean = false;

    @Attribute asTabs:boolean = false;

    @Attribute asPills:boolean = false;

    render() {
        return <ul class='nav' class-flex-column={ this.vertical } class-nav-tabs={ this.asTabs } class-nav-pills={ this.asPills } { ...this.undeclaredAttributes() }>
            { this.children }
        </ul>;
    }

}

@Component
export class NavListLink extends BaseComponent {

    @Attribute active:boolean = false;

    @Attribute disabled:boolean = false;

    render() {
        return <li class="nav-item">
            <a class='nav-link' class-active={ this.active } class-disabled={ this.disabled } { ...this.undeclaredAttributes() }>
                { this.children }
            </a>
        </li>;
    }
}
