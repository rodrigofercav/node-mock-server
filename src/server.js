import body_parser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import books_categ from "./routes/books-categ.js";
import books from "./routes/books.js";
import cnaes_mei from "./routes/cnaes-mei.js";
import courses from "./routes/courses.js";
import pessoas from "./routes/pessoas.js";
import usuarios from "./routes/usuarios.js";

import { HELP as endp } from "./mock/endpoints.mjs";

//env-variables
dotenv.config();
const api_host = process.env.API_HOST;
const api_port = process.env.API_PORT;
const cors_options = { origin: process.env.CORS_ORIGIN };

//init-app
const server = express();
server.use(body_parser.json());
server.use(cors(cors_options));
server.listen(api_port, () =>
	console.log(`Server started on ${api_host}:${api_port}`)
);

//root-server-endpoint
server.route("/").get((req, res) => res.send("Node Mock Server"));

//routes-files
server.use([books, books_categ, cnaes_mei, courses, pessoas, usuarios]);
