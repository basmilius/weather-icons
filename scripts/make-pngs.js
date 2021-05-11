import chalk from "chalk";
import imagemin from "imagemin";
import imageminOptiPng from "imagemin-optipng";
import puppeteer from "puppeteer";
import { clearDirectory, createDirectory, getFiles, readFile } from "./util/filesystem.js";
import { printLine, printPart, printPartDone, printSuccessFailed } from "./util/printer.js";
import { eachStyleAsync } from "./util/project.js";

printLine("make-pngs", "PNG creator and compressor.");

const sizes = [1024, 512, 256, 128, 64];

await eachStyleAsync(async style => await clearDirectory(`./production/${style}/png`));
await eachStyleAsync(async style => await createDirectory(`./production/${style}/png`));

await eachStyleAsync(async style =>
{
	const icons = await getFiles(`./design/${style}/animation-ready`)
		.then(files => files.filter(file => file.substr(file.length - 4, 4) === ".svg"))
		.then(files => files.map(file => file.substr(0, file.length - 4)));

	for (let size of sizes)
	{
		await createDirectory(`./production/${style}/png/${size}`);
	}

	const browser = await puppeteer.launch();

	for (let icon of icons)
	{
		printPart(`[${chalk.magentaBright("make-pngs")}] `);
		printPart(`Creating an optimized PNG file for icon ${style}/${icon}... `);

		const contents = await readFile(`./design/${style}/animation-ready/${icon}.svg`);

		await Promise.all(sizes.map(size => new Promise(async resolve =>
		{
			const page = await browser.newPage();
			await page.setContent(contents);
			await page.setViewport({height: size, width: size});
			await new Promise(resolve => setTimeout(resolve, 750));
			await page.screenshot({
				omitBackground: true,
				path: `./production/${style}/png/${size}/${icon}.png`
			});
			await page.close();

			resolve();
		})));

		printPart(chalk.greenBright("Done!"));
		printPartDone();
	}

	await printSuccessFailed("make-pngs", "Optimizing all PNG files", async () =>
	{
		for (let size of sizes)
		{
			const paths = icons.map(icon => `${process.cwd()}/production/${style}/png/${size}/${icon}.png`);

			await imagemin(paths, {
				destination: `./production/${style}/png/${size}/`,
				plugins: [imageminOptiPng({
					optimizationLevel: 4
				})]
			});
		}
	});

	await browser.close();
});
