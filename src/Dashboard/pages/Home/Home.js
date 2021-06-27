import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components'
import Row from 'react-bootstrap/Row'

//Own Components
import Card from './Card'
import TaskList from './TaskList'
import PieChart from './PieChart'
import ActiveUsers from './ActiveUsers'
import PercentageWidgets from './PercentageWidgets'
import Projects from './HomeProjects'
import { addAllTasks, addNewTasks, addCountData} from '../../../redux/action-creator'
import Api from '../../../services/network'
import { getUsers, getProjects, getTasks, getUser } from '../../../helpers/ApiFunctions'
import {IsNotEmpty} from '../../../helpers/Reusable Functions'
import { displayErrorMsg } from '../../../helpers/ErrorMessage'


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
    const dispatch = useDispatch()
    const {NewTasks, TasksCountData, TaskCreators, Tasks, AllTasks} = useSelector(state => state.tasks)
    const {users} = useSelector(state => state.users)
    const {projects} = useSelector(state => state.projects)

    useEffect(() => {
        //Checking if the redux store is empty before sending out new requests
        if (Object.keys(users).length === 0) {
            let data = {                
                limit: 6,
                page: 1
            }
            // console.log(localStorage.getItem('jwtToken'))
            if (localStorage.getItem('jwtToken')) {
                getUsers(data, dispatch)
            }
        }
        if (NewTasks.length === 0 ) {
            getTasks(undefined, dispatch)
            // Get the tasks with a status of 'NotStarted'
            getNewTasks(Tasks.totalResults)
            countData(Tasks.totalResults)
            //eslint-disable-next-line
        }
        if (projects.length === 0) {
            getProjects(dispatch)
        }

        // eslint-disable-next-line
    }, [NewTasks.length, TaskCreators.length])

  
    /**
     * @param  {} totalResults
     * Get new the newest tasks by getting the last items in the array. 
     * We need to get call @getAllTasks api to get all the tasks so 
     * that we can map over all of them and find the ones that are not
     * started.
     */
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

                        //Get the Developer name    
                        getUser(results[len - i].creator, dispatch)
                    }
                }
                dispatch(addNewTasks(newTasks))
                // setTasks(newTasks)
            }  
        } catch (err) {
            displayErrorMsg(err, dispatch)
        }
    }

    //Count data to be put in the tasks cards
    function countData () {
        //Getting the number of tasks for each section
        let sendData = {
            inProgress: 0,
            notStarted: 0,
            onHold: 0,
            completed: 0
        }
        if (IsNotEmpty(AllTasks)) {
        // eslint-disable-next-line
            AllTasks.map(task => {
                if (task.status === 'inProgress') {
                    sendData.inProgress += 1
                } else if (task.status === 'onHold') {
                        sendData.onHold += 1
                } else if (task.status === 'notStarted') {
                    sendData.notStarted += 1
                } else {
                    sendData.completed += 1
                }
                dispatch(addCountData(sendData))
            })
        }
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
                <PieChart projects={projects} tasks={Tasks} className="col-5"/>
            </Row>
            <Row>
                <ActiveUsers users={users.results}/>
                <Projects projects={projects} tasks={Tasks} />
            </Row>
            <PercentageWidgets />
        </Container>
    )
}

export default DashboardHome