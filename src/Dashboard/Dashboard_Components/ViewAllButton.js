import React, {useState} from 'react'
import styled from 'styled-components'

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

function ViewAllButton({title, marginTop, marginBottom, onClick}) {
    const [btnText, setBtnText] = useState('')
    //Changing the color and text of the buttons on clicking them
    const handleClick = (e) => {
        onClick()
        const btn = e.target
        setBtnText(btn.innerHTML)
        if (btn.innerHTML.search('Active') !== -1) {
            btn.classList.add('close-btn-1')
            btn.innerHTML = 'Close All Accounts'
        } else if (btn.innerHTML.search('Closed') !== -1) {
            btn.classList.add('close-btn-2')
            btn.innerHTML = 'Close All Accounts' 
        } else {
            btn.classList.remove('close-btn-1')
            btn.classList.remove('close-btn-2')
            btn.innerHTML = btnText
        }
    }

    return (
        <Container marginTop={marginTop} marginBottom={marginBottom} onClick={handleClick}>
            <Button className="view-all-button">All {title}</Button>
        </Container>
    )
}

export default ViewAllButton;