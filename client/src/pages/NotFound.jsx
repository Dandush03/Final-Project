import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import {Button, Container} from '../components'

class NotFound extends Component {
  render () {
    return <Container text textAlign='center'>
      <h1>404: Not found</h1>
          <Button as={Link} to='/'>Back to home</Button>
    </Container>
  }
}

export default NotFound