'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateVideoGame = event => { // function onCreateData uses the event submit to
  event.preventDefault() // prevent page reload
  const data = getFormFields(event.target) // target form is inserted into Data
  api.createVideoGame(data) // takes data and sends it to api.js
    .then(ui.createVideoGameSuccess) // show success banner first
    .then(() => onShowAllVideoGames(event)) // then run showAllVideoGames()
    .catch(ui.createVideoGameFailure)
  $(event.target).trigger('reset') // once button clicked, .trigger resets input
}

const onShowAllVideoGames = event => {
  api.showAllVideoGames()
    .then(ui.showAllVideoGamesSuccess)
    .catch(ui.showAllVideoGamesFailure)
}

const onShowOneVideoGame = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.showOneVideoGame(data.game.id)
    .then(ui.showOneVideoGameSuccess)
    .catch(ui.showOneVideoGameFailure)
  $(event.target).trigger('reset')
}

const onSearchOneVideoGame = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.searchOneVideoGame(data.game.name)
    .then(ui.showOneVideoGameSuccess)
    .catch(ui.showOneVideoGameFailure)
  $(event.target).trigger('reset')
}

const onUpdateVideoGame = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const videoGameId = $(event.target).closest('section').data('id')
  // clicking on the button passes the id of the selected game
  api.updateVideoGame(videoGameId, data)
    .then(ui.updateVideoGameSuccess)
    .then(() => onShowAllVideoGames(event))
    .catch(ui.updateVideoGameFailure)
}

const onDeleteOneVideoGame = event => {
  event.preventDefault()
  const videoGameId = $(event.target).closest('section').data('id')
  api.deleteOneVideoGame(videoGameId)
    .then(() => onShowAllVideoGames(event))
    .catch(ui.deleteOneVideoGameFailure)
}

module.exports = {
  onCreateVideoGame,
  onShowAllVideoGames,
  onShowOneVideoGame,
  onSearchOneVideoGame,
  onUpdateVideoGame,
  onDeleteOneVideoGame
}
