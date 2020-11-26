import React from 'react'
import styled from 'styled-components'

//Own Components
import Card from './Card'
import NewTasks from './NewTasks'
import PieChart from './PieChart'

const Container = styled.div`

`
const SpacedElements = styled.div`
    display: flex;
    justify-content: space-between;
`

function DashboardHome() {
    return (
        <Container>
            <SpacedElements>
                <Card number="35" name="Tasks Completed" icon="clarity:tasks-line" color="#068f21" backgroundIcon="#dcf5e1"/>
                <Card number="6" name="Tasks In Progress" icon="carbon:in-progress" color="#dbb902" backgroundIcon="#f7e897"/>
                <Card number="12" name="New Tasks" icon="ant-design:bars-outlined" color="#4504b5" backgroundIcon="#d1bdf2"/>
            </SpacedElements>
            <SpacedElements>
                <NewTasks />
                <PieChart />
            </SpacedElements>
        </Container>
    )
}

export default DashboardHome