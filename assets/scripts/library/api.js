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

const deleteOneVideoGame = data => {
  const id = data.game.id
  return $.ajax({
    url: config.apiUrl + '/games/' + id,
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
  updateVideoGame,
  deleteOneVideoGame
}
