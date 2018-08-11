import { Component, BaseComponent, Attribute, Bind } from '@twist/react';
import React from 'react';

@Component({ events: [ "fetch" ] })
export default class InfinteScroll {

    /**
     * The scrolling threshold to use for detecting fetch region
     */
    @Attribute scrollThreshold = 250;

    /**
     * Class names to be added to the container
     */
    @Attribute classes = '';

    /**
     * Stop detection of scrolling events as there may not be anymore
     * items available on server to add to container. Set this to true
     * to indicate that all pages have been added.
     */
    @Attribute stopDetection:boolean = false;

    /**
     * The reference HTML element for the container
     */
    htmlElement = null;

    componentDidMount() {
        this.htmlElement.addEventListener('scroll', this.handleScroll);
    }
 
    componentWillUnmount() {
        this.htmlElement.removeEventListener('scroll', this.handleScroll);
    }

    @Bind
    handleScroll() {
        // TODO: debounce this event handler
        
        if(this.stopDetection) {
            // we are at the end of container
            return;
        }

        let height = this.htmlElement.scrollHeight; // all content height
        let scrolled = this.htmlElement.scrollTop; // current scrolled height
        let rendered = this.htmlElement.clientHeight; // current height of rendered

        let total = scrolled + rendered + this.scrollThreshold;

        if(total >= height) {
            // we are at the bottom
            // relay the event to load more items
            // Debug.log('load more items now');
            this.trigger("fetch");
            return;
        }
    }

    render() {
        return <div class={ this.classes } ref={ this.htmlElement }>
            { this.children }
        </div>;
    }   

}
