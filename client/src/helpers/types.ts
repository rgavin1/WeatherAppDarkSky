export type CardinalDirections = "N" | "NNE" | "NE" | "ENE" | "E" | "ESE" | "SE" | "SSE" | "S" | "SSW" | "SW" | "WSW" | "W" | "WNW" | "NW" | "NNW";
export type Months = "January" | "February" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "October" | "November" | "December"
export type Days = "Monday" | "Tuesday" | "Wednesday" | "Thurday" | "Friday" | "Saturday" | "Sunday" 
export type FlagType = { [key: string]: string }
export type CountryWithCode = { name: string; code: string }
export type ResponseData = {
    name: string;
    local_names: any;
    lat: number;
    lon: number;
    country: string;
    state: string;
}