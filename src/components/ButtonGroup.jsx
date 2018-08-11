/**
 * Button group component from BS
 *
 * Ref: http://getbootstrap.com/docs/4.1/components/button-group/
 */
@Component
export default class ButtonGroup {

  @Attribute ariaLabel:string = '';
  
  @Attribute size:string = '';
  
  render() {
    return <div class={ 'btn-group btn-group-' + this.size } role='group' aria-label={ this.ariaLabel }>
      { this.children }
    </div>;
  }
  
}
