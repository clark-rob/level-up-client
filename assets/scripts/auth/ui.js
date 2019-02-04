'use strict'
const store = require('../store.js')
const libraryEvents = require('../library/events.js')

const signUpSuccess = data => {
  $('.sign-up-message').show().text('What Games Do You Have?!')
  $('.sign-up-message').fadeOut(5000)
}

const signUpFailure = () => { // removed error parameter
  $('.sign-up-message').show().text('Error on Sign Up')
  // removed console.error
  $('.sign-up-message').fadeOut(9000)
}

const signInSuccess = data => {
  store.user = data.user
  $('#options-button').css('visibility', 'visible') // show options button
  $('.log-in-btn').hide() // log in is hidden
  $('#authorizationModal').modal('hide') // closes modal after success
  /* Video Game Logging show */
  $('.create-button').css('visibility', 'visible')
  // $('#search-button').css('visibility', 'visible')
  libraryEvents.onShowAllVideoGames() // calls showAllVideoGames api
}

const signInFailure = () => { // removed error parameter
  $('.sign-up-message').show().text('Error on Sign In')
  // removed console.error
  $('.sign-up-message').fadeOut(9000)
}

const changePasswordSuccess = data => {
  $('#out-message').show().text('Never Forget Me!')
  $('#out-message').fadeOut(5000)
}

const changePasswordFailure = () => { // removed error parameter
  $('#out-message').show().text('Error on password change')
  // removed console.error
  $('#out-message').fadeOut(9000)
}

const signOutSuccess = data => {
  store.user = null
  $('#username').text('') // removes text for username
  // $('.current-player').hide()
  $('#options-button').css('visibility', 'hidden') // sets option buton back to hidden
  $('.log-in-btn').show() // log in appears
  $('#optionsModal').modal('hide') // closes modal after success
  /* Video Game Logging show */
  $('.create-button').css('visibility', 'hidden')
  $('#search-button').css('visibility', 'hidden')
  $('.show-all-video-games').css('visibility', 'hidden')
  $('.game-card').empty()
}

const signOutFailure = () => { // removed error parameter
  $('#out-message').show().text('Error on Sign Out')
  // removed console.error
  $('#out-message').fadeOut(9000)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
