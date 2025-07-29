import type { Meta, StoryObj } from "@storybook/nextjs";
import TaskStories from "./task.story";
import { TaskList } from "./task-list";

const meta = {
	component: TaskList,
	title: "TaskList",
	argTypes: {
		...TaskStories.argTypes,
	},
} satisfies Meta<typeof TaskList>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
	args: {
		tasks: [
			{ id: "1", state: "TASK_INBOX", title: "Build a date picker" },
			{ id: "2", state: "TASK_INBOX", title: "QA dropdown" },
			{
				id: "3",
				state: "TASK_INBOX",
				title: "Write a schema for account avatar component",
			},
			{ id: "4", state: "TASK_INBOX", title: "Export logo" },
			{ id: "5", state: "TASK_INBOX", title: "Fix bug in input error state" },
			{
				id: "6",
				state: "TASK_INBOX",
				title: "Draft monthly blog to customers",
			},
		],
	},
} satisfies Story;

export const WithPinnedTasks = {
	args: {
		tasks: [
			{
				id: "6",
				title: "Draft monthly blog to customers",
				state: "TASK_PINNED",
			},
			...Default.args.tasks.slice(0, 5),
		],
	},
} satisfies Story;

export const Loading = {
	args: {
		tasks: [],
		loading: true,
	},
} satisfies Story;

export const Empty = {
	args: {
		...Loading.args,
		loading: false,
	},
} satisfies Story;
