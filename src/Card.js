import React from 'react';

function Card(props) {

    return (
      <div className='Card button' key={props.id}>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </div>  
    );
}

export default Card;