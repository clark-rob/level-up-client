'use strict'

const config = require('../config.js')
const store = require('../store.js')

const createData = data => { // createData function uses data from events.js
  console.log(store.games)
  return $.ajax({ // and returns it in json form
    url: config.apiUrl + '/games', // from config page
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const showAllData = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const updateData = data => {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createData,
  showAllData,
  updateData
}
