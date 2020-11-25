import React from 'react'
import styled from 'styled-components'

//Own Components
import Card from './Card'
import NewTasks from './NewTasks'

const Container = styled.div`

`

function DashboardHome() {
    return (
        <Container>
            <div className="d-flex justify-content-between">
                <Card number="35" name="Tasks Completed" icon="clarity:tasks-line" color="#068f21" backgroundIcon="#dcf5e1"/>
                <Card number="6" name="Tasks In Progress" icon="carbon:in-progress" color="#dbb902" backgroundIcon="#f7e897"/>
                <Card number="12" name="New Tasks" icon="ant-design:bars-outlined" color="#4504b5" backgroundIcon="#d1bdf2"/>
            </div>
            <NewTasks />
        </Container>
    )
}

export default DashboardHome