import "@testing-library/jest-dom";
import { beforeAll } from "vitest";
import { server } from "./app/msw/node";

import { setProjectAnnotations } from "@storybook/nextjs";
import * as previewAnnotations from "./.storybook/preview";

const annotations = setProjectAnnotations([previewAnnotations]);

beforeAll(async () => {
	await annotations?.beforeAll?.();
	// Then start MSW server
	server.listen();
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
