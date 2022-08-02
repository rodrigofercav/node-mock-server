import * as C from './endpoints-details.mjs';
import * as DATA from "./endpoints.data.mjs"

import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';

let corsOptions = { orgim: '/' }
const app = express();

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.listen(C.PORT, () => console.log(`Server Started ON ${C.HOST}:${C.PORT}`));

// MAIN endpoint
app.route('/').get((request, response) => { response.send(C.ENDPOINTS) });

// ################# \\
// COURSES endpoints \\
// ################# \\
let COURSES = DATA.COURSES;
const coursesURL = "/api/courses";

app.route(coursesURL).get((request, response) => {
    console.log(`=> get:${coursesURL}`);
    response.send(COURSES);
});

app.route(coursesURL + "/:id").get((request, response) => {
    const id = +request.params['id'];

    console.log(`=> get:${coursesURL}/${id}`);
    response.status(200).send(COURSES.find(iterator => iterator.id === id));
});

app.route(coursesURL).post((request, response) => {
    let body = request.body;
    body.id = COURSES ? Math.max.apply(null, COURSES.map(iterator => iterator.id)) + 1 : 1;

    COURSES.push(body);

    console.log(`=> post:${coursesURL}`);
    response.status(201).send(body);
});

app.route(coursesURL + "/:id").put((request, response) => {
    const id = +request.params['id'];
    const body = request.body;
    const index = COURSES.findIndex(iterator => iterator.id === id);

    COURSES[index] = body;

    console.log(`=> put:${coursesURL}/${id}`);
    response.status(200).send(body);
});

app.route(coursesURL + "/:id").delete((request, response) => {
    const id = +request.params['id'];
    const objDeleted = COURSES.find(iterator => iterator.id === id);

    COURSES = COURSES.filter(iterator => iterator.id !== id);

    console.log(`=> delete:${coursesURL}/${id}`);
    response.status(200).send(objDeleted);
});

// ################# \\
// PESSOAS endpoints \\
// ################# \\
let PESSOAS = DATA.PESSOAS;
const pessoasURL = "/api/pessoas";

app.route(pessoasURL).get((request, response) => {
    console.log(`=> get:${pessoasURL}`);
    response.send(PESSOAS);
});

app.route(pessoasURL + "/:id").get((request, response) => {
    const id = +request.params['id'];

    console.log(`=> get:${pessoasURL}/${id}`);
    response.status(200).send(PESSOAS.find(iterator => iterator.id === id));
});

app.route(pessoasURL).post((request, response) => {
    let body = request.body;
    body.id = PESSOAS ? Math.max.apply(null, PESSOAS.map(iterator => iterator.id)) + 1 : 1;

    PESSOAS.push(body);

    console.log(`=> post:${pessoasURL}`);
    response.status(201).send(body);
});

app.route(pessoasURL + "/:id").put((request, response) => {
    const id = +request.params['id'];
    const body = request.body;
    const index = PESSOAS.findIndex(iterator => iterator.id === id);

    PESSOAS[index] = body;

    console.log(`=> put:${pessoasURL}/${id}`);
    response.status(200).send(body);
});

app.route(pessoasURL + "/:id").delete((request, response) => {
    const id = +request.params['id'];
    const objDeleted = PESSOAS.find(iterator => iterator.id === id);

    PESSOAS = PESSOAS.filter(iterator => iterator.id !== id);

    console.log(`=> delete:${pessoasURL}/${id}`);
    response.status(200).send(objDeleted);
});

// ########################## \\
// BOOKS CATEGORIES endpoints \\
// ########################## \\
let BOOKS_CATEGORIES = DATA.BOOKS_CATEGORIES;
const booksCategoriesURL = "/api/books/categories";

app.route(booksCategoriesURL).get((request, response) => {
    console.log(`=> get:${booksCategoriesURL}`);
    response.send(BOOKS_CATEGORIES);
});

app.route(booksCategoriesURL + "/:id").get((request, response) => {
    const id = +request.params['id'];

    console.log(`=> get:${booksCategoriesURL}/${id}`);
    response.status(200).send(BOOKS_CATEGORIES.find(iterator => iterator.id === id));
});

app.route(booksCategoriesURL).post((request, response) => {
    let body = request.body;
    body.id = BOOKS_CATEGORIES ? Math.max.apply(null, BOOKS_CATEGORIES.map(iterator => iterator.id)) + 1 : 1;

    BOOKS_CATEGORIES.push(body);

    console.log(`=> post:${booksCategoriesURL}`);
    response.status(201).send(body);
});

app.route(booksCategoriesURL + "/:id").put((request, response) => {
    const id = +request.params['id'];
    const body = request.body;
    const index = BOOKS_CATEGORIES.findIndex(iterator => iterator.id === id);

    BOOKS_CATEGORIES[index] = body;

    console.log(`=> put:${booksCategoriesURL}/${id}`);
    response.status(200).send(body);
});

app.route(booksCategoriesURL + "/:id").delete((request, response) => {
    const id = +request.params['id'];
    const objDeleted = BOOKS_CATEGORIES.find(iterator => iterator.id === id);

    BOOKS_CATEGORIES = BOOKS_CATEGORIES.filter(iterator => iterator.id !== id);

    console.log(`=> delete:${booksCategoriesURL}/${id}`);
    response.status(200).send(objDeleted);
});

// ############### \\
// BOOKS endpoints \\
// ############### \\
let BOOKS = DATA.BOOKS;
const booksURL = "/api/books";

app.route(booksURL).get((request, response) => {
    console.log(`=> get:${booksURL}`);
    response.send(BOOKS);
});

app.route(booksURL + "/:id").get((request, response) => {
    const id = +request.params['id'];

    console.log(`=> get:${booksURL}/${id}`);
    response.status(200).send(BOOKS.find(iterator => iterator.id === id));
});

app.route(booksURL).post((request, response) => {
    let body = request.body;
    body.id = BOOKS ? Math.max.apply(null, BOOKS.map(iterator => iterator.id)) + 1 : 1;

    BOOKS.push(body);

    console.log(`=> post:${booksURL}`);
    response.status(201).send(body);
});

app.route(booksURL + "/:id").put((request, response) => {
    const id = +request.params['id'];
    const body = request.body;
    const index = BOOKS.findIndex(iterator => iterator.id === id);

    BOOKS[index] = body;

    console.log(`=> put:${booksURL}/${id}`);
    response.status(200).send(body);
});

app.route(booksURL + "/:id").delete((request, response) => {
    const id = +request.params['id'];
    const objDeleted = BOOKS.find(iterator => iterator.id === id);

    BOOKS = BOOKS.filter(iterator => iterator.id !== id);

    console.log(`=> delete:${booksURL}/${id}`);
    response.status(200).send(objDeleted);
});
