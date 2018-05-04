import React from "react"
import { connect } from "react-redux";
import Chart from "../components/chart";
import GoogleMap from "../components/google_map";
class CityList extends React.Component {

    renderWeather(cityData) {
        const name = cityData.city.name
        const temps = cityData.list.map(weather => weather.main.temp)
        const humi = cityData.list.map(weather => weather.main.humidity)
        const press = cityData.list.map(weather => weather.main.pressure)
        const lon = cityData.city.coord.lon
        const lat = cityData.city.coord.lat

        return (
            <tr key={name}>
                <td>{name}</td>
                <td>
                    <Chart data={temps} color="red" units="K" />
                </td>
                <td>
                    <Chart data={humi} color="blue" units="hPa" />
                </td>
                <td>
                    <Chart data={press} color="purple" units="%" />
                </td>
            </tr>
        )
    }
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}
function mapStateToProps(state) {
    return { weather: state.weather }
}

export default connect(mapStateToProps)(CityList);