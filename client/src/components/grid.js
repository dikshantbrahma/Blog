import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import { ImageEx }from './image';

const GridNew = () => (
  <Grid columns='equal' divided inverted padded>
    <Grid.Row color='black' textAlign='center'>
      <Grid.Column>
        <Segment color='red' inverted>
          <ImageEx loc='/images/profile.jpeg' sz='medium' shape='sq'/>         
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment color='black' inverted>
          This page is a sample blog
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridNew