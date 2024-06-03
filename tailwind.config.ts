import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: ["docs/content/**/*.md"],
  // plugins: [require("flowbite/config.js")],
  theme: {
    extend: {
      colors: {
        prim: "#3f4dd1",
        secondary: "#db4e35",
      },
    },
  },
};
