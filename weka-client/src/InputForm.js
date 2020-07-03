import React from 'react';
import axios from './axios-instance';

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            preg: 0,
            plas: 0,
            pres: 0,
            skin: 0,
            insu: 0,
            mass: 0,
            pedi: 0,
            age: 0,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.post('/api/get_result', this.state).then(res => {
            console.log(res);
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label><br />
                <label>
                    preg:
            <input type="number" value={this.state.preg} name="preg" onChange={this.handleChange} />
                </label><br />
                <label>
                    plas::
            <input type="number" value={this.state.plas} name="plas" onChange={this.handleChange} />
                </label><br />
                <label>
                    pres::
            <input type="number" value={this.state.pres} name="pres" onChange={this.handleChange} />
                </label><br />
                <label>
                    skin:
            <input type="number" value={this.state.skin} name="skin" onChange={this.handleChange} />
                </label><br />
                <label>
                    insu:
            <input type="number" value={this.state.insu} name="insu" onChange={this.handleChange} />
                </label><br />
                <label>
                    mass:
            <input type="number" value={this.state.mass} name="mass" onChange={this.handleChange} />
                </label><br />
                <label>
                    pedi:
            <input type="number" value={this.state.pedi} name="pedi" onChange={this.handleChange} />
                </label><br />
                <label>
                    age:
            <input type="number" value={this.state.age} name="age" onChange={this.handleChange} />
                </label><br />

                <input type="submit" value="Submit" />
            </form>
        );
    }
}
export default InputForm