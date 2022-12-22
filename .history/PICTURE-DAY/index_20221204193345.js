

async function callT(){
  let dataValue = document.getElementById('dataSearch').value
  let apiKey = 'nY1bghcPVAn7bzt9MWCk0xximP0s1ygkHQeRoBq5'
  let request = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${dataValue}`
  
  fetch(request)
  .then(data => data.json())
  .then(res => {
    console.log(res)
    p = document.getElementById('descricao')
    console.log(p)
    p.innerHTML = res.explanation

    //document.body.style.backgroundImage = `url('${res.url}')`

    div = document.getElementsByClassName('container-img')
    //div.style.backgroundColor('white')
    //img = document.getElementById('SpacePic')
    //img.src = res.url
    div.setAttribute("style", `background-image: url('${res.url}`)
    
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