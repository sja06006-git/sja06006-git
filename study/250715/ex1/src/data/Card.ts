import type { IUser } from './User'
import { makeUserHong } from './User'
import * as C from './chance'
import * as I from './image'
import * as D from './date'

export type ICard = {
    user: IUser
    image: string
}
// prettier-ignore
export const makeCard = (
    user: IUser, image: string
): ICard => ({user, image})

export const makeCardHong = () => {
    return makeCard(
        makeUserHong(),
        I.randomImage(800,600)
    )
}