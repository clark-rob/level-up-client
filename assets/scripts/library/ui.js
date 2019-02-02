'use strict'
const store = require('../store.js')
const showGamesTemplate = require('../templates/game-listing.handlebars')
const showOneGameTemplate = require('../templates/one-game-listing.handlebars')

const createVideoGameSuccess = data => {
  store.game = data.game
  $('.create-message').show().text('New Game Created')
  $('.create-message').fadeOut(5000)
}

const createVideoGameFailure = () => {
  $('.create-message').show().text('Error Creating Game')
}

const showAllVideoGamesSuccess = data => {
  const showGamesHtml = showGamesTemplate({ games: data.games })
  $('.game-card').html(showGamesHtml)
}

const showAllVideoGamesFailure = () => {
  $('.game-card').show().text('These are not the games you are looking for...')
}

const showOneVideoGameSuccess = data => {
  const showOneGameHtml = showOneGameTemplate({ game: data.game })
  $('.game-card').html(showOneGameHtml)
}

const showOneVideoGameFailure = () => {
  $('.game-card').show().text("We can't seem to find the game. Was everything correct?")
}

const updateVideoGameSuccess = data => {
  $('#update-message').show().text('Updated Game')
}

const updateVideoGameFailure = () => {
  $('#update-message').show().text('Do you have the authority to change that?')
}

module.exports = {
  createVideoGameSuccess,
  createVideoGameFailure,
  showAllVideoGamesSuccess,
  showAllVideoGamesFailure,
  showOneVideoGameSuccess,
  showOneVideoGameFailure,
  updateVideoGameSuccess,
  updateVideoGameFailure
}
