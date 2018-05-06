
import React, { Component } from 'react';
import './styles.less';

class DetailsPage extends Component {
  componentWillMount() {
    const { companyId } = this.props;
    this.props.getEmployeesList(companyId);
  }
  render() {
    const { companyDetails, employeesList } = this.props;
    const { address, revenue, phone } = companyDetails;
    return (
      <section className="details__wrapper">
        <section className="profile">
          <header>Profile Overview</header>
          <div className="details-container">
            <div className="company-details-container">
              <div className="details">
                <label>Address:</label>
                <span>{address}</span>
              </div>
              <div className="details">
                <label>Revenue:</label>
                <span>{revenue}</span>
              </div>
              <div className="details">
                <label>Phone:</label>
                <span>{phone}</span>
              </div>
            </div>
            <div className="employees-details-container">
              <div className="details">
                <label>Total Employees:</label>
                <span>{employeesList.length}</span>
              </div>
            </div>
          </div>
        </section>
        <section className="employees-container">
          <header>Employees</header>
          <div className="employee-details-container">
            {employeesList.map((employee, index) => {
              const { name, address } = employee;
              return (
                <div className="employee-details" key={index}>
                  <header>{name}</header>
                  <div className="address">
                    <label>Address:</label>
                    <span>{address}</span>
                  </div>
                </div>
              );

            })}
          </div>
        </section>
      </section>
    );
  }
}

export default DetailsPage;