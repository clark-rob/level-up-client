'use strict'
const store = require('../store.js')

const signUpSuccess = data => {
  $('#up-message').show().text('What Games Do You Have?!')
  $('#up-message').removeClass()
  $('#up-message').addClass('success')
  $('#up-message').fadeOut(5000)
}

const signUpFailure = () => { // removed error parameter
  $('#up-message').show().text('Error on Sign Up')
  $('#up-message').removeClass()
  $('#up-message').addClass('failure')
  // removed console.error
}

const signInSuccess = data => {
  store.user = data.user
  $('#up-message').removeClass()
  $('#up-message').addClass('success')
  $('#options-button').css('visibility', 'visible') // show options button
  $('#sign-up-button').hide() // sign up is hidden
  $('#authorizationModal').modal('hide') // closes modal after success
  /* Video Game Logging show */
  $('.create-video-game').css('visibility', 'visible')
  $('.show-all-video-games').css('visibility', 'visible')
  $('.show-one-video-game').css('visibility', 'visible')
  $('.update-video-game').css('visibility', 'visible')
}

const signInFailure = () => { // removed error parameter
  $('#up-message').show().text('Error on Sign In')
  $('#up-message').removeClass()
  $('#up-message').addClass('failure')
  // removed console.error
}

const changePasswordSuccess = data => {
  $('#out-message').show().text('Never Forget Me!')
  $('#out-message').removeClass()
  $('#out-message').addClass('success')
  $('#out-message').fadeOut(5000)
}

const changePasswordFailure = () => { // removed error parameter
  $('#out-message').show().text('Error on password change')
  $('#out-message').removeClass()
  $('#out-message').addClass('failure')
  // removed console.error
}

const signOutSuccess = data => {
  store.user = null
  $('#username').text('') // removes text for username
  $('#out-message').removeClass()
  $('#out-message').addClass('success')
  // $('.current-player').hide()
  $('#options-button').css('visibility', 'hidden') // sets option buton back to hidden
  $('#sign-up-button').show() // sign up appears
  $('#optionsModal').modal('hide') // closes modal after success
  /* Video Game Logging show */
  $('.create-video-game').css('visibility', 'hidden')
  $('.show-all-video-games').css('visibility', 'hidden')
  $('.show-one-video-game').css('visibility', 'hidden')
  $('.update-video-game').css('visibility', 'hidden')
  $('#show-message').empty()
}

const signOutFailure = () => { // removed error parameter
  $('#out-message').show().text('Error on Sign Out')
  $('#out-message').removeClass()
  $('#out-message').addClass('failure')
  // removed console.error
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
