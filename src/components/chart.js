import React from "react";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";



export default function Chart(props) {
    function average(data) {
        let total = 0
        let sum = data.map(x => total += +x)
        console.log(sum)
        return total / data.length
    }
    return (
        <React.Fragment>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(props.data)}{props.units}</div>
        </React.Fragment>
    )
}