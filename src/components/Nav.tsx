import { Component, BaseComponent, Attribute } from "@twist/react";

@Component
export class Nav extends BaseComponent {

    @Attribute vertical:boolean = false;

    @Attribute asTabs:boolean = false;

    @Attribute asPills:boolean = false;

    render() {
        return <nav class='nav' class-flex-column={ this.vertical } class-nav-tabs={ this.asTabs } class-nav-pills={ this.asPills } { ...this.undeclaredAttributes() }>
            { this.children }
        </nav>;
    }

}

@Component
export class NavLink extends BaseComponent {

    @Attribute active:boolean = false;

    @Attribute disabled:boolean = false;

    render() {
        return <a class='nav-link' class-active={ this.active } class-disabled={ this.disabled }>
            { this.children }
        </a>;
    }
}
