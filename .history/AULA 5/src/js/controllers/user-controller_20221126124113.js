//controllers - minerar o diamante

document.querySelector("button").addEventListener("click", () => {
  const data = await fetch("https://randomuser.me/api");
  const res = await data.json();
  console.log(user)
});