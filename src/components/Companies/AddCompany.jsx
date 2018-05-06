import React, { Component } from 'react';
export class AddCompany extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            address: "",
            revenue: "",
            phone: "",
            error: false,
        }
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    onChange(e) {
        let { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }
    validateForm() {
        const { name, address, revenue, phone } = this.state;
        if (name === "" || address === "" || revenue === "" || phone === "") {
            return false;
        }
        return true;
    }
    onSave(e) {
        e.preventDefault();
        const { name, address, revenue, phone } = this.state;
        let { error } = this.state;
        if (this.validateForm()) {
            error = false;
            this.props.addCompany({
                name,
                address,
                revenue,
                phone,
            });
        } else {
            error = true
        }
        this.setState({
            error
        });
    }
    render() {
        return (
            <section className="addsection__wrapper section-container">
                <h3 className="section-heading">Create New Company</h3>
                <form className="add-form" onSubmit={this.onSave}>
                    <div className="details">
                        <label>Name:</label>
                        <input name="name" type="text" onChange={this.onChange} />
                    </div>
                    <div className="details">
                        <label>Address:</label>
                        <input name="address" type="text" onChange={this.onChange} />
                    </div>
                    <div className="details">
                        <label>Revenue:</label>
                        <input name="revenue" type="number" onChange={this.onChange} />
                    </div>
                    <div className="details">
                        <label>Phone:</label>
                        <input name="phone" type="number" onChange={this.onChange} />
                    </div>
                    {
                        this.state.error ?
                            <span className="error">No fields should be empty or have falsy values</span>
                            : null
                    }
                    <input type="submit" className="save-button" value="Save" />
                </form>
            </section>
        );
    }
}