'use strict'
const showGamesTemplate = require('../templates/game-listing.handlebars')
const showOneGameTemplate = require('../templates/one-game-listing.handlebars')

const createVideoGameSuccess = data => {
  $('.create-message').show().text('New Game Created')
  $('.create-message').fadeOut(5000)
}

const createVideoGameFailure = () => {
  $('.create-message').show().text('Error Creating Game')
}

const showAllVideoGamesSuccess = data => {
  const showGamesHtml = showGamesTemplate({ games: data.games })
  $('.show-message').html(showGamesHtml)
}

const showAllVideoGamesFailure = () => {
  $('.show-message').show().text('These are not the games you are looking for...')
}

const showOneVideoGameSuccess = data => {
  const showOneGameHtml = showOneGameTemplate({ game: data.game })
  $('.show-message').html(showOneGameHtml)
}

const showOneVideoGameFailure = () => {
  $('.show-message').show().text("We can't seem to find the game. Was everything correct?")
}

const updateVideoGameSuccess = data => {
  const id = data.game.id
  $('#updateModal' + id).modal('hide') // closes modal
  $('.modal-backdrop').fadeOut() // removes backdrop of modal
  $('.modal-open').removeClass() // removes modal class from body
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
