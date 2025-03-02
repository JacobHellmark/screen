import { useState, useEffect, useCallback } from 'react';
import { format } from 'date-fns';

interface DateTime {
    date: string;
    time: string;
}

const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const useTime = (): DateTime | undefined => {
    const [dateTime, setDateTime] = useState<DateTime>();

    const getDateTime = useCallback((): DateTime => {
        const currentDateTime = new Date();
        const month = currentDateTime.getMonth();
        const day = currentDateTime.getDate();

        console.log(month, day);
        return {
            date: `${String(day).padStart(2, '0')} ${monthNames[month]}`,
            time: format(currentDateTime, 'HH:mm:ss'),
        };
    }, [dateTime]);

    useEffect(() => {
        const timer = setInterval(() => setDateTime(getDateTime()), 1000);

        return () => clearInterval(timer);
    }, []);

    return dateTime;
};

export default useTime;
