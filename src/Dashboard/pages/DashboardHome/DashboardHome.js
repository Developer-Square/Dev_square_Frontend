import React,{useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components'
import Row from 'react-bootstrap/Row'

//Own Components
import Card from './Card'
import TaskList from './TaskList'
import PieChart from './PieChart'
import ActiveUsers from './ActiveUsers'
import PercentageWidgets from './PercentageWidgets'
import Projects from './Projects'
import notify from '../../../helpers/Notify'
import {addTasks, updateGetTasks, setLoading, addTaskCreators, addAllTasks, addNewTasks, addCountData} from '../../../redux/action-creator'
import {addProjects} from '../../../redux/action-creator/projectActions'
import Api from '../../../services/network'


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
    const [taskIds, setTasksIds] = useState([])
    const dispatch = useDispatch()
    const {NewTasks, TasksCountData, TaskCreators} = useSelector(state => state.tasks)
    const {users} = useSelector(state => state.users)
    const {projects} = useSelector(state => state.projects)
    const api = new Api()

    useEffect(() => {
        if (projects.length === 0 && Object.keys(users).length === 0 && NewTasks.length === 0 ) {
            getTasks()
            getProjects()
        }
        // eslint-disable-next-line
    }, [])

    //Get the Developer name    
    const getUser = async (id) => {
        const api  = new Api()
        try {
            const res = await api.User().getUser(id)
            if (res.status === 200) {
                dispatch(addTaskCreators(res.data.name))
            }  
        } catch (err) {
            if (err.response) {
                const {message} = err.response.data
                dispatch(setLoading())
                notify('error', message)
            } else {
                notify('error', 'Something went wrong, Please refresh the page.')
            }
        }
    }

    //Get new the newest tasks by gettint the last items in the array.   
    const getNewTasks = async (totalResults) => {
        const api  = new Api()
        let data = {
            limit: totalResults,
            page: 1
        }
        try {
            const res = await api.Tasks().getAllTasks(data)
            if (res.status === 200) {
                const {results} = res.data
                dispatch(addAllTasks(results))
                let len = results.length
                let newTasks = []
                let i = 1;
                //Reversing the array to get the last 10 items.
                for (i; i < len; i++) {
                    if (results[len - i].status === 'notStarted') {
                        newTasks.push(results[len - i])
                        getUser(results[len - i].creator, len, i)
                    }
                }
                dispatch(addNewTasks(newTasks))
                // setTasks(newTasks)
            }  
        } catch (err) {
            //Set Loading to false
            if (err.response) {
                const {message} = err.response.data
                dispatch(setLoading())
                notify('error', message)
            } else {
                notify('error', 'Something went wrong, Please refresh the page.')
            }
        }
    }

    //Count data to be put in the tasks cards
    function countData (totalResults) {
        let data = {
            limit: totalResults,
            page: 1
        }

        let statuses = ['inProgress', 'notStarted', 'onHold']
        //Getting the number of tasks for each section
        let sendData = {}
        // eslint-disable-next-line
        statuses.map(status => {
            data.status = status
            api.Tasks().getAllTasks(data)
            .then(res => {
                if (res.status === 200) {
                    const {results} = res.data
                    if(results[0] !== undefined) {
                        if (results[0].status === 'inProgress') {
                            if (res.data.totalResults !== undefined) {
                                sendData.inProgress = res.data.totalResults
                            }
                        } else if (results[0].status === 'onHold') {
                            if (res.data.totalResults !== undefined) {
                                sendData.onHold = res.data.totalResults
                            }
                        } else if (results[0].status === 'notStarted') {
                            if (res.data.totalResults !== undefined) {
                                sendData.notStarted = res.data.totalResults
                            }
                        } else {
                            if (res.data.totalResults !== undefined) {
                                sendData.completed = res.data.totalResults
                            }
                        }
                    }
                    dispatch(addCountData(sendData))
                 
                }
            })
            .catch(err => {
                //Set Loading to false
                dispatch(setLoading())
                if (err.response) {
                    const {message} = err.response.data
                    dispatch(setLoading())
                    notify('error', message)
                } else {
                    notify('error', 'Something went wrong, Please refresh the page.')
                }
            })
        })
    }

     //Get all tasks when the page loads
     function getTasks(params) {
        //Set Loading to true
        dispatch(setLoading())
        //default attributes
        let data = {}
        if (params !== undefined) {
            data = params  
        } else {
            data = {
                limit: 10,
                page: 1
            }
        }

        api.Tasks().getAllTasks(data)
        .then(res => {
            if (res.status === 200) {
                //Dispatching an action to add tasks to the redux store
                dispatch(addTasks(res.data))
                dispatch(updateGetTasks(true))
                //Set Loading to false
                dispatch(setLoading())
                notify('success', 'Tasks fetched successfully')
                const {totalResults} = res.data
                countData(totalResults)
                //eslint-disable-next-line
                getNewTasks(totalResults)
            }
        })
        .catch(err => {
            //Set Loading to false
            dispatch(setLoading())
            if (err.response) {
                const {message} = err.response.data
                dispatch(setLoading())
                notify('error', message)
			} else {
				notify('error', 'Something went wrong, Please refresh the page.')
			}
        })

    }

    function getProjects() {
        api.Projects().getAllProjects()
        .then(res => {
            if (res.status === 200) {
                dispatch(addProjects(res.data.results))
                const {results} = res.data
                results.map((res,index) => {
                    let resultsArray = taskIds
                    resultsArray.push(res.tasks)
                    
                    //When mapping is done put the final result in state
                    if(index === 1) {
                        setTasksIds(resultsArray)
                    }
                    return null;
                })
                notify('success', 'Projects fetched successfully')
            }
        })
        .catch(err => {
            if (err.response) {
                const {message} = err.response.data
                dispatch(setLoading())
                notify('error', message)
			} else {
				notify('error', 'Something went wrong, Please refresh the page.')
			}
        })
    }

    return (
        <Container>
            <SpacedElements>
                <Card number={TasksCountData === '' ? 0 : TasksCountData.completed === undefined ? 0 : TasksCountData.completed} name="Tasks Completed" icon="clarity:tasks-line" color="#068f21" backgroundIcon="#dcf5e1"/>
                <Card number={TasksCountData === '' ? 0 : TasksCountData.inProgress === undefined ? 0 : TasksCountData.inProgress} name="Tasks In Progress" icon="carbon:in-progress" color="#dbb902" backgroundIcon="#f7e897"/>
                <Card number={NewTasks.length !== 0 ? NewTasks.length : 0} name="New Tasks" icon="ant-design:bars-outlined" color="#4504b5" backgroundIcon="#d1bdf2"/>
                <Card number={TasksCountData === '' ? 0 : TasksCountData.onHold === undefined ? 0 : TasksCountData.onHold} name="Tasks On Hold" icon="mdi:gesture-tap-hold" color="#085ed4" backgroundIcon="#7babed"/>
            </SpacedElements>
            <Row className="d-flex justify-content-between middle-element">
                <TaskList tasks={NewTasks} creators={TaskCreators} className="col-5"/>
                <PieChart projects={projects} className="col-5"/>
            </Row>
            <Row>
                <ActiveUsers users={users}/>
                <Projects projects={projects} />
            </Row>
            <PercentageWidgets />
        </Container>
    )
}

export default DashboardHome