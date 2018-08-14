import { Component, BaseComponent, Attribute, Bind } from '@twist/react';
import React from 'react';

/**
 * Simple badge component based on BS
 *
 * Ref: http://getbootstrap.com/docs/4.1/components/badge/
 */
@Component
export default class Badge extends BaseComponent {

  @Attribute variant:string = 'primary';
  
  @Attribute pill:boolean = false;
  
  render() {
    return <span class={ 'badge badge-' + this.variant } class-badge-pill={ this.pill } { ...this.undeclaredAttributes() }>
      { this.children }
    </span>;
  }
  
}
