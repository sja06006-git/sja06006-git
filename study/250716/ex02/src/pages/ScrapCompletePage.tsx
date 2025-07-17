import { completeData } from "../data/completedData";
import SummaryTable from "../components/SummaryTable";

export default function ScrapCompletePage() {
    return(
    <div>
        {completeData.map((item) => (
            <SummaryTable user={item.user} car={item.car} date={item.date}/>
        ))}
    </div>)
}