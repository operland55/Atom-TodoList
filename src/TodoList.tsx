import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { Category, TodoState } from "./atom";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

function TodoList() {
	const toDos = useRecoilValue(TodoState);
	const [category, setCategory] = useRecoilState(Category);
	// const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
	// 	setCategory(event.currentTarget.value as any);
	// };

	return (
		<div>
			<h1>To Dos</h1>
			<hr />
			{/* <select value={category} onInput={onInput}></select> */}
			<CreateTodo />
			{toDos?.map((todo) => (
				<Todo key={todo.id} {...todo} />
			))}
		</div>
	);
}
export default TodoList;
