import { getWeatherData, processData } from "./api.js";

const data = getWeatherData();
processData(data);