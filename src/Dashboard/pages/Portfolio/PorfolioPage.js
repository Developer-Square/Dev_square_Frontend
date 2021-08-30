import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import styled from 'styled-components'
import Row from 'react-bootstrap/Row'

//Own Components
import PortfolioCard from './PortfolioCard'
import { IsNotEmpty } from '../../../helpers/Reusable Functions';
import { getUsers } from '../../../helpers/ApiFunctions';
import HandAnimation from '../../Reusable Components/HandAnimation';

const Container = styled.div`
    
`

function PorfolioPage() {
    const {users, updatedCount} = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        if (IsNotEmpty(users)) {
            getUsers(undefined, dispatch);
        }
        // eslint-disable-next-line
    }, [Object.values(users).length, updatedCount])
    return (
        <Container>
            <Row>
                {Object.values(users).length > 0 ? users.results.map((user, index) => (
                    <PortfolioCard key={user.id} user={user} name={user.name} role={user.skills[0]} profileImg={`${index+1}.jpg`} bgImg="rsz_profile-1" />
                )): <HandAnimation loading={true} />}
            </Row>
        </Container>
    )
}

export default PorfolioPage;