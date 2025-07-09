import { SyntheticEvent } from "react";

export default function EventBubbling() {
    const onDivClick = (e: SyntheticEvent) => {
        const {isTrusted, target, bubbles, currentTarget} = e;
        console.log(`click event bubbles on <div>`, isTrusted, target, bubbles, currentTarget);
    };
    const onButtonClick = (e: SyntheticEvent) => {
        const {isTrusted, target, bubbles, currentTarget} = e;
        console.log(`click event starts at <button>`, isTrusted, target, bubbles, currentTarget);
        //버블링 예제와 전파중단 예제를 합침
        e.stopPropagation();
    };
    return (<div onClick={onDivClick}>
        <p>EventBubbling & StopPropagation</p>
        <button onClick={onButtonClick}>Click button</button>
    </div>);
}