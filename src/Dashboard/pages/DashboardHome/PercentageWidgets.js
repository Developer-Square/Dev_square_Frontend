import React from 'react'
import styled from 'styled-components'

const Container = styled.div` 
    display: flex;
    justify-content: space-between;
    padding-bottom: 50px;

    .card-body {
        align-items: center;
    }
`

const CardContainer = styled.div`
    width: 250px;
    height: auto;
    box-shadow: 0 0.46875rem 2.1875rem rgba(4,9,20,0.03), 0 0.9375rem 1.40625rem rgba(4,9,20,0.03), 0 0.25rem 0.53125rem rgba(4,9,20,0.05), 0 0.125rem 0.1875rem rgba(4,9,20,0.03);
    border-width: 0;
    transition: all .2s;

    .widget-content {
        padding: 1rem;
        flex-direction: row;
        align-items: center;
    }

    .widget-content-outer {
        display: flex;
        flex: 1;
        flex-direction: column;
    }

    .widget-content-wrapper {
        display: flex;
        flex: 1;
        position: relative;
        align-items: center;
    }

    .fsize-1 {
        font-size: .95rem !important;
    }

    .widget-numbers {
        font-weight: bold;
        font-size: 1.6rem;
        display: block;
    }

    .text-muted {
        opacity: .6;
    }
`

export default function PercentageWidgets() {
    return (
        <Container>
            <CardContainer className="main-card card-shadow-danger widget-chart widget-chart2 text-left mb-3 card">
                        <div className="widget-content">
                            <div className="widget-content-outer">
                                <div className="widget-content-wrapper">
                                    <div className="widget-content-left pr-2 fsize-1">
                                        <div className="widget-numbers mt-0 fsize-3 text-danger">71%</div>
                                    </div>
                                    <div className="widget-content-right w-100 ml-auto">
                                        <div className="progress-bar-xs progress">
                                            <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="71" aria-valuemin="0" aria-valuemax="100" style={{width: "71%"}}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="widget-content-left fsize-1">
                                    <div className="text-muted opacity-6">Expenses Target</div>
                                </div>
                            </div>
                        </div>
            </CardContainer>
            <CardContainer className="main-card card-shadow-danger widget-chart widget-chart2 text-left mb-3 card">
                        <div className="widget-content">
                            <div className="widget-content-outer">
                                <div className="widget-content-wrapper">
                                    <div className="widget-content-left pr-2 fsize-1">
                                        <div className="widget-numbers mt-0 fsize-3 text-success">54%</div>
                                    </div>
                                    <div className="widget-content-right w-100 ml-auto">
                                        <div className="progress-bar-xs progress">
                                            <div className="progress-bar bg-success" role="progressbar" aria-valuenow="54" aria-valuemin="0" aria-valuemax="100" style={{width: "54%"}}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="widget-content-left fsize-1">
                                    <div className="text-muted opacity-6">Income Target</div>
                                </div>
                            </div>
                        </div>
            </CardContainer>
            <CardContainer className="main-card card-shadow-danger widget-chart widget-chart2 text-left mb-3 card">
                        <div className="widget-content">
                            <div className="widget-content-outer">
                                <div className="widget-content-wrapper">
                                    <div className="widget-content-left pr-2 fsize-1">
                                        <div className="widget-numbers mt-0 fsize-3 text-warning">32%</div>
                                    </div>
                                    <div className="widget-content-right w-100 ml-auto">
                                        <div className="progress-bar-xs progress">
                                            <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="32" aria-valuemin="0" aria-valuemax="100" style={{width: "32%"}}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="widget-content-left fsize-1">
                                    <div className="text-muted opacity-6">Spendings Target</div>
                                </div>
                            </div>
                        </div>
            </CardContainer>
            <CardContainer className="main-card card-shadow-danger widget-chart widget-chart2 text-left mb-3 card">
                        <div className="widget-content">
                            <div className="widget-content-outer">
                                <div className="widget-content-wrapper">
                                    <div className="widget-content-left pr-2 fsize-1">
                                        <div className="widget-numbers mt-0 fsize-3 text-info">89%</div>
                                    </div>
                                    <div className="widget-content-right w-100 ml-auto">
                                        <div className="progress-bar-xs progress">
                                            <div className="progress-bar bg-info" role="progressbar" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100" style={{width: "89%"}}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="widget-content-left fsize-1">
                                    <div className="text-muted opacity-6">Total Targets</div>
                                </div>
                            </div>
                        </div>
            </CardContainer>
        </Container>
    )
}
