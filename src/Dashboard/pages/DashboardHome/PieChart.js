import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {Doughnut} from 'react-chartjs-2'

const Container = styled.div`
    .card-body {
        padding: 0;
        align-items: center;
    }
`

const CardContainer = styled.div`
    width: auto;
    height: auto;
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
    const [data, setData] = useState('')

    const chartData = {
        labels: ['Completed Tasks', 'Tasks In Progress', 'Task Not Started'],
        datasets: [{
            label: 'Project Diamond',
            data: [45, 33, 78],
            backgroundColor: [
                '#50b340',
                '#ecf07d',
                '#585280'
            ]
        }]
    }

    useEffect(() => {
        setData(chartData)
    }, [chartData])

    return (
        <Container>
            <CardContainer className="main-card mb-3 card">
                <div className="card-body">
                    <CardTitle className="card-title">Projects</CardTitle>
                    <div className="chart">
                        <Doughnut 
                            height={300}
                            data={data}
                            options={{
                                title: {
                                    display: true,
                                    text: `Check the progress of your project`,
                                    fontSize: 24
                                },
                                legend: {
                                    display: true,
                                    position: "bottom",
                                    labels: {
                                        fontColor: '#585280'
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
