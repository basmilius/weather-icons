import chalk from "chalk";
import {eachJobAsync} from "./config.js";
import {printLine} from "./util/printer.js";

printLine("build", "Builds production files for all icons and styles.");

await eachJobAsync(async job => await job.run());

printLine("build", chalk.greenBright("Done!"));
