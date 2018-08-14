import ButtonGroup from 'components/ButtonGroup';
import { Props, Prop } from '../Props';

@Component
export default class ButtonGroupDocs {

    render() {
        return <g>
        <Props>
            <Prop name="size" type="string" values="lg, sm" initial="null" description="Specify the size of the button." />
            <Prop name="vertical" type="boolean" initial="false" description="Show button group vertically aligned." />
            <Prop name="role" type="string" initial="group" description="Value for the 'role' attribute." />
        </Props>
        </g>;
    }
}