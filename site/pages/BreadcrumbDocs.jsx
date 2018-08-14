import { Props, Prop } from '../Props';

@Component
export default class BreadcrumbDocs {

    render() {
        return <g>
            <Props label='Breadcrumb'>
                <Prop name='ariaLabel' />
            </Props>

            <Props label='BreadcrumbItem'>
                <Prop name='active' />
            </Props>

            <Props label='BreadcrumbLink'>
                <Prop name='active' />
                <Prop name='href' />
                <Prop name='title' />
                <Prop name='target' />
            </Props>
        </g>;
    }

}
