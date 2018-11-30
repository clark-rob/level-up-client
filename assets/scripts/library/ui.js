'use strict'
const store = require('../store.js')

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
  $('#show-message').html('') // clears message
  data.games.forEach(game => {
    const videoGameHtml = (`
      <h4> ${game.id}. ${game.name} </h4>
      <p> ${game.system} </p>
      <p> ${game.copy} </p>
      <p> Multiplayer = ${game.multiplayer} </p>
    `)
    $('#show-message').append(videoGameHtml)
  })
  console.log('games ' + data)
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

const deleteOneVideoGameSuccess = data => {
  $('#delete-message').show().text('Deleted Game')
}

module.exports = {
  createVideoGameSuccess,
  createVideoGameFailure,
  showAllVideoGamesSuccess,
  showAllVideoGamesFailure,
  showOneVideoGameSuccess,
  showOneVideoGameFailure,
  updateVideoGameSuccess,
  updateVideoGameFailure,
  deleteOneVideoGameSuccess
}
