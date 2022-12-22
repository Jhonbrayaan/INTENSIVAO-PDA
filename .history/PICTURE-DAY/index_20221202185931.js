function getData() {
  return document.getElementById('dataSearch').value;
}

async function call() {
  let request = '';
  fetch("./secrets.json").then(response => {
    return response.json();
  }).then(async function (myJSON) {
    request = 'https://api.nasa.gov/planetary/apod?date=' + getData()
    await fecth(request).then(function (response) {
      return response.json();
    }).then(function (myJSON) {
      
    })
  })
}