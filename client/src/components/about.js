import React from 'react'
import {Menu} from './menu'
import { Header } from './header';
import Content from './content';

export const About = () => (
    <>
        <Menu />
        <Header title='ABOUT ME' />
        <Content>
        I am a student pursuing B. Tech at College of Engineering and Technology, Bhubaneswar.<br /> Trying React.  
        </Content>
    </>
)   