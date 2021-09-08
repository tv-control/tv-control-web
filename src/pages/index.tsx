import { Route, Switch, Redirect, Link } from 'react-router-dom'

import { DownloadsPage } from './downloads'
import { FilmDetailsPage } from './film-details'
import { FilmsListPage } from './films-list'
import { Button } from 'antd'

export const paths = {
    home: () => '/films',
    downloads: () => '/downloads',
    filmDetails: (filmId = ':filmId') => `/films/${filmId}`,
}

const Header = () => {
    return (
        <header className="header">
            <Link to={paths.home()}>
                <Button size={'large'}>Catalog</Button>
            </Link>
            <br />
            <Link to={paths.downloads()}>
                <Button size={'large'}>Downloads</Button>
            </Link>
        </header>
    )
}

export const Routing = () => {
    return (
        <>
            <Switch>
                <Route exact path={paths.home()} component={FilmsListPage} />
                <Route exact path={paths.downloads()} component={DownloadsPage} />
                <Route exact path={paths.filmDetails()} component={FilmDetailsPage} />
                <Redirect to={paths.home()} />
            </Switch>
            <Header />
        </>
    )
}
