import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Title, Subtitle } from "../components";
import { Icon } from "../theme/daisyui";
import type { AppState } from "../store";
import * as C from '../store/counter'

export default function ClockTest() {
    const dispatch = useDispatch()

    const counter = useSelector<AppState, C.State>(({counter}) => counter)
    const increase = useCallback(() => dispatch(C.increaseCounter()), [])
    const decrease = useCallback(() => dispatch(C.decreaseCounter()), [])

    return (
    <section className="mt-4">
        <Title>CounterTest</Title>
        <div className="flex justify-center p-4 mt-4">
            <Icon name="add_circle" iconClassName="text-3xl" onClick={increase}/>
            <Subtitle>{counter}</Subtitle>
            <Icon name="remove_circle" iconClassName="text-3xl" onClick={decrease}/>
        </div>
    </section>);
}