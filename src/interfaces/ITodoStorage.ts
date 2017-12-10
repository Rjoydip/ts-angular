/// <reference path='../reference.ts' />

module todos {
	export interface ITodoStorage {
		get (): TodoItem[];
		put(todos: TodoItem[]): any;
	}
}