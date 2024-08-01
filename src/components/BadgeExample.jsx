import React from 'react'
import { Badge, Button } from 'react-bootstrap'

const BadgeExample = () => {
  return (
    <div>
       <Button variant="primary">
       <Badge bg="success" pill>
          Badge
        </Badge>
       </Button>
    </div>
  )
}

export default BadgeExample