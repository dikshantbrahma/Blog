import React from 'react';
import {Header as Headernew} from 'semantic-ui-react';
export class Header extends React.Component{
        render(){
            return <Headernew as='h1' textAlign='center' color='red' style={{fontFamily:'arial'}}> {this.props.title} </Headernew>;
        }
}               