import React from 'react';
import PropTypes from 'prop-types';
import {
    FormGroup, ControlLabel, FormControl, Button
} from 'react-bootstrap';
import './style.scss';

class CitySearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: ''
        };

        this.handleCityChange = this.handleCityChange.bind(this);
        this.getValidationCityState = this.getValidationCityState.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleCityChange(e) {
        this.setState({ city: e.target.value });
    }

    getValidationCityState() {
        if (this.state.city.length > 1) {
            return 'success';
        }

        return 'error';
    }

    submit(city) {
        this.props.searchCity(city);
    }

    render() {
        const { city } = this.state;
        return <form>
            <FormGroup controlId='searchCity' validationState={this.getValidationCityState()}>
                <ControlLabel>Название города:</ControlLabel>
                <FormControl
                    type="text"
                    value={city}
                    placeholder="Enter name of city length more 1 chars"
                    onChange={this.handleCityChange}
                />
                <FormControl.Feedback />
            </FormGroup>
            <footer className='submitCitySearch'>
                <Button
                    disabled = {this.getValidationCityState() === 'error'}
                    onClick = {() => this.submit(city)}>
                    Найти город
                </Button>
            </footer>
        </form>;
    }
}

CitySearch.propTypes = {
    searchCity: PropTypes.func
};

export default CitySearch;
