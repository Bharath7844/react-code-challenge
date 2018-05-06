import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CompaniesList, AddCompany } from 'components/Companies';
import { AddEmployee } from 'components/Employees';
import './styles.less';

const propTypes = {
};

class HomePage extends Component {
	componentWillMount(){
		this.props.getCompanies();
	}
	render() {
		const { companiesList, addCompany, addEmployee} = this.props
		return (
			<div className="home__wrapper">
				<CompaniesList companies={companiesList} />
				<div className="addSection__wrapper">
					<AddCompany addCompany={addCompany} /> 
					<AddEmployee addEmployee={addEmployee} companies={companiesList}/>
				</div>
			</div>
		);
	}
}

HomePage.propTypes = propTypes;
export default HomePage;