import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    .card {
        box-shadow: 0 0.46875rem 2.1875rem rgba(4,9,20,0.03), 0 0.9375rem 1.40625rem rgba(4,9,20,0.03), 0 0.25rem 0.53125rem rgba(4,9,20,0.05), 0 0.125rem 0.1875rem rgba(4,9,20,0.03);
        border-width: 0;
        transition: all .2s;
    }

    .main-card {
        width: 256px;
        height: auto;
        border-radius: 35px;
        margin-bottom: 50px !important;
    }

    
    .card-body {
        align-items: center;
    }

    .card-title {
        background: ${props => props.backgroundIcon};
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        justify-content: center;    
        align-items: center;
        color: #AAA5A5;
        margin-bottom: 0;
        font-weight: 600;
    }

    .card-title svg {
        font-size: 39px;
        color: ${props => props.color} !important;
    }

    .name {
        color: #AAA5A5;
        font-weight: 600;
        margin-top: -10px;
    }
`

const Tasks = styled.div`
    font-size: 55px;
    color: ${({theme}) => theme.darkColor};
    font-weight: 600;
`

export default function Card({number, name, backgroundIcon, icon, color}) {
    return (
        <Container backgroundIcon={backgroundIcon} color={color}>
            <div className="main-card mb-3 card">
                <div className="card-body d-flex">
                    <h5 className="card-title ml-1">
                        <span className="iconify" data-icon={icon} data-inline="false"></span>
                    </h5>
                    <div className="ml-4">
                        <Tasks>{number}</Tasks>
                        <p className="name">{name}</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}
