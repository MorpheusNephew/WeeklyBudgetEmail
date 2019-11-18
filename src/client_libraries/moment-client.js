import moment from 'moment';

const getDateOfDay = (dayVal) => {
    return moment().day(dayVal).format("YYYY-MM-DD");
}

export const getLastWeekRange = () => {
    const lastSunday = getDateOfDay(-7);
    const lastSaturday = getDateOfDay(-1);
    return [lastSunday, lastSaturday];
};