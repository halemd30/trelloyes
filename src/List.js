import React from 'react';
import Card from './Card';
import { tsPropertySignature, thisExpression } from '@babel/types';

function Card(props) {
  return (
    <section>
      <div>
        {props.cards.map((card) =>
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            content={card.content}
            onClickDelete={props.onClickDelete}
          />
        )}
        <button
          type='button'
          className='List-add-button'
          onClick={() => props.onClickAdd(props.id)}
        >
          + Add Random Card
        </button>
      </div>
    </section>
  )
}

List.defaultProps = {
  onClickAdd: () => {},
}

export default Card;