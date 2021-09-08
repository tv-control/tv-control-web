import { ReactNode, Suspense } from 'react'
import { Router } from "react-router-dom";
import { history } from "shared";

export const withRouter = (component: () => ReactNode) => () =>
    (
        <Router history={history}>
            <Suspense fallback="Loading...">{component()}</Suspense>
        </Router>
    )
