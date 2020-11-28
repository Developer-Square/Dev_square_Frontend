import React from 'react'
import {withRouter} from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.a`
    border-left: 3px solid ${props => props.active === 'true' ? props.theme.activeMenu : "transparent"};
    width: 100%;
    padding: 0.6rem 0.3rem 0.3rem 2rem;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1rem;
    transition: 0.2s all ease-in-out;

    &:hover {
        background-color: rgba(0,0,0,0.1);
        text-decoration: none;
    }
`

const Span = styled.span`
    color: ${props => props.active === 'true' ? props.theme.activeMenu : "#AAA5A5"};
    font-size: 1rem;
    margin-right: 1rem;
    margin-bottom: 10px;
`

const Title = styled.h1`
    font-size: 0.9rem;
    font-weight: 300;
    color: ${props => props.active === 'true' ? props.theme.activeMenu : "#AAA5A5"};
`

function MenuItem({active, icon, title, history}) {

    const navigation = () => {
        if (title === 'Dashboard') {
            history.push('/dashboard/home')
        } else if (title === 'Users') {
            history.push('/dashboard/users')
        } else if (title === 'Clients') {
            history.push('/dashboard/clients')
        } else if (title === 'Portfolio') {
            history.push('/dashboard/portfolio')
        } else{
            history.push('/dashboard/tasks')
        }
    }
    return (
        <Container active={active} onClick={navigation}>
            <Span active={active} className="iconify" data-icon={`${icon}`} data-inline="false"></Span>
            <Title active={active} >{title}</Title>
        </Container>
    )
}

export default withRouter(MenuItem);