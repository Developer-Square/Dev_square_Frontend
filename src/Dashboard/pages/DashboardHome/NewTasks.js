import React from 'react'
import styled from 'styled-components'

//Own Components
import ViewAllButton from '../../Dashboard_Components/ViewAllButton'

const Container = styled.div`
    .card {
        box-shadow: 0 0.46875rem 2.1875rem rgba(4,9,20,0.03), 0 0.9375rem 1.40625rem rgba(4,9,20,0.03), 0 0.25rem 0.53125rem rgba(4,9,20,0.05), 0 0.125rem 0.1875rem rgba(4,9,20,0.03);
        border-width: 0;
        transition: all .2s;
    }

    .main-card {
        width: 685px;
        height: auto;
    }

    
    .card-body {
        align-items: center;
    }

    .card-title {
        color: ${({theme}) => theme.darkColor};
        font-weight: 600;
    }
`

export default function Card({number, name, backgroundIcon, icon, color}) {

    let today = new Date()
    let time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`

    return (
        <Container backgroundIcon={backgroundIcon} color={color}>
            <div class="main-card mb-3 card">
                <div class="card-body"><h5 class="card-title">New Tasks</h5>
                    <table class="mb-0 table table-striped">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Task Name</th>
                            <th>Created At</th>
                            <th>Stack</th>
                            <th>Project</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Create Header for homepage</td>
                            <td>{time}</td>
                            <td>React</td>
                            <td>Housing Project</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                            <td>Create Login Component for users</td>
                            <td>{time}</td>
                            <td>Angular</td>
                            <td>Mall Project</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                            <td>Enable users to login</td>
                            <td>{time}</td>
                            <td>Nodejs</td>
                            <td>Housing Project</td>
                        </tr>
                        </tbody>
                    </table>
                    <ViewAllButton title="Tasks" marginTop="1rem" marginBottom="0"/>
                </div>
            </div>
        </Container>
    )
}
