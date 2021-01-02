import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import styled from 'styled-components'
import {ToastContainer} from 'react-toastify'

//Own Components
import Api from '../../services/network' 
import notify from '../../helpers/Notify'
import {addUsers, updateGetUsers, setLoading} from '../../redux/action-creator/index'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${props => props.marginTop};
    margin-bottom: ${props => props.marginBottom};

    .close-btn-1 {
        background: #F17E7E;
    }
    .close-btn-2 {
        background: #F17E7E;
    }
`

const Button = styled.a`
    text-transform: uppercase;
    width: 9rem;
    font-size: 0.6rem;
    font-weight: 700;
    background-image: ${({theme}) => theme.gradient};
    color: #fff;
    border-radius: 5rem;
    padding: 0.7rem;
    display: flex;
    justify-content: center;
    cursor: pointer;
    transition: all ease-in-out 300ms;

    &:hover {
        box-shadow: 0px 0px 7px rgba(128,74,216,0.6);
        color: #fff;
        text-decoration: none;
    }
`

function ViewAllButton({title, pageNumber, page, marginTop, marginBottom, onClick}) {
    const dispatch = useDispatch()
    const [btnText, setBtnText] = useState('')
    const [nextPage, setNextPage] = useState(false)
    //Making an api call
    const api = new Api()
    function getNextPage(e) {
        dispatch(setLoading())
        const btnType = e.target.className
        let data = {
            limit: 10
        }

        if (btnType.search('prev') !== -1) {
            if (pageNumber > 1) {
                data.page = pageNumber - 1
            } else {
                data.page = pageNumber
            }
        } else if (btnType.search('next') !== -1) {
            data.page = pageNumber + 1
        }

        api.User().getAllUsers(data)
        .then((res) => {
            if (res.status === 200) {
                dispatch(addUsers(res.data))
				notify('success', 'Users fetched successfully')
                dispatch(updateGetUsers())
                // dispatch(setLoading())    
            }
        })
        .catch(err => {
            dispatch(setLoading())
            const {message} = err.response.data
			notify('error', message)
        })
    }
    //Changing the color and text of the buttons on clicking them
    const handleClick = (e) => {
        onClick()
        const btn = e.target
        setBtnText(btn.innerHTML)
        if (btn.innerHTML.search('Active') !== -1) {
            btn.classList.add('close-btn-1')
            btn.innerHTML = 'Close All Accounts'
            //If there are more than 10 users then set the next page to true to reveal the next button
            if (page > 1) {
                setNextPage(true)
            }
        } else if (btn.innerHTML.search('Closed') !== -1) {
            btn.classList.add('close-btn-1')
            btn.innerHTML = 'Close All Accounts' 
        } else {
            btn.classList.remove('close-btn-1')
            btn.innerHTML = btnText
            setNextPage(false)
        }
    }

    return (
        <>
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
            <Container marginTop={marginTop} marginBottom={marginBottom}>
                <Button className="view-all-button" onClick={handleClick}>All {title}</Button>
                {nextPage === true && page > 1 ? <Button variant="info" className="ml-3 prev" onClick={getNextPage}>Previous page</Button> : null}
                {nextPage ? <Button className="view-all-button next ml-3" onClick={getNextPage}>Next Page</Button>: null}
            </Container>
        </>
    )
}

export default ViewAllButton;