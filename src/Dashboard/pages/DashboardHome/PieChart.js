import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

`

export default function PieChart() {
    return (
        <Container>
            <div class="main-card mb-3 card">
                <div class="card-body">
                    <h5 class="card-title">Doughnut</h5>
                    <canvas id="doughnut-chart"></canvas>
                </div>
            </div>
        </Container>
    )
}
