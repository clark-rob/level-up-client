'use strict'
const store = require('../store.js')

const signUpSuccess = data => {
  $('.sign-up-message').show().text('What Games Do You Have?!')
  $('.sign-up-message').fadeOut(5000)
}

const signUpFailure = () => { // removed error parameter
  $('.sign-up-message').show().text('Error on Sign Up')
  $('.sign-up-message').fadeOut(9000)
}

const signInSuccess = data => {
  store.user = data.user
  $('.options-btn').show() // show options button
  $('.sign-up-btn').hide() // sign up is hidden
  $('#authorizationModal').modal('hide') // closes modal after success
  /* Video Game Logging show */
  $('.create-btn').show()
  $('.search-btn').show()
  $('.show-all-btn').show()
}

const signInFailure = () => { // removed error parameter
  $('.sign-up-message').show().text('Error on Sign In')
  $('.sign-up-message').fadeOut(9000)
}

const changePasswordSuccess = data => {
  $('.out-message').show().text('Never Forget Me!')
  $('.out-message').fadeOut(5000)
}

const changePasswordFailure = () => { // removed error parameter
  $('.out-message').show().text('Error on password change')
  $('.out-message').fadeOut(9000)
}

const signOutSuccess = data => {
  store.user = null
  $('#username').text('') // removes text for username
  $('.options-btn').hide() // sets option buton back to hidden
  $('.sign-up-btn').show() // sign up appears
  $('#optionsModal').modal('hide') // closes modal after success
  /* Video Game Logging show */
  $('.create-btn').hide()
  $('.search-btn').hide()
  $('.show-all-btn').hide()
  $('.show-message').empty()
}

const signOutFailure = () => { // removed error parameter
  $('.out-message').show().text('Error on Sign Out')
  $('.out-message').removeClass()
  $('.out-message').addClass('failure')
  // removed console.error
  $('.out-message').fadeOut(9000)
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
