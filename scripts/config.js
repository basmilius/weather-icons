import { FontJob } from "./job/FontJob.js";
import { PngJob } from "./job/PngJob.js";
import { SvgJob } from "./job/SvgJob.js";

export const STYLES_MAP = ["fill", "line", "monochrome"];

export const PRODUCTION_MAP = [
	// new FontJob("fill/font", "static/export", ["svg", "ttf", "woff", "woff2"], "wi_"),
	// new PngJob("fill/png", "static/export", [64, 128, 256, 512, 1024], "wi_"),
	new SvgJob("fill/svg", "fill/animation-ready"),
	new SvgJob("fill/svg-static", "static/export", "wi_"),

	// new PngJob("line/png", "line/export", [64, 128, 256, 512, 1024], "wi_"),
	new SvgJob("line/svg", "line/animation-ready"),
	new SvgJob("line/svg-static", "line/export", "wi_"),

	new FontJob("monochrome/font", "static-monochrome/animation-ready", ["svg", "ttf", "woff", "woff2"]),
	new PngJob("monochrome/png", "static-monochrome/export", [64, 128, 256, 512, 1024], "wi_"),
	new SvgJob("monochrome/svg", "monochrome/animation-ready"),
	new SvgJob("monochrome/svg-static", "monochrome/export", "wi_")
];

export async function eachJobAsync(fn)
{
	for (let job of PRODUCTION_MAP)
	{
		await fn(job);
	}
}

export async function eachStyleAsync(fn)
{
	for (let style of STYLES_MAP)
	{
		await fn(style);
	}
}
