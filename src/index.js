import $ from 'jquery'
const fetch = require('node-fetch');
// https://wordwatch-api.herokuapp.com

function getTopWord (){
  $(document).ready(() => {
    fetch('https://wordwatch-api.herokuapp.com/api/v1/top_word').then(response => response.json()).then(top_word => {
      document.getElementsByTagName("h3").item(0).innerHTML = 'Top word from Word Watch API: ' + JSON.stringify(top_word.word)
    })
  })
}

$(document).ready(() => {
  getTopWord()
})

$(document).ready(() => {
  $("button").click(function(event){
    event.preventDefault();
    let words = document.getElementsByClassName('user-input').item(0).value
    words.split(" ").forEach((word, index) => {
      word = word.replace(/[^a-zA-Z]+/g, '')
      if (word != '') {
        fetch('https://wordwatch-api.herokuapp.com/api/v1/words', {
          method: 'post',
          body:    JSON.stringify({ word: { value: `${word}` } }),
          headers: { 'Content-Type': 'application/json' },
        })
      }
    });
    getTopWord()
  });
})
