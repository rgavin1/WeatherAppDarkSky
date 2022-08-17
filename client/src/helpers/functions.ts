import { COUNTRYCODES } from "./countryCodes";
import { FLAGS } from "./flags";
import { CardinalDirections, Months, Days } from "./types";

export const cardinalDirections: CardinalDirections[] = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"]

export const daysOfTheWeeks: Days[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"]

export const months: Months[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const toCardinalDirection = (degreeDirection: number): string => {
    const value = Math.floor((degreeDirection / 22.5) + .5);
    return cardinalDirections[value % 16]
}
export const kelvinToFahrenheit = (kelvin: number): string => {
    const celsius = (kelvin - 273.15);
    const fahrenheit = (celsius * (9 / 5)) + 32;
    return `${fahrenheit.toPrecision(3)}°`;
}
export const toTime = (utc: number) => {
    const date = new Date(utc);
    return `${date.getHours() - 12}:${date.getMinutes()}`;
}
export const convertUTCDateToLocalDate = (unix_timestamp: number): string => {
    var date = new Date(unix_timestamp * 1000);
    return `Last updated: ${date}`;
}
export const getCurrentUtcTime = (): string => {
    const d = new Date(Date.now());
    const hour = d.getHours() === 0 ? 12 : (d.getHours() > 12 ? d.getHours() - 12 : d.getHours());
    const min = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
    const ampm = d.getHours() < 12 ? 'AM' : 'PM';
    return hour + ':' + min + ' ' + ampm;
}
export const getCurrentDayMonth = (additionalDay = 0): string => {
    const today = new Date(Date.now())

    const currentDay = today.getDay() + additionalDay;
    const todayDate = today.getDate() + additionalDay;
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    return `${daysOfTheWeeks[currentDay]},  ${months[currentMonth]} ${todayDate} ${currentYear}`;
}
export const toMilePerHour = (metersPerSecond: number) => {
    return ((metersPerSecond * 2.236936) / 100).toPrecision(2);
}
export const getCountryFlag = (countryCode: string): string => {
    const country = COUNTRYCODES.find(({ code }) => code === countryCode);
    if (!country) return ""
    return FLAGS[country.name]
}