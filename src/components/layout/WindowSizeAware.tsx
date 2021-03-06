import { Component, BaseComponent, Attribute, Bind } from '@twist/react';
import React from 'react';
import Aux from 'helper/Aux';

/**
 * This component tracks the window size and set the scope
 * variable named 'scope.twistLibPageMode' to one of phone, 
 * mobile, tablet, laptop or desktop. This allows easy construction
 * of responsive pages.
 *
 * @author sangupta
 */
@Component
export default class WindowSizeAware extends BaseComponent {

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    @Bind
    handleResize(event) {
        let width = window.innerWidth;
        let mode = 'desktop';

        if(width < 576) {
            mode = 'phone';
        } else if(width < 768) {
            mode = 'mobile';
        } else if(width < 992) {
            mode = 'tablet';
        } else if(width < 1200) {
            mode = 'laptop';
        }

        if(mode != this.scope.twistLibPageMode.screenSize) {
            this.scope.appContext.twistLibPageMode = mode;
        }
    }
    
    render() {
        return <Aux> { this.children } </Aux>;
    }

}
