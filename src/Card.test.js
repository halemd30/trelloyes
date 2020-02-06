import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

describe('<Card />', () => {
    it('renders Card component', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})