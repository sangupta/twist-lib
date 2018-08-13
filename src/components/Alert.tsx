import { Component, BaseComponent, Attribute, Bind } from '@twist/react';
import React from 'react';

/**
 * Simple alert component based on BS
 *
 * Ref: http://getbootstrap.com/docs/4.1/components/alerts/
 */
@Component
export default class Alert extends BaseComponent {

  @Attribute variant:string = 'primary';
  
  render() {
    return <div class={ 'alert alert-' + this.variant}>
      { this.children }
    </div>;
  }

}
