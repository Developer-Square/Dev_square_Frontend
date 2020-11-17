import React from 'react'
import styled from 'styled-components'

const Switch = styled.div`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    width: ${({theme}) => theme.switchWidth};
    height: ${({theme}) => theme.switchHeight};
    border-radius: 50em;
    padding: ${({theme}) => theme.switchPadding} 0;

    .switch__input, .switch__label {
        position: absolute;
        left: 0;
        top: 0;
    }

    .switch__input {
        margin: 0;
        padding: 0;
        pointer-events: none;
        height: 0;
        width: 0;
        opacity: 0;

        &:checked + .switch__label {
            background-color: ${({theme}) => theme.colorWhite};
        }

        &:checked + .switch__label + .switch__marker {
            left: calc(100% - ${({theme}) => theme.switchHeight} + ${({theme}) => theme.switchPadding});
        }

        &:focus + .switch__label,
        &:active + .switch__label{
            box-shadow: 0 0 0 3px alpha(${({ theme }) => theme.primary}, 0.2);
        }
    }
`

function ToggleSwitch() {
    return (
        <Switch>
            <input className="switch__input" type="checkbox" id="switchCheckbox"/>
            <label aria-hidden="true" className="switch__label" htmlFor="switchCheckbox">On</label>
            <div aria-hidden="true" className="switch__marker"></div>
        </Switch>
    )
}

export default ToggleSwitch;