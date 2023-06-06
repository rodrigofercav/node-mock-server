import body_parser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

//route-files
import books_categ from "./routes/books-categ.js";
import books from "./routes/books.js";
import cnaes_mei from "./routes/cnaes-mei.js";
import courses from "./routes/courses.js";
import pessoas from "./routes/pessoas.js";
import usuarios from "./routes/usuarios.js";

//env-variables
dotenv.config();
const port = process.env.API_PORT || 3100;
//const cors_options = { origin: process.env.CORS_ORIGIN };

//init-app
const app = express();
app.use(body_parser.json());
app.use(cors());
app.listen(port, () => console.log(`Server started on port ${port}!`));

//main-endpoint
app.route("/").get((req, res) => res.send("{{ Node Mock Server Started! }}"));

//other-endpoints
app.use([
  books, 
  books_categ, 
  cnaes_mei, 
  courses, 
  pessoas, 
  usuarios
]);

app.route("/*").get((req, res) => res.status(404).send("404: Endpoint não encontrado!"));

export default app;
