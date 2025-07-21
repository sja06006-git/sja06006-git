import React, { useMemo, useState } from "react";

export default function ExpensiveComponent() {
    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(false);

    const expensivevalue = useMemo(() => {
        console.log("Expensive calc...");
        let total = count;
        for (let i=0; i<count; i++) {
            total += count;
        }
        return total;
    }, [count]);

    return (
        <div className="p-4 m-4 text-black bg-gray-400">
            <p>Count: {count}</p>
            <button className="p-4 m-4 text-black bg-blue-300" onClick={() => setCount((c) => c+1)}>+1</button>
            <button className="p-4 m-4 text-black bg-blue-300" onClick={() => setToggle((t) => !t)}>Toggle</button>
            <p>Expensive Value: {expensivevalue}</p>
        </div>
    )
}