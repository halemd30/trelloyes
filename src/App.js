import React from 'react';
import List from './List';
import './App.css';


function App(props) {
  return (
    <div className="App">
      {props.store.lists.map(list => {
        console.log(list)
        return (<List cards={list.cardIds.map(id => props.store.allCards[id])}
        header={list.header}
        />)
        
      })}
      
    </div>
  );
}

export default App;
