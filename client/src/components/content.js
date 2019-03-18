import React, { Component } from 'react'
import { Segment, Header } from 'semantic-ui-react' 

const Content = ({color,head,children}) => (
  <Segment color={color} style={{width:'50%', margin:'auto'}} raised>
  <Header as='h2'>{head}</Header>
  <p>
    {children}
  </p>
  </Segment>
)

export default Content