import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../../store/actions/bookActions";

const AddBook = () => {
	const dispatch = useDispatch();

	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [rating, setRating] = useState("5");

	const AddBookHandler = (e) => {
		e.preventDefault();
		dispatch(
			addBook({
				id: Math.random(),
				title,
				author,
				rating,
			})
		);
	};

	return (
		<form className="add-book">
			<div>
				<label htmlFor="title"> Title </label>
				<input
					name="title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					type="text"
				/>
			</div>
			<div>
				<label htmlFor="author"> Author </label>
				<input
					name="author"
					value={author}
					onChange={(e) => setAuthor(e.target.value)}
					type="text"
				/>
			</div>
			<div>
				<label htmlFor="rating"> Rating </label>
				<input
					name="rating"
					value={rating}
					onChange={(e) => setRating(e.target.value)}
					type="number"
					min="1"
					max="0"
				/>
			</div>

			<button onClick={AddBookHandler}> Add Book </button>
		</form>
	);
};

export default AddBook;
