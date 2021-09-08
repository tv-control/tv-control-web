import React from 'react'
import { Routing } from 'pages'
import { withProviders } from './providers'

const App = () => (
    <section className="app">
        <Routing />
    </section>
)

export default withProviders(App)
