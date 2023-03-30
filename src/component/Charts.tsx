import { useEffect, useState } from "react";
import wineObj from "../static/Wine-Data.json";
import BarChart from "./BarChart";
import ScatterPlot from "./ScatterPlot";

export interface wineObjType {
    Alcohol: number
    Malic_Acid: number
    Ash: number | string
    Alcalinity_of_ash: number
    Magnesium: number
    Total_phenols: number
    Flavanoids: number | string
    Nonflavanoid_phenols: number | string
    Proanthocyanins: string
    Color_intensity: number | string
    Hue: number
    OD280_OD315_of_diluted_wines: number | string
    Unknown: number
}

function Charts() {
    const [wineData, setWineData] = useState<wineObjType[]>([]);

    useEffect(() => {
        setWineData(wineObj)
    }, [wineData])

    return (
        <>
            <ScatterPlot data={wineData} />
            <BarChart data={wineData} />
        </>
    )
}
export default Charts;