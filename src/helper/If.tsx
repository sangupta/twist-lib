import React from 'react';

const IfClause = props => {
    if(props.condition) {
        return props.children;
    }

    return null;
}

export default IfClause;
