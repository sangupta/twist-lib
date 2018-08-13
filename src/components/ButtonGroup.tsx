import { Component, BaseComponent, Attribute, Bind } from '@twist/react';
import React from 'react';

/**
 * Button group component from BS
 *
 * Ref: http://getbootstrap.com/docs/4.1/components/button-group/
 */
@Component
export default class ButtonGroup extends BaseComponent {

  @Attribute ariaLabel:string = '';
  
  @Attribute size:string = '';

  @Attribute vertical:boolean = false;
  
  render() {
    return <div class={ 'btn-group btn-group-' + this.size } class-btn-group-vertical={ this.vertical } role='group' aria-label={ this.ariaLabel }>
      { this.children }
    </div>;
  }
  
}
