import { setProjectAnnotations } from "@storybook/nextjs-vite";
import { setupMSWBrowser } from "@theholocron/vitest-config/setup/msw";

// import { setupMSWNode } from "@theholocron/vitest-config/setup/msw";
import * as previewAnnotations from "./.storybook/preview";
import { worker } from "./app/msw/browser";
// import { server } from "./app/msw/node";

const annotations = setProjectAnnotations([previewAnnotations]);

// MSW SetupWorker satisfies the Worker interface at runtime; the cast resolves
// a return-type variance between SetupWorker.start and the config's Worker.start.
setupMSWBrowser(worker as unknown as Parameters<typeof setupMSWBrowser>[0], annotations);

// server-side MSW (uncomment and swap imports above to use)
// setupMSWNode(server, annotations);
