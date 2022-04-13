import dayjs from "dayjs";
import 'dayjs/locale/ru'

export const useDate = (date?: Date): Array<string> => {
    const currentDate = dayjs(date).locale('ru').format('DD MMMM YYYY')

    return [currentDate]
}