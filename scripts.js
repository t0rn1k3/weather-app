"use strict";

const result = document.querySelector('.result');
const temp = document.querySelector('.temp');
const city = document.querySelector('.city');
const feel = document.querySelector('.feels-like');
const country = document.querySelector('.country');
const searchInput = document.querySelector('.search-input');
const searchIcon = document.querySelector('.search-icon');
const stat = document.querySelector('.status');
const weatherIcon = document.querySelector('.weather-icon');

const apiKey = '8a8a357f1ba2979dd81ed791437d5758';
const unit = 'metric';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=${unit}&appid=${apiKey}&q=`;

async function checkWether(linkCity){
    const response = await fetch(apiUrl + linkCity);  
    let data = await response.json();

    console.log(searchInput.value)

    temp.innerHTML = `${Math.round(data.main.temp)} °C`;
    feel.innerHTML = `feels like :  ${Math.round(data.main.feels_like)} °C`;
    // create img element to display weather icons 
    const img = document.createElement('img');
    stat.appendChild(img);
    if(data.weather[0].main === "Clear"){
        img.src = `images/sun.png`;
    }else if(data.weather[0].main === "Clouds"){
        img.src = `images/clouds.png`;
    }
    city.innerHTML = data.name
    country.innerHTML = `Country : ${data.sys.country}`;
}

searchIcon.addEventListener('click', ()=> {
    checkWether(searchInput.value );
})

if(searchInput.value === '') {
    const sunImg = document.createElement('img');
    city.appendChild(sunImg);
    sunImg.src = `images/sun.png`;
    sunImg.classList.add('welcome-img')

}