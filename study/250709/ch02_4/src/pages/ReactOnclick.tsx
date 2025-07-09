import type { SyntheticEvent } from "react";

export default function ReactOnClick() {
    const onClick = (e : SyntheticEvent) => {
        const {isTrusted, target, bubbles} = e;
        console.log("mouse click occur on <button>", isTrusted, target, bubbles);
    }
    return (<div>
        <p>ReactOnclick</p>
        <button onClick={onClick}>Click me</button>
    </div>);
}