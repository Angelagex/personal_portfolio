import { isAfter, getHours } from "date-fns";
import NightCard from "../ui/nightCard";
import DayCard from "../ui/dayCard";
import { getWeatherInfo } from "@/lib/data";


export default async function WeatherCard({ theme }: { theme: string }) {

    const data = await getWeatherInfo()
    const now = Date.now();

    const { weather:[{ description, icon }], main: { temp }, sys:{sunrise, sunset} } = data

    const weatherData = {
        description,
        icon,
        temp
    }

    function getTimeComponent() {
        if(isAfter(getHours(now), getHours(sunset * 1000) + 1)){
            return <NightCard data={weatherData} />
        } 
        else if (isAfter(getHours(now), getHours(sunrise * 1000))){
            return <DayCard data={weatherData}/>
        }
        return <NightCard data={weatherData}/>
    }

    return (
        <>
            {
                getTimeComponent()
            }
        </>
    );
}