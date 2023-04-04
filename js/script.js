// Copyright (c) 2023 Ben Thomson. All rights reserved.
//
// Created by: Ben Thomson
// Created on: 04/04/2023
// This file contains the JS functions for index.html

"use strict";

// This function converts Fahrenheit to Celsius.
function fahrenheitEntered () {
  // Get the user input
  let tempFahrenheit = parseFloat(document.getElementById("temp-fahrenheit").value);

  // Perform mathematical equations
  let tempCelsius = 5 / 9 * (tempFahrenheit - 32);

  // Display calculations back to user
  document.getElementById("calculations").innerHTML = "When the temperature is " + tempFahrenheit + " degrees Fahrenheit, the temperature in Celsius will be " + tempCelsius.toFixed(1) + " degrees."
}

// This function displays input after a slider is slid.
function sliderSlid () {
  //Display message
  document.getElementById("slider").innerHTML = "<p>Thank you for your input!</p>"
}