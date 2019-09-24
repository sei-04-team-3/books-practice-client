'use strict'

const showBooksTemplate = require('../templates/book-listing.handlebars') // TODO

const onGetBookSuccess = function (data) {
  console.log(data)
  const showBooksHtml = showBooksTemplate({ books: data.books })
  $('.content').append(showBooksHtml)
}

const failure = function (error) {
  console.error(error)
}

module.exports = {
  onGetBookSuccess,
  failure
}
