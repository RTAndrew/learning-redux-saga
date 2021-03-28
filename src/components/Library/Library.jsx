import React from "react";

const Library = () => {
	const deleteBookHandler = () => {};

	return (
		<div>
			<h2> Library </h2>

			<table>
				<tr>
					<th>Title</th>
					<th>Author</th>
					<th>Ration</th>
					<th>=Actions</th>
				</tr>
				<tr>
					<td> Book </td>
					<td> Author of the book </td>
					<td> Author of the 10 </td>
					<td>
						<button className="delete" onClick={deleteBookHandler}></button>
					</td>
				</tr>
			</table>
		</div>
	);
};

export default Library;
