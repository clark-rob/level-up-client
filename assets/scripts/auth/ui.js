'use strict'
const store = require('../store.js')

const signUpSuccess = data => {
  $('#up-message').show().text('What Games Do You Have?!')
  $('#up-message').fadeOut(5000)
}

const signUpFailure = () => { // removed error parameter
  $('#up-message').show().text('Error on Sign Up')
  $('#up-message').fadeOut(9000)
}

const signInSuccess = data => {
  store.user = data.user
  $('#options-button').show() // show options button
  $('#sign-up-button').hide() // sign up is hidden
  $('#authorizationModal').modal('hide') // closes modal after success
  /* Video Game Logging show */
  $('#create-button').show()
  $('#search-button').show()
  $('.show-all-video-games').show()
}

const signInFailure = () => { // removed error parameter
  $('#up-message').show().text('Error on Sign In')
  $('#up-message').fadeOut(9000)
}

const changePasswordSuccess = data => {
  $('#out-message').show().text('Never Forget Me!')
  $('#out-message').fadeOut(5000)
}

const changePasswordFailure = () => { // removed error parameter
  $('#out-message').show().text('Error on password change')
  $('#out-message').fadeOut(9000)
}

const signOutSuccess = data => {
  store.user = null
  $('#username').text('') // removes text for username
  $('#options-button').hide() // sets option buton back to hidden
  $('#sign-up-button').show() // sign up appears
  $('#optionsModal').modal('hide') // closes modal after success
  /* Video Game Logging show */
  $('#create-button').hide()
  $('#search-button').hide()
  $('.show-all-video-games').hide()
  $('.show-message').empty()
}

const signOutFailure = () => { // removed error parameter
  $('#out-message').show().text('Error on Sign Out')
  $('#out-message').removeClass()
  $('#out-message').addClass('failure')
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
