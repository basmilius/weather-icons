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
		"partly-cloudy-day-rain": "partly-cloudy-day-rain",
		"partly-cloudy-night": "partly-cloudy-night",
		"partly-cloudy-night-rain": "partly-cloudy-night-rain",
		"rain": "rain",
		"sleet": "sleet",
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
		"10d": "partly-cloudy-day-rain",
		"10n": "partly-cloudy-night-rain",
		"11d": "thunderstorms",
		"11n": "thunderstorms",
		"13d": "partly-cloudy-day-snow",
		"13n": "partly-cloudy-day-snow",
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

async function copyIcon(type, provider, name, icon)
{
	const dir = `./production/${type}/${provider}`;
	const path = `${dir}/${name}.svg`;

	if (!fss.existsSync(dir))
		await fs.mkdir(dir);

	if (OPTIMIZED_ICONS[type] && OPTIMIZED_ICONS[type][icon])
	{
		console.log(`Creating ${name} for ${provider}...`);

		await fs.writeFile(path, OPTIMIZED_ICONS[type][icon], {encoding: "utf8"});
	}
	else
	{
		console.error(`Could not find icon ${icon} (> ${name}) for ${type}!`);
	}
}

async function optimizeIcon(type, icon)
{
	console.log(`Optimizing icon ${icon}...`);

	const path = `./design/${type}/animation-ready/${icon}.svg`;
	const svg = await fs.readFile(path, {encoding: "utf8"});

	const {data} = await svgo.optimize(svg, {path});

	OPTIMIZED_ICONS[type][icon] = data;
}

async function run()
{
	await new Promise(resolve => rimraf("./production/*", resolve));

	for (let type of ["line", "fill"])
	{
		await fs.mkdir(`./production/${type}`);

		const icons = (await fs.readdir(`./design/${type}/animation-ready`))
			.filter(icon => icon !== ".DS_Store")
			.map(icon => icon.substr(0, icon.length - 4));

		OPTIMIZED_ICONS[type] = {};

		for (let icon of icons)
		{
			ICONS_MAP.all[icon] = icon;
			await optimizeIcon(type, icon);
		}

		for (let provider in ICONS_MAP)
			for (let name in ICONS_MAP[provider])
				await copyIcon(type, provider, name, ICONS_MAP[provider][name]);
	}
}

run()
	.then(() => console.log("Done!"))
	.catch(err => console.error(err));
