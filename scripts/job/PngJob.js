import path from "path";
import chalk from "chalk";
import imagemin from "imagemin";
import imageminOptiPng from "imagemin-optipng";
import puppeteer from "puppeteer";
import {BaseJob} from "./BaseJob.js";
import {readFile} from "../util/filesystem.js";
import {printPart, printPartDone, printSuccessFailed} from "../util/printer.js";
import {chunkArray} from "../util/array.js";

export class PngJob extends BaseJob {

    constructor(target, from, sizes, prefix = "") {
        super("png", target, from, prefix);

        this.sizes = sizes;
    }

    async run() {
        const browser = await puppeteer.launch();

        await this.runClearTarget();
        await this.runEnsureTarget();

        for (let size of this.sizes) {
            await this.runEnsureTarget(`/${size}`)
        }

        const icons = await this.getFromFiles()
            .then(files => files.filter(file => file.substr(file.length - 4, 4) === ".svg"))
            .then(files => files.map(file => file.substr(0, file.length - 4)));

        for (let icon of icons) {
            printPart(`[${chalk.magentaBright("job:png")}] `);
            printPart(`Creating an optimized PNG-file in target ${this.target} for icon ${icon}... `);

            const input = this.getFromFile(icon, ".svg");
            const svg = await readFile(input);

            await Promise.all(this.sizes.map(size => new Promise(async resolve => {
                const output = this.getTargetFile(icon, ".png", `/${size}`);

                const page = await browser.newPage();
                await page.setContent(svg);
                await page.setViewport({width: size, height: size});
                await page.screenshot({
                    omitBackground: true,
                    path: output
                });
                await page.close();

                resolve();
            })));

            printPart(chalk.greenBright("Done!"));
            printPartDone();
        }

        await browser.close();

        await printSuccessFailed("job:png", "Optimizing all PNG files", async () => {
            for (let size of this.sizes) {
                const paths = icons.map(icon => this.getTargetFile(icon, ".png", `/${size}`));

                if (paths.length < 1) {
                    continue;
                }

                const chunks = chunkArray(paths, 10);

                for (let chunk of chunks) {
                    await imagemin(chunk, {
                        destination: path.dirname(paths[0]),
                        plugins: [imageminOptiPng({
                            optimizationLevel: 4
                        })]
                    });
                }
            }
        });
    }

}
