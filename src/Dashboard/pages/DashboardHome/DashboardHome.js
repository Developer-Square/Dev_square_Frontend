import React from 'react'
import styled from 'styled-components'
import Row from 'react-bootstrap/Row'

//Own Components
import Card from './Card'
import TaskList from './TaskList'
import PieChart from './PieChart'
import ActiveUsers from './ActiveUsers'
import PercentageWidgets from './PercentageWidgets'

const Container = styled.div`
    height: max-content;
    .middle-element {
        margin-bottom: 50px;
    }
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
                <Card number="8" name="Tasks On Hold" icon="mdi:gesture-tap-hold" color="#085ed4" backgroundIcon="#7babed"/>
            </SpacedElements>
            <Row className="d-flex justify-content-between middle-element">
                <TaskList className="col-5"/>
                <PieChart className="col-5"/>
            </Row>
            <Row>
                <ActiveUsers/>
            </Row>
            <PercentageWidgets />
        </Container>
    )
}

export default DashboardHome