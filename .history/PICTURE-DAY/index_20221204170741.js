function getData() {
  return document.getElementById('dataSearch').value
}
var teste = 'https://api.nasa.gov/planetary/apod?date=2022-02'

async function callT(){
  let request = ''
  fetch('https://api.nasa.gov/planetary/apod?api_key=YKlkcPvD2V9xVw2JQTgmvf7p3uMUEFLG5oX0CbQn')
  .then(data => data.json())
  .then(res => {
    console.log(res)
  })
  
}

async function call() {
  let request = ''
  fetch('./package.json')
    .then(response => {
      return response.json()
    })
    .then(async function (myJSON) {
      request =
        `https://api.nasa.gov/planetary/apod?` +
        getData() +
        'api_key=YKlkcPvD2V9xVw2JQTgmvf7p3uMUEFLG5oX0CbQn' +
        myJSON.api_key
      await fetch(request)
        .then(function (response) {
          console.log(request)
          return response.json()
        })
        .then(function (myJSON) {
          p = document.getElementById('descricao')
          p.innerHtml = myJSON.explanation

          img = document.getElementById('SpacePic')
          img.src = myJSON.url
        })
    })
}
