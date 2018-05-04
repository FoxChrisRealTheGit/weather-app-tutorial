import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchWeather} from "../ducks/actions/index";
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.handleInput = this.handleInput.bind(this)
        this.OnFormSubmit = this.OnFormSubmit.bind(this)
    }

    handleInput(e) {
        this.setState({ term: e.target.value })
    }

    OnFormSubmit(e) {
        e.preventDefault()

        //get weather data
        this.props.fetchWeather(this.state.term)
        this.setState({term:''})
    }

    render() {
        return (
            <form onSubmit={this.OnFormSubmit}>
                <input placeholder="Get a five-day forecast inyour favorite cities"
                    value={this.state.term}
                    onChange={this.handleInput}
                />
                <span><button type="submit">Submit</button></span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)