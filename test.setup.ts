import "@testing-library/jest-dom";
import { beforeAll } from "vitest";

import { setProjectAnnotations } from "@storybook/nextjs";
import * as previewAnnotations from "./.storybook/preview";

const annotations = setProjectAnnotations([previewAnnotations]);

beforeAll(annotations.beforeAll);
