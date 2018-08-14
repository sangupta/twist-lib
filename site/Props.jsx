@Component
export class Props {

    @Attribute label:string = '';

    render() {
        return <div class='props-container'>
            <if condition={ this.label }>
                <h3>Available Properties for { this.label }</h3>   
            </if>
            <else>
                <h3>Available Properties</h3>
            </else>

            <table class='table table-striped table-bordered table-hover'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Required</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    { this.children }
                </tbody>
            </table>
        </div>;
    }

}

@Component
export class Prop {

    @Attribute name:string = '';

    @Attribute type:string = '';

    @Attribute initial:string = '';

    @Attribute required:boolean = false;

    @Attribute description:string = '';

    @Attribute values:string = '';

    render() {
        return <tr>
            <td>{ this.name }</td>
            <td>{ this.type }</td>
            <td>{ this.initial }</td>
            <td>{ this.required }</td>
            <td>
                { this.description }
                <if condition={ this.values }>
                    { 'Valid values are: ' + this.values }
                </if>
            </td>
        </tr>
    }
}
