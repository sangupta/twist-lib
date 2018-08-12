import { Component, BaseComponent, Attribute, Bind } from '@twist/react';
import React from 'react';

/**
 * Simple button component based on ANCHOR from BS
 *
 * Ref: http://getbootstrap.com/docs/4.1/components/buttons/
 */
@Component
export default class LinkButton extends BaseComponent {

  @Attribute variant:string = '';
  
  @Attribute href:string = '';
  
  @Attribute outline:boolean = false;

  @Attribute size:string = '';

  @Attribute block:boolean = false;

  @Attribute active:boolean = false;

  @Attribute disabled:boolean = false;
  
  @Attribute tabIndex;
  
  render() {
    let classes = 'btn ';
    
    // take care of outline
    if(this.outline) {
      classes = classes + 'btn-outline-' + this.variant;
    } else {
      classes = classes + 'btn-' + this.variant;
    }
    
    // take care of size - it can be empty, lg or sm
    if(this.size.length > 0) {
      classes = classes + ' btn-' + this.size;
    }
    
    // take care of block level button
    if(this.block) {
      classes = classes + ' btn-block';
    }
    
    // take care of active state
    if(this.active) {
      classes = classes + ' active';
    }
    
    // take care of disabled state
    if(this.disabled) {
      classes = classes + ' disabled';
    }
    
    return <a class={ classes } href={ this.href } tabindex={ this.tabIndex } role='button'>
      { this.children }
    </a>;
  }
  
}
