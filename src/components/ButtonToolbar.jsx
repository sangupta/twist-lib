/**
 * Simple button toolbar component based on BS
 *
 * Ref: http://getbootstrap.com/docs/4.1/components/button-group/
 */
@Component
export default class ButtonToolbar {

  @Attribute ariaLabel;

  render() {
    return <div class="btn-toolbar" role="toolbar" aria-label={ this.ariaLabel }>
      { this.children }
    </div>;
  }
  
}
