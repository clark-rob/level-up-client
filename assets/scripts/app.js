'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')

const libraryEvents = require('./library/events.js')

$(() => {
/* -----------------Auth Events----------------- */
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  /* -----------------Auth Events----------------- */
  /* -----------------Library Events----------------- */
  $('.create-data').on('submit', libraryEvents.onCreateData)
  $('.show-data').on('submit', libraryEvents.onShowAllData)
  $('.update-data').on('submit', libraryEvents.onUpdateData)
  /* -----------------Library Events----------------- */
})
