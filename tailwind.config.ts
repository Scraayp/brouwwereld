import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: ["docs/content/**/*.md"],
  // plugins: [require("flowbite/config.js")],
  theme: {
    extend: {
      colors: {
        prim: "#ff5722",
        secondary: "#2d4059",
      },
    },
  },
};
