import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteBook } from "../../store/actions/bookActions";

const Library = () => {
	const dispatch = useDispatch();

	const deleteBookHandler = (id) => {
		dispatch(deleteBook({ id }));
	};

	const books = useSelector((state) => state.books.books);

	const booksTable = books.map((book) => (
		<tr>
			<td>{book.title}</td>
			<td>{book.author}</td>
			<td>{book.rating}</td>
			<td>
				<button className="delete" onClick={() => deleteBookHandler(book.id)}>
					{" "}
					x{" "}
				</button>
			</td>
		</tr>
	));

	return (
		<div>
			<h2> Library </h2>

			<table>
				<tr>
					<th>Title</th>
					<th>Author</th>
					<th>Ration</th>
					<th>Actions</th>
				</tr>
				{booksTable}
			</table>
		</div>
	);
};

export default Library;
