import { Component, BaseComponent, Attribute, Bind } from '@twist/react';
import React from 'react';

/**
 * Simple button toolbar component based on BS
 *
 * Ref: http://getbootstrap.com/docs/4.1/components/button-group/
 */
@Component
export default class ButtonToolbar extends BaseComponent {

  @Attribute role:string = 'toolbar';

  render() {
    return <div class="btn-toolbar" role={ this.role } { ...this.undeclaredAttributes() }>
      { this.children }
    </div>;
  }
  
}
