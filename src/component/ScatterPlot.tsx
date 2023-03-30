
import ReactEcharts from "echarts-for-react"
import { useEffect, useState } from "react";
import { wineObjType } from "./Charts";

interface Iprops {
    data: wineObjType[]
}
interface scatterObjType {
    Color_intensity: number | string
    Hue: number
}
const ScatterPlot = (props: Iprops) => {
    const [scatterObj, setScatterObj] = useState<scatterObjType[]>([]);

    const setInitialData = (): void => {
        for (let i = 0; i < props.data.length; i++) {
            const arr: any = [];
            const data1 = props.data[i].Color_intensity;
            const data2 = props.data[i].Hue;
            if (typeof data1 == "string") {
                const data = parseFloat(data1)
                arr.push(data);
            } else {
                arr.push(data1);
            }
            arr.push(data2);
            setScatterObj((oldArray: scatterObjType[]) => [...oldArray, arr])
        }
    }

    useEffect(() => {
        setInitialData();
    }, [props.data])

    const options = {
        title: {
            text: 'Scatter Plot :-'
        },
        xAxis: {
            type: 'value',
            name: "Color Intensity"
        },
        yAxis: {
            type: 'value',
            name: "Hue"
        },
        series: [{
            symbolSize: 10,
            data: scatterObj,
            type: 'scatter',
        }]
    };

    return (
        <ReactEcharts
            option={options}
            style={{ width: "100%", height: "300px" }}
        ></ReactEcharts>
    )
}
export default ScatterPlot;