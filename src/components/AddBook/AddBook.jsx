import React, { useState } from "react";

const AddBook = () => {
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [rating, setRating] = useState("5");

	const AddBookHandler = (e) => {
		e.preventDefault();
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
					onChange={(e) => setTitle(e.target.value)}
					type="text"
				/>
			</div>
			<div>
				<label htmlFor="rating"> Rating </label>
				<input
					name="rating"
					value={rating}
					onChange={(e) => setTitle(e.target.value)}
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
