@Component
export default class MobileMode {
    
    render() {
        <if condition={ this.scope.twistLibPageMode == 'mobile' }>
            { this.children }
        </if>
    }

}
