import React from 'react';
import ReactDOM from 'react-dom';

import Alert from 'components/Alert';

@Component
class App {

    render() {
        return <Alert variant='primary'>
            Hello World!
        </Alert>;
    }

}

// mount the application compoonent to document body
ReactDOM.render( <App />, document.body );
module.hot.accept();
