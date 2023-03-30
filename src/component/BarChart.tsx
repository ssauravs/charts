import ReactEcharts from "echarts-for-react"
import { useEffect, useState } from "react";
import { wineObjType } from "./Charts";
interface Iprops {
    data: wineObjType[]
}

const BarChart = (props: Iprops) => {
    const [category, setCategory] = useState<number[]>([]);
    const [avg, setAvg] = useState<number[]>([]);

    const setInitalData = (): void => {
        const alcoholCategory: number[] = [];
        for (let m = 0; m < props.data.length; m++) {
            if (!alcoholCategory.includes(props.data[m]?.Alcohol)) {
                alcoholCategory.push(props.data[m]?.Alcohol)
            }
        }
        setCategory((oldArray: any[]) => [...oldArray, ...alcoholCategory])
        for (let i = 0; i < alcoholCategory.length; i++) {
            let filterObj = props.data.filter(obj => obj?.Alcohol == alcoholCategory[i]);
            let sum = filterObj.map(data => data?.Malic_Acid).reduce((a, b) => a + b, 0)
            setAvg((oldArray: any[]) => [...oldArray, sum / filterObj.length])
        }
    }
    
    useEffect(() => {
        setInitalData()
    }, [props.data])

    const option = {
        title: {
            text: 'Bar Chart :-',
        },
        tooltip: {},
        xAxis: {
            data: category,
        },
        yAxis: {},
        series: [
            {
                name: 'Data',
                type: 'bar',
                data: avg,
            },
        ],
    };

    return (
        <ReactEcharts option={option}
            style={{ width: "100%", height: "300px" }}
        ></ReactEcharts>
    )
}
export default BarChart