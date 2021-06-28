import {configure} from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
// To enable use of 'getByText' function
import '@testing-library/jest-dom/extend-expect';

configure({
    adapter: new EnzymeAdapter,
    disableLifecycleMethods: true
})
