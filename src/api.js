export { getWeatherData, processData };

async function getWeatherData(searchValue) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchValue}?key=U6PCHFGKMTYE2989799EE5FMK`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function processData(dataPromise) {
  const dataObject = await dataPromise;
  const currentData = dataObject.currentConditions;
  return { conditions: currentData.conditions, temp: currentData.temp };
}
