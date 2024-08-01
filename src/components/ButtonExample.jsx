import React from 'react'
import { Button } from 'react-bootstrap'

export const ButtonExample = () => {
  return (
    <div>
        <Button variant='outline-danger'>
           Click me
        </Button>
        <br />
        <Button variant='outline-primary'>Don't click me</Button>
    </div>
  )
}
