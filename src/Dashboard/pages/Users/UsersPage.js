import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {useSelector, useDispatch} from 'react-redux'
import {ToastContainer} from 'react-toastify'

//Own Components
import AddButton from "../../Dashboard_Components/AddButton";
import Users from "./Users";
import UsersModal from './UsersModal'
import {setModalShow, addUsers, setLoading, updateGetUsers} from '../../../redux/action-creator/index'
import Api from '../../../services/network'
import notify from "../../../helpers/Notify";

import depositData from "../../../DepositData.json";

const Container = styled.div`
    margin-top: 60px;
    margin-bottom: 30px;
`

function UsersPage() {
    const dispatch = useDispatch()
    const {modalShow, userToBeUpdated, updatedCount, users, pageNumber} = useSelector(state => state.users)
    const [count, setCount] = useState('');
    const api = new Api()

    useEffect(() => {
        //If the user was on a certain page, return them to the 
        //specific page
        if (pageNumber !== '') {
            //Get tasks when page loads
            getUsers(pageNumber)
        } else if (users.length === 0) {
            getUsers() 
        }
        // eslint-disable-next-line
    }, [updatedCount])

    //Get All Users
	function getUsers(params) {
        let data = {}
		if (params !== undefined) {
            data = params  
        } else {
            data = {
                limit: 10,
                page: 1
            }
        }
		dispatch(setLoading())
		api.User().getAllUsers(data)
		.then(res => {
			if (res.status === 200){
                dispatch(addUsers(res.data))
                //Counting the number of active users
                setCount(res.data.results.length)
				notify('success', 'Users fetched successfully')
				dispatch(setLoading())
				dispatch(updateGetUsers())
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
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <AddButton onClick={() => dispatch(setModalShow())}  />
            <UsersModal usertobeupdated={userToBeUpdated} show={modalShow} onHide={() => dispatch(setModalShow())}/>
			<Users title="Active Accounts" count={count} page={users.totalPages} pageNumber={users.page} data={users.results} />
			<Users title="Closed Accounts" count={5} data={depositData.closed} />
        </Container>
    )
}

export default UsersPage;