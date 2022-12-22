function getData() {
  return document.getElementById('dataSearch').value;
}

async function call() {
  let request = '';
  fetch("./package.json").then(response => {
    return response.json();
  }).then(async function (myJSON) {
    request = `https://api.nasa.gov/planetary/apod?` + getData() + 'api_key=' + mysql
  })
}