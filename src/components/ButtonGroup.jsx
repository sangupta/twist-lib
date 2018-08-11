/**
 * Button group component from BS
 *
 * Ref: http://getbootstrap.com/docs/4.1/components/button-group/
 */
@Component
export default class ButtonGroup {

  @Attribute ariaLabel:string = '';
  
  @Attribute size:string = '';

  @Attribute vertical:boolean = false;
  
  render() {
    let classes:string = 'btn-group btn-group-' + this.size;
    if(this.vertical) {
      classes = classes + ' btn-group-vertical';
    }
    
    return <div class={ classes } role='group' aria-label={ this.ariaLabel }>
      { this.children }
    </div>;
  }
  
}
