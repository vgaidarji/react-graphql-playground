export interface Main {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

export interface Wind {
  speed: number;
  deg: number;
}

export interface IWeather {
  main: string;
  description: string;
  icon: string;
}

export interface Weather {
  main: Main;
  weather: IWeather[];
  wind: Wind;
  name: string;
}

export interface OpenWeatherWeatherResponse {
  weather: Weather;
}
