"use strict";

const result = document.querySelector('.result');
const temp = document.querySelector('.temp');
const city = document.querySelector('.city')

const apiKey = '8a8a357f1ba2979dd81ed791437d5758';
const unit = 'metric';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=${apiKey}&units=${unit}`;

async function checkWether(){
    const response = await fetch(apiUrl);  
    let data = await response.json();

    temp.innerHTML = data.temp
}

// checkWether();