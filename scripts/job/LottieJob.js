import chalk from "chalk";
import {BaseJob} from "./BaseJob.js";
import {readFile, writeFile} from "../util/filesystem.js";
import {printPart, printPartDone} from "../util/printer.js";

export class LottieJob extends BaseJob {

    constructor(target, from, prefix = "") {
        super("lottie", target, from, prefix);
    }

    async run() {
        await this.runClearTarget();
        await this.runEnsureTarget();

        const icons = await this.getFromFiles()
            .then(files => files.filter(file => file.substr(file.length - 5, 5) === ".json"))
            .then(files => files.map(file => file.substr(0, file.length - 5)));

        for (let icon of icons) {
            printPart(`[${chalk.magentaBright("job:lottie")}] `);
            printPart(`Copy Lottie-file to target ${this.target} for icon ${icon}... `);

            const input = this.getFromFile(icon, ".json");
            const output = this.getTargetFile(icon, ".json");

            await writeFile(output, await readFile(input));

            printPart(chalk.greenBright("Done!"));
            printPartDone();
        }
    }

}
