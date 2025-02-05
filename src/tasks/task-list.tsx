"use client";

import { Task, type TaskProps } from "./task";

export interface TaskListProps {
	loading?: boolean;
	tasks: TaskProps["task"][];
	onTogglePinTask: TaskProps["onTogglePinTask"];
	onArchiveTask: TaskProps["onArchiveTask"];
	onEditTitle: TaskProps["onEditTitle"];
	onDeleteTask: TaskProps["onDeleteTask"];
}

export function TaskList (props: TaskListProps) {
	const {
		loading = false,
		tasks,
		onTogglePinTask,
		onArchiveTask,
		onEditTitle,
		onDeleteTask,
	} = props;

	const events = {
		onTogglePinTask,
		onArchiveTask,
		onEditTitle,
		onDeleteTask,
	};

	const LoadingRow = (
		<div className="loading-item">
			<span className="glow-checkbox" />
			<span className="glow-text">
				<span>Loading</span> <span>cool</span> <span>state</span>
			</span>
		</div>
	);

	if (loading) {
		return (
			<div className="list-items" data-testid="loading" key={"loading"}>
				{LoadingRow}
				{LoadingRow}
				{LoadingRow}
				{LoadingRow}
				{LoadingRow}
				{LoadingRow}
			</div>
		);
	}

	if (tasks.length === 0) {
		return (
			<div className="list-items" key={"empty"} data-testid="empty">
				<div className="wrapper-message">
					<span className="icon-check" />
					<p className="title-message">You have no tasks</p>
					<p className="subtitle-message">Sit back and relax</p>
				</div>
			</div>
		);
	}

	const tasksInOrder = [
		...tasks.filter((t) => t.state === "TASK_PINNED"),
		...tasks.filter((t) => t.state !== "TASK_PINNED"),
	];

	return (
		<div
			className="list-items"
			data-testid="success"
			key={"success"}
			role="list"
			aria-label="tasks"
		>
			{tasksInOrder.map((task) => (
				<Task key={task.id} task={task} {...events} />
			))}
		</div>
	);
}
