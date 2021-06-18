import {eachStyleAsync} from "./config.js";
import {clearDirectory, createDirectory, pathExists, readFile, writeFile} from "./util/filesystem.js";
import {printLine} from "./util/printer.js";

const productionDirs = [
    ["png", "png/64"],
    ["png", "png/128"],
    ["png", "png/256"],
    ["png", "png/512"],
    ["png", "png/1024"],
    ["svg", "svg"]
];

const providerIconMap = {
    "openweathermap/codes/day": {
        "200": "thunderstorms-day-rain",
        "201": "thunderstorms-day-rain",
        "202": "thunderstorms-day-overcast-rain",
        "210": "thunderstorms-day",
        "211": "thunderstorms",
        "212": "thunderstorms-overcast",
        "221": "thunderstorms-overcast",
        "230": "thunderstorms-day-rain",
        "231": "thunderstorms-day-rain",
        "232": "thunderstorms-day-rain",
        "300": "partly-cloudy-day-drizzle",
        "301": "partly-cloudy-day-drizzle",
        "302": "overcast-day-drizzle",
        "310": "overcast-day-drizzle",
        "311": "drizzle",
        "312": "overcast-drizzle",
        "313": "overcast-drizzle",
        "314": "overcast-rain",
        "321": "overcast-rain",
        "500": "partly-cloudy-day-rain",
        "501": "partly-cloudy-day-rain",
        "502": "overcast-day-rain",
        "503": "overcast-day-rain",
        "504": "overcast-rain",
        "511": "sleet",
        "520": "partly-cloudy-day-rain",
        "521": "partly-cloudy-day-rain",
        "522": "overcast-day-rain",
        "531": "overcast-day-rain",
        "600": "partly-cloudy-day-snow",
        "601": "partly-cloudy-day-snow",
        "602": "overcast-day-snow",
        "611": "partly-cloudy-day-sleet",
        "612": "partly-cloudy-day-sleet",
        "613": "overcast-day-sleet",
        "615": "partly-cloudy-day-sleet",
        "616": "partly-cloudy-day-sleet",
        "620": "partly-cloudy-day-snow",
        "621": "partly-cloudy-day-snow",
        "622": "overcast-snow",
        "701": "mist",
        "711": "partly-cloudy-day-smoke",
        "721": "haze-day",
        "731": "dust-day",
        "741": "fog-day",
        "751": "dust-day",
        "761": "dust-day",
        "762": "overcast-smoke",
        "771": "wind",
        "781": "tornado",
        "800": "clear-day",
        "801": "partly-cloudy-day",
        "802": "partly-cloudy-day",
        "803": "overcast-day",
        "804": "overcast-day"
    },
    "openweathermap/codes/night": {
        "200": "thunderstorms-night-rain",
        "201": "thunderstorms-night-rain",
        "202": "thunderstorms-night-overcast-rain",
        "210": "thunderstorms-night",
        "211": "thunderstorms",
        "212": "thunderstorms-overcast",
        "221": "thunderstorms-overcast",
        "230": "thunderstorms-night-rain",
        "231": "thunderstorms-night-rain",
        "232": "thunderstorms-night-rain",
        "300": "partly-cloudy-night-drizzle",
        "301": "partly-cloudy-night-drizzle",
        "302": "overcast-night-drizzle",
        "310": "overcast-night-drizzle",
        "311": "drizzle",
        "312": "overcast-drizzle",
        "313": "overcast-drizzle",
        "314": "overcast-rain",
        "321": "overcast-rain",
        "500": "partly-cloudy-night-rain",
        "501": "partly-cloudy-night-rain",
        "502": "overcast-night-rain",
        "503": "overcast-night-rain",
        "504": "overcast-rain",
        "511": "sleet",
        "520": "partly-cloudy-night-rain",
        "521": "partly-cloudy-night-rain",
        "522": "overcast-night-rain",
        "531": "overcast-night-rain",
        "600": "partly-cloudy-night-snow",
        "601": "partly-cloudy-night-snow",
        "602": "overcast-night-snow",
        "611": "partly-cloudy-night-sleet",
        "612": "partly-cloudy-night-sleet",
        "613": "overcast-night-sleet",
        "615": "partly-cloudy-night-sleet",
        "616": "partly-cloudy-night-sleet",
        "620": "partly-cloudy-night-snow",
        "621": "partly-cloudy-night-snow",
        "622": "overcast-snow",
        "701": "mist",
        "711": "partly-cloudy-night-smoke",
        "721": "haze-night",
        "731": "dust-night",
        "741": "fog-night",
        "751": "dust-night",
        "761": "dust-night",
        "762": "overcast-smoke",
        "771": "wind",
        "781": "tornado",
        "800": "clear-night",
        "801": "partly-cloudy-night",
        "802": "partly-cloudy-night",
        "803": "overcast-night",
        "804": "overcast-night"
    },
    "openweathermap/icons": {
        "01d": "clear-day",
        "01n": "clear-night",
        "02d": "partly-cloudy-day",
        "02n": "partly-cloudy-night",
        "03d": "cloudy",
        "03n": "cloudy",
        "04d": "overcast",
        "04n": "overcast",
        "09d": "overcast-rain",
        "09n": "overcast-rain",
        "10d": "partly-cloudy-day-rain",
        "10n": "partly-cloudy-night-rain",
        "11d": "thunderstorms",
        "11n": "thunderstorms",
        "13d": "partly-cloudy-day-snow",
        "13n": "partly-cloudy-day-snow",
        "50d": "fog-day",
        "50n": "fog-night"
    },
    "tomorrow/day": {
        "freezing_rain_heavy": "overcast-day-sleet",
        "freezing_rain": "partly-cloudy-day-sleet",
        "freezing_rain_light": "partly-cloudy-day-sleet",
        "freezing_drizzle": "partly-cloudy-day-sleet",
        "ice_pellets_heavy": "partly-cloudy-day-hail",
        "ice_pellets": "partly-cloudy-day-hail",
        "ice_pellets_light": "partly-cloudy-day-hail",
        "snow_heavy": "overcast-day-snow",
        "snow": "partly-cloudy-day-snow",
        "snow_light": "partly-cloudy-day-snow",
        "flurries": "partly-cloudy-day-snow",
        "tstorm": "thunderstorms-day",
        "rain_heavy": "overcast-rain",
        "rain": "partly-cloudy-day-rain",
        "rain_light": "partly-cloudy-day-rain",
        "drizzle": "partly-cloudy-day-drizzle",
        "fog_light": "fog-day",
        "fog": "fog-day",
        "cloudy": "cloudy",
        "mostly_cloudy": "partly-cloudy-day",
        "partly_cloudy": "partly-cloudy-day",
        "mostly_clear": "partly-cloudy-day",
        "clear": "clear-day"
    },
    "tomorrow/night": {
        "freezing_rain_heavy": "overcast-night-sleet",
        "freezing_rain": "partly-cloudy-night-sleet",
        "freezing_rain_light": "partly-cloudy-night-sleet",
        "freezing_drizzle": "partly-cloudy-night-sleet",
        "ice_pellets_heavy": "partly-cloudy-night-hail",
        "ice_pellets": "partly-cloudy-night-hail",
        "ice_pellets_light": "partly-cloudy-night-hail",
        "snow_heavy": "overcast-night-snow",
        "snow": "partly-cloudy-night-snow",
        "snow_light": "partly-cloudy-night-snow",
        "flurries": "partly-cloudy-night-snow",
        "tstorm": "thunderstorms-night",
        "rain_heavy": "overcast-rain",
        "rain": "partly-cloudy-night-rain",
        "rain_light": "partly-cloudy-night-rain",
        "drizzle": "partly-cloudy-night-drizzle",
        "fog_light": "fog-night",
        "fog": "fog-night",
        "cloudy": "cloudy",
        "mostly_cloudy": "partly-cloudy-night",
        "partly_cloudy": "partly-cloudy-night",
        "mostly_clear": "partly-cloudy-night",
        "clear": "clear-night"
    }
};

printLine("sort-for-api-providers", "Production ready files for various weather apis.");

await eachStyleAsync(async style => await clearDirectory(`./production/${style}/provider`));

await eachStyleAsync(async style => {
    for (let provider in providerIconMap) {
        const iconMap = providerIconMap[provider];

        for (let productionDir of productionDirs) {
            const [productionExt, productionDirName] = productionDir;

            await createDirectory(`./production/${style}/provider/${provider}/${productionDirName}`);

            for (let iconName in iconMap) {
                if (!iconMap.hasOwnProperty(iconName))
                    continue;

                const productionFile = `./production/${style}/${productionDirName}/${iconMap[iconName]}.${productionExt}`;

                if (!await pathExists(productionFile)) {
                    printLine("sort-for-api-providers", `ERROR: ${productionFile} does not exist.`)
                    continue;
                }

                const content = await readFile(productionFile);

                printLine("sort-for-api-providers", `Mapping icon ${iconName} to ${iconMap[iconName]}.`);
                await writeFile(`./production/${style}/provider/${provider}/${productionDirName}/${iconName}.${productionExt}`, content);
            }
        }
    }
});
