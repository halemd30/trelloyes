import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

describe('<Card />', () => {
    it('renders Card component', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('renders the UI as expected', () => {
        const tree = createRenderer
            .create(<Card 
                key={'a'}
                id={'a'}
                title={'First card'}
                content={'lorem ipsum umpa loompa'}
            />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})