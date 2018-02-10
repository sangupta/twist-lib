@Component
export default class LaptopMode {
    
    render() {
        <if condition={ this.scope.twistLibPageMode == 'laptop' }>
            { this.children }
        </if>
    }

}
