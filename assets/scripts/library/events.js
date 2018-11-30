'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateVideoGame = event => { // function onCreateData uses the event submit to
  event.preventDefault() // prevent page reload
  const data = getFormFields(event.target) // target form is inserted into Data
  console.log(data)
  api.createVideoGame(data) // takes data and sends it to api.js
    .then(ui.createVideoGameSuccess)
    .catch(ui.createVideoGameFailure)
  // console.log(api.createData(data))
  $(event.target).trigger('reset') // once button clicked, .trigger resets input
}

const onShowAllVideoGames = event => {
  event.preventDefault()
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

const onUpdateVideoGame = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateVideoGame(data)
    .then(ui.updateVideoGameSuccess)
    .catch(ui.updateVideoGameFailure)
  $(event.target).trigger('reset')
}

const onDeleteOneVideoGame = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.deleteOneVideoGame(data)
    .then(ui.deleteOneVideoGameSuccess)
    .catch(ui.deleteOneVideoGameFailure)
}

module.exports = {
  onCreateVideoGame,
  onShowAllVideoGames,
  onShowOneVideoGame,
  onUpdateVideoGame,
  onDeleteOneVideoGame
}
