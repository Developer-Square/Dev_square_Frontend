import React from 'react'
import Form from 'react-bootstrap/Form'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

export default function PopoverComponent({title, message, value, onChange}) {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">{title}</Popover.Title>
            <Popover.Content>{message}</Popover.Content>
      </Popover>
    )
    return (
        <OverlayTrigger trigger="click" rootClose={true} placement="top" overlay={popover}>
            <Form.Check type='checkbox' checked={value} onChange={(e) => onChange(e.target.checked)} label={title} />
        </OverlayTrigger>
    )
}
