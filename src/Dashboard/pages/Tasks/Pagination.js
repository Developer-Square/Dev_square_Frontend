import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    .pagination {
        z-index: 1;
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        flex-wrap: wrap;
        padding: 3px;
        border-top: 2px solid rgba(0,0,0,.1);
    }

    .previous,
    .next {
        flex: 1 1;
        text-align: center;
    }

    .btn.disabled {
        opacity: .5;
        cursor: default;

        &:hover {
            background: #f8f9fa;
            color: #545cd8;
        }
    }

    .btn {
        appearance: none;
        display: block;
        width: 100%;
        height: 100%;
        border: 0;
        border-radius: .25rem;
        padding: 6px;
        font-size: 1em;
        color: #545cd8;
        background: #f8f9fa;
        transition: all .2s ease;
        cursor: pointer;
        outline: none;
        font-weight: 700;

        &:hover {
            background: #545cd8;
            color: #fff;
        }
    }

    .center {
        text-align: center;
        margin-bottom: 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
    }

    .pageInfo {
        display: inherit;
        margin: 3px 0 3px 10px;
        white-space: nowrap;
        height: 30px;
        line-height: 30px;
    }

    .pageJump {
        display: inline-block;
        margin: 0 5px;
    }

    .pageJump input {
        width: 70px;
        text-align: center;
        display: block;
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        height: calc(1.5em + .5rem + 2px);
        padding: .25rem .5rem;
        line-height: 1.5;
        border-radius: .25rem;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out !important;
    }

    .totalPages {
        padding-left: 5px;
        font-weight: 700;
    }

    .select-wrap {
        margin: 3px 10px;
    }

    select {
        display: block;
        width: 100%;
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        height: calc(1.5em + .5rem + 2px);
        padding: .25rem .5rem;
        line-height: 1.5;
        border-radius: .25rem;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out !important;
    }
`

export default function Pagination() {
    return (
        <Container>
            <div className="pagination-bottom">
                <div className="pagination">
                    <div className="previous">
                        <button type="button" className="btn disabled">Previous</button>
                    </div>
                    <div className="center">
                        <span className="pageInfo">
                            Page
                            <div className="pageJump">
                                <input aria-label="jump to page" type="number" value="1" />
                            </div>
                            of
                            <span className="totalPages">23</span>
                        </span>
                        <span className="select-wrap">
                        <select aria-label="rows per page">
                            <option value="5">5 rows</option>
                            <option value="10">10 rows</option>
                            <option value="20">20 rows</option>
                            <option value="25">25 rows</option>
                        </select>
                        </span>
                    </div>
                    <div className="next">
                        <button type="button" className="btn">Next</button>
                    </div>
                </div>
            </div>
        </Container>
    )
}
