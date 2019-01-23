import React from 'react'
import GlobalStyles from './global-styles'
import Head from './head'
import Container from './container'
import Quiz from './quiz'

const Page = () => (
  <>
    <GlobalStyles />
    <Head />
    <Container>
      <Quiz />
    </Container>
  </>
)

export default Page
