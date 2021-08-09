import React, {useEffect, forwardRef, useImperativeHandle} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components'
import {ToastContainer} from 'react-toastify'

//Own Components
import './Pagination.scss'
import {updatePageNumber} from '../../../redux/action-creator'
import { getAdminUsers, getTasks} from '../../../helpers/ApiFunctions'
import notify from '../../../helpers/Notify'

const Container = styled.div`
    .disabled {
        pointer-events: none;
    }
`

const Pagination = forwardRef((props, ref) => {
    const {CreatedCount, AssignedCount, UpdatedCount, UpdatedTask, Tasks, TaskCreators} = useSelector(state => state.tasks)
    const {pageNumber} = useSelector(state => state.users)
    const dispatch = useDispatch()
    const {page, limit, totalPages, handleUserTasks} = props

     //Function call coming from the parent component
     useImperativeHandle(
        ref,
        () => ({
            getAllTasks() {
                getTasks(undefined, dispatch)
            },
        })
    )

    useEffect(() => {
        const data = {
            role: 'admin'
        }
        // Get admin users
        getAdminUsers(data, dispatch).then(res => {
            if (Object.values(res).length) {
                // If the user was on a certain page, return them to the 
                // specific page
                if (pageNumber !== '') {
                    //Get tasks when page loads
                    getTasks(pageNumber, dispatch, res)
                } else if (Tasks.length === 0 || UpdatedCount > 0 || TaskCreators.length === 0) {
                    getTasks(undefined, dispatch, res) 
                }
            }
        }).catch((err) => {
            notify('error', err)
        })

     
        //When a user refreshes the page, clear localStorage
        if (CreatedCount === 0 && UpdatedCount === 0 && AssignedCount === 0) {
            localStorage.setItem('usertaskname', 'none')
        }
        //When a user searches for tasks assigned to them and updates one or all of them
        //this ensures that tasks returned belong to them and not just any tasks
        if (UpdatedTask === true) {
            let e = null
            handleUserTasks(e, localStorage.getItem('userdetails'))
        }
        // eslint-disable-next-line
    }, [CreatedCount, AssignedCount, UpdatedCount])

    function fetchPrevAndNextPage(e) {
        //Setting the params to control the pagination
        let fetchData = {
            limit,
            page
        }
        
        //Checking where the function was called from eg. the previous btn or next button
        if (e.target.className.includes('rows')) {
            fetchData = {
                ...fetchData,
                limit: e.target.value
            }
        }
        const prevBtn = document.querySelector('.prev')
        if (e.target.className.includes('prev')) {
            fetchData = {
                ...fetchData,
                page: page - 1
            }
        } else if (e.target.className.includes('next')){
            fetchData = {
                ...fetchData,
                page: page + 1
            }
        }

        if (fetchData.page > 1) {
            prevBtn.classList.remove('disabled')
        } else {
            prevBtn.classList.add('disabled')
        }
        //Store the page number so that when the page updates or refreshes the user
        //is returned to the right page.
        dispatch(updatePageNumber(fetchData))
        getTasks(fetchData, dispatch)
    }
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Container className='-container'>
            <div className="pagination-bottom">
                <div className="pagination">
                    <div className="previous">
                        <button type="button" onClick={fetchPrevAndNextPage} className="btn prev disabled">Previous</button>
                    </div>
                    <div className="center">
                        <span className="pageInfo">
                            Page
                            <div className="pageJump">
                                <input aria-label="jump to page" type="number" defaultValue={page}/>
                            </div>
                            of
                            <span className="totalPages">{totalPages}</span>
                        </span>
                        <span className="select-wrap">
                        <select aria-label="rows per page" className="rows" onChange={(e) => fetchPrevAndNextPage(e)}>
                            <option value="10">10 rows</option>
                            <option value="20">20 rows</option>
                            <option value="25">25 rows</option>
                        </select>
                        </span>
                    </div>
                    <div className="next">
                        <button type="button" className="btn next" onClick={fetchPrevAndNextPage}>Next</button>
                    </div>
                </div>
            </div>
        </Container>
        </>
    )
})
export default Pagination;