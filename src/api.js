export { getWeatherData, processData };

async function getWeatherData() {
  try {
    const response = await fetch(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?key=U6PCHFGKMTYE2989799EE5FMK",
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function processData(dataPromise) {
  const dataObject = await dataPromise;
  const dataArray = dataObject.days;
  let requiredData = {};
  dataArray.forEach((element, index) => {
    requiredData[`day${index}`] = [element.datetime, element.conditions, element.temp];
  });
  console.log(requiredData);
  return requiredData;
}
