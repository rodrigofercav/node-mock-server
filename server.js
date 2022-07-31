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
            id: number,
            name: string,
            imageUrl: string,
            description: string,
            price: number,
            code: string,
            duration: number,
            rating: number,
            releaseDate: string
        }</h3>
        <h4>/api/courses (GET - POST) </h3>
        <h4>/api/courses/:id (GET - PUT - DELETE)</h3>
        <br>
        <h3>PESSOA Object: {
            id: number,
            nome: string,
            data_nascimento: string,
            email: string,
            sexo: string
        }</h3>
        <h4>/api/pessoas (GET - POST)</h3>
        <h4>/api/pessoas/:id (GET - PUT - DELETE)</h3>
        <br>
        <h3>BOOK Object: {
            id: number,
            name: string,
            description: string,
            author_id: string,
            price: number,
            image_url: string,
            discount: number,
            category_id: number
        }</h3>
        <h4>/api/books (GET - POST)</h3>
        <h4>/api/books/:id (GET - PUT - DELETE)</h3>
        <br>
        <h3>BOOK CATEGORY Object: {
            id: number,
            name: string,
            description: string
        }</h3>
        <h4>/api/categories (GET - POST)</h3>
        <h4>/api/categories/:id (GET - PUT - DELETE)</h3>
        <br>
    `;
    response.send(endpoints);
});


// ################# \\
// COURSES endpoints \\
// ################# \\
app.route('/api/courses').get((request, response) => {
    console.log("=> get:/api/courses");
    response.send(COURSES);
});

app.route('/api/courses/:id').get((request, response) => {
    const courseId = +request.params['id'];

    console.log("=> get:/api/courses/" + courseId);
    response.status(200).send(COURSES.find(courseIterator => courseIterator.id === courseId));
});

app.route('/api/courses').post((request, response) => {
    let course = request.body;
    course.id = COURSES ? Math.max.apply(null, COURSES.map(courseIterator => courseIterator.id)) + 1 : 1;;

    COURSES.push(course);

    console.log("=> post:/api/courses");
    response.status(201).send(course);
});

app.route('/api/courses/:id').put((request, response) => {
    const courseId = +request.params['id'];
    const course = request.body;

    const index = COURSES.findIndex(courseIterator => courseIterator.id === courseId);
    COURSES[index] = course;

    console.log("=> put:/api/courses/" + courseId);
    response.status(200).send(course);
});

app.route('/api/courses/:id').delete((request, response) => {
    const courseId = +request.params['id'];
    const courseDeleted = COURSES.find(courseIterator => courseIterator.id === courseId);
    COURSES = COURSES.filter(courseIterator => courseIterator.id !== courseId);

    console.log("=> delete:/api/courses/" + courseId);
    response.status(200).send(courseDeleted);
});


// ################# \\
// PESSOAS endpoints \\
// ################# \\
app.route('/api/pessoas').get((request, response) => {
    console.log("=> get:/api/pessoas");
    response.send(PESSOAS);
});

app.route('/api/pessoas/:id').get((request, response) => {
    const pessoaId = +request.params['id'];

    console.log("=> get:/api/pessoas/" + pessoaId);
    response.status(200).send(PESSOAS.find(pessoaIterator => pessoaIterator.id === pessoaId));
});

app.route('/api/pessoas').post((request, response) => {
    let pessoa = request.body;
    pessoa.id = PESSOAS ? Math.max.apply(null, PESSOAS.map(pessoaIterator => pessoaIterator.id)) + 1 : 1;;

    PESSOAS.push(pessoa);

    console.log("=> post:/api/pessoas");
    response.status(201).send(pessoa);
});

app.route('/api/pessoas/:id').put((request, response) => {
    const pessoaId = +request.params['id'];
    const pessoa = request.body;

    const index = PESSOAS.findIndex(pessoaIterator => pessoaIterator.id === pessoaId);
    PESSOAS[index] = pessoa;

    console.log("=> put:/api/pessoas/" + pessoaId);
    response.status(200).send(pessoa);
});

app.route('/api/pessoas/:id').delete((request, response) => {
    const pessoaId = +request.params['id'];
    const pessoaDeleted = PESSOAS.find(pessoaIterator => pessoaIterator.id === pessoaId);
    PESSOAS = PESSOAS.filter(pessoaIterator => pessoaIterator.id !== pessoaId);

    console.log("=> delete:/api/pessoas/" + pessoaId);
    response.status(200).send(pessoaDeleted);
});


// ############### \\
// BOOKS endpoints \\
// ############### \\
app.route('/api/books').get((request, response) => {
    console.log("=> get:/api/books");
    response.send(BOOKS);
});

app.route('/api/books/:id').get((request, response) => {
    const bookId = +request.params['id'];

    console.log("=> get:/api/books/" + bookId);
    response.status(200).send(BOOKS.find(bookIterator => bookIterator.id === bookId));
});

app.route('/api/books').post((request, response) => {
    let book = request.body;
    book.id = BOOKS ? Math.max.apply(null, BOOKS.map(bookIterator => bookIterator.id)) + 1 : 1;;

    BOOKS.push(book);

    console.log("=> post:/api/books");
    response.status(201).send(book);
});

app.route('/api/books/:id').put((request, response) => {
    const bookId = +request.params['id'];
    const book = request.body;

    const index = BOOKS.findIndex(bookIterator => bookIterator.id === bookId);
    BOOKS[index] = book;

    console.log("=> put:/api/books/" + bookId);
    response.status(200).send(book);
});

app.route('/api/books/:id').delete((request, response) => {
    const bookId = +request.params['id'];
    const bookDeleted = BOOKS.find(bookIterator => bookIterator.id === bookId);
    BOOKS = BOOKS.filter(bookIterator => bookIterator.id !== bookId);

    console.log("=> delete:/api/books/" + bookId);
    response.status(200).send(bookDeleted);
});


// ########################## \\
// BOOKS CATEGORIES endpoints \\
// ########################## \\
app.route('/api/books/categories').get((request, response) => {
    console.log("=> get:/api/books/categories");
    response.send(BOOKS_CATEGORIES);
});

app.route('/api/books/categories/:id').get((request, response) => {
    const bookCategoryId = +request.params['id'];

    console.log("=> get:/api/books/categories/" + bookCategoryId);
    response.status(200).send(BOOKS_CATEGORIES.find(bookIterator => bookCategoryIterator.id === bookCategoryId));
});

app.route('/api/books/categories').post((request, response) => {
    let bookCategory = request.body;

    bookCategory.id = BOOKS_CATEGORIES ? Math.max.apply(null, BOOKS_CATEGORIES.map(bookIterator => bookCategoryIterator.id)) + 1 : 1;
    BOOKS_CATEGORIES.push(book);

    console.log("=> post:/api/books/categories");
    response.status(201).send(book);
});

app.route('/api/books/categories/:id').put((request, response) => {
    const bookCategoryId = +request.params['id'];
    const bookCategory = request.body;

    const index = BOOKS_CATEGORIES.findIndex(bookIterator => bookCategoryIterator.id === bookCategoryId);
    BOOKS_CATEGORIES[index] = bookCategory;

    console.log("=> put:/api/books/categories/" + bookCategoryId);
    response.status(200).send(book);
});

app.route('/api/books/categories/:id').delete((request, response) => {
    const bookCategoryId = +request.params['id'];
    const bookCategoryDeleted = BOOKS_CATEGORIES.find(bookIterator => bookCategoryIterator.id === bookCategoryId);
    BOOKS_CATEGORIES = BOOKS_CATEGORIES.filter(bookIterator => bookCategoryIterator.id !== bookCategoryId);

    console.log("=> delete:/api/books/categories/" + bookCategoryId);
    response.status(200).send(bookDeleted);
});


// ###################################### \\
// ########  MOCK  Data  Arrays  ######## \\
// ###################################### \\

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
    { id: 1, nome: 'Rodrigo Cavalcante', data_nascimento: "18/05/1985", email: "rodrigo@email.com", sexo: "M" },
    { id: 2, nome: 'Karina Cavalcante', data_nascimento: "16/06/1979", email: "karina@email.com", sexo: "F" },
    { id: 3, nome: 'Vinícius Cavalcante', data_nascimento: "05/10/2015", email: "vinicius@email.com", sexo: "M" },
    { id: 4, nome: 'Maria da Paz', data_nascimento: "16/04/1964", email: "maria@email.com", sexo: "F" },
    { id: 5, nome: 'José Laurindo', data_nascimento: "02/02/1957", email: "jose@email.com", sexo: "M" },
    { id: 6, nome: 'Paulo Roberto', data_nascimento: "23/09/1961", email: "paulo@email.com", sexo: "M" },
    { id: 7, nome: 'Renata Ferreira', data_nascimento: "01/09/1986", email: "vinicius@email.com", sexo: "F" },
    { id: 8, nome: 'Maria Beatriz', data_nascimento: "12/05/2009", email: "bia@email.com", sexo: "F" },
    { id: 9, nome: 'Gabriel César', data_nascimento: "26/05/2011", email: "jose@email.com", sexo: "M" },
    { id: 10, nome: 'Maria Eduarda', data_nascimento: "08/01/2013", email: "duda@email.com", sexo: "F" }
];

var BOOKS_CATEGORIES = [
    { id: 1, name: "Action and Adventure", description: "Description of Action and Adventure book category." },
    { id: 2, name: "Classics", description: "Description of Classics book category." },
    { id: 3, name: "Comic Book or Graphic Novel", description: "Description of Comic Book or Graphic Novel book category." },
    { id: 4, name: "Detective and Mystery", description: "Description of Detective and Mystery book category." },
    { id: 5, name: "Fantasy", description: "Description of Fantasy book category." },
    { id: 6, name: "Historical Fiction", description: "Description of Historical Fiction book category." },
    { id: 7, name: "Horror", description: "Description of Horror book category." },
    { id: 8, name: "Literary Fiction", description: "Description of Literary Fiction book category." },
    { id: 9, name: "Romance", description: "Description of Romance book category." },
    { id: 10, name: "Science Fiction (Sci-Fi)", description: "Description of Science Fiction (Sci-Fi) book category." },
    { id: 11, name: "Short Stories", description: "Description of Short Stories book category." },
    { id: 12, name: "Suspense and Thrillers", description: "Description of Suspense and Thrillers book category." },
    { id: 13, name: "Women's Fiction", description: "Description of Women's Fiction book category." },
    { id: 14, name: "Biographies and Autobiographies", description: "Description of Biographies and Autobiographies book category." },
    { id: 15, name: "Cookbooks", description: "Description of Cookbooks book category." },
    { id: 16, name: "Essays", description: "Description of Essays book category." },
    { id: 17, name: "History", description: "Description of History book category." },
    { id: 18, name: "Memoir", description: "Description of Memoir book category." },
    { id: 19, name: "Poetry", description: "Description of Poetry book category." },
    { id: 20, name: "Self-Help", description: "Description of Self-Help book category." },
    { id: 21, name: "True Crime", description: "Description of True Crime book category." }
];

var BOOKS = [
    {
        id: 1,
        name: "Don Quixote",
        description: "Don Quixote has become so entranced reading tales of chivalry that he decides to turn knight errant himself. In the company of his faithful squire, Sancho Panza, these exploits blossom in all sorts of wonderful ways. While Quixote's fancy often leads him astray—he tilts at windmills, imagining them to be giants—Sancho acquires cunning and a certain sagacity. Sane madman and wise fool, they roam the world together-and together they have haunted readers' imaginations for nearly four hundred years.",
        author: "Miguel De Cervantes Saavedra",
        price: 499.99,
        image_url: "https://m.media-amazon.com/images/I/51iQq6ZYedL.jpg",
        discount: 10,
        category_id: 1,
    },
    {
        id: 2,
        name: "The Three Musketeers",
        description: "The Three Musketeers tells the story of the early adventures of the young Gascon gentleman, D'Artagnan and his three friends from the regiment of the King's Musketeers - Athos, Porthos and Aramis. Under the watchful eye of their patron M. de Treville, the four defend the honour of the regiment against the guards of Cardinal Richelieu, and the honour of the queen against the machinations of the Cardinal himself as the power struggles of seventeenth century France are vividly played out in the background. But their most dangerous encounter is with the Cardinal's spy, Milady, one of literature's most memorable female villains, and Dumas employs all his fast-paced narrative skills to bring this enthralling novel to a breathtakingly gripping and dramatic conclusion.",
        author: "Alexandre Dumas",
        image_url: "https://publisko.com/images/books/15156.jpg",
        price: 597.99,
        discount: 15,
        category_id: 1,
    },
    {
        id: 3,
        name: "Treasure Island",
        description: "For sheer storytelling delight and pure adventure, Treasure Island has never been surpassed. From young Jim Hawkins’s first encounter with the sinister beggar Pew to the climactic battle with the most memorable villain in literature, Long John Silver, this novel has fired readers’ imaginations for generations. A rousing tale of treachery, greed, and daring, Treasure Island continues to enthrall readers of all ages.",
        author: "Robert Louis Stevenson",
        image_url: "https://images-na.ssl-images-amazon.com/images/I/41MkxvBqfWL._SX308_BO1,204,203,200_.jpg",
        price: 499.99,
        discount: 0,
        category_id: 1,
    },
    {
        id: 4,
        name: "Murder on the Orient Express",
        description: "On a dark winter night, the Orient Express is stopped by a snowdrift. In the morning, one of the passengers, a rich American tycoon, is found dead in his compartment with a dozen stab wounds. The famous Belgian detective Hercule Poirot starts to investigate and finds out that there's more than one one person on the train who has a motive for the murder. But who actually killed Samuel Ratchett?",
        author: "Agatha Christie",
        image_url: "https://marketing.prowritingaid.com/murder-on-the-orient-express.jpg",
        price: 699.99,
        discount: 10,
        category_id: 4,
    },
    {
        id: 5,
        name: "The Big Sleep",
        description: "Private investigator Philip Marlowe is trying to find out who's blackmailing a wealthy young woman. He enters into a dangerous investigation filled with kidnapping, seduction, murder, and more. The Big Sleep is a deeply atmospheric crime novel, and the characters are complex, even the ones who fall into well-worn tropes.",
        author: "Raymond Chandler",
        image_url: "https://marketing.prowritingaid.com/The-big-sleep.jpg",
        price: 699.99,
        discount: 0,
        category_id: 4,
    },
    {
        id: 6,
        name: "The Name of the Rose",
        description: "The year is 1327. The place is a Northern Italian abbey full of Benedictine monks. Something strange is afoot in this abbey. Seven monks die in bizarre ways, and Friar William of Baskerville must figure out who has killed them, using his wry wit and sharp intellect.",
        author: "Umberto Eco",
        image_url: "https://marketing.prowritingaid.com/thname-of-the-rose.jpg",
        price: 499.99,
        discount: 0,
        category_id: 4,
    },
    {
        id: 7,
        name: "The Girl with the Dragon Tattoo",
        description: "Crusading journalist Mikael Blomkvist and punk hacker Lisbeth Salander team up to solve a strange mystery. Their investigation uncovers a web of corruption and injustice. The novel is a ferocious revenge story, a gripping mystery, and one of the most popular crime books published in recent years. ",
        author: "Stieg Larsson",
        image_url: "https://marketing.prowritingaid.com/the-girl-with-the-dragon-tattoo.jpg",
        price: 599.99,
        discount: 10,
        category_id: 4,
    },
    {
        id: 8,
        name: "Think and Grow Rich",
        description: "Think and Grow Rich has been credited with helping to inspire more people to become millionaires and billionaires than any other book in history. And now, in this new edition, it will bring the timeless message to the next generation. With the stunning, modern package, this unique edition features not only the original and complete 1937 text, but also includes two exciting pieces from Napoleon Hill―\"Let Ambition Be Your Master\" and \"What I Learned from Analyzing Ten Thousand People\"―that are only available here.",
        author: "Napoleon Hill",
        image_url: "https://images-na.ssl-images-amazon.com/images/I/81-gJDv5A2L.jpg",
        price: 499.99,
        discount: 15,
        category_id: 20,
    },
    {
        id: 9,
        name: "The Alchemist",
        description: "Combining magic, mysticism, wisdom and wonder into an inspiring tale of self-discovery, The Alchemist has become a modern classic, selling millions of copies around the world and transforming the lives of countless readers across generations.",
        author: "Paulo Coelho",
        image_url: "https://m.media-amazon.com/images/P/0062315005.01._SCLZZZZZZZ_SX500_.jpg",
        price: 399.99,
        discount: 0,
        category_id: 20,
    },
    {
        id: 10,
        name: "Fugitive Telemetry",
        description: "When Murderbot discovers a dead body on Preservation Station, it knows it is going to have to assist station security to determine who the body is (was), how they were killed (that should be relatively straightforward, at least), and why (because apparently that matters to a lot of people—who knew?).",
        author: "Martha Wells",
        image_url: "https://m.media-amazon.com/images/P/B088H926KF.01._SCLZZZZZZZ_SX500_.jpg",
        price: 399.99,
        discount: 15,
        category_id: 10,
    },
    {
        id: 11,
        name: "The Martian",
        description: "After a dust storm nearly kills him and forces his crew to evacuate while thinking him dead, Mark finds himself stranded and completely alone with no way to even signal Earth that he’s alive—and even if he could get word out, his supplies would be gone long before a rescue could arrive. ",
        author: "Andy Weir",
        image_url: "https://m.media-amazon.com/images/P/0553418025.01._SCLZZZZZZZ_SX500_.jpg",
        price: 499.99,
        discount: 0,
        category_id: 10,
    },
    {
        id: 12,
        name: "Leviathan Wakes",
        description: "Jim Holden is XO of an ice miner making runs from the rings of Saturn to the mining stations of the Belt. When he and his crew stumble upon a derelict ship, the Scopuli, they find themselves in possession of a secret they never wanted. A secret that someone is willing to kill for—and kill on a scale unfathomable to Jim and his crew. War is brewing in the system unless he can find out who left the ship and why.",
        author: "James S. A. Corey",
        image_url: "https://m.media-amazon.com/images/P/B0047Y171G.01._SCLZZZZZZZ_SX500_.jpg",
        price: 499.99,
        discount: 5,
        category_id: 10,
    },
];
