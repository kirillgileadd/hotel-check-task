export interface ILocation {
    country: string;
    name: string
}

export interface IHotel{
    priceAvg: number;
    daysQuantity: number;
    noImg ? : boolean;
    checkIn: string;
    location: ILocation;
    hotelId: number;
    stars: number;
    favourite: boolean;
    hotelName: string
}