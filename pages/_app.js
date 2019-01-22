import App from 'next/app'
import Router from 'next/router'
import withGA from 'next-ga'

export default withGA('UA-32987822-21', Router)(App)
