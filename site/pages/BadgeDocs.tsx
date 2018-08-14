import Badge from 'components/Badge';
import { Component, BaseComponent, Attribute } from "@twist/react";
import { Props, Prop } from '../Props';
import React from 'react';

@Component
export default class BadgeDocs extends BaseComponent {

    render() {
        return <g>
            <h3>Badge</h3>

            Basic badges in a heading.

            <div class='example'>
                <div class='result'>
                    <h1><Badge>primary</Badge> badge in a H1</h1>
                    <h2><Badge variant="secondary">secondary</Badge> badge in a H2</h2>
                </div>
                <pre>
{ `import React from 'react';
import Alert from 'twist-lib/components/Alert';

@Component
export default class Example {

    render() {
        return <g>
            <h1><Badge>primary</Badge> badge in a H1</h1>
            <h2><Badge variant="secondary">secondary</Badge> badge in a H2</h2>
        </g>;
    }

}` }
                </pre>
            </div>

            Badges rendered as a pill.

            <div class='example'>
                <div class='result'>
                <Badge pill={ true }>primary</Badge>
                <br />
                <Badge variant="secondary" pill={ true }>secondary</Badge>
                </div>
                <pre>
{ `import React from 'react';
import Alert from 'twist-lib/components/Alert';

@Component
export default class Example {

    render() {
        return <g>
            <Badge pill={ true }>primary</Badge>
            <br />
            <Badge variant="secondary" pill={ true }>secondary</Badge>
        </g>;
    }

}` }
                </pre>
            </div>

            <Props>
                <Prop name="variant" type="enum" values="primary, secondary, success, danger, warning, info" initial="primary" required="false" />
                <Prop name="pill" type="boolean" initial="false" required="false" />
            </Props>
        </g>;
    }

}
