import React from 'react'
import { storiesOf } from '@storybook/react'

import App from '../App'
import Page from '../Page'
import Cover from '../Cover'
import Header from '../Header'
import Title from '../Title'
import DateTime from '../DateTime'
import Todos from '../Todos'
import Footer from '../Footer'

storiesOf('App', module).add('Default', () => <App>App</App>)
storiesOf('Page', module).add('Default', () => <Page>Page</Page>)
storiesOf('Cover', module).add('Default', () => <Cover>Cover</Cover>)
storiesOf('Header', module).add('Default', () => <Header>Header</Header>)
storiesOf('Title', module).add('Default', () => (
  <Title value="MyTasks">Title</Title>
))
storiesOf('DateTime', module).add('Default', () => (
  <DateTime value="Monday, 20 August 2018 11:32">DateTime</DateTime>
))
storiesOf('Todos', module).add('Default', () => <Todos>Todos</Todos>)
storiesOf('Footer', module).add('Default', () => <Footer>Footer</Footer>)
