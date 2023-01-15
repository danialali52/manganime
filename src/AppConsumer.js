import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {
  ROUTE_404,
  ROUTE_HOME,
  ROUTE_LOGIN_REGISTER,
  ROUTE_PROFILE,
} from './commons/constants'
import { Error404 } from './components/Error404'
import { ErrorFallback } from './components/ErrorFallBack'
import { LoginRegister } from './components/LoginRegister'
import { MangAnime } from './components/MangAnime'

import AnimeSearch from './components/search/animeSearch'
import Collection from './components/search/collection'
import MangaSearch from './components/search/mangaSearch'

import AnimeMainInfo from './components/page info/anime/animeMainInfo'
import MangaMainInfo from './components/page info/manga/mangaMainInfo'

import News from './components/page info/News'
import Recommendations from './components/page info/Recommendations'
import { PrivateRoute } from './components/PrivateRoute'
import { UserProfile } from './components/UserProfile'

const AppConsumer = () => {
  return (
    <Router>
      <ErrorBoundary FallbackComponent={ErrorFallback}></ErrorBoundary>
      <Routes>
        <Route path={ROUTE_HOME} element={<MangAnime />} />
        <Route path={ROUTE_LOGIN_REGISTER} element={<LoginRegister />} />

        <Route path="/collection" element={<Collection />}>
          <Route path="/collection/anime/search" element={<AnimeSearch />} />
          <Route path="/collection/manga/search" element={<MangaSearch />} />

          <Route
            path="/collection/anime/search/main/:id/:title"
            element={<AnimeMainInfo />}
          />
          <Route
            path="/collection/manga/search/main/:id/:title"
            element={<MangaMainInfo />}
          />
          <Route
            path="/collection/anime/search/main/:id/:title"
            element={<AnimeMainInfo />}
          />
          <Route
            path="/collection/manga/search/main/:id/:title"
            element={<MangaMainInfo />}
          />

          <Route
            path="/collection/anime/search/news/:id/:title"
            element={<News />}
          />

          <Route
            path="/collection/anime/search/recommendations/:id/:title"
            element={<Recommendations />}
          />
        </Route>

        <Route path={ROUTE_404} element={<Error404 />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path={ROUTE_PROFILE} element={<UserProfile />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppConsumer
