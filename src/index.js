import $ from 'jquery'
const fetch = require('node-fetch');
// https://wordwatch-api.herokuapp.com

$(document).ready(() => {
  fetch('https://wordwatch-api.herokuapp.com/api/v1/top_word').then(response => response.json()).then(top_word => {
    let topWordText = document.getElementsByTagName("h3").item(0).innerHTML
    document.getElementsByTagName("h3").item(0).innerHTML = topWordText + JSON.stringify(top_word.word)
  })
})
