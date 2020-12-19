import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'

const Container = styled.div`
    position: relative;
    width: 370.95px;
    height: 510.53px;
    color: #fff;
    transition: all 0.5s ease-in-out;

    .heading {
        text-align: center;
        margin-top: 43px;
        font-weight: bold;
        font-size: 28px;
        line-height: 35px;
    }

    &:hover {
        transform: scale(1.05)
    }
`
const ProfilePic = styled.img`
    position: absolute;
    z-index: 5;
    top: -13%;
    left: 50%;
    transform: translateX(-50%);
    width: 140px;
    height: 140px;
    border-radius: 50%;
`
const Card = styled.div`
    background: #202020;
    opacity: 0.8;
    backdrop-filter: blur(20px);
    border-radius: 31px;
    height: 450.53px;
    padding-top: 90px;
    font-family: 'Roboto Mono', monospace;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.1px;

    ul {
        text-align: left;
        text-decoration: none;
        list-style: none;

        svg {
            color: green;
            font-size: 22px;
        }
    }

    .bottom-text {
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;
    }

    .btn {
        border-radius: 31px;
        width: 100px;
        padding-bottom: 8px;
    }
`

export default function PricingCard() {
    return (
        <Container>
            <ProfilePic src="images/avatars/rsz_business-basic-1.png"/>
            <Card>
                <h4>Basic Package</h4>
                <div className="middle-text pl-1 pr-1">The basic package comes with a free design or you can provide your own, it's written in Reactjs or HTML, CSS and JS. It includes the following features:
                    <ul>
                        <li><span class="iconify" data-icon="typcn:tick-outline" data-inline="false"></span>3 Pages</li>
                        <li><span class="iconify" data-icon="typcn:tick-outline" data-inline="false"></span>Responsive Design</li>
                        <li><span class="iconify" data-icon="typcn:tick-outline" data-inline="false"></span>Design customization</li>
                        <li><span class="iconify" data-icon="typcn:tick-outline" data-inline="false"></span>Source code</li>
                    </ul>
                </div>
                <div className="bottom-text mb-2">See some photos of our this package</div>
                <Button variant="info">Show</Button>
            </Card>
        </Container>
    )
}
