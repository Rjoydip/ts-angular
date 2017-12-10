/// <reference path='../reference.ts' />

module todos {
	export interface ITodoScope extends ng.IScope {
		todos: TodoItem[];
		newTodo: string;
		editedTodo: any;
		originalTodo: any;
		remainingCount: number;
		doneCount: number;
		allChecked: boolean;
		reverted: boolean | null;
		statusFilter: { completed?: boolean };
		location: ng.ILocationService;
		vm: TodoCtrl;
	}
}
