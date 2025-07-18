import { useRef } from "react";

export default function MyComponent() {

    const inputRef = useRef<HTMLInputElement>(null);

    const focusInput = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };
    return (
    <div className="p-4 m-4 border border-red-300">
        <input ref={inputRef} className="border border-blue-300" type="text" />
        <button onClick={focusInput} className="text-green-900 bg-blue-200">포커스 주기</button>
    </div>);
}