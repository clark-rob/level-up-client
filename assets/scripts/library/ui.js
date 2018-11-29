'use strict'
const store = require('../store.js')

const createDataSuccess = data => {
  store.games = data.games
  $('#create-message').show().text('New Game Created')
  $('#create-message').removeClass()
  $('#create-message').addClass('success')
  $('#create-message').fadeOut(5000)
}

const createDataFailure = () => {
  $('#create-message').show().text('Error Creating Game')
  $('#create-message').removeClass()
  $('#create-message').addClass('failure')
}

const showAllDataSuccess = data => {
  $('#show-message').text(data.games)
  console.log('games ' + data.games.id)
  $('#show-message').removeClass()
  $('#show-message').addClass('success')
}

const showAllDataFailure = () => {
  $('#show-message').show().text('Error Showing Games')
  $('#show-message').removeClass()
  $('#show-message').addClass('failure')
}

module.exports = {
  createDataSuccess,
  createDataFailure,
  showAllDataSuccess,
  showAllDataFailure
}
