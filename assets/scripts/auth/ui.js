'use strict'
const store = require('../store.js')
const libraryEvents = require('../library/events.js')

const signUpSuccess = data => {
  $('.sign-up-message').show().text('What Games Do You Have?!')
  $('.sign-up-message').fadeOut(5000)
  // signInSuccess(data) // sign in after sign up success
}

const signUpFailure = () => { // removed error parameter
  $('.sign-up-message').show().text('Error on Sign Up')
  $('.sign-up-message').fadeOut(9000)
}

const signInSuccess = data => {
  store.user = data.user
  // hide
  $('.access-modal-change').text('Out')
  $('.log-in-screen').hide() // log in is hidden
  $('#welcomeCarousel').hide() // welcome carousel is hidden
  $('.release-dates').hide() // release-date divs hidden
  $('.sign-up-btn').hide() // sign up button hidden
  $('#accessModal').modal('hide') // closes modal after success
  // show
  $('.log-out-screen').show()
  $('.navbar').show()
  // if (data.games.length > 0) {
  libraryEvents.onShowAllVideoGames() // calls showAllVideoGames api
  // }
}

const signInFailure = () => { // removed error parameter
  $('.sign-up-message').show().text('Error on Sign In')
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
  // show
  $('.access-modal-change').text('In')
  $('.log-in-screen').show() // log in is shown
  $('#welcomeCarousel').show() // welcome carousel is shown
  $('.release-dates').show() // release-date divs shown
  $('.sign-up-btn').show() // sign up button shown
  // hide
  $('#accessModal').modal('hide') // closes modal after success
  $('.log-out-screen').hide() // log out is hidden
  $('.navbar').hide() // navbar is hidden
  $('.game-card').empty() // game-cards emptied, hidden
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
