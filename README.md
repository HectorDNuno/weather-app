# What Weather!

![project screenshot](https://github.com/HectorDNuno/weather-app/blob/main/public/weather-app-screenshot.png?raw=true)

## Description

Hello and welcome to my weather app! The purpose of this web app is pretty self explanitory. I built this app using React.js, [react-accessible-accordion](https://www.npmjs.com/package/react-accessible-accordion), and [react-select-async-paginate](https://www.npmjs.com/package/react-select-async-paginate). I get my data with a combination of two APIs: [OpenWeather](https://openweathermap.org/) and [GeoDB Cities](https://rapidapi.com/wirefreethought/api/geodb-cities/details).

I use react-select-async-paginate for the search bar, and I make a call to GeoDB Cities API to get a list of cities that match what is typed in the search bar. The suggested cities show up as options in the search bar. When a city is selected, I receive the latitude and longitude of that city and send that data to the OpenWeather API. OpenWeather then does two things with that data: it gets the current weather and the forecast for that city. I created two variables that have fetch requests for the current weather and the forecast. I passed an array of those promises to OpenWeather and, using the useState hook, I update the current weather and forecast variables. I created two components that display the data on the page, one for each set of data. The current weather data goes to the widget that is under the search bar, and the forecast data is sent to the accordion that is under the current weather widget. I map through the forecast data in combination with the react-accessible-accordion to create each item in the accordion. Voilà we have a working weather app!

You can check out the demo I made [here](https://youtu.be/bLO1_F6Rggg).

### Dependencies

react-accessible-accordion

```
$ npm install react-accessible-accordion
```

react-select-async-paginate

```
$ npm install react-select-async-paginate
```
