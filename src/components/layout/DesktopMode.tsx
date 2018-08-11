@Component
export default class DesktopMode {
    
    render() {
        <if condition={ this.scope.twistLibPageMode == 'desktop' }>
            { this.children }
        </if>
    }

}
