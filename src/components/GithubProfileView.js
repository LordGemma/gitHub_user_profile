import React from 'react';
import Item from './Item';

const GithubProfileView = props => {
    if(typeof props.data === 'string') {
        return <div>{props.data}</div>
    }
    return Object.keys(props.data).map(function(key) {
        return <Item key={key} title={key} value={props.data[key]} />
    });
}

export default GithubProfileView;