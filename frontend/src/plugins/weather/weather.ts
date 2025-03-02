import { useState, useEffect, useCallback } from 'react';

interface CurrentWeather {}

interface Forecast {}

const useWeather = (): {
    currentWeather: CurrentWeather | undefined;
    forecast: Forecast | undefined;
} => {
    const [currentWeather, setCurrentWeather] = useState<
        CurrentWeather | undefined
    >();
    const [forecast, setForecast] = useState<Forecast | undefined>();
    const getWeather = useCallback(() => {}, []);

    return { currentWeather, forecast };
};

export default useWeather;
