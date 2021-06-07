import { FontJob } from "./job/FontJob.js";
import { PngJob } from "./job/PngJob.js";
import { SvgJob } from "./job/SvgJob.js";

export const STYLES_MAP = ["fill", "line", "monochrome"];

export const PRODUCTION_MAP = {
	fill: {
		"fill/font": new FontJob("static/export", ["svg", "ttf", "woff", "woff2"], "wi_"),
		"fill/png": new PngJob("static/export", [64, 128, 256, 512, 1024], "wi_"),
		"fill/svg": new SvgJob("fill/animation-ready"),
		"fill/svg-static": new SvgJob("static/export", "wi_")
	},
	line: {
		"line/png": new PngJob("line/export", [64, 128, 256, 512, 1024], "wi_"),
		"line/svg": new SvgJob("line/animation-ready"),
		"line/svg-static": new SvgJob("line/export", "wi_")
	},
	monochrome: {
		"monochrome/font": new FontJob("static-monochrome/export", ["svg", "ttf", "woff", "woff2"], "wi"),
		"monochrome/png": new PngJob("static-monochrome/export", [64, 128, 256, 512, 1024], "wi_"),
		"monochrome/svg": new SvgJob("monochrome/animation-ready"),
		"monochrome/svg-static": new SvgJob("monochrome/export", "wi_")
	}
};

export function runJob(jon)
{

}

export function runJobs()
{

}
