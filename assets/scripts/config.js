'use strict'

let apiUrl
const apiUrls = {
  production: 'https://cryptic-journey-46149.herokuapp.com/',
  // link to personal herokuapp
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
