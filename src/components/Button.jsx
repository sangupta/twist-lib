/**
 * Simple button component based on BS
 *
 * Ref: http://getbootstrap.com/docs/4.1/components/buttons/
 */
@Component
export default class Button {

  @Attribute variant;
  
  @Attribute isOutline = false;
  
  render() {
    let classes = 'btn ';
    if(this.isOutline) {
      classes = classes + 'btn-outline-' + this.variant;
    } else {
      classes = classes + 'btn-' + this.variant;
    }
    
    return <button type='button' class={ classes }>
      { this.children }
    </button>;

}
