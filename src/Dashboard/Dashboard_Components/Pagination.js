import React from 'react'
import styled from 'styled-components'

import './Pagination.scss'

const Container = styled.div`

`

export default function Pagination() {
    return (
        <Container className='-container'>
            <div className="pagination-bottom">
                <div className="pagination">
                    <div className="previous">
                        <button type="button" className="btn disabled">Previous</button>
                    </div>
                    <div className="center">
                        <span className="pageInfo">
                            Page
                            <div className="pageJump">
                                <input aria-label="jump to page" type="number" defaultValue="1"/>
                            </div>
                            of
                            <span className="totalPages">23</span>
                        </span>
                        <span className="select-wrap">
                        <select aria-label="rows per page">
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
