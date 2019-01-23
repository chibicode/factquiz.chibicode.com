import App from 'next/app'
import ReactGA from 'react-ga'

ReactGA.initialize('UA-32987822-21')
ReactGA.set({anonymizeIp: true})
ReactGA.pageview(window.location.pathname + window.location.search)

export default App
