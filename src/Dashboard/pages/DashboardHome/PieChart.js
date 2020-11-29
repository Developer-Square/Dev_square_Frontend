import React, {useState} from 'react'
import styled from 'styled-components'
import {Dropdown, Tooltip, OverlayTrigger} from 'react-bootstrap'
import {Doughnut} from 'react-chartjs-2'

const Container = styled.div`
    .card-body {
        padding: 0;
        align-items: center;
    }

    .dropdown {
        width: 30%;
        margin-left: auto;
        margin-bottom: 15px;
    }
`

const CardContainer = styled.div`
    width: 500px;
    height: 377px;
    box-shadow: 0 0.46875rem 2.1875rem rgba(4,9,20,0.03), 0 0.9375rem 1.40625rem rgba(4,9,20,0.03), 0 0.25rem 0.53125rem rgba(4,9,20,0.05), 0 0.125rem 0.1875rem rgba(4,9,20,0.03);
    border-width: 0;
    transition: all .2s;
`

const CardTitle = styled.div`
    display: flex;
    align-items: center;
    padding: .75rem 1.25rem;
    height: 3.5rem;
    color: ${({theme}) => theme.darkColor};
    font-weight: 600;
    border-bottom: 1px solid rgba(0,0,0,.125);
    font-size: 1.2rem;
`

export default function PieChart() {
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Select your project to see the progress
        </Tooltip>
      );
      
    let [data] = useState('')
     data = {
        labels: ['Completed Tasks', 'Tasks On Hold', 'Tasks In Progress', 'Task Not Started'],
        datasets: [{
            label: 'Project Diamond',
            data: [45, 8, 33, 78 ],
            backgroundColor: [
                '#12e64b',
                '#085ed4',
                '#f1f50a',
                '#8b16f2',
            ]
        }]
    }

    return (
        <Container>
            <CardContainer className="main-card mb-3 card">
                <div className="card-body">
                    <CardTitle className="card-title">Projects</CardTitle>
                    <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip}
                    >
                        <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                                Project Izuku
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#">Project Izuku</Dropdown.Item>
                                <Dropdown.Item href="#">Project Eren</Dropdown.Item>
                                <Dropdown.Item href="#">Projec Ippo</Dropdown.Item>
                                <Dropdown.Item href="#">Projec Issei</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </OverlayTrigger>

                    <div className="chart">
                        <Doughnut 
                            width={1110}
                            height={554}
                            data={data}
                            options={{
                                legend: {
                                    display: true,
                                    position: "top",
                                    labels: {
                                        fontColor: '#585280',
                                        fontSize: 15
                                    }
                                }
                            }}
                        />
                    </div>
                </div>
            </CardContainer>
        </Container>
    )
}
