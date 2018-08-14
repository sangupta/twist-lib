import ButtonToolbar from 'components/ButtonToolbar';
import { Props, Prop } from '../Props';

@Component
export default class ButtonToolbarDocs {

    render() {
        return <g>
            <Props>
                <Prop name="role" type="string" initial="group" description="Value for the 'role' attribute." />
            </Props>
        </g>;
    }
}