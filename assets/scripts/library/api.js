'use strict'

const config = require('../config.js')
const store = require('../store.js')

const createVideoGame = data => { // createData function uses data from events.js
  return $.ajax({ // and returns it in json form
    url: config.apiUrl + '/games', // from config page
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const showAllVideoGames = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showOneVideoGame = (id) => {
  return $.ajax({
    url: config.apiUrl + `/games/${id}`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const searchOneVideoGame = (data) => {
  return $.ajax({
    url: config.apiUrl + '/game-search/' + data,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateVideoGame = data => {
  const id = data.game.id
  delete data.game.id
  return $.ajax({
    url: config.apiUrl + '/games/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteOneVideoGame = (videoGameId) => {
  return $.ajax({
    url: config.apiUrl + '/games/' + videoGameId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createVideoGame,
  showAllVideoGames,
  showOneVideoGame,
  searchOneVideoGame,
  updateVideoGame,
  deleteOneVideoGame
}
