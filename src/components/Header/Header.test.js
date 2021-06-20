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
const testingMultipleElements = (id, text ,type ) => {
    render(<Header />)
    if (type === 'multiple') {
        expect(screen.getAllByTestId(`${id}`)[0]).toHaveTextContent(`${text}`);
    } else {
        expect(screen.getByTestId(`${id}`)).toHaveTextContent(`${text}`);
    }
}


const navText = ['Home', 'About us', 'Portfolio', 'Services', 'Clients', 'Team', 'Blog', 'Contact']
const htmlElements = ['logoImg', 'headerNav']


describe('Header Component', () => {
    let component
    beforeEach(() => {
        component = setUp()
    })

    it('Should render all the major elements in the component', () => {
        htmlElements.map(element => {
            const wrapper = findByTestAttr(component, element)
            expect(wrapper.length).toBe(1)
        })
    })

    it('Should render logo text', () => {
        testingMultipleElements('logoText', 'tecHive')
    })

    it('Should render home nav text', () => {
        // Check whether all the nav items text matches the right text.
        navText.map(item => {
            const text = testingMultipleElements(item.toLowerCase(), item, 'multiple')
        })
    })

    // TODO: Test the scrollFunction.
})