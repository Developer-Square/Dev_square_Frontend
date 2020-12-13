import React from 'react'
import styled from 'styled-components'
import Row from 'react-bootstrap/Row'
import {ToastContainer} from 'react-toastify'

//Own Components
import Tasks from './Tasks'

const Container = styled.div`

`

function TasksPage() {
    return (
        <Container>
            <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Row>
                <Tasks />
            </Row>
        </Container>
    )
}

export default TasksPage