import React from "react";
import DisplayUserCard from "../DisplayUserCard";

function UsersPage() {
	const [users, setUsers] = setUsers([]);

	return (
		<div>
			{users.map((user) => (
				<DisplayUserCard
					city={users.city}
					fullname={users.fullname}
					nickname={users.nickname}
				/>
			))}
		</div>
	);
}

export default UsersPage;
