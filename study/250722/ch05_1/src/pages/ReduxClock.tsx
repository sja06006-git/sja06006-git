import { useSelector, useDispatch } from "react-redux";
import type { AppState } from "../store";
import {Div, Title, Subtitle} from '../components'
import { useInterval } from "../hooks";

export default function ReduxClock() {
    const today = useSelector<AppState, Date>(state => state.today)
    const dispatch = useDispatch()

    useInterval(() => {
        dispatch({type: 'setToday', today: new Date()})
    })
    return (
    <Div>
        <Title className="text-5xl">ReduxClock</Title>
        <Title className="mt-4 text-3xl">{today.toLocaleTimeString()}</Title>
        <Subtitle className="mt-4 text-2xl">{today.toLocaleDateString()}</Subtitle>
    </Div>);
}