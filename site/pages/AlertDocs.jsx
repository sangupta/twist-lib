import Alert from 'components/Alert';

@Component
export default class AlertDocs {

    render() {
        return <g>
            <h3>Alert</h3>

            <pre>{ `import React from 'react';
import Alert from 'twist-lib/components/Alert';

@Component
export default class Example {

    render() {
        <Alert>This is the default alert.</Alert>
        <Alert variant="primary">This is the primary alert.</Alert>
    }

}` }</pre>

            <div class='runtime'>
                <Alert>This is the default alert.</Alert>
                <Alert variant="primary">This is the primary alert.</Alert>
            </div>
        </g>;
    }

}
