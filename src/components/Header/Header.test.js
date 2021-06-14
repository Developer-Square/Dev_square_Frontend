import React from 'react'
import {shallow} from 'enzyme'
import { render } from '@testing-library/react';
import Header from './Header'
import {findByTestAttr} from '../../testing-utils/index'

const setUp = (props={}) => {
    const component = shallow(<Header {...props}/>)
    return component
}

const testingText = (text) => {
    const {getByText} = render(<Header />)
    const logoText = getByText(`${text}`)
    return logoText
}

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
        const text = testingText('tecHive')
        expect(text).toBeInTheDocument()
    })

    it('Should render the nav menu', () => {
        const wrapper = findByTestAttr(component, 'headerNav')
        expect(wrapper.length).toBe(1)
    })
})