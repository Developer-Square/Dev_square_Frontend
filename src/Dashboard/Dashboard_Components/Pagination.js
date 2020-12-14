import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components'
import {ToastContainer} from 'react-toastify'

//Own Components
import Api from '../../services/network'
import './Pagination.scss'
import {addTasks, updateGetTasks, setLoading, addTaskCreators, addTaskIds} from '../../redux/action-creator'
import notify from '../../helpers/Notify'

const Container = styled.div`
    .disabled {
        pointer-events: none;
    }
`

export default function Pagination(props) {
    const {UpdatedTask, CreatedTask} = useSelector(state => state.tasks)
    const api = new Api()
    const dispatch = useDispatch()
    const {page, limit, totalPages} = props

    useEffect(() => {
        //Get tasks when page loads
        getTasks()
        // eslint-disable-next-line
    }, [UpdatedTask, CreatedTask])

    //Get all tasks when the page loads
    function getTasks() {
        //Set Loading to true
        dispatch(setLoading())
        //default attributes
        const data = {
            limit: 10,
            page: 1
        }
        api.Tasks().getAllTasks(data)
        .then(res => {
            if (res.status === 200) {
                let taskObject = {}

                //Dispatching an action to add tasks to the redux store
                dispatch(addTasks(res.data))
                dispatch(updateGetTasks())
                //Set Loading to false
                dispatch(setLoading())
                notify('success', 'Tasks fetched successfully')
                //eslint-disable-next-line
                res.data.results.map((task, index) => {
                    taskObject[`${index}`] = task.id
                    getUser(task.creator)
                })
                dispatch(addTaskIds(taskObject))
            }
        })
        .catch(err => {
            //Set Loading to false
            dispatch(setLoading())
             const {message} = err.response.data
            notify('error', message)
        })

    }

    //Get the Developer name    
    const getUser = async (id) => {
        const api  = new Api()
        try {
            const res = await api.User().getUser(id)
            if (res.status === 200) {
                dispatch(addTaskCreators(res.data.name))
            }  
        } catch (error) {
            const {message} = error.response.data
            notify('error', message)
        }
    }

    function fetchPrevAndNextPage(e) {
        console.log(e.target)
        dispatch(setLoading())
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
        api.Tasks().getAllTasks(fetchData)
        .then(res => {
            if (res.status === 200) {
                dispatch(setLoading())
                //Add the next page's data to the redux store
                dispatch(addTasks(res.data))
                dispatch(updateGetTasks())
            }
        })
        .catch(err => {
            dispatch(setLoading())
            const {message} = err.response.data
            notify('error', message)
        })
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
}
