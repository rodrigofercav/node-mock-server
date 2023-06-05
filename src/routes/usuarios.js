import express from "express";
import { USUARIOS as data } from "../mock/data.arrays.mjs";

const router = express.Router();
const path = "/usuarios";

router.route(path).get((eq, res) => {
    console.log(`=> get:${path}`);
    res.send(data);
});

router.route(path + "/:id").get((req, res) => {
    const id = +(req.params['id']);

    console.log(`=> get:${path}/${id}`);
    res.status(200).send(data.find(iterator => iterator.id === id));
});

router.route(path).post((req, res) => {
    let body = req.body;
    body.id = data ? ++Math.max.apply(null, data.map((iterator) => iterator.id)) : 1;

    data.push(body);

    console.log(`=> post:${path}`);
    res.status(201).send(body);
});

router.route(path + "/:id").put((req, res) => {
    const id = +(req.params['id']);
    const body = req.body;
    const index = data.findindex(iterator => iterator.id === id);

    data[index] = body;

    console.log(`=> put:${path}/${id}`);
    res.status(200).send(body);
});

router.route(path + "/:id").delete((req, res) => {
    const id = +(req.params['id']);
    const deleted = data.find(iterator => iterator.id === id);

    data = data.filter(iterator => iterator.id !== id);

    console.log(`=> delete:${path}/${id}`);
    res.status(200).send(deleted);
});

export default router;
