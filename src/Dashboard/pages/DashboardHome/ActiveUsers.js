import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

//Own Components
import {addUsers, updateGetUsers} from '../../../redux/action-creator/index'
import Api from '../../../services/network'
import notify from "../../../helpers/Notify";
import HandAnimation from '../../Dashboard_Components/HandAnimation'

const Container = styled.div`   
    margin-bottom: 50px;

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

    .table-striped {
        min-height: 600px;
    }

    tr {
        cursor: pointer;
    }

    .widget-content-wrapper {
        display: flex;
    }

    .badge {
        font-weight: bold;
        text-transform: uppercase;
        padding: 5px 10px;
        min-width: 19px;
    }

    .widget-heading {
        opacity: .8;
        font-weight: bold;
    }

    .widget-subheading {
        opacity: .7;
    }
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

    .btn-actions-pane-right {
        white-space: nowrap;
    }

    .btn {
        color: #fff;
        background-color: #444054;
        border-color: #444054;
    }

    .active {
        background-color: #2d2a37;
        border-color: #272430;
    }
`

export default function ActiveUsers() {
    const [users, setUsers] = useState('')
    let history = useHistory()
    const dispatch = useDispatch()
    const api = new Api()

    useEffect(() => {
        getUsers() 
        // eslint-disable-next-line
    }, [])

    //Get All Users
	function getUsers() {
        let data = {                
            limit: 6,
            page: 1
        }
		api.User().getAllUsers(data)
		.then(res => {
			if (res.status === 200){
                dispatch(addUsers(res.data))
                setUsers(res.data.results)
				notify('success', 'Users fetched successfully')
				dispatch(updateGetUsers())
			}
		})
		.catch(err => {
			if (err.response) {
				const {message} = err.response.data
				notify('error', message)
			} else {
				notify('error', 'Something went wrong, Please refresh the page.')
			}
		})
    }

    const handlePageChange = () => {
        history.push('/dashboard/portfolio')
    }

    return (
        <Container className="col-12 p-0">
            <CardContainer className="main-card mb-3 card">
                    <CardTitle className="card-title">
                        Active Users
                    </CardTitle>
                    <div className="table-responsive">
                        <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                            <thead>
                            <tr>
                                <th className="text-center">#</th>
                                <th>Name</th>
                                <th className="text-center">Email</th>
                                <th className="text-center">Status</th>
                                <th className="text-center">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                                {users !== '' ? users.map((user, index) => (
                                    <tr>
                                    <td className="text-center text-muted">#{index + 1}</td>
                                    <td>
                                        <div className="widget-content p-0">
                                            <div className="widget-content-wrapper">
                                                <div className="widget-content-left mr-3">
                                                    <div className="widget-content-left">
                                                        <img width="40" className="rounded-circle" src="/images/avatars/4.jpg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="widget-content-left flex2">
                                                    <div className="widget-heading">{user.name}</div>
                                                    <div className="widget-subheading opacity-7">{user.skills[0]} Developer</div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-center">{user.email}</td>
                                    <td className="text-center">
                                        <div className={user.status === 'available' ? `badge badge-success`: user.status === 'busy' ? `badge badge-warning`: `badge badge-info`}>{user.status}</div>
                                    </td>
                                    <td className="text-center">
                                        <button type="button" id="PopoverCustomT-1" className="btn btn-primary btn-sm">Details</button>
                                    </td>
                                </tr>
                                )): <HandAnimation loading={true}/>}
                            </tbody>
                        </table>
                    </div>
                    <div className="d-block text-center card-footer">
                        <button className="btn-wide btn btn-info" onClick={handlePageChange}>Visit Profiles</button>
                    </div>
            </CardContainer>
        </Container>
    )
}
