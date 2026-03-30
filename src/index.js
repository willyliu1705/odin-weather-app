import "./styles.css";
import { getWeatherData, processData } from "./api.js";

const weatherDivContainer = document.querySelector(".weather-data-container");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", async () => {
  weatherDivContainer.innerHTML = "";
  const inputValue = input.value;
  if (inputValue === "") {
    return;
  }
  const dataPromise = getWeatherData(inputValue);
  const requiredDataObject = await processData(dataPromise);
  const weatherDiv = document.createElement("div");
  const conditionsDiv = document.createElement("div");
  const tempDiv = document.createElement("div");
  conditionsDiv.textContent = requiredDataObject.conditions;
  conditionsDiv.classList.add("conditions");
  tempDiv.textContent = "Temperature: " + requiredDataObject.temp + "°F";
  weatherDiv.classList.add("weather-data-style");
  weatherDiv.append(conditionsDiv);
  weatherDiv.append(tempDiv);
  weatherDivContainer.append(weatherDiv);
});
