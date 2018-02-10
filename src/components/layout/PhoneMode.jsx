@Component
export default class PhoneMode {
    
    render() {
        <if condition={ this.scope.twistLibPageMode == 'phone' }>
            { this.children }
        </if>
    }

}
