import chalk from "chalk";
import {generateFonts} from "fantasticon";
import {BaseJob} from "./BaseJob.js";
import {printPart, printPartDone} from "../util/printer.js";

export class FontJob extends BaseJob {

    constructor(target, from, types, prefix = "") {
        super("font", target, from, prefix);

        this.types = types.filter(type => ["eot", "svg", "ttf", "woff", "woff2"].includes(type));
    }

    async run() {
        await this.runClearTarget();
        await this.runEnsureTarget();

        printPart(`[${chalk.magentaBright("job:font")}] `);
        printPart(`Creating webfonts... `);

        await generateFonts({
            name: "Meteocons",
            prefix: "m",
            tag: "i",
            fontHeight: 900,
            fontTypes: this.types,
            inputDir: this.getFromDirectory(),
            outputDir: this.getTargetDirectory()
        });

        printPart(chalk.greenBright("Done!"));
        printPartDone();
    }

}
