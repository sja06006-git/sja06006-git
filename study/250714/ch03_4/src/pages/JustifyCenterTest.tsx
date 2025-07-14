import { Div, Title, Subtitle } from "../components";
import * as D from '../data'

export default function JustifyCenterTest() {
    const boxes = D.range(0, 5).map(index => (
            <Div key={index} className={`bg-black w-4 m-1 h-4`} />
    ))
    return <section className="mt-4 p4">
        <Title>JustifyCenterTest</Title>
        <Div className="mt-4">
            <Subtitle>flex flex-row JustifyCenter</Subtitle>
            <Div className="flex flex-row justify-center h-40 bg-gray-300">{boxes}</Div>
        </Div>
        <Div className="mt-4">
            <Subtitle>flex flex-col JustifyCenter</Subtitle>
            <Div className="flex flex-col justify-center h-40 bg-gray-300">{boxes}</Div>
        </Div>
    </section>;
}