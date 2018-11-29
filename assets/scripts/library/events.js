'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateData = event => { // function onCreateData uses the event submit to
  event.preventDefault() // prevent page reload
  const data = getFormFields(event.target) // target form is inserted into Data
  // console.log(data)
  api.createData(data) // takes data and sends it to api.js
    .then(ui.createDataSuccess)
    .catch(ui.createDataFailure)
  // console.log(api.createData(data))
  $(event.target).trigger('reset') // once button clicked, .trigger resets input
}

const onShowAllData = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.showAllData(data)
    .then(ui.showAllDataSuccess)
    .catch(ui.showAllDataFailure)
}

const onUpdateData = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log()
  api.updateData(data)
    .then(ui.updateDataSuccess)
    .catch(ui.updateDataFailure)
}

module.exports = {
  onCreateData,
  onShowAllData,
  onUpdateData
}
