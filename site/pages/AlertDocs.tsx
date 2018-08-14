import Alert from 'components/Alert';
import { Component, BaseComponent, Attribute } from "@twist/react";
import { Props, Prop } from '../Props';
import React from 'react';
import Aux from 'helper/Aux';

@Component
export default class AlertDocs extends BaseComponent {

    render() {
        return <Aux>
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
        return <div>
            <Alert>This is the default alert.</Alert>
            <Alert variant="primary">This is the primary alert.</Alert>
        </div>;
    }

}` }
                </pre>
            </div>

            <Props>
                <Prop name="variant" type="enum" values="primary, secondary, success, danger, warning, info" initial="primary" required="false" />
            </Props>
        </Aux>;
    }

}
