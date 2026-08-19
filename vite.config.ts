// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     VITE_* env injection, @ path alias, React/TanStack dedupe, error logger plugins, and
//     sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
//
// Deployment target: Tencent EdgeOne Pages (procursuite.edgeone.dev).
// EdgeOne Pages does NOT support Nitro-built output — it requires the
// `@edgeone/tanstack-start` Vite plugin instead, which packages the build into
// a `.edgeone/` deploy artifact that EdgeOne's Git-connected build picks up.
// So Nitro is disabled here (`nitro: false`) and the EdgeOne adapter plugin is
// appended after the internal plugin stack (after viteReact), matching Tencent's
// documented plugin order: tanstackStart() -> viteReact() -> edgeoneAdapter().
// https://edgeone.ai/document/201258022376095744
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import edgeoneAdapter from "@edgeone/tanstack-start";

export default defineConfig({
  nitro: false,
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
  },
  plugins: [edgeoneAdapter()],
});
