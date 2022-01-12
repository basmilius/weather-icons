import {FontJob} from "./job/FontJob.js";
import {LottieJob} from "./job/LottieJob.js";
import {PngJob} from "./job/PngJob.js";
import {SvgJob} from "./job/SvgJob.js";

export const STYLES_MAP = ["cartoon", "fill", "line", "monochrome"];

const FILL_JOBS = [
    new LottieJob("fill/lottie", "fill/lottie"),
    new PngJob("fill/png", "fill-static/final", [32, 64, 128, 256, 512, 1024]),
    new SvgJob("fill/svg", "fill/final"),
    new SvgJob("fill/svg-static", "fill-static/final")
];

const CARTOON_JOBS = [
    new PngJob("cartoon/png", "cartoon-static/final", [32, 64, 128, 256, 512, 1024]),
    new SvgJob("cartoon/svg", "cartoon/final"),
    new SvgJob("cartoon/svg-static", "cartoon-static/final")
];

const LINE_JOBS = [
    new LottieJob("line/lottie", "line/lottie"),
    new PngJob("line/png", "line-static/final", [32, 64, 128, 256, 512, 1024]),
    new SvgJob("line/svg", "line/final"),
    new SvgJob("line/svg-static", "line-static/final")
];

const MONOCHROME_JOBS = [
    new FontJob("monochrome/font", "monochrome-static/final", ["svg", "ttf", "woff", "woff2"]),
    new PngJob("monochrome/png", "monochrome-static/final", [64, 128, 256, 512, 1024]),
    new SvgJob("monochrome/svg", "monochrome/final"),
    new SvgJob("monochrome/svg-static", "monochrome-static/final")
];

export const PRODUCTION_MAP = [
    ...FILL_JOBS,
    ...LINE_JOBS
];

export async function eachJobAsync(fn) {
    for (let job of PRODUCTION_MAP) {
        await fn(job);
    }
}

export async function eachJobWithTypeAsync(type, fn) {
    for (let job of PRODUCTION_MAP) {
        if (job.type !== type) {
            continue;
        }

        await fn(job);
    }
}

export async function eachStyleAsync(fn) {
    for (let style of STYLES_MAP) {
        await fn(style);
    }
}
