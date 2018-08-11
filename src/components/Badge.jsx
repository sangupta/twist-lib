/**
 * Simple badge component based on BS
 *
 * Ref: http://getbootstrap.com/docs/4.1/components/badge/
 */
@Component
export default class Badge {

  @Attribute variant;
  
  @Attribute isPill = false;
  
  render() {
    let classes = 'badge ';
    if(this.isPill) {
      classes = classes + 'badge-pill ';
    }
    
    classes = classes + 'badge-' + this.variant;
    
    return <span class={ classes }>
      { this.children }
    </span>;
  }
  
}
