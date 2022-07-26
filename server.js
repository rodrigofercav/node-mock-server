const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

var currentUser = "MOCK";
const PORT = 3100;

var corsOptions = {
    orgim: '/',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Server Started ON http://localhost:${PORT}`));

// MAIN endpoint
app.route('/').get((request, response) => {
    let endpoints = `
        <h1>*** SIMPLE MOCK ENDPOINTS TO FRONTEND PROJECTS ***</h1>
        <br>
        <h3>COURSE Object: {
            id: number;
            name: string;
            imageUrl: string;
            description: string;
            price: number;
            code: string;
            duration: number;
            rating: number;
            releaseDate: string;
        }</h3>
        <h4>/api/courses (GET - POST) </h3>
        <h4>/api/courses/:id (GET - PUT - DELETE)</h3>
        <br>
        <h3>PESSOA Object: {
            id: number;
            nome: string;
            email: string;
            sexo: string;
        }</h3>
        <h4>/api/pessoas (GET - POST)</h3>
        <h4>/api/pessoas/:id (GET - PUT - DELETE)</h3>
    `;
    response.send(endpoints);
});


// COURSES endpoints
app.route('/api/courses').get((request, response) => {
    response.send(COURSES);
});

app.route('/api/courses').post((request, response) => {
    let course = request.body;
    const firstId = COURSES ? Math.max.apply(null, COURSES.map(courseIterator => courseIterator.id)) + 1 : 1;
    course.id = firstId;
    COURSES.push(course);
    response.status(201).send(course);
});

app.route('/api/courses/:id').put((request, response) => {
    const courseId = +request.params['id'];
    const course = request.body;

    const index = COURSES.findIndex(courseIterator => courseIterator.id === courseId);
    COURSES[index] = course;

    response.status(200).send(course);
});

app.route('/api/courses/:id').get((request, response) => {
    const courseId = +request.params['id'];

    response.status(200).send(COURSES.find(courseIterator => courseIterator.id === courseId));
});

app.route('/api/courses/:id').delete((request, response) => {
    const courseId = +request.params['id'];
    const courseDeleted = COURSES.find(courseIterator => courseIterator.id === courseId);
    COURSES = COURSES.filter(courseIterator => courseIterator.id !== courseId);

    response.status(200).send(courseDeleted);
});

// ################# \\
// PESSOAS endpoints \\
// ################# \\
app.route('/api/pessoas').get((request, response) => {
    console.log("Chegou em get:/api/pessoas");
    response.send(PESSOAS);
});

app.route('/api/pessoas').post((request, response) => {
    let pessoa = request.body;
    const firstId = PESSOAS ? Math.max.apply(null, PESSOAS.map(pessoaIterator => pessoaIterator.id)) + 1 : 1;
    pessoa.id = firstId;
    PESSOAS.push(pessoa);
    response.status(201).send(pessoa);
});

app.route('/api/pessoas/:id').put((request, response) => {
    const pessoaId = +request.params['id'];
    const pessoa = request.body;

    const index = PESSOAS.findIndex(pessoaIterator => pessoaIterator.id === pessoaId);
    PESSOAS[index] = pessoa;

    response.status(200).send(pessoa);
});

app.route('/api/pessoas/:id').get((request, response) => {
    const pessoaId = +request.params['id'];

    response.status(200).send(PESSOAS.find(pessoaIterator => pessoaIterator.id === pessoaId));
});

app.route('/api/pessoas/:id').delete((request, response) => {
    const pessoaId = +request.params['id'];
    const pessoaDeleted = PESSOAS.find(pessoaIterator => pessoaIterator.id === pessoaId);
    PESSOAS = PESSOAS.filter(pessoaIterator => pessoaIterator.id !== pessoaId);

    response.status(200).send(pessoaDeleted);
});


// ################ \\
// MOCK Data Arrays \\
// ################ \\
var COURSES = [
    {
        id: 1,
        name: 'Angular: CLI',
        releaseDate: 'November 2, 2021',
        description: 'In this course, students will gain a great understanding of the main features of CLI.',
        duration: 120,
        code: 'XLF-1212',
        rating: 4.35,
        price: 3299.99,
        imageUrl: 'https://angular.io/generated/images/marketing/concept-icons/cli.png',
    },
    {
        id: 2,
        name: 'Angular: Forms',
        releaseDate: 'May 4, 2022',
        description: 'In this course, students will gain in-depth knowledge of the features available in the Forms module.',
        duration: 80,
        code: 'DWQ-3412',
        rating: 3.5,
        price: 2499.99,
        imageUrl: 'https://angular.io/generated/images/marketing/concept-icons/forms.png',
    },
    {
        id: 3,
        name: 'Angular: HTTP',
        releaseDate: 'November 8, 2021',
        description: 'In this course, students will gain in-depth knowledge of the features available in the HTTP module.',
        duration: 80,
        code: 'QPL-0913',
        rating: 4.0,
        price: 3699.99,
        imageUrl: 'https://angular.io/generated/images/marketing/concept-icons/http.png',
    },
    {
        id: 4,
        name: 'Angular: Router',
        releaseDate: 'November 16, 2020',
        description: 'In this course, students will gain in-depth knowledge of the features available in the Router module.',
        duration: 80,
        code: 'OHP-1095',
        rating: 4.5,
        price: 4699.99,
        imageUrl: 'https://angular.io/generated/images/marketing/concept-icons/router.png',
    },
    {
        id: 5,
        name: 'Angular: Animations',
        releaseDate: 'May 25, 2022',
        description: 'In this course, students will gain in-depth knowledge of the features available in the Animations module.',
        duration: 80,
        code: 'PWY-9381',
        rating: 5,
        price: 5699.99,
        imageUrl: 'https://angular.io/generated/images/marketing/concept-icons/animations.png',
    }
];

var PESSOAS = [
    {
        id: 1,
        nome: 'Rodrigo',
        email: "rodrigo@email.com",
        sexo: "m"
    },
    {
        id: 2,
        nome: 'Karina',
        email: "karina@email.com",
        sexo: "f"
    },
    {
        id: 3,
        nome: 'Vinícius',
        email: "vinicius@email.com",
        sexo: "m"
    },
    {
        id: 4,
        nome: 'Maria',
        email: "maria@email.com",
        sexo: "f"
    },
    {
        id: 5,
        nome: 'José',
        email: "jose@email.com",
        sexo: "m"
    },
    {
        id: 6,
        nome: 'Paulo',
        email: "paulo@email.com",
        sexo: "m"
    },
    {
        id: 7,
        nome: 'Renata',
        email: "vinicius@email.com",
        sexo: "f"
    },
    {
        id: 8,
        nome: 'Bia',
        email: "bia@email.com",
        sexo: "f"
    },
    {
        id: 9,
        nome: 'Biel',
        email: "jose@email.com",
        sexo: "m"
    },
    {
        id: 10,
        nome: 'Duda',
        email: "duda@email.com",
        sexo: "f"
    }
];
