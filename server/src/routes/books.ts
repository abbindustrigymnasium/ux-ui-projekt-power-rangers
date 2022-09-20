import { Request, Response } from "express";

module.exports = (Router: any) => {
	let _Router = Router();

	_Router.get('', books);
	
	return {name: 'books', route: _Router}
}

function books(request: Request, response: Response) {

	let server = request.app.get("server");
	let search: string = request.query.search as string;
	
	let books = server.db.books;
	let length = books.length;

	if (search !== undefined) {
		search = search.toLowerCase();
		console.log(1);
		books = books.filter((book: any) => {
			if (book?.title?.toLowerCase().includes(search))
				return true;
			else if (book?.author?.toLowerCase().includes(search))
				return true;
			else if (book?.lang?.toLowerCase().includes(search))
				return true;
			else if (book?.genre?.find((genre: String) => {
				return genre.toLowerCase().includes(search);
			}))
				return true;

			return false;
		})
	}

	console.log(length - books.length);

	response.status(200);
	response.send(books);
}
