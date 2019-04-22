import React from 'react';
import { Header } from './header';
import { Menu } from './menu';
import { Form } from 'semantic-ui-react';
import Content from './content';
import Dividerh from './divider';

const BlogPost = () => (
<>
    <Menu />
    <Header title='Create a POST' />
    <Form />
</>
)