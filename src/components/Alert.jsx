/**
 * Simple alert component based on BS
 *
 * Ref: http://getbootstrap.com/docs/4.1/components/alerts/
 */
@Component
export default class Alert {

  @Attribute variant:string = '';
  
  render() {
    return <div class={ 'alert alert-' + this.variant}>
      { this.children }
    </div>;
  }

}
