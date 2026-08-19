import { type Decorator } from "@storybook/nextjs-vite";

import { Layout } from "../app/layout";

export function PageDecorator(Story): Decorator {
	return (
		<Layout>
			<Story />
		</Layout>
	);
}
