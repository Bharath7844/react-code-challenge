import { connect } from 'react-redux';
import HomePage from 'components/HomePage';
import companyActions from 'store/features/companies/actions';
import employeeActions from 'store/features/employees/actions';

const mapStateToProps = ({
    companies:{
        companiesList
    }
}) => {
    return {
        companiesList
    } 
};

const mapDispatchToProps = dispatch => {
    return {
        getCompanies: () => dispatch(companyActions.getCompanies()),
        addCompany: (company) => dispatch(companyActions.addCompany(company)),
        addEmployee: (employee, companyId) => dispatch(employeeActions.addEmployee(employee, companyId))
    };  
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

