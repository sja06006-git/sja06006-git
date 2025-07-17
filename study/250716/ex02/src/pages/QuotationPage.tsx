// itcr

import { quotationMock } from "../data/quotationMock";
import QuotationCard from "../components/QuotationCard";

export default function QuotationPage() {
    return (<div>
        {quotationMock.map((item) => (
            <QuotationCard carName={item.carName} year={item.year} price={item.price}></QuotationCard>
        ))}
    </div>)
}