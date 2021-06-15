import React from 'react'
import {shallow} from 'enzyme'
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import Header from './Header'
import {findByTestAttr} from '../../testing-utils/index'

const setUp = (props={}) => {
    const component = shallow(<Header {...props}/>)
    return component
}

// Testing an element's text.
const testingMultipleElements = (id, text, type) => {
    render(<Header />)
    if (type === 'multiple') {
        expect(screen.getAllByTestId(`${id}`)[0]).toHaveTextContent(`${text}`);
    } else {
        expect(screen.getByTestId(`${id}`)).toHaveTextContent(`${text}`);
    }
}

let navText = ['Home', 'About us', 'Portfolio', 'Services', 'Clients', 'Team', 'Blog', 'Contact']


describe('Header Component', () => {
    let component
    beforeEach(() => {
        component = setUp()
    })

    it('Should render logo image', () => {
        const wrapper = findByTestAttr(component, 'logoImg')
        expect(wrapper.length).toBe(1)
    })

    it('Should render logo text', () => {
        testingMultipleElements('logoText', 'tecHive')
    })

    it('Should render the nav menu', () => {
        const wrapper = findByTestAttr(component, 'headerNav')
        expect(wrapper.length).toBe(1)
    })

    it('Should render home nav text', () => {
        navText.map(item => {
            const text = testingMultipleElements(item.toLowerCase(), item, 'multiple')
        })
    })
})