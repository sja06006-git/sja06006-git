import type { ChangeEvent } from "react";

export default function FileInput() {
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files: FileList | null = e.target.files
        if (files) {
            for (let i=0; i<files.length; i++) {
                const file: File | null = files.item(i); // or file = files[i];
                console.log(`file[${i}]: `, file)
            }
        }
    }

    return (<div>
        <p>FileInput</p>
        <input type="file" onChange={onChange} multiple accept="image/*" />
        {/* multiple은 동시에 여러 파일 accept는 허용한 파일만 받도록 */}
    </div>);
}