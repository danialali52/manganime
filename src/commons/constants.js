export const ANIME_LIST_API = process.env.REACT_APP_ANILIST_API
export const THEME_COLOR_LOCAL_STORAGE = 'themeColor'
export const ENV_DEV = 'development'
export const BAD_USE_CONTEXT = `can't be use without`

export const DATABASE_COLLECTION = {
  USERS: 'users',
  COMMENTS: 'comments',
}

export const THEMES = {
  DARK: 'dark',
  LIGHT: 'light',
}

export const TYPE = {
  ANIME: 'anime',
  MANGA: 'manga',
}

export const SIGN = {
  IN: 'signIn',
  UP: 'signUp',
}

const STATE_DATA = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
}
const STATE_REF = STATE_DATA

export const IDLE = STATE_REF.IDLE
export const LOADING = STATE_REF.LOADING
export const SUCCESS = STATE_REF.SUCCESS
export const ERROR = STATE_REF.ERROR

const FIREBASE_AUTH_ERROR = {
  USER_NOT_FOUND: 'auth/user-not-found',
  WRONG_PASSWORD: 'auth/wrong-password',
  TOO_MANY_REQUEST: 'auth/too-many-requests',
  USER_ALREADY_EXIST: 'auth/credential-already-in-use',
  EMAIL_EXISTS: 'auth/email-already-in-use',
  REQUIRE_RECENT_LOGIN: 'auth/requires-recent-login',
}
const AUTH_REF = FIREBASE_AUTH_ERROR

export const AUTH_USER_NOT_FOUND = AUTH_REF.USER_NOT_FOUND
export const AUTH_WRONG_PASSWORD = AUTH_REF.WRONG_PASSWORD
export const AUTH_TOO_MANY_REQUEST = AUTH_REF.TOO_MANY_REQUEST
export const AUTH_USER_ALREADY_EXIST = AUTH_REF.USER_ALREADY_EXIST
export const AUTH_EMAIL_EXISTS = AUTH_REF.EMAIL_EXISTS
export const AUTH_REQUIRE_RECENT_LOGIN = AUTH_REF.REQUIRE_RECENT_LOGIN

const ROUTES_NAMES = {
  ANIME: 'anime',
  MANGA: 'manga',
  TOP: 'top',
  INFOS: 'infos',
  STREAMING: 'streaming',
  NEWS: 'news',
  RECOMMENDATIONS: 'recommendations',
  EPISODE: 'episode',
}

export const ANIME = ROUTES_NAMES.ANIME
export const MANGA = ROUTES_NAMES.MANGA
export const TOP = ROUTES_NAMES.TOP
export const INFOS = ROUTES_NAMES.INFOS
export const STREAMING = ROUTES_NAMES.STREAMING
export const NEWS = ROUTES_NAMES.NEWS
export const RECOMMENDATIONS = ROUTES_NAMES.RECOMMENDATIONS
export const EPISODE = ROUTES_NAMES.EPISODE

const ROUTES = {
  HOME: '/',
  LOGIN_REGISTER: '/login',
  PROFILE: '/profile',
  TOP: {
    ANIME: '/anime/top',
    MANGA: '/manga/top',
  },
  SEARCH: {
    ANIME: '/anime/search',
    MANGA: '/manga/search',
  },
  NEWS: '/:type/news/:id',
  INFOS: '/:type/infos/:id',
  RECOMMENDATIONS: '/:type/recommendations/:id',
  STREAMING: '/:type/streaming/:id',
  404: '*',
}
export const ROUTE_HOME = ROUTES.HOME
export const ROUTE_LOGIN_REGISTER = ROUTES.LOGIN_REGISTER
export const ROUTE_PROFILE = ROUTES.PROFILE
export const ROUTE_TOP_ANIME = ROUTES.TOP.ANIME
export const ROUTE_TOP_MANGA = ROUTES.TOP.MANGA
export const ROUTE_SEARCH_ANIME = ROUTES.SEARCH.ANIME
export const ROUTE_SEARCH_MANGA = ROUTES.SEARCH.MANGA
export const ROUTE_RECOMMENDATIONS = ROUTES.RECOMMENDATIONS
export const ROUTE_STREAMING = ROUTES.STREAMING
export const ROUTE_NEWS = ROUTES.NEWS
export const ROUTE_INFOS = ROUTES.INFOS
export const ROUTE_404 = ROUTES[404]

const SEARCH_STATUS = {
  FINISHED: 'FINISHED',
  RELEASING: 'RELEASING',
  NOT_YET_RELEASED: 'NOT_YET_RELEASED',
  CANCELLED: 'CANCELLED',
  HIATUS: 'HIATUS',
}
export const FINISHED = SEARCH_STATUS.FINISHED
export const RELEASING = SEARCH_STATUS.RELEASING
export const NOT_YET_RELEASED = SEARCH_STATUS.NOT_YET_RELEASED
export const CANCELLED = SEARCH_STATUS.CANCELLED
export const HIATUS = SEARCH_STATUS.HIATUS

const SEARCH_FORMAT = {
  TV: 'TV',
  TV_SHORT: 'TV_SHORT',
  MOVIE: 'MOVIE',
  SPECIAL: 'SPECIAL',
  OVA: 'OVA',
  ONA: 'ONA',
  MUSIC: 'MUSIC',
}

export const TV = SEARCH_FORMAT.TV
export const TV_SHORT = SEARCH_FORMAT.TV_SHORT
export const MOVIE = SEARCH_FORMAT.MOVIE
export const SPECIAL = SEARCH_FORMAT.SPECIAL
export const OVA = SEARCH_FORMAT.OVA
export const ONA = SEARCH_FORMAT.ONA
export const MUSIC = SEARCH_FORMAT.MUSIC

const SEARCH_SORT = {
  TRENDING_DESC: 'TRENDING_DESC',
  SCORE_DESC: 'SCORE_DESC',
  START_DATE_DESC: 'START_DATE_DESC',
  END_DATE_DESC: 'END_DATE_DESC',
  START_DATE: 'START_DATE',
  END_DATE: 'END_DATE',
  TITLE_ENGLISH_DESC: 'TITLE_ENGLISH_DESC',
}

export const TRENDING_DESC = SEARCH_SORT.TRENDING_DESC
export const SCORE_DESC = SEARCH_SORT.SCORE_DESC
export const START_DATE_DESC = SEARCH_SORT.START_DATE_DESC
export const END_DATE = SEARCH_SORT.END_DATE
export const END_DATE_DESC = SEARCH_SORT.END_DATE_DESC
export const START_DATE = SEARCH_SORT.START_DATE
export const TITLE_ENGLISH_DESC = SEARCH_SORT.TITLE_ENGLISH_DESC

const SEARCH_FIELDS = {
  SEARCH: 'search',
  FORMAT: 'format',
  STATUS: 'status',
  SCORE: 'score',
  POPULARITY: 'popularity',
  SORT: 'sortBy',
  ISADULT: 'isAdult',
  PER_PAGE: 'perPage',
  RESET: 'reset',
}

export const SEARCH = SEARCH_FIELDS.SEARCH
export const FORMAT = SEARCH_FIELDS.FORMAT
export const STATUS = SEARCH_FIELDS.STATUS
export const SCORE = SEARCH_FIELDS.SCORE
export const POPULARITY = SEARCH_FIELDS.POPULARITY
export const SORT = SEARCH_FIELDS.SORT
export const ISADULT = SEARCH_FIELDS.ISADULT
export const PAGE = SEARCH_FIELDS.PAGE
export const PER_PAGE = SEARCH_FIELDS.PER_PAGE
export const RESET = SEARCH_FIELDS.RESET
