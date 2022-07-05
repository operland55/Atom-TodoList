import { atom } from "recoil";

export interface TodoList {
	id: number;
	text: string;
	category: "TO_DO" | "DONE" | "DOING";
}

export const TodoState = atom<TodoList[]>({
	key: "TodoList",
	default: [],
});

export const Category = atom({
	key: "Category",
	default: "To_Do",
});
