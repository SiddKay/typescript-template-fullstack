import fs from "fs";
import path from "path";

//_----------------------------Necessary Constant and Function Definitions------------------------------------

export const isDev = () => {
  return !!process.argv.find((el) => el === "--config-dev");
};

export const files = (EntryPath) => {
  return fs
    .readdirSync(EntryPath)
    .filter((el) => path.extname(el) === ".ts")
    .map((el) => EntryPath + "/" + el);
};
