import { Component, BaseComponent, Attribute, Bind } from '@twist/react';
import React from 'react';

/**
 * Simple button toolbar component based on BS
 *
 * Ref: http://getbootstrap.com/docs/4.1/components/button-group/
 */
@Component
export default class ButtonToolbar extends BaseComponent {

  @Attribute ariaLabel;

  render() {
    return <div class="btn-toolbar" role="toolbar" aria-label={ this.ariaLabel }>
      { this.children }
    </div>;
  }
  
}
