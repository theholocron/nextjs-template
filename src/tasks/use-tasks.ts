"use client";

import * as React from "react";

export interface ITask {
	id: string;
	title: string;
	state: "TASK_INBOX" | "TASK_PINNED" | "TASK_ARCHIVED";
	// [key: string]: any; // Allow any additional properties
}

export interface TaskResponse {
	tasks: ITask[];
}

const getTasks = (options: RequestInit): Promise<TaskResponse> => fetch("/tasks", options).then((res) => res.json());

const updateTask = (tasks: ITask[], id: string, updatedTask: Partial<ITask>): ITask[] =>
	tasks.map((task) => (task.id === id ? { ...task, ...updatedTask } : task));

const deleteTask = (tasks: ITask[], id: string): ITask[] => tasks.filter((task) => task.id !== id);

export type TaskAction =
	| { type: "UPDATE_TASKS"; tasks: ITask[] }
	| { type: "ARCHIVE_TASK"; id: string }
	| { type: "PIN_TASK"; id: string }
	| { type: "INBOX_TASK"; id: string }
	| { type: "DELETE_TASK"; id: string }
	| { type: "EDIT_TITLE"; id: string; title: string };

export function reducer(tasks: ITask[], action: TaskAction): ITask[] {
	switch (action.type) {
		case "UPDATE_TASKS":
			return action.tasks;
		case "ARCHIVE_TASK":
			return updateTask(tasks, action.id, { state: "TASK_ARCHIVED" });
		case "PIN_TASK":
			return updateTask(tasks, action.id, { state: "TASK_PINNED" });
		case "INBOX_TASK":
			return updateTask(tasks, action.id, { state: "TASK_INBOX" });
		case "DELETE_TASK":
			return deleteTask(tasks, action.id);
		case "EDIT_TITLE":
			return updateTask(tasks, action.id, { title: action.title });
		default:
			return tasks;
	}
}

export function useTasks(): [ITask[], React.Dispatch<TaskAction>] {
	const [tasks, dispatch] = React.useReducer(reducer, []);

	React.useEffect(() => {
		const abortController = new AbortController();
		const signal = abortController.signal;

		getTasks({ signal })
			.then(({ tasks }) => {
				dispatch({ type: "UPDATE_TASKS", tasks });
			})
			.catch((error) => {
				if (!abortController.signal.aborted) {
					console.log(error);
				}
			});

		return () => {
			abortController.abort();
		};
	}, []);

	return [tasks, dispatch];
}
