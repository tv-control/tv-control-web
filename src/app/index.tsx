import React from 'react'
import { Routing } from 'pages'
import { withProviders } from './providers'
import 'antd/dist/antd.css'
import './styles.css'

const App = () => (
    <section className="app">
        <Routing />
    </section>
)

export default withProviders(App)
