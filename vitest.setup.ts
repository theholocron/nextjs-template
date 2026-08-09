import { setProjectAnnotations } from "@storybook/nextjs-vite";
import { setupMSWBrowser } from "@theholocron/vitest-config/setup/msw";

// import { setupMSWNode } from "@theholocron/vitest-config/setup/msw";
import * as previewAnnotations from "./.storybook/preview";
import { worker } from "./app/msw/browser";
// import { server } from "./app/msw/node";

const annotations = setProjectAnnotations([previewAnnotations]);

// browser-side MSW (default)
setupMSWBrowser(worker, annotations);

// server-side MSW (uncomment and swap imports above to use)
// setupMSWNode(server, annotations);
