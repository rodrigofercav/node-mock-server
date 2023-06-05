export const HELP = `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<title>Mock API - Endpoints Help</title>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
	</head>

	<body>
		<hr />
		<h1>*** SIMPLE MOCK API ENDPOINTS TO FRONTEND PROJECTS ***</h1>
		<hr />
		<h3>
			COURSE Object: { <br />&emsp; id: number, <br />&emsp; name: string,
			<br />&emsp; imageUrl: string, <br />&emsp; description: string,
			<br />&emsp; price: number, <br />&emsp; code: string, <br />&emsp;
			duration: number, <br />&emsp; rating: number, <br />&emsp;
			releaseDate: string <br />}
		</h3>
		<h4 style="margin-bottom: 0">/api/courses (GET - POST)</h4>
		<h4 style="margin-top: 0">/api/courses/:id (GET - PUT - DELETE)</h4>
		<hr />
		<h3>
			PESSOA Object: { <br />&emsp; id: number, <br />&emsp; nome: string,
			<br />&emsp; data_nascimento: string, <br />&emsp; email: string,
			<br />&emsp; sexo: string <br />}
		</h3>
		<h4 style="margin-bottom: 0">/api/pessoas (GET - POST)</h4>
		<h4 style="margin-top: 0">/api/pessoas/:id (GET - PUT - DELETE)</h4>
		<hr />
		<h3>
			BOOK Object: { <br />&emsp; id: number, <br />&emsp; name: string,
			<br />&emsp; description: string, <br />&emsp; author_id: string,
			<br />&emsp; price: number, <br />&emsp; image_url: string,
			<br />&emsp; discount: number, <br />&emsp; category_id: number
			<br />}
		</h3>
		<h4 style="margin-bottom: 0">/api/books (GET - POST)</h4>
		<h4 style="margin-top: 0">/api/books/:id (GET - PUT - DELETE)</h4>
		<hr />
		<h3>
			BOOK CATEGORY Object: { <br />&emsp; id: number, <br />&emsp; name:
			string, <br />&emsp; description: string <br />}
		</h3>
		<h4 style="margin-bottom: 0">/api/books/categories (GET - POST)</h4>
		<h4 style="margin-top: 0">
			/api/books/categories/:id (GET - PUT - DELETE)
		</h4>
		<hr />
	</body>
</html>
`;
