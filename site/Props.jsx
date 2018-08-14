@Component
export class Props {

    render() {
        return <div class='props-container'>
            <h3>Available Properties</h3>
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

    @Attribute name;

    @Attribute type;

    @Attribute initial;

    @Attribute required;

    @Attribute description;

    @Attribute values;

    render() {
        return <tr>
            <td>{ this.name }</td>
            <td>{ this.type }</td>
            <td>{ this.initial }</td>
            <td>{ this.required }</td>
            <td>
                { this.description }
                <if condition={ this.values }>
                    Valid values are: { this.values }
                </if>
            </td>
        </tr>
    }
}
