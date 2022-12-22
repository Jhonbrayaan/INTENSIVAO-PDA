function contentLoader() {
  sendApiReq();
};

async function sendApiReq() {
  let APIKEY = '7Uli7g4GS8oDKFS36eycg3pXIK6CdbsZojzE0Ksu'
  let res = await fetch(`https://api.nasa.gov/planetary/apod? api_key=${APIKEY}`);
  let data = await res.json();
  useApiData(data);
};

function useApiData(data) {
  document.querySelector("#title").innerHTML
}