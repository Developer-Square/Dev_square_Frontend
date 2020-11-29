import React from 'react'
import styled from 'styled-components'
import Row from 'react-bootstrap/Row'

//Own Components
import Tasks from './Tasks'

const Container = styled.div`

`

function TasksPage() {
    return (
        <Container>
            <Row>
                <Tasks />
            </Row>
        </Container>
    )
}

export default TasksPage