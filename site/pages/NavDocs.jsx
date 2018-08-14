import { Props, Prop } from '../Props';
import Nav from 'components/Nav';

@Component
export default class NavDocs {

    render() {
        return <g>
        <h3>Nav</h3>

        Navigation component based on <code>nav</code> HTML tag. If you are looking for an unordered-list based
        navigation, check the <b>NavList</b> component.
        
            <Props>
                <Prop name='asTabs' type='boolean' initial='false' description='Render the navigation as tabs.' />
                <Prop name='asPills' type='boolean' initial='false' description='Render the navigation as pills.' />
                <Prop name='vertical' type='boolean' initial='false' description='Render the navigation vertically.' />
            </Props>
        </g>;
    }

}
