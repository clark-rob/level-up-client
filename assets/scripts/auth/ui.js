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
  $('#up-message').show().text('What to play, what to play...')
  $('#up-message').removeClass()
  $('#up-message').addClass('success')
  $('#sign-out').show() // sign out form appear
  $('#change-password').show() // password form appear
  $('#sign-up').hide() // sign up is hidden
  $('#sign-in').hide() // sign in is hidden
  $('#up-message').fadeOut(5000)
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
  $('#out-message').show().text('Have fun out there!')
  $('#username').text('') // removes text for username
  $('#out-message').removeClass()
  $('#out-message').addClass('success')
  $('.current-player').hide()
  $('#sign-out').hide() // sign out hidden
  $('#change-password').hide() // password hidden
  $('#sign-up').show() // sign up appears
  $('#sign-in').show() // sign in appears
  // $('.create-game').hide() // hide create game button
  $('#out-message').fadeOut(5000)
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
