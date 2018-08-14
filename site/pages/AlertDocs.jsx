import Alert from 'components/Alert';
import { Props, Prop } from '../Props';

@Component
export default class AlertDocs {

    render() {
        return <g>
            <h3>Alert</h3>

            Generate basic alerts.

            <div class='example'>
                <div class='result'>
                    <Alert>This is the default alert.</Alert>
                    <Alert variant="primary">This is the primary alert.</Alert>
                </div>
                <pre>
{ `import React from 'react';
import Alert from 'twist-lib/components/Alert';

@Component
export default class Example {

    render() {
        <Alert>This is the default alert.</Alert>
        <Alert variant="primary">This is the primary alert.</Alert>
    }

}` }
                </pre>
            </div>

            <Props>
                <Prop name="variant" type="enum" values="primary, secondary, danger" initial="primary" required="false" />
            </Props>
        </g>;
    }

}
