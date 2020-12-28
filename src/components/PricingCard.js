import React, {useState} from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

//Own components
import ModalComponent from './Reusable Components/ModalComponent'

const Container = styled.div`
    position: relative;
    width: 370.95px;
    height: 570.53px;
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

    .badge {
        padding: .4em .4em;
    }

    .badge-pill {
        padding-right: .9em;
        padding-left: .9em;
    }

    @media all and (max-width: 320px) {
        .premium {
            height: 560px;
        }
    }

    @media all and (min-width: 576px) {
        .middle-text, ul {
            font-size: 16px;
        }
    }

    @media all and (min-width: 1366px) {
        .middle-text, ul {
            font-size: 17px;
        }
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
    height: 510.53px;
    padding-top: 90px;
    font-family: 'Roboto Mono', monospace;
    font-weight: 500;
    font-size: 15px;
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

    @media all and (min-width: 1366px) {
        .bottom-text {
            font-size: 17px
        }
    }
`

export default function PricingCard({package3, image, title, titleColor, text, features, badge, packageType}) {
    const [modalShow, setModalShow] = useState(false)
    const [type, setType] = useState('')
    const [pkg, setPkg] = useState('')

    const toggleModal = (params, packageType) => {
        setModalShow(!modalShow)
        setType(params)
        //Set the package so that the modal displays the right pictures
        setPkg(packageType)
    }
    return (
        <Container>
            <ModalComponent type={type} pkg={pkg} show={modalShow} onHide={() => toggleModal()}/>
            <ProfilePic src={image}/>
            <Card className={`${package3}`}>
                <h4 className={titleColor}>{title}</h4>
                {/* Show badge on premium package */}
                {badge ? <Badge pill variant="primary">Recommended</Badge> : null}
                <div className="middle-text pl-1 pr-1">{text} It includes the following features:
                    <ul>
                        <li><span className="iconify" data-icon="typcn:tick-outline" data-inline="false"></span>{features}</li>
                        <li><span className="iconify" data-icon="typcn:tick-outline" data-inline="false"></span>Responsive Design</li>
                        <li><span className="iconify" data-icon="typcn:tick-outline" data-inline="false"></span>Design customization</li>
                        <li><span className="iconify" data-icon="typcn:tick-outline" data-inline="false"></span>Source code</li>
                    </ul>
                </div>
                <div className="bottom-text mb-2">See some photos of our this package</div>
                <Button variant="info" onClick={() => toggleModal('Here are some pictures', packageType)}>Show</Button>
            </Card>
        </Container>
    )
}
