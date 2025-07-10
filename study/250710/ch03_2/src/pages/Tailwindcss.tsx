import * as D from '../data'

export default function Tailwindcss() {
    return <div className='bg-black/70'>
        <p className="w-1/2 p-4 text-3xl text-white">Tailwindcss</p>
        <p className="italic text-gray-50 line-clamp-3">{D.randomParagraph(10)}</p>
        <button className='btn btn-primary' style={{textTransform: "none"}}>Button</button>
    </div>;
}