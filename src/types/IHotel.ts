export interface ILocation {
    country: string;
    name: string
}

export interface IHotel {
    hotelId: number;
    location: ILocation;
    stars: number;
    hotelName: string;
    priceAvg: number,
    favourite?: boolean,
    noImg?: boolean
}