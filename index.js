const fs = require("fs").promises;
const SVGOptimizer = require("svgo");

const OPTIMIZED_ICONS = {};

const ICONS_MAP = {
	darksky: {
		"clear-day": "clear-day",
		"clear-night": "clear-night",
		"cloudy": "cloudy",
		"mist": "mist",
		"partly-cloudy-day": "partly-cloudy-day",
		"partly-cloudy-night": "partly-cloudy-night",
		"rain": "rain",
		"snow": "snow",
		"thunderstorms": "thunderstorms",
		"tornado": "tornado",
		"wind": "wind"
	},
	openweathermap: {
		"01d": "clear-day",
		"01n": "clear-night",
		"02d": "partly-cloudy-day",
		"02n": "partly-cloudy-night",
		"03d": "cloudy",
		"03n": "cloudy",
		"04d": "cloudy",
		"04n": "cloudy",
		"09d": "rain",
		"09n": "rain",
		"10d": "rain",
		"10n": "rain",
		"11d": "thunderstorms",
		"11n": "thunderstorms",
		"13d": "snow",
		"13n": "snow",
		"50d": "mist",
		"50n": "mist"
	}
};

function initializeSvgOptimizer()
{
	return new SVGOptimizer({
		plugins: [
			{cleanupAttrs: true},
			{removeDoctype: true},
			{removeXMLProcInst: true},
			{removeComments: true},
			{removeMetadata: true},
			{removeTitle: true},
			{removeDesc: true},
			{removeUselessDefs: true},
			{removeEditorsNSData: true},
			{removeEmptyAttrs: true},
			{removeHiddenElems: true},
			{removeEmptyText: true},
			{removeEmptyContainers: true},
			{removeViewBox: false},
			{cleanupEnableBackground: true},
			{convertStyleToAttrs: true},
			{convertColors: true},
			{convertPathData: true},
			{convertTransform: true},
			{removeUnknownsAndDefaults: true},
			{removeNonInheritableGroupAttrs: true},
			{removeUselessStrokeAndFill: true},
			{removeUnusedNS: true},
			{cleanupIDs: true},
			{cleanupNumericValues: true},
			{moveElemsAttrsToGroup: true},
			{moveGroupAttrsToElems: true},
			{collapseGroups: true},
			{removeRasterImages: false},
			{mergePaths: true},
			{convertShapeToPath: true},
			{sortAttrs: true},
			{removeDimensions: true}
		]
	});
}

const svgo = initializeSvgOptimizer();

async function copyIcon(provider, name, icon)
{
	const path = `./production/${provider}/${name}.svg`;

	console.log(`Creating ${name} for ${provider}...`);

	await fs.writeFile(path, OPTIMIZED_ICONS[icon], {encoding: "utf8"});
}

async function optimizeIcon(icon)
{
	console.log(`Optimizing icon ${icon}...`);

	const path = `./design/animation-ready/${icon}.svg`;
	const svg = await fs.readFile(path, {encoding: "utf8"});

	const {data} = await svgo.optimize(svg, {path});

	OPTIMIZED_ICONS[icon] = data;
}

async function run()
{
	const icons = (await fs.readdir("./design/animation-ready"))
		.map(icon => icon.substr(0, icon.length - 4));

	for (let icon of icons)
		await optimizeIcon(icon);

	for (let provider in ICONS_MAP)
		for (let name in ICONS_MAP[provider])
			await copyIcon(provider, name, ICONS_MAP[provider][name]);
}

run()
	.then(() => console.log("Done!"))
	.catch(err => console.error(err));
