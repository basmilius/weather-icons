import chalk from "chalk";
import {eachJobWithTypeAsync} from "./config.js";
import {printLine} from "./util/printer.js";

printLine("build", "Builds production files for all icons and styles.");

await eachJobWithTypeAsync("svg", async job => await job.run());

printLine("build", chalk.greenBright("Done!"));
