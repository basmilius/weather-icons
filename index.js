const fs = require("fs").promises;
const fss = require("fs");
const rimraf = require("rimraf");
const SVGOptimizer = require("svgo");

const OPTIMIZED_ICONS = {};

const ICONS_MAP = {
	all: {},
	darksky: {
		"clear-day": "clear-day",
		"clear-night": "clear-night",
		"cloudy": "cloudy",
		"drizzle": "drizzle",
		"fog": "mist",
		"hail": "hail",
		"partly-cloudy-day": "partly-cloudy-day",
		"partly-cloudy-night": "partly-cloudy-night",
		"rain": "rain",
		"sleet": "hail",
		"snow": "snow",
		"thunderstorm": "thunderstorms",
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
			{collapseGroups: false},
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
	const dir = `./production/${provider}`;
	const path = `${dir}/${name}.svg`;

	console.log(`Creating ${name} for ${provider}...`);

	if (!fss.existsSync(dir))
		await fs.mkdir(dir);

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
	await new Promise(resolve => rimraf("./production/*", resolve));

	const icons = (await fs.readdir("./design/animation-ready"))
		.map(icon => icon.substr(0, icon.length - 4));

	for (let icon of icons)
	{
		ICONS_MAP.all[icon] = icon;
		await optimizeIcon(icon);
	}

	for (let provider in ICONS_MAP)
		for (let name in ICONS_MAP[provider])
			await copyIcon(provider, name, ICONS_MAP[provider][name]);
}

run()
	.then(() => console.log("Done!"))
	.catch(err => console.error(err));
