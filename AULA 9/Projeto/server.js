import app from "./src/main.js";

const port = process.env.PORT | 3000;
app.listen(port, () => {
  console.log(`Api online na porta: http://localhost:${port}`);
});