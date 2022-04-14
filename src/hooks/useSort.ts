import {IHotel} from "../types/IHotel";
import {useMemo} from "react";

export const useSortedItems = (favourites: IHotel[], sort: 'stars' | 'priceAvg'): Array<IHotel[]> => {
    const sortedItems = useMemo(() => {
        if(sort) {
            return favourites.sort((a, b) => a[sort] > b[sort] ? -1 : 1)
        }
        return favourites;
    }, [sort, favourites])

    return [sortedItems];
}