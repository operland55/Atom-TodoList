import { useState } from "react";
import styled from "styled-components";
import CreateTodo from "./CreateTodo";
import Select from "./TodoList";
import TodoList from "./TodoList";

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const Container = styled.div`
	width: 30%;
	height: 60%;
	background-color: #dff9fb;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
function App() {
	return (
		<Wrapper>
			<TodoList />
		</Wrapper>
	);
}

export default App;
