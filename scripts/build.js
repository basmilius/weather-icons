import chalk from "chalk";
import {eachJobAsync, eachJobWithTypeAsync} from "./config.js";
import {printLine} from "./util/printer.js";

const flags = process.argv.slice(2);

printLine("build", "Builds production files for all icons and styles.");

if (flags[0]) {
    await eachJobWithTypeAsync(flags[0], async job => await job.run());
} else {
    await eachJobAsync(async job => await job.run());
}

printLine("build", chalk.greenBright("Done!"));
