import { LocationItem } from '../const';

type Host = {
    pro: boolean,
    name: string,
    avatar: string,
    description: string[],
}

export type Review = {
    author: string,
    avatar: string,
    rating: number,
    text: string,
    date: {
      month: string,
      year: number
    }
}

export type Reviews = Review[]

export type Card = {
    favorite?: boolean,
    id: string,
    imageSrc: string,
    lat: number,
    lng: number,
    premium?: boolean,
    price: number,
    rating: number,
    title: string,
    type: string,
}

type AdditionalInfo = {
    gallery: string[],
    facilities: string[],
    host: Host,
    reviews: Review[]
}

export type Offer = Card & AdditionalInfo

export type Offers = Offer[]

type LocationOffer = {
    location: LocationItem,
    offers: Offers
}

export type LocationOffers = LocationOffer[]
