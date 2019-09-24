'use strict'

const index = function () {
  return $.ajax({
    url: 'https://wdi-library-api.herokuapp.com/books'
  })
}

module.exports = {
  index
}
