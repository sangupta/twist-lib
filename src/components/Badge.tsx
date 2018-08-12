import { Component, BaseComponent, Attribute, Bind } from '@twist/react';
import React from 'react';

/**
 * Simple badge component based on BS
 *
 * Ref: http://getbootstrap.com/docs/4.1/components/badge/
 */
@Component
export default class Badge extends BaseComponent {

  @Attribute variant:string = '';
  
  @Attribute pill:boolean = false;
  
  render() {
    let classes = 'badge ';
    if(this.pill) {
      classes = classes + 'badge-pill ';
    }
    
    classes = classes + 'badge-' + this.variant;
    
    return <span class={ classes }>
      { this.children }
    </span>;
  }
  
}
