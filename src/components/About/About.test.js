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

const textContent = ['aboutUsHeader', 'aboutUsHeaderContent', 'aboutUsLeftSection', 'techiveDescription', 'experiences', 'learnMore', 'learnMoreAnswer', 'experiencesAnswer', 'techiveDescriptionAnswer']
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

    it('Should call handleChange function when question tab is clicked', () => {
        const handleChange =  jest.fn();
        const event  = {
            // You can use currentTarget or target
            currentTarget: {children: [{children: 
                [{
                    classList: {
                            toggle: () => {}
                    }
                }, {
                    classList: {
                        toggle: () => {}
                    }
                }]
            }, {
                classList: {
                    toggle: () => {}
            }
            }], classList: {
                toggle: () => {}
        }, className: {
            includes: () => {}
        }}
        }
        const component = shallow(<div onClick={handleChange}></div>)
        component.find('div').simulate('click', event)

        expect(handleChange).toBeCalled()
    })
})