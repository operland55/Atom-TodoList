import React from "react";

import { useForm } from "react-hook-form";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { TodoList, TodoState } from "./atom";

const Submit = styled.form`
	width: 100%;
`;
const Input = styled.input``;

interface IForm {
	toDo: string;
}
function CreateTodo() {
	const { register, handleSubmit, setValue } = useForm<IForm>();
	const setToDos = useSetRecoilState(TodoState);

	const handleValid = ({ toDo }: IForm) => {
		setToDos((oldToDos) => [
			{ text: toDo, id: Date.now(), category: "TO_DO" },
			...oldToDos,
		]);
		setValue("toDo", "");
	};
	return (
		<Submit onSubmit={handleSubmit(handleValid)}>
			<Input {...register("toDo")} placeholder="Enter Todo" />
			<button>Todo add</button>
		</Submit>
	);
}

export default CreateTodo;
