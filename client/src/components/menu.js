import React, { Component } from 'react'
import { Menu as MenuNew} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
const colorsA = ['red'];
export class Menu extends Component {
  state = {activeItem:colorsA[0]}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <MenuNew inverted>
        <MenuNew.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          color='red'
        >
          <Link to='/'>Home</Link>
        </MenuNew.Item>

        <MenuNew.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick} color='red'>
        <Link to='/about'>About Me</Link>
        </MenuNew.Item>

        <MenuNew.Item
          name='contact'
          active={activeItem === 'contact'}
          onClick={this.handleItemClick}
          color='red'
        >
          <Link to='/contact'>Contact Me</Link>
        </MenuNew.Item>
      </MenuNew>
    )
  }
}   