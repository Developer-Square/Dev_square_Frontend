import React from 'react'
import Form from 'react-bootstrap/Form'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

export default function PopoverComponent({title, message}) {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">{title}</Popover.Title>
            <Popover.Content>{message}</Popover.Content>
      </Popover>
    )
    return (
        <OverlayTrigger trigger="click" rootClose={true} placement="top" overlay={popover}>
            <Form.Check type='checkbox' label={title} />
        </OverlayTrigger>
    )
}
