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
        <Alert variant="primary">This is an alert</Alert>
    }

}` }</pre>
            <Alert variant="primary">This is an alert</Alert>
        </g>;
    }

}
