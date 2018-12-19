'use strict'
const store = require('../store.js')
const showGamesTemplate = require('../templates/game-listing.handlebars')
const showOneGameTemplate = require('../templates/one-game-listing.handlebars')

const createVideoGameSuccess = data => {
  store.game = data.game
  $('#create-message').show().text('New Game Created')
  $('#create-message').removeClass()
  $('#create-message').addClass('success')
  $('#create-message').fadeOut(5000)
}

const createVideoGameFailure = () => {
  $('#create-message').show().text('Error Creating Game')
  $('#create-message').removeClass()
  $('#create-message').addClass('failure')
}

const showAllVideoGamesSuccess = data => {
  const showGamesHtml = showGamesTemplate({ games: data.games })
  $('#show-message').html(showGamesHtml)
}

const showAllVideoGamesFailure = () => {
  $('#show-message').show().text('These are not the games you are looking for...')
  $('#show-message').removeClass()
  $('#show-message').addClass('failure')
}

const showOneVideoGameSuccess = data => {
  const showOneGameHtml = showOneGameTemplate({ game: data.game })
  $('#show-message').html(showOneGameHtml)
}

const showOneVideoGameFailure = () => {
  $('#show-message').show().text("We can't seem to find the game. Was everything correct?")
  $('#show-message').removeClass()
  $('#show-message').addClass('failure')
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
