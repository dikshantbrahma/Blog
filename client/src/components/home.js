import React from 'react'
import { Header } from './header'
import { Menu } from './menu'
import { ImageEx } from './image'
import Content from './content'
import Dividerh from './divider'

const Home = () => (
    <>
    <Menu />
    <Header title='MY BLOG'/>
    <Dividerh />
    <ImageEx loc='/images/profile.jpeg' sz='medium' shape='c'/>
    <Dividerh />
    <Content head='First post'>
        First Post
    </Content>
    <p />
    <Content color='red' head='Second post'>
        Second Post
    </Content>
    </>
)

export default Home