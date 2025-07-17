import { cars } from "../data/initialFormData"
import ScrapForm from "../components/ScrapForm"

export default function ApplyScrapPage() {
    return (
        <main className="flex flex-col items-center justify-center w-full">
            {cars.map((car) => (
                <ScrapForm key={car.id} name={car.name} carNum={car.carNum}/>
            ))}
        </main>
    )
}