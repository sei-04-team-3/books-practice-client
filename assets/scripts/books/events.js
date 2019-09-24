'use strict'

const api = require('./api')
const ui = require('./ui')

const onGetBooks = function (event) {
  event.preventDefault()
  console.log(event)
  api.index()
    .then(ui.onGetBookSuccess)
    .catch(ui.failure)
}

const addHandlers = function () {
  $('#getBooksButton').on('click', onGetBooks)
}

module.exports = {
  addHandlers
}
