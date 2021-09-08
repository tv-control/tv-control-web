import { Route, Switch, Redirect } from 'react-router-dom'

import { DownloadsPage } from './downloads'
import { FilmDetailsPage } from './film-details'
import { FilmsListPage } from './films-list'

export const paths = {
    home: () => '/films',
    downloads: () => '/downloads',
    filmDetails: (filmId = ':filmId') => `/films/${filmId}`,
}

export const Routing = () => {
    return (
        <Switch>
            <Route exact path={paths.home()} component={FilmsListPage} />
            <Route exact path={paths.downloads()} component={DownloadsPage} />
            <Route exact path={paths.filmDetails()} component={FilmDetailsPage} />
            <Redirect to={paths.home()} />
        </Switch>
    )
}
