import body_parser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import books_categ from "./src/routes/books-categ.js";
import books from "./src/routes/books.js";
import cnaes_mei from "./src/routes/cnaes-mei.js";
import courses from "./src/routes/courses.js";
import pessoas from "./src/routes/pessoas.js";
import usuarios from "./src/routes/usuarios.js";

//env-variables
dotenv.config();
const api_port = process.env.API_PORT;
//const cors_options = { origin: process.env.CORS_ORIGIN };

//init-app
const server = express();
server.use(body_parser.json());
server.use(cors());
server.listen(api_port, () => console.log(`Server Started!`));

//root-server-endpoint
server.route("/").get((req, res) => res.send("Node Mock Server"));

//routes-files
server.use([books, books_categ, cnaes_mei, courses, pessoas, usuarios]);
