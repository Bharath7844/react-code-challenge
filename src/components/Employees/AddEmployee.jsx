import React, { Component } from 'react';
export class AddEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            address: "",
            companyId: 1,
            error: false,
        }
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }
    onChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }
    validateForm() {
        const { name, address } = this.state;
        if (name === "" || address === "") {
            return false;
        }
        return true;
    }
    onSave(e) {
        e.preventDefault();
        const { name, address, companyId } = this.state;
        let { error } = this.state;
        if (this.validateForm()) {
            error = false;
            this.props.addEmployee({
                name,
                address
            }, companyId)
        } else {
            error = true;
        }
        this.setState({
            error
        });

    }
    render() {
        const { companies } = this.props;
        const { name, address, companyId } = this.state;
        if (companies.length === 0) {
            return false;
        }
        return (
            <section className="addsection__wrapper section-container">
                <h3 className="section-heading">Create New Person</h3>
                <form className="add-form" onSubmit={this.onSave}>
                    <div className="details">
                        <label>Name:</label>
                        <input name="name" value={name} type="text" onChange={this.onChange} />
                    </div>
                    <div className="details">
                        <label>Address:</label>
                        <input name="address" value={address} type="text" onChange={this.onChange} />
                    </div>
                    <div className="details">
                        <label>Employer:</label>
                        <select name="companyId" value={companyId} onChange={this.onChange}>
                            {
                                companies.map(({ id, name }) => {
                                    return <option key={id} value={id}>{name}</option>
                                })
                            }
                        </select>
                    </div>
                    {
                        this.state.error ?
                            <span className="error">No fields should be empty or have falsy values</span>
                            : null
                    }
                    <input type="submit" className="save-button" value="save" />
                </form>
            </section>
        );
    }

}