import dayjs from "dayjs";
import 'dayjs/locale/ru'

export const useDate = (date: Date, daysQuantity: number) => {
    const currentDate = dayjs(date).locale('ru').format('DD MMMM YYYY')
    const currentDaysQuantity = `${daysQuantity} ${daysQuantity === 1 ? 'день' : daysQuantity > 2 && daysQuantity < 5 ? 'дня' : daysQuantity > 4 ? 'дней' : ''}`

    return [currentDate, currentDaysQuantity]
}