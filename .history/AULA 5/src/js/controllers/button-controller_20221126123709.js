//controllers - minerar o diamante

document.querySelector("button").addEventListener("click", () => {
  const data = await fetch("https://randomuser.me/api");
  const result = await data.json();
  console.log(result)
});