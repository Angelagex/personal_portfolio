import { getWeatherInfo } from "@/lib/data";
import { isAfter } from "date-fns";
import NightCard from "../ui/nightCard";
import DayCard from "../ui/dayCard";


export default async function WeatherCard() {

    const data = await getWeatherInfo()
    const now = Date.now();

    const { weather:[{ description, icon }], main: { temp } } = data

    const weatherData = {
        description,
        icon,
        temp
    }

    return (
        <>
            {
                isAfter(now, data.sys.sunset * 1000) ? <NightCard data={weatherData} />
                    : isAfter(now, data.sys.sunrise * 1000) ? <DayCard data={weatherData}/>
                        : <NightCard data={weatherData}/>
            }
        </>
    );
}