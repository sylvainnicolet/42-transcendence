export default {
  '/': {
    view: 'views/homepage.html'
  },
  '#/player-vs-player': {
    view: 'views/player-vs-player.html',
    script: 'js/views/local-pong.js',
  },
  '#/player-vs-computer': {
    view: 'views/player-vs-computer.html',
    auth: true
  },
  '#/player-vs-online': {
    view: 'views/player-vs-online.html',
    auth: true
  },
  '#/tournaments/create': {
    view: 'views/tournaments/create.html',
    script: 'js/views/tournaments/create.js',
    auth: true
  },
  '#/tournaments/edit/:id': {
    view: 'views/tournaments/edit.html',
    script: 'js/views/tournaments/edit.js',
    auth: true
  },
  '#/tournaments/detail/:id': {
    view: 'views/tournaments/detail.html',
    script: 'js/views/tournaments/detail.js',
    auth: true
  },
  '#/tournaments/list': {
    view: 'views/tournaments/list.html',
    script: 'js/views/tournaments/list.js',
    auth: true
  },
  '#/login': {
    view: 'views/auth/login.html',
    script: 'js/views/auth/login.js',
  },
  '#/register': {
    view: 'views/auth/register.html',
  },
  '#/profile': {
    view: 'views/profile/detail.html',
    auth: true
  },
  '#/profile/edit': {
    view: 'views/profile/edit.html',
    auth: true
  },
  '#/not-authenticated': {
    view: 'views/auth/not-authenticated.html',
  }
}