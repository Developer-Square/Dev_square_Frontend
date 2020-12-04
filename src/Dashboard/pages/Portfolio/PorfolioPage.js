import React from 'react'
import styled from 'styled-components'
import Row from 'react-bootstrap/Row'

//Own Components
import PortfolioCard from './PortfolioCard'
const Container = styled.div`
    
`

function PorfolioPage() {
    return (
        <Container>
            <Row>
                <PortfolioCard name="Sophie" role="Lead UX Developer and Data Analyst" profileImg="1.jpg" bgImg="rsz_profile-1" />
                <PortfolioCard name="Linus" role="Lead Backend Developer" profileImg="2.jpg" bgImg="rsz_profile-2" />
                <PortfolioCard name="Franklin" role="Python Developer" profileImg="4.jpg" bgImg="rsz_profile-3" />
                <PortfolioCard name="Timo" role="Lead Android and PHP Developer" profileImg="11.jpg" bgImg="rsz_profile-5" />
                <PortfolioCard name="Ryan" role="Lead Frontend Developer" profileImg="8.jpg" bgImg="rsz_profile-9" />
                <PortfolioCard name="Clinton" role="Ruby Developer" profileImg="9.jpg" bgImg="rsz_profile-1" />
            </Row>
        </Container>
    )
}

export default PorfolioPage;