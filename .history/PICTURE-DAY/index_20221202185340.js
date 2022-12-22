function getData() {
  return document.getElementById('dataSearch').value;
}

async function call() {
  let request = '';
  fetch("./secrets.json").then(response => {
    return response
  })
}