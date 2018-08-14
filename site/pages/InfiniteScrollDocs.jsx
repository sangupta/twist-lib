import { Props, Prop } from '../Props';

@Component
export default class InfiniteScrollDocs {

    render() {
        return <g>
            <Props>
                <Prop name="scrollThreshold" />
                <Prop name="stopDetection" />
            </Props>
        </g>;
    }
}
