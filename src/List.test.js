import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';
import { createRenderer } from 'react-dom/test-utils';

describe('<List />', () => {
    it('renders List component', () => {
        const div = document.createElement('div');
        ReactDOM.render(div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('renders the UI as expected', () => {
        const tree = createRenderer
            .create(<List 
                key={'1'}
                id={'1'}
                header={'First list'}
            />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})