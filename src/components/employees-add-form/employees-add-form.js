import { Component } from 'react'

import './employee-add-form.css'


class EmployeesAddForm extends Component {

    state = {
        name: '',
        salary: ''
    }
    

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: [e.target.value]
        });
    }

    render(){
        const {name, salary} = this.state;
        const {onSubmit} = this.props;
        return (
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form
                    className="add-form d-flex">
                    <input
                        onChange={this.onValueChange}
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Name"
                        name="name"
                        value={name}/>
                    <input
                        onChange={this.onValueChange}
                        type="number"
                        className="form-control new-post-label"
                        placeholder="Salary"
                        name="salary"
                        value={salary}/>   
                    <button type="submit"
                            onClick={(e) => onSubmit(e, name, salary)}
                            className="btn btn-outline-light">Add</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;