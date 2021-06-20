import React from 'react'
import {shallow} from 'enzyme'
import {render, screen} from '@testing-library/react'
import About from './AboutUs'
import {findByTestAttr} from '../../testing-utils'

const setUp = (props={}) => {
    // First render the component so as to use getByTestId
    render(<About />)
    const component = shallow(<About {...props}/>)
    return component
}

const textContent = ['aboutUsHeader', 'aboutUsHeaderContent', 'aboutUsLeftSection']
const htmlElements = ['aboutUsHeader', 'aboutUsSection']

describe('About us component', () => {
    let component;
    beforeEach(() => {
        component = setUp()
    })

    it('Should render all the major elements in the component', () => {
        htmlElements.map(element => {
            const wrapper = findByTestAttr(component, element)
            expect(wrapper.length).toBe(1)
        })
    })

    it('Should render all the text in the component', () => {
        textContent.map(Id => {
            const wrapper = findByTestAttr(component, Id)
            expect(wrapper.text()).toBeTruthy()
        })
    })
})

// TODO: Test that the about-us header-text is being displayed
// TODO: Test that the about-us left section text is being displayed
// TODO: Test that the tecHive question is being displayed
// TODO: Test that the tecHive answer is being displayed
// TODO: Test that the experiences question is being displayed
// TODO: Test that the experiences answer is being displayed
// TODO: Test that the learn-more question is being displayed
// TODO: Test that the learn-more answer is being displayed