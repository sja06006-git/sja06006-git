import React, { useMemo, useState } from "react";

function slowFunction(num: number) {
    console.log('무거운 계산 실행 중...');
    let result = 0;
    for (let i=0; i<1e8; i++) {
        result += num * Math.random();
    }
    return result;
}

export default function UseMemoExample() {
    const [count, setCount] = useState(0);
    const [other, setOther] = useState(false);

    const expensiveResult = useMemo(() => {
        return slowFunction(count);
    }, [count]);

    return (
        <div className="p-4 m-4 text-black bg-gray-400">
            <p>Count: {count}</p>
            <button className="p-4 m-4 text-black bg-blue-300" onClick={() => setCount((c) => c+1)}>+1</button>
            <button className="p-4 m-4 text-black bg-blue-300" onClick={() => setCount((c) => c)}>0</button>
            <button className="p-4 m-4 text-black bg-blue-300" onClick={() => setOther(!other)}>Toggle: {other.toString()}</button>
            <p>결과: {expensiveResult.toFixed(2)}</p>
        </div>
    )
}