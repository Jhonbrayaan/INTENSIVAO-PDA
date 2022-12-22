function getData() {
  return document.getElementById('dataSearch').value
}

async function callT(){
  let request = ''
  fetch('./package.json')
  .then(response => {
    return response.json()
  })
  .then( async function (m yJS))
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
        'api_key=NjDyjfkfm0meRzEczBfRQ5vR91KSgZDyyS4rovUe' +
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
