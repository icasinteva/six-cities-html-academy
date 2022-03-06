import { City, Location } from './map';

export type Host = {
    avatarUrl: string
    id: number
    isPro: boolean
    name: string
}

export type Review = {
    comment: string
    date: string
    id: number
    rating: number
    user: {
        avatarUrl: string
        id: number
        isPro: boolean
        name: string
    }
}

export type Reviews = Review[]

export type Offer = {
    bedrooms: number
    city: City
    description: string
    goods: string[]
    host: Host
    id: number
    images: string[]
    isFavorite: boolean
    isPremium: boolean
    location: Location
    maxAdults: number
    previewImage: string
    price: number
    rating: number
    title: string
    type: string
}

export type Offers = Offer[]

export type FavoritesByCity = {
    [key: string]: Offer[],
}

