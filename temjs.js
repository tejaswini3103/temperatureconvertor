document.addEventListener("DOMContentLoaded", function () {
    const convertButton = document.getElementById("convert-button");
    const temperatureInput = document.getElementById("temperature");
    const unitSelect = document.getElementById("unit");
    const resultSpan = document.getElementById("result");

    convertButton.addEventListener("click", function () {
        const temperature = parseFloat(temperatureInput.value);
        const unit = unitSelect.value;
        let convertedTemperature;

        if (unit === "celsius") {
            convertedTemperature = temperature;
            } else if (unit === "fahrenheit") {
            convertedTemperature = (temperature * 9/5) + 32;
        } else if (unit === "kelvin") {
            convertedTemperature = temperature + 273.15;
        }

        resultSpan.textContent = `${convertedTemperature.toFixed(2)} ${unit.toUpperCase()}`;
    });
});