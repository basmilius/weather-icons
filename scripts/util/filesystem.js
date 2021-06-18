import fs from "fs/promises";
import fsSync from "fs";
import rimraf from "rimraf";
import {printSuccessFailed} from "./printer.js";

const forbiddenFiles = [
    ".DS_Store",
    "Thumbs.db"
];

export async function clearDirectory(path) {
    await printSuccessFailed("filesystem", `Clearing directory ${path}`, async () => {
        await new Promise(resolve => rimraf(path, resolve));
    });
}

export async function createDirectory(path) {
    await printSuccessFailed("filesystem", `Creating directory ${path}`, async () => {
        await fs.mkdir(path, {
            recursive: true
        });
    });
}

export async function getFiles(path) {
    return await fs.readdir(path)
        .then(files => files.filter(file => !forbiddenFiles.includes(file)));
}

export async function pathExists(path) {
    return new Promise(resolve => fsSync.exists(path, result => resolve(result)));
}

/**
 * @returns {Promise<String>}
 */
export async function readFile(path) {
    return await fs.readFile(path, {
        encoding: "utf8"
    });
}

export async function writeFile(path, contents) {
    await fs.writeFile(path, contents, {
        encoding: "utf8"
    });
}
