import chalk from "chalk";
import { optimize } from "svgo";
import { clearDirectory, createDirectory, getFiles, readFile, writeFile } from "./util/filesystem.js";
import { printLine, printPart, printPartDone } from "./util/printer.js";
import { eachStyleAsync } from "./util/project.js";

printLine("make-svgs", "SVG creator and compressor.");

await eachStyleAsync(async style => await clearDirectory(`./production/${style}/svg`));
await eachStyleAsync(async style => await createDirectory(`./production/${style}/svg`));

await eachStyleAsync(async style =>
{
	const icons = await getFiles(`./design/${style}/animation-ready`)
		.then(files => files.filter(file => file.substr(file.length - 4, 4) === ".svg"))
		.then(files => files.map(file => file.substr(0, file.length - 4)));

	for (let icon of icons)
	{
		printPart(`[${chalk.magentaBright("make-svgs")}] `);
		printPart(`Creating an optimized SVG file for icon ${style}/${icon}... `);

		await optimizeSVG(
			`./design/${style}/animation-ready/${icon}.svg`,
			`./production/${style}/svg/${icon}.svg`
		);

		await optimizeSVG(
			`./production/${style}/svg/${icon}.svg`,
			`./production/${style}/svg/${icon}.svg`
		);

		printPart(chalk.greenBright("Done!"));
		printPartDone();
	}
});

async function optimizeSVG(input, output)
{
	const contents = await readFile(input);

	await new Promise(async resolve =>
	{
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
				"removeHiddenElems",
				"removeEmptyText",
				"removeEmptyContainers",
				"cleanupEnableBackground",
				"convertStyleToAttrs",
				"convertColors",
				"convertPathData",
				"convertTransform",
				"removeUnknownsAndDefaults",
				"removeNonInheritableGroupAttrs",
				"removeUselessStrokeAndFill",
				"removeUnusedNS",
				"cleanupIDs",
				"cleanupNumericValues",
				"moveElemsAttrsToGroup",
				"moveGroupAttrsToElems",
				"mergePaths",
				"mergeStyles",
				"convertShapeToPath",
				"sortAttrs",
				"removeDimensions",
				"reusePaths"
			]
		});

		await writeFile(output, result.data);

		resolve();
	});
}
