import type { DragEvent } from "react";

export default function DragDrop() {
    const onDragStart = (e: DragEvent<HTMLElement>) => {
        console.log(`onDragStart`, e.dataTransfer);
    }

    const onDragEnd = (e: DragEvent<HTMLElement>) => {
        console.log(`onDragEnd`, e.dataTransfer);
    }

    const onDragOver = (e: DragEvent<HTMLElement>) => {
        e.preventDefault();
    }

    const onDragDrop = (e: DragEvent<HTMLElement>) => {
        e.preventDefault();
        console.log(`onDragDrop`, e.dataTransfer);
    }

    return <div>
        <p>DragDrop</p>
        <div draggable onDragStart={onDragStart} onDragEnter={onDragEnd}>
            <h1>Drag me</h1>
        </div>
        <div onDrop={onDragDrop} onDragOver={onDragOver}>
            <h1>Drop over me</h1>
        </div>
    </div>;
}