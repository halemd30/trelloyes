import React from 'react';

function Card() {
  return (
    <div className='Card'>
      <button
        type='button'
        onClick={() => props.onClickDelete(props.id)}
      >
        delete
      </button>
    </div>
  )
}

Card.propTypes = {
  onClickDelete: () => {}
}