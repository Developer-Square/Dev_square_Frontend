import React from 'react'
import styled from 'styled-components'

const Container = styled.div`    
    .card-body {
        padding: 0;
        align-items: center;
    }

    .ReactTable {
        position: relative;
        display: flex;
        flex-direction: column;
        border: 1px solid rgba(0,0,0,.1);
    }

    .rt-table {
        flex: auto 1;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        width: 100%;
        border-collapse: collapse;
        overflow: auto;
    }

    .rt-thead {
        flex: 1 0 auto;
        display: flex;
        flex-direction: column;
        user-select: none;
        background: rgba(0,0,0,.03);
        border-bottom: 1px solid #e9ecef;
        min-width: 500px;
    }

    .rt-tr {
        flex: 1 0 auto;
        display: inline-flex;
        text-align: center; 
    }

    .rt-th {
        padding: .3rem;
        color: #6c757d;
        flex: 200 0 auto;
        width: 200px;
        line-height: normal;
        position: relative;
        font-weight: 700;
        border-right: 1px solid #e9ecef;
        border-bottom: 1px solid #e9ecef;
        transition: box-shadow .3s cubic-bezier(.175,.885,.32,1.275);
        box-shadow: inset 0 0 0 0 transparent;
        text-overflow: ellipsis;
    }

    .rt-resizable-header {
        flex: 100 0 auto;
        width: 100px;
        overflow: visible;
        cursor: pointer;
        padding: .55rem;
        color: #545cd8;
    }

    .rt-resizable-header-content {
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .rt-resizer {
        display: inline-block;
        position: absolute;
        width: 36px;
        top: 0;
        bottom: 0;
        right: -18px;
        cursor: col-resize;
        z-index: 10;
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
    width: 100%;
    display: flex;
    align-items: center;
    padding: .75rem 1.25rem;
    height: 3.5rem;
    color: ${({theme}) => theme.darkColor};
    font-weight: 600;
    border-bottom: 1px solid rgba(0,0,0,.125);
    font-size: 1.2rem;
    margin-bottom: 0;
`

export default function ActiveUsers() {
    return (
        <Container>
            <CardContainer className="main-card mb-3 card">
                <div className="card-body">
                    <CardTitle className="card-title">Active Users</CardTitle>
                    <div className="ReactTable -striped -highlight">
                        <div className="rt-table" role="grid">
                            <div className="rt-thead">
                                <div className="rt-tr" role="row">
                                <div className="rt-th" role="columnheader" tabIndex='-1'>Name</div>
                                <div className="rt-th" role="columnheader" tabIndex='-1'>Info</div>
                                <div className="rt-th" role="columnheader" tabIndex='-1'>Stats</div>
                                </div>
                            </div>
                            <div className="rt-thead bg-white">
                                <div className="rt-tr" role="row">
                                <div className="rt-th rt-resizable-header" role="columnheader" tabIndex='-1'>
                                    <div className="rt-resizable-header-content">First Name</div>
                                    <div class="rt-resizer"></div>
                                </div>
                                <div className="rt-th rt-resizable-header" role="columnheader" tabIndex='-1'>
                                    <div className="rt-resizable-header-content">Last Name</div>
                                    <div class="rt-resizer"></div>
                                </div>
                                <div className="rt-th rt-resizable-header" role="columnheader" tabIndex='-1'>
                                    <div className="rt-resizable-header-content">Age</div>
                                    <div class="rt-resizer"></div>
                                </div>
                                <div className="rt-th rt-resizable-header" role="columnheader" tabIndex='-1'>
                                    <div className="rt-resizable-header-content">Status</div>
                                    <div class="rt-resizer"></div>
                                </div>
                                <div className="rt-th rt-resizable-header" role="columnheader" tabIndex='-1'>
                                    <div className="rt-resizable-header-content">Visits</div>
                                    <div class="rt-resizer"></div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContainer>
        </Container>
    )
}
