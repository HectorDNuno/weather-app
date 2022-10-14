import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import CurrentWeather from "../current-weather/CurrentWeather";

afterEach(() => {
  cleanup();
});

test("should render CurrentWeather component", () => {
  const currentWeather = {
    city: "Seattle, US",
    coord: {
      lon: -122.332,
      lat: 47.6062,
    },
    weather: [
      {
        id: 711,
        main: "Smoke",
        description: "smoke",
        icon: "50d",
      },
    ],
    base: "stations",
    main: {
      temp: 71.08,
      feels_like: 70.47,
      temp_min: 65.7,
      temp_max: 75.7,
      pressure: 1016,
      humidity: 55,
    },
    visibility: 10000,
    wind: {
      speed: 8.05,
      deg: 310,
    },
    clouds: {
      all: 0,
    },
    dt: 1665780296,
    sys: {
      type: 2,
      id: 2041694,
      country: "US",
      sunrise: 1665757598,
      sunset: 1665797016,
    },
    timezone: -25200,
    id: 5809844,
    name: "Seattle",
    cod: 200,
  };
  render(<CurrentWeather data={currentWeather} />);

  const currentWeatherElement = screen.getByTestId("currentWeather");
  expect(currentWeatherElement).toBeInTheDocument();
});
