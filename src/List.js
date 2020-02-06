import React from 'react';
import Card from './Card';
import { tsPropertySignature } from '@babel/types';

function List(props) {
    return (
        <div className='List-header'>
            <h2>{props.header}</h2>
            <div className='List-cards List-add-button'>
                {props.cards.map(card => {
                    console.log(card)
                    return (<Card {...card}/>)
                })}
            </div>
        </div>
    );
}

export default List;