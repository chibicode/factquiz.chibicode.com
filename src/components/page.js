import React from 'react'
import GlobalStyles from './global-styles'
import Head from './head'
import Container from './container'
import Card from './card'
import Intro from './intro'

const Page = () => (
  <>
    <GlobalStyles />
    <Head />
    <Container>
      <Card>
        <Intro />
      </Card>
    </Container>
  </>
)

export default Page
