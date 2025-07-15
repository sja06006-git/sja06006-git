import { Title } from "../components";
import * as D from '../data';
import Card from './Card';

export default function CardContainer() {
    const children = D.makeArray(1)
    .map(card => (
        <Card
        key={card.name}
        card={card}
        className="m-2 overflow-hidden text-xs border-2 rounded-lg shadow-lg"
        minWidth="30rem"
        width="30rem"
        />
    ))
    return <section className="mt-4">
        <Title>CardContainer</Title>
        <div className="flex flex-wrap items-center justify-center p-4 mt-4">
            {children}
        </div>
    </section>;
}