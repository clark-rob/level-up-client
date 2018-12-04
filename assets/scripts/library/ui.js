'use strict'
const store = require('../store.js')
const showGamesTemplate = require('../templates/game-listing.handlebars')

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
  console.log('games ' + data)
  const showGamesHtml = showGamesTemplate({ games: data.games })
  $('#show-message').html(showGamesHtml)
}

const showAllVideoGamesFailure = () => {
  $('#show-message').show().text('Error Showing Games')
  $('#show-message').removeClass()
  $('#show-message').addClass('failure')
}

const showOneVideoGameSuccess = data => {
  $('#show-message').html('') // clears message
  const game = data.game
  const videoGameHtml = (`
    <h4> ${game.id}. ${game.name} </h4>
    <p> ${game.system} </p>
    <p> ${game.copy} </p>
    <p> Multiplayer = ${game.multiplayer} </p>
  `)
  console.log(`${game.id}`)
  $('#show-message').append(videoGameHtml)
}

const showOneVideoGameFailure = () => {
  $('#show-message').show().text('Error Showing Games')
  $('#show-message').removeClass()
  $('#show-message').addClass('failure')
}

const updateVideoGameSuccess = data => {
  $('#update-message').show().text('Updated Game')
}

const updateVideoGameFailure = () => {
  $('#update-message').show().text('Error Updating Games')
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
