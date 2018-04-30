import React from 'react';

const Item = props => {
    return (
        <div style={{marginBottom: '5px'}}>
            <span style={{fontWeight: 'bold'}}>{`${props.title}: `}</span> 
            {
                (/\_url/.test(props.title) || /\url/.test(props.title))
                ? <a href={props.value} target='_blunk'>{props.value}</a>
                : <span>{`${props.value}`}</span>
            }
        </div>
    );
}

export default Item;