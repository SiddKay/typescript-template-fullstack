import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import nodeResolve from "@rollup/plugin-node-resolve";
import clear from "rollup-plugin-clear";
import copy from "rollup-plugin-copy";
import { isDev, files } from "./conf/rollup.js";
import json from "@rollup/plugin-json";

const EntryPath = "src";

export default [
  {
    // Telling Rollup which files to compile
    input: [...files(EntryPath)],
    // Specifies the output directory, format, and sourcemap for the compiled files.
    output: {
      dir: "dist/js", // Output directory
      format: "esm", // Output format
      sourcemap: "inline", // Inline source maps
    },
    // An array of Rollup plugins that are used to modify the build process
    plugins: [
      // Helps Rollup to resolve import statements for external modules.
      nodeResolve(),
      // Clears the output directory before each new build.
      clear({
        targets: ["dist"],
        watch: true,
      }),
      // Compiles TypeScript files to JavaScript.
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      // Allows Rollup to import JSON files.
      json(),
      // Terser minifies the build output (Compiled Js file is without indentation)
      !isDev() ? terser() : null,
      // Copies files from the source directory to the output directory. In this code, it copies the index.html file to the dist directory.
      copy({
        targets: [{ src: "src/index.html", dest: "dist" }],
      }),
    ],
  },
];
