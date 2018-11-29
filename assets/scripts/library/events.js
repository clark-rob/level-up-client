'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')

const onCreateData = event => { // function onCreateData uses the event submit to
  event.preventDefault() // prevent page reload
  const data = getFormFields(event.target) // target form is inserted into Data
  console.log(data)
  api.createData(data) // takes data and sends it to api.js
  console.log(api.createData(data))
}

module.exports = {
  onCreateData
}
