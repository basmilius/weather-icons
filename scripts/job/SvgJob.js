import chalk from "chalk";
import {optimize} from "svgo";
import {BaseJob} from "./BaseJob.js";
import {readFile, writeFile} from "../util/filesystem.js";
import {printPart, printPartDone} from "../util/printer.js";

export class SvgJob extends BaseJob {

    constructor(target, from, prefix = "") {
        super("svg", target, from, prefix);
    }

    async run() {
        await this.runClearTarget();
        await this.runEnsureTarget();

        const icons = await this.getFromFiles()
            .then(files => files.filter(file => file.substr(file.length - 4, 4) === ".svg"))
            .then(files => files.map(file => file.substr(0, file.length - 4)));

        for (let icon of icons) {
            printPart(`[${chalk.magentaBright("job:svg")}] `);
            printPart(`Creating an optimized SVG-file in target ${this.target} for icon ${icon}... `);

            const input = this.getFromFile(icon, ".svg");
            const output = this.getTargetFile(icon, ".svg");

            await SvgJob.optimize(input, output);
            await SvgJob.optimize(output, output);

            printPart(chalk.greenBright("Done!"));
            printPartDone();
        }
    }

    static async optimize(input, output) {
        const contents = await readFile(input);

        await new Promise(async resolve => {
            const result = optimize(contents, {
                plugins: [
                    "cleanupAttrs",
                    "removeDoctype",
                    "removeXMLProcInst",
                    "removeComments",
                    "removeMetadata",
                    "removeTitle",
                    "removeDesc",
                    "removeUselessDefs",
                    "removeEditorsNSData",
                    "removeEmptyAttrs",
                    {name: "removeHiddenElems", params: {opacity0: false, pathEmptyD: false}},
                    "removeEmptyText",
                    "removeEmptyContainers",
                    "cleanupEnableBackground",
                    "convertStyleToAttrs",
                    "convertColors",
                    {name: "convertPathData", params: {floatPrecision: 1, noSpaceAfterFlags: true}},
                    "convertTransform",
                    "removeUnknownsAndDefaults",
                    "removeNonInheritableGroupAttrs",
                    "removeUselessStrokeAndFill",
                    "removeUnusedNS",
                    {name: "cleanupIDs", params: {force: true, remove: false}},
                    {name: "cleanupListOfValues", params: {floatPrecision: 1}},
                    {name: "cleanupNumericValues", params: {floatPrecision: 1}},
                    "moveElemsAttrsToGroup",
                    "moveGroupAttrsToElems",
                    {name: "mergePaths", params: {floatPrecision: 1, noSpaceAfterFlags: true}},
                    "mergeStyles",
                    {name: "convertShapeToPath", params: {floatPrecision: 1, noSpaceAfterFlags: true}},
                    "sortAttrs",
                    "removeDimensions",
                    "sortDefsChildren",
                    "reusePaths"
                ]
            });

            await writeFile(output, result.data);

            resolve();
        });
    }

}
