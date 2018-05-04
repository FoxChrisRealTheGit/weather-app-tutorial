import React from "react"
import { connect } from "react-redux";

class CityList extends React.Component {

    renderWeather(cityData) {
        const name = cityData.city.name
        return (
            <tr key={name}>
                <td>{name}</td>
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