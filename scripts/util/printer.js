import chalk from "chalk";

export function printLine(prefix, ...data) {
    console.log(`[${chalk.cyan(prefix)}]`, ...data);
}

export async function printSuccessFailed(prefix, message, fn) {
    process.stdout.write(`[${chalk.cyan(prefix)}] ${message} `);

    try {
        await fn();
        console.log(chalk.greenBright("Success"));
    } catch (err) {
        console.log(chalk.redBright("Failed"));
        console.error(err);
    }
}

export function printPart(message) {
    process.stdout.write(message);
}

export function printPartClear() {
    process.stdout.clearLine(1);
}

export function printPartDone() {
    console.log();
}

export function printPartReset() {
    process.stdout.cursorTo(0);
}
