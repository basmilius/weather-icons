export type MeteoconsId =
  | "alert-avalanche-danger"
  | "alert-falling-rocks"
  | "barometer"
  | "celsius"
  | "clear-day"
  | "clear-night"
  | "cloudy"
  | "code-green"
  | "code-orange"
  | "code-red"
  | "code-yellow"
  | "compass"
  | "drizzle"
  | "dust-day"
  | "dust-night"
  | "dust-wind"
  | "dust"
  | "fahrenheit"
  | "falling-stars"
  | "fog-day"
  | "fog-night"
  | "fog"
  | "hail"
  | "haze-day"
  | "haze-night"
  | "haze"
  | "horizon"
  | "humidity"
  | "hurricane"
  | "lightning-bolt"
  | "mist"
  | "moon-first-quarter"
  | "moon-full"
  | "moon-last-quarter"
  | "moon-new"
  | "moon-waning-crescent"
  | "moon-waning-gibbous"
  | "moon-waxing-crescent"
  | "moon-waxing-gibbous"
  | "moonrise"
  | "moonset"
  | "not-available"
  | "overcast-day-drizzle"
  | "overcast-day-fog"
  | "overcast-day-hail"
  | "overcast-day-haze"
  | "overcast-day-rain"
  | "overcast-day-sleet"
  | "overcast-day-smoke"
  | "overcast-day-snow"
  | "overcast-day"
  | "overcast-drizzle"
  | "overcast-fog"
  | "overcast-hail"
  | "overcast-haze"
  | "overcast-night-drizzle"
  | "overcast-night-fog"
  | "overcast-night-hail"
  | "overcast-night-haze"
  | "overcast-night-rain"
  | "overcast-night-sleet"
  | "overcast-night-smoke"
  | "overcast-night-snow"
  | "overcast-night"
  | "overcast-rain"
  | "overcast-sleet"
  | "overcast-smoke"
  | "overcast-snow"
  | "overcast"
  | "partly-cloudy-day-drizzle"
  | "partly-cloudy-day-fog"
  | "partly-cloudy-day-hail"
  | "partly-cloudy-day-haze"
  | "partly-cloudy-day-rain"
  | "partly-cloudy-day-sleet"
  | "partly-cloudy-day-smoke"
  | "partly-cloudy-day-snow"
  | "partly-cloudy-day"
  | "partly-cloudy-night-drizzle"
  | "partly-cloudy-night-fog"
  | "partly-cloudy-night-hail"
  | "partly-cloudy-night-haze"
  | "partly-cloudy-night-rain"
  | "partly-cloudy-night-sleet"
  | "partly-cloudy-night-smoke"
  | "partly-cloudy-night-snow"
  | "partly-cloudy-night"
  | "pollen-flower"
  | "pollen-grass"
  | "pollen-tree"
  | "pollen"
  | "pressure-high-alt"
  | "pressure-high"
  | "pressure-low-alt"
  | "pressure-low"
  | "rain"
  | "rainbow-clear"
  | "rainbow"
  | "raindrop-measure"
  | "raindrop"
  | "raindrops"
  | "sleet"
  | "smoke-particles"
  | "smoke"
  | "snow"
  | "snowflake"
  | "snowman"
  | "solar-eclipse"
  | "star"
  | "starry-night"
  | "sunrise"
  | "sunset"
  | "thermometer-celsius"
  | "thermometer-colder"
  | "thermometer-fahrenheit"
  | "thermometer-glass-celsius"
  | "thermometer-glass-fahrenheit"
  | "thermometer-glass"
  | "thermometer-mercury-cold"
  | "thermometer-mercury"
  | "thermometer-raindrop"
  | "thermometer-warmer"
  | "thermometer-water"
  | "thermometer"
  | "thunderstorms-day-overcast-rain"
  | "thunderstorms-day-overcast-snow"
  | "thunderstorms-day-overcast"
  | "thunderstorms-day-rain"
  | "thunderstorms-day-snow"
  | "thunderstorms-day"
  | "thunderstorms-night-overcast-rain"
  | "thunderstorms-night-overcast-snow"
  | "thunderstorms-night-overcast"
  | "thunderstorms-night-rain"
  | "thunderstorms-night-snow"
  | "thunderstorms-night"
  | "thunderstorms-overcast-rain"
  | "thunderstorms-overcast-snow"
  | "thunderstorms-overcast"
  | "thunderstorms-rain"
  | "thunderstorms-snow"
  | "thunderstorms"
  | "tide-high"
  | "tide-low"
  | "time-afternoon"
  | "time-evening"
  | "time-late-afternoon"
  | "time-late-evening"
  | "time-late-morning"
  | "time-late-night"
  | "time-morning"
  | "time-night"
  | "tornado"
  | "umbrella-wind-alt"
  | "umbrella-wind"
  | "umbrella"
  | "uv-index-1"
  | "uv-index-10"
  | "uv-index-11"
  | "uv-index-2"
  | "uv-index-3"
  | "uv-index-4"
  | "uv-index-5"
  | "uv-index-6"
  | "uv-index-7"
  | "uv-index-8"
  | "uv-index-9"
  | "uv-index"
  | "wind-beaufort-0"
  | "wind-beaufort-1"
  | "wind-beaufort-10"
  | "wind-beaufort-11"
  | "wind-beaufort-12"
  | "wind-beaufort-2"
  | "wind-beaufort-3"
  | "wind-beaufort-4"
  | "wind-beaufort-5"
  | "wind-beaufort-6"
  | "wind-beaufort-7"
  | "wind-beaufort-8"
  | "wind-beaufort-9"
  | "wind-offshore"
  | "wind-onshore"
  | "wind"
  | "windsock";

export type MeteoconsKey =
  | "AlertAvalancheDanger"
  | "AlertFallingRocks"
  | "Barometer"
  | "Celsius"
  | "ClearDay"
  | "ClearNight"
  | "Cloudy"
  | "CodeGreen"
  | "CodeOrange"
  | "CodeRed"
  | "CodeYellow"
  | "Compass"
  | "Drizzle"
  | "DustDay"
  | "DustNight"
  | "DustWind"
  | "Dust"
  | "Fahrenheit"
  | "FallingStars"
  | "FogDay"
  | "FogNight"
  | "Fog"
  | "Hail"
  | "HazeDay"
  | "HazeNight"
  | "Haze"
  | "Horizon"
  | "Humidity"
  | "Hurricane"
  | "LightningBolt"
  | "Mist"
  | "MoonFirstQuarter"
  | "MoonFull"
  | "MoonLastQuarter"
  | "MoonNew"
  | "MoonWaningCrescent"
  | "MoonWaningGibbous"
  | "MoonWaxingCrescent"
  | "MoonWaxingGibbous"
  | "Moonrise"
  | "Moonset"
  | "NotAvailable"
  | "OvercastDayDrizzle"
  | "OvercastDayFog"
  | "OvercastDayHail"
  | "OvercastDayHaze"
  | "OvercastDayRain"
  | "OvercastDaySleet"
  | "OvercastDaySmoke"
  | "OvercastDaySnow"
  | "OvercastDay"
  | "OvercastDrizzle"
  | "OvercastFog"
  | "OvercastHail"
  | "OvercastHaze"
  | "OvercastNightDrizzle"
  | "OvercastNightFog"
  | "OvercastNightHail"
  | "OvercastNightHaze"
  | "OvercastNightRain"
  | "OvercastNightSleet"
  | "OvercastNightSmoke"
  | "OvercastNightSnow"
  | "OvercastNight"
  | "OvercastRain"
  | "OvercastSleet"
  | "OvercastSmoke"
  | "OvercastSnow"
  | "Overcast"
  | "PartlyCloudyDayDrizzle"
  | "PartlyCloudyDayFog"
  | "PartlyCloudyDayHail"
  | "PartlyCloudyDayHaze"
  | "PartlyCloudyDayRain"
  | "PartlyCloudyDaySleet"
  | "PartlyCloudyDaySmoke"
  | "PartlyCloudyDaySnow"
  | "PartlyCloudyDay"
  | "PartlyCloudyNightDrizzle"
  | "PartlyCloudyNightFog"
  | "PartlyCloudyNightHail"
  | "PartlyCloudyNightHaze"
  | "PartlyCloudyNightRain"
  | "PartlyCloudyNightSleet"
  | "PartlyCloudyNightSmoke"
  | "PartlyCloudyNightSnow"
  | "PartlyCloudyNight"
  | "PollenFlower"
  | "PollenGrass"
  | "PollenTree"
  | "Pollen"
  | "PressureHighAlt"
  | "PressureHigh"
  | "PressureLowAlt"
  | "PressureLow"
  | "Rain"
  | "RainbowClear"
  | "Rainbow"
  | "RaindropMeasure"
  | "Raindrop"
  | "Raindrops"
  | "Sleet"
  | "SmokeParticles"
  | "Smoke"
  | "Snow"
  | "Snowflake"
  | "Snowman"
  | "SolarEclipse"
  | "Star"
  | "StarryNight"
  | "Sunrise"
  | "Sunset"
  | "ThermometerCelsius"
  | "ThermometerColder"
  | "ThermometerFahrenheit"
  | "ThermometerGlassCelsius"
  | "ThermometerGlassFahrenheit"
  | "ThermometerGlass"
  | "ThermometerMercuryCold"
  | "ThermometerMercury"
  | "ThermometerRaindrop"
  | "ThermometerWarmer"
  | "ThermometerWater"
  | "Thermometer"
  | "ThunderstormsDayOvercastRain"
  | "ThunderstormsDayOvercastSnow"
  | "ThunderstormsDayOvercast"
  | "ThunderstormsDayRain"
  | "ThunderstormsDaySnow"
  | "ThunderstormsDay"
  | "ThunderstormsNightOvercastRain"
  | "ThunderstormsNightOvercastSnow"
  | "ThunderstormsNightOvercast"
  | "ThunderstormsNightRain"
  | "ThunderstormsNightSnow"
  | "ThunderstormsNight"
  | "ThunderstormsOvercastRain"
  | "ThunderstormsOvercastSnow"
  | "ThunderstormsOvercast"
  | "ThunderstormsRain"
  | "ThunderstormsSnow"
  | "Thunderstorms"
  | "TideHigh"
  | "TideLow"
  | "TimeAfternoon"
  | "TimeEvening"
  | "TimeLateAfternoon"
  | "TimeLateEvening"
  | "TimeLateMorning"
  | "TimeLateNight"
  | "TimeMorning"
  | "TimeNight"
  | "Tornado"
  | "UmbrellaWindAlt"
  | "UmbrellaWind"
  | "Umbrella"
  | "UvIndex_1"
  | "UvIndex_10"
  | "UvIndex_11"
  | "UvIndex_2"
  | "UvIndex_3"
  | "UvIndex_4"
  | "UvIndex_5"
  | "UvIndex_6"
  | "UvIndex_7"
  | "UvIndex_8"
  | "UvIndex_9"
  | "UvIndex"
  | "WindBeaufort_0"
  | "WindBeaufort_1"
  | "WindBeaufort_10"
  | "WindBeaufort_11"
  | "WindBeaufort_12"
  | "WindBeaufort_2"
  | "WindBeaufort_3"
  | "WindBeaufort_4"
  | "WindBeaufort_5"
  | "WindBeaufort_6"
  | "WindBeaufort_7"
  | "WindBeaufort_8"
  | "WindBeaufort_9"
  | "WindOffshore"
  | "WindOnshore"
  | "Wind"
  | "Windsock";

export enum Meteocons {
  AlertAvalancheDanger = "alert-avalanche-danger",
  AlertFallingRocks = "alert-falling-rocks",
  Barometer = "barometer",
  Celsius = "celsius",
  ClearDay = "clear-day",
  ClearNight = "clear-night",
  Cloudy = "cloudy",
  CodeGreen = "code-green",
  CodeOrange = "code-orange",
  CodeRed = "code-red",
  CodeYellow = "code-yellow",
  Compass = "compass",
  Drizzle = "drizzle",
  DustDay = "dust-day",
  DustNight = "dust-night",
  DustWind = "dust-wind",
  Dust = "dust",
  Fahrenheit = "fahrenheit",
  FallingStars = "falling-stars",
  FogDay = "fog-day",
  FogNight = "fog-night",
  Fog = "fog",
  Hail = "hail",
  HazeDay = "haze-day",
  HazeNight = "haze-night",
  Haze = "haze",
  Horizon = "horizon",
  Humidity = "humidity",
  Hurricane = "hurricane",
  LightningBolt = "lightning-bolt",
  Mist = "mist",
  MoonFirstQuarter = "moon-first-quarter",
  MoonFull = "moon-full",
  MoonLastQuarter = "moon-last-quarter",
  MoonNew = "moon-new",
  MoonWaningCrescent = "moon-waning-crescent",
  MoonWaningGibbous = "moon-waning-gibbous",
  MoonWaxingCrescent = "moon-waxing-crescent",
  MoonWaxingGibbous = "moon-waxing-gibbous",
  Moonrise = "moonrise",
  Moonset = "moonset",
  NotAvailable = "not-available",
  OvercastDayDrizzle = "overcast-day-drizzle",
  OvercastDayFog = "overcast-day-fog",
  OvercastDayHail = "overcast-day-hail",
  OvercastDayHaze = "overcast-day-haze",
  OvercastDayRain = "overcast-day-rain",
  OvercastDaySleet = "overcast-day-sleet",
  OvercastDaySmoke = "overcast-day-smoke",
  OvercastDaySnow = "overcast-day-snow",
  OvercastDay = "overcast-day",
  OvercastDrizzle = "overcast-drizzle",
  OvercastFog = "overcast-fog",
  OvercastHail = "overcast-hail",
  OvercastHaze = "overcast-haze",
  OvercastNightDrizzle = "overcast-night-drizzle",
  OvercastNightFog = "overcast-night-fog",
  OvercastNightHail = "overcast-night-hail",
  OvercastNightHaze = "overcast-night-haze",
  OvercastNightRain = "overcast-night-rain",
  OvercastNightSleet = "overcast-night-sleet",
  OvercastNightSmoke = "overcast-night-smoke",
  OvercastNightSnow = "overcast-night-snow",
  OvercastNight = "overcast-night",
  OvercastRain = "overcast-rain",
  OvercastSleet = "overcast-sleet",
  OvercastSmoke = "overcast-smoke",
  OvercastSnow = "overcast-snow",
  Overcast = "overcast",
  PartlyCloudyDayDrizzle = "partly-cloudy-day-drizzle",
  PartlyCloudyDayFog = "partly-cloudy-day-fog",
  PartlyCloudyDayHail = "partly-cloudy-day-hail",
  PartlyCloudyDayHaze = "partly-cloudy-day-haze",
  PartlyCloudyDayRain = "partly-cloudy-day-rain",
  PartlyCloudyDaySleet = "partly-cloudy-day-sleet",
  PartlyCloudyDaySmoke = "partly-cloudy-day-smoke",
  PartlyCloudyDaySnow = "partly-cloudy-day-snow",
  PartlyCloudyDay = "partly-cloudy-day",
  PartlyCloudyNightDrizzle = "partly-cloudy-night-drizzle",
  PartlyCloudyNightFog = "partly-cloudy-night-fog",
  PartlyCloudyNightHail = "partly-cloudy-night-hail",
  PartlyCloudyNightHaze = "partly-cloudy-night-haze",
  PartlyCloudyNightRain = "partly-cloudy-night-rain",
  PartlyCloudyNightSleet = "partly-cloudy-night-sleet",
  PartlyCloudyNightSmoke = "partly-cloudy-night-smoke",
  PartlyCloudyNightSnow = "partly-cloudy-night-snow",
  PartlyCloudyNight = "partly-cloudy-night",
  PollenFlower = "pollen-flower",
  PollenGrass = "pollen-grass",
  PollenTree = "pollen-tree",
  Pollen = "pollen",
  PressureHighAlt = "pressure-high-alt",
  PressureHigh = "pressure-high",
  PressureLowAlt = "pressure-low-alt",
  PressureLow = "pressure-low",
  Rain = "rain",
  RainbowClear = "rainbow-clear",
  Rainbow = "rainbow",
  RaindropMeasure = "raindrop-measure",
  Raindrop = "raindrop",
  Raindrops = "raindrops",
  Sleet = "sleet",
  SmokeParticles = "smoke-particles",
  Smoke = "smoke",
  Snow = "snow",
  Snowflake = "snowflake",
  Snowman = "snowman",
  SolarEclipse = "solar-eclipse",
  Star = "star",
  StarryNight = "starry-night",
  Sunrise = "sunrise",
  Sunset = "sunset",
  ThermometerCelsius = "thermometer-celsius",
  ThermometerColder = "thermometer-colder",
  ThermometerFahrenheit = "thermometer-fahrenheit",
  ThermometerGlassCelsius = "thermometer-glass-celsius",
  ThermometerGlassFahrenheit = "thermometer-glass-fahrenheit",
  ThermometerGlass = "thermometer-glass",
  ThermometerMercuryCold = "thermometer-mercury-cold",
  ThermometerMercury = "thermometer-mercury",
  ThermometerRaindrop = "thermometer-raindrop",
  ThermometerWarmer = "thermometer-warmer",
  ThermometerWater = "thermometer-water",
  Thermometer = "thermometer",
  ThunderstormsDayOvercastRain = "thunderstorms-day-overcast-rain",
  ThunderstormsDayOvercastSnow = "thunderstorms-day-overcast-snow",
  ThunderstormsDayOvercast = "thunderstorms-day-overcast",
  ThunderstormsDayRain = "thunderstorms-day-rain",
  ThunderstormsDaySnow = "thunderstorms-day-snow",
  ThunderstormsDay = "thunderstorms-day",
  ThunderstormsNightOvercastRain = "thunderstorms-night-overcast-rain",
  ThunderstormsNightOvercastSnow = "thunderstorms-night-overcast-snow",
  ThunderstormsNightOvercast = "thunderstorms-night-overcast",
  ThunderstormsNightRain = "thunderstorms-night-rain",
  ThunderstormsNightSnow = "thunderstorms-night-snow",
  ThunderstormsNight = "thunderstorms-night",
  ThunderstormsOvercastRain = "thunderstorms-overcast-rain",
  ThunderstormsOvercastSnow = "thunderstorms-overcast-snow",
  ThunderstormsOvercast = "thunderstorms-overcast",
  ThunderstormsRain = "thunderstorms-rain",
  ThunderstormsSnow = "thunderstorms-snow",
  Thunderstorms = "thunderstorms",
  TideHigh = "tide-high",
  TideLow = "tide-low",
  TimeAfternoon = "time-afternoon",
  TimeEvening = "time-evening",
  TimeLateAfternoon = "time-late-afternoon",
  TimeLateEvening = "time-late-evening",
  TimeLateMorning = "time-late-morning",
  TimeLateNight = "time-late-night",
  TimeMorning = "time-morning",
  TimeNight = "time-night",
  Tornado = "tornado",
  UmbrellaWindAlt = "umbrella-wind-alt",
  UmbrellaWind = "umbrella-wind",
  Umbrella = "umbrella",
  UvIndex_1 = "uv-index-1",
  UvIndex_10 = "uv-index-10",
  UvIndex_11 = "uv-index-11",
  UvIndex_2 = "uv-index-2",
  UvIndex_3 = "uv-index-3",
  UvIndex_4 = "uv-index-4",
  UvIndex_5 = "uv-index-5",
  UvIndex_6 = "uv-index-6",
  UvIndex_7 = "uv-index-7",
  UvIndex_8 = "uv-index-8",
  UvIndex_9 = "uv-index-9",
  UvIndex = "uv-index",
  WindBeaufort_0 = "wind-beaufort-0",
  WindBeaufort_1 = "wind-beaufort-1",
  WindBeaufort_10 = "wind-beaufort-10",
  WindBeaufort_11 = "wind-beaufort-11",
  WindBeaufort_12 = "wind-beaufort-12",
  WindBeaufort_2 = "wind-beaufort-2",
  WindBeaufort_3 = "wind-beaufort-3",
  WindBeaufort_4 = "wind-beaufort-4",
  WindBeaufort_5 = "wind-beaufort-5",
  WindBeaufort_6 = "wind-beaufort-6",
  WindBeaufort_7 = "wind-beaufort-7",
  WindBeaufort_8 = "wind-beaufort-8",
  WindBeaufort_9 = "wind-beaufort-9",
  WindOffshore = "wind-offshore",
  WindOnshore = "wind-onshore",
  Wind = "wind",
  Windsock = "windsock",
}

export const METEOCONS_CODEPOINTS: { [key in Meteocons]: string } = {
  [Meteocons.AlertAvalancheDanger]: "61697",
  [Meteocons.AlertFallingRocks]: "61698",
  [Meteocons.Barometer]: "61699",
  [Meteocons.Celsius]: "61700",
  [Meteocons.ClearDay]: "61701",
  [Meteocons.ClearNight]: "61702",
  [Meteocons.Cloudy]: "61703",
  [Meteocons.CodeGreen]: "61704",
  [Meteocons.CodeOrange]: "61705",
  [Meteocons.CodeRed]: "61706",
  [Meteocons.CodeYellow]: "61707",
  [Meteocons.Compass]: "61708",
  [Meteocons.Drizzle]: "61709",
  [Meteocons.DustDay]: "61710",
  [Meteocons.DustNight]: "61711",
  [Meteocons.DustWind]: "61712",
  [Meteocons.Dust]: "61713",
  [Meteocons.Fahrenheit]: "61714",
  [Meteocons.FallingStars]: "61715",
  [Meteocons.FogDay]: "61716",
  [Meteocons.FogNight]: "61717",
  [Meteocons.Fog]: "61718",
  [Meteocons.Hail]: "61719",
  [Meteocons.HazeDay]: "61720",
  [Meteocons.HazeNight]: "61721",
  [Meteocons.Haze]: "61722",
  [Meteocons.Horizon]: "61723",
  [Meteocons.Humidity]: "61724",
  [Meteocons.Hurricane]: "61725",
  [Meteocons.LightningBolt]: "61726",
  [Meteocons.Mist]: "61727",
  [Meteocons.MoonFirstQuarter]: "61728",
  [Meteocons.MoonFull]: "61729",
  [Meteocons.MoonLastQuarter]: "61730",
  [Meteocons.MoonNew]: "61731",
  [Meteocons.MoonWaningCrescent]: "61732",
  [Meteocons.MoonWaningGibbous]: "61733",
  [Meteocons.MoonWaxingCrescent]: "61734",
  [Meteocons.MoonWaxingGibbous]: "61735",
  [Meteocons.Moonrise]: "61736",
  [Meteocons.Moonset]: "61737",
  [Meteocons.NotAvailable]: "61738",
  [Meteocons.OvercastDayDrizzle]: "61739",
  [Meteocons.OvercastDayFog]: "61740",
  [Meteocons.OvercastDayHail]: "61741",
  [Meteocons.OvercastDayHaze]: "61742",
  [Meteocons.OvercastDayRain]: "61743",
  [Meteocons.OvercastDaySleet]: "61744",
  [Meteocons.OvercastDaySmoke]: "61745",
  [Meteocons.OvercastDaySnow]: "61746",
  [Meteocons.OvercastDay]: "61747",
  [Meteocons.OvercastDrizzle]: "61748",
  [Meteocons.OvercastFog]: "61749",
  [Meteocons.OvercastHail]: "61750",
  [Meteocons.OvercastHaze]: "61751",
  [Meteocons.OvercastNightDrizzle]: "61752",
  [Meteocons.OvercastNightFog]: "61753",
  [Meteocons.OvercastNightHail]: "61754",
  [Meteocons.OvercastNightHaze]: "61755",
  [Meteocons.OvercastNightRain]: "61756",
  [Meteocons.OvercastNightSleet]: "61757",
  [Meteocons.OvercastNightSmoke]: "61758",
  [Meteocons.OvercastNightSnow]: "61759",
  [Meteocons.OvercastNight]: "61760",
  [Meteocons.OvercastRain]: "61761",
  [Meteocons.OvercastSleet]: "61762",
  [Meteocons.OvercastSmoke]: "61763",
  [Meteocons.OvercastSnow]: "61764",
  [Meteocons.Overcast]: "61765",
  [Meteocons.PartlyCloudyDayDrizzle]: "61766",
  [Meteocons.PartlyCloudyDayFog]: "61767",
  [Meteocons.PartlyCloudyDayHail]: "61768",
  [Meteocons.PartlyCloudyDayHaze]: "61769",
  [Meteocons.PartlyCloudyDayRain]: "61770",
  [Meteocons.PartlyCloudyDaySleet]: "61771",
  [Meteocons.PartlyCloudyDaySmoke]: "61772",
  [Meteocons.PartlyCloudyDaySnow]: "61773",
  [Meteocons.PartlyCloudyDay]: "61774",
  [Meteocons.PartlyCloudyNightDrizzle]: "61775",
  [Meteocons.PartlyCloudyNightFog]: "61776",
  [Meteocons.PartlyCloudyNightHail]: "61777",
  [Meteocons.PartlyCloudyNightHaze]: "61778",
  [Meteocons.PartlyCloudyNightRain]: "61779",
  [Meteocons.PartlyCloudyNightSleet]: "61780",
  [Meteocons.PartlyCloudyNightSmoke]: "61781",
  [Meteocons.PartlyCloudyNightSnow]: "61782",
  [Meteocons.PartlyCloudyNight]: "61783",
  [Meteocons.PollenFlower]: "61784",
  [Meteocons.PollenGrass]: "61785",
  [Meteocons.PollenTree]: "61786",
  [Meteocons.Pollen]: "61787",
  [Meteocons.PressureHighAlt]: "61788",
  [Meteocons.PressureHigh]: "61789",
  [Meteocons.PressureLowAlt]: "61790",
  [Meteocons.PressureLow]: "61791",
  [Meteocons.Rain]: "61792",
  [Meteocons.RainbowClear]: "61793",
  [Meteocons.Rainbow]: "61794",
  [Meteocons.RaindropMeasure]: "61795",
  [Meteocons.Raindrop]: "61796",
  [Meteocons.Raindrops]: "61797",
  [Meteocons.Sleet]: "61798",
  [Meteocons.SmokeParticles]: "61799",
  [Meteocons.Smoke]: "61800",
  [Meteocons.Snow]: "61801",
  [Meteocons.Snowflake]: "61802",
  [Meteocons.Snowman]: "61803",
  [Meteocons.SolarEclipse]: "61804",
  [Meteocons.Star]: "61805",
  [Meteocons.StarryNight]: "61806",
  [Meteocons.Sunrise]: "61807",
  [Meteocons.Sunset]: "61808",
  [Meteocons.ThermometerCelsius]: "61809",
  [Meteocons.ThermometerColder]: "61810",
  [Meteocons.ThermometerFahrenheit]: "61811",
  [Meteocons.ThermometerGlassCelsius]: "61812",
  [Meteocons.ThermometerGlassFahrenheit]: "61813",
  [Meteocons.ThermometerGlass]: "61814",
  [Meteocons.ThermometerMercuryCold]: "61815",
  [Meteocons.ThermometerMercury]: "61816",
  [Meteocons.ThermometerRaindrop]: "61817",
  [Meteocons.ThermometerWarmer]: "61818",
  [Meteocons.ThermometerWater]: "61819",
  [Meteocons.Thermometer]: "61820",
  [Meteocons.ThunderstormsDayOvercastRain]: "61821",
  [Meteocons.ThunderstormsDayOvercastSnow]: "61822",
  [Meteocons.ThunderstormsDayOvercast]: "61823",
  [Meteocons.ThunderstormsDayRain]: "61824",
  [Meteocons.ThunderstormsDaySnow]: "61825",
  [Meteocons.ThunderstormsDay]: "61826",
  [Meteocons.ThunderstormsNightOvercastRain]: "61827",
  [Meteocons.ThunderstormsNightOvercastSnow]: "61828",
  [Meteocons.ThunderstormsNightOvercast]: "61829",
  [Meteocons.ThunderstormsNightRain]: "61830",
  [Meteocons.ThunderstormsNightSnow]: "61831",
  [Meteocons.ThunderstormsNight]: "61832",
  [Meteocons.ThunderstormsOvercastRain]: "61833",
  [Meteocons.ThunderstormsOvercastSnow]: "61834",
  [Meteocons.ThunderstormsOvercast]: "61835",
  [Meteocons.ThunderstormsRain]: "61836",
  [Meteocons.ThunderstormsSnow]: "61837",
  [Meteocons.Thunderstorms]: "61838",
  [Meteocons.TideHigh]: "61839",
  [Meteocons.TideLow]: "61840",
  [Meteocons.TimeAfternoon]: "61841",
  [Meteocons.TimeEvening]: "61842",
  [Meteocons.TimeLateAfternoon]: "61843",
  [Meteocons.TimeLateEvening]: "61844",
  [Meteocons.TimeLateMorning]: "61845",
  [Meteocons.TimeLateNight]: "61846",
  [Meteocons.TimeMorning]: "61847",
  [Meteocons.TimeNight]: "61848",
  [Meteocons.Tornado]: "61849",
  [Meteocons.UmbrellaWindAlt]: "61850",
  [Meteocons.UmbrellaWind]: "61851",
  [Meteocons.Umbrella]: "61852",
  [Meteocons.UvIndex_1]: "61853",
  [Meteocons.UvIndex_10]: "61854",
  [Meteocons.UvIndex_11]: "61855",
  [Meteocons.UvIndex_2]: "61856",
  [Meteocons.UvIndex_3]: "61857",
  [Meteocons.UvIndex_4]: "61858",
  [Meteocons.UvIndex_5]: "61859",
  [Meteocons.UvIndex_6]: "61860",
  [Meteocons.UvIndex_7]: "61861",
  [Meteocons.UvIndex_8]: "61862",
  [Meteocons.UvIndex_9]: "61863",
  [Meteocons.UvIndex]: "61864",
  [Meteocons.WindBeaufort_0]: "61865",
  [Meteocons.WindBeaufort_1]: "61866",
  [Meteocons.WindBeaufort_10]: "61867",
  [Meteocons.WindBeaufort_11]: "61868",
  [Meteocons.WindBeaufort_12]: "61869",
  [Meteocons.WindBeaufort_2]: "61870",
  [Meteocons.WindBeaufort_3]: "61871",
  [Meteocons.WindBeaufort_4]: "61872",
  [Meteocons.WindBeaufort_5]: "61873",
  [Meteocons.WindBeaufort_6]: "61874",
  [Meteocons.WindBeaufort_7]: "61875",
  [Meteocons.WindBeaufort_8]: "61876",
  [Meteocons.WindBeaufort_9]: "61877",
  [Meteocons.WindOffshore]: "61878",
  [Meteocons.WindOnshore]: "61879",
  [Meteocons.Wind]: "61880",
  [Meteocons.Windsock]: "61881",
};
