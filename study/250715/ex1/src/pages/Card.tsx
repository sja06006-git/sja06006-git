import {FC} from "react";
import type { DivProps } from "../components";
import { Div, Icon } from "../components";
import * as D from '../data';
import User from './User'

export type CardProps = DivProps & {
    card: D.ICard
}

const Card: FC<CardProps> = ({card, ...props}) => {
    const {user, image} = card

    return <Div {...props}>
        <div className="flex flex-col">
            <Div src={image} className="h-60" />
            <Div className="p-4" minHeight="16rem" height="16rem" maxHeight="16rem">
                <p className="mt-2 text-3xl text-center text-bold">{user.name}</p>
                <Div className="flex justify-between">

                </Div>
                <p className="mt-2 line-clamp-4">{user.paragraph}</p>
            </Div>
        </div>
    </Div>
}

export default Card