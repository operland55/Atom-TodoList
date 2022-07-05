import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { Category, TodoList, TodoState } from "./atom";

export function Todo({ text, category, id }: TodoList) {
	const setToDos = useSetRecoilState(TodoState);
	const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const name = e.currentTarget.name;

		setToDos((oldTos) => {
			const targetIndex = oldTos.findIndex((item) => item.id == id);
			const newTodo = {
				text,
				id,
				category: name as any,
			};

			return [
				...oldTos.slice(0, targetIndex),
				newTodo,
				...oldTos.slice(targetIndex + 1),
			];
		});
	};

	const DelateBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
		setToDos((oldTos) => {
			const targetIndex = oldTos.findIndex((item) => item.id == id);

			return [
				...oldTos.slice(0, targetIndex),
				...oldTos.slice(targetIndex + 1),
			];
		});
	};
	return (
		<>
			<h1>{text}</h1>
			{category !== "DOING" && (
				<button name={"DOING"} onClick={onClick}>
					Doing
				</button>
			)}
			{category !== "TO_DO" && (
				<button name={"TO_DO"} onClick={onClick}>
					To Do
				</button>
			)}
			{category !== "DONE" && (
				<button name={"DONE"} onClick={onClick}>
					Done
				</button>
			)}
			<button onClick={DelateBtn}>Delate</button>
		</>
	);
}

export default Todo;
