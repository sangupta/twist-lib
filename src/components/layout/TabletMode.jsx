@Component
export default class TabletMode {
    
    render() {
        <if condition={ this.scope.twistLibPageMode == 'tablet' }>
            { this.children }
        </if>
    }

}
