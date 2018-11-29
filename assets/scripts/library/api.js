'use strict'

const config = require('../config.js')
const store = require('../store.js')

const createData = data => { // createData function uses data from events.js
  console.log(store.user.token)
  return $.ajax({ // and returns it in json form
    url: config.apiUrl + '/games', // from config page
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createData
}
