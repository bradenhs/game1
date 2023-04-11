import { createTemplate, file } from "zilch-game-engine";

export const templates = [
  createTemplate({
    id: "javascript.node",
    run: "node index.js",
    files: {
      "index.js": file.executable`
        console.log("Hello")
      `,
    },
  }),
];
